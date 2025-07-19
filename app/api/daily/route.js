// app/api/amazon/route.js
import { NextResponse } from 'next/server';
import aws4 from 'aws4';

// --- Configuration ---
const ACCESS_KEY = process.env.AMAZON_ACCESS_KEY;
const SECRET_KEY = process.env.AMAZON_SECRET_KEY;
const PARTNER_TAG = process.env.AMAZON_PARTNER_TAG;
const HOST = 'webservices.amazon.in';
const REGION = 'eu-west-1'; // India's PAAPI endpoint is in the EU region
const SERVICE = 'ProductAdvertisingAPI';

// --- Main GET Handler ---
export async function GET(request) {
  // 1. Validate Credentials
  if (!ACCESS_KEY || !SECRET_KEY || !PARTNER_TAG) {
    console.error("API credentials are not configured in .env.local");
    return NextResponse.json({ error: 'Server configuration error: API credentials are not set.' }, { status: 500 });
  }

  //const { searchParams } = new URL(request.url);
  //const searchKeywords = 'laptops';
  // We will always fetch the first page of 30 results from the API. Frontend will handle pagination.
  const itemPage = 1;
  const keywords = [
  "Air Fryer",
  "Blender Mixer Grinder",
  "Electric Kettle",
  "Kitchen Storage Containers",
  "Knife Set",
  "Non-stick Cookware Set",
  "Kitchen Scale",
  "Sandwich Maker",
  "Hand Blender",
  "Food Processor",
  "Fitness Tracker",
  "Digital Thermometer",
  "BP Monitor",
  "Glucometer",
  "Resistance Bands",
  "Yoga Mat",
  "Protein Powder",
  "Vitamin D Supplements",
  "Massager Gun",
  "Dumbbells Set",
  "Smart Watch",
  "Bluetooth Speaker",
  "Wireless Earbuds",
  "Smartphone Accessories",
  "Power Bank",
  "Laptop Stand",
  "Gaming Mouse",
  "Portable SSD",
  "Smart Bulb",
  "LED Ring Light",
  "Men’s T-Shirts",
  "Women’s Dresses",
  "Sneakers",
  "Casual Shoes",
  "Sunglasses",
  "Leather Wallet",
  "Men’s Watch",
  "Handbag",
  "Trendy Tops",
  "Ethnic Wear",
  "Vitamin C Face Serum",
  "Moisturizer",
  "Face Wash",
  "Sunscreen",
  "Face Mask",
  "Anti-Aging Cream",
  "Acne Spot Treatment",
  "Skin Brightening Cream",
  "Night Cream",
  "Aloe Vera Gel"
];
  const searchKeywords = keywords[Math.floor(Math.random()*keywords.length)];

  // 2. Prepare the request payload for Amazon PAAPI
  const requestPayload = {
    Keywords: searchKeywords,
    PartnerTag: PARTNER_TAG,
    PartnerType: 'Associates',
    ItemPage: itemPage,
    ItemCount: 8, // Fetch 4 items
    SortBy: 'AvgCustomerReviews',
    SearchIndex: 'All',
    Resources: [
      'Images.Primary.Large',
      'ItemInfo.Title',
      'ItemInfo.ByLineInfo', // For Brand
      'Offers.Listings.Price',
      'BrowseNodeInfo.BrowseNodes', // For Category
      'CustomerReviews.Count',
      'CustomerReviews.StarRating'
    ],
  };

  // 3. Sign the request
  const opts = {
    host: HOST,
    region: REGION,
    service: SERVICE,
    path: '/paapi5/searchitems',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'X-Amz-Target': 'com.amazon.paapi5.v1.ProductAdvertisingAPIv1.SearchItems',
      'Content-Encoding': 'amz-1.0',
    },
    body: JSON.stringify(requestPayload),
  };

  try {
    // The aws4 library signs the request options IN-PLACE.
    aws4.sign(opts, { accessKeyId: ACCESS_KEY, secretAccessKey: SECRET_KEY });
  } catch (e) {
    console.error("Error signing the AWS request:", e);
    return NextResponse.json({ error: 'Failed to sign the request to Amazon.' }, { status: 500 });
  }

  try {
    // 4. Make the API call
    const amazonResponse = await fetch(`https://${HOST}${opts.path}`, opts);

    // --- ENHANCED ERROR LOGGING ---
    // If the response is not OK, we log the full text body to see Amazon's HTML error.
    if (!amazonResponse.ok) {
        const errorText = await amazonResponse.text();
        console.error('Amazon API responded with an error:', {
            status: amazonResponse.status,
            statusText: amazonResponse.statusText,
            body: errorText, // This will show the HTML or JSON error from Amazon
        });
        // Try to parse as JSON, but fall back to text if it fails
        try {
            const errorJson = JSON.parse(errorText);
            return NextResponse.json({ error: errorJson.Errors[0].Message || 'Unknown Amazon API error' }, { status: amazonResponse.status });
        } catch (e) {
            return NextResponse.json({ error: 'Amazon API returned a non-JSON error. Check server logs.' }, { status: amazonResponse.status });
        }
    }

    const data = await amazonResponse.json();
    console.log(data);

    // 5. Transform the data
    const searchResult = data.SearchResult;
    if (!searchResult || !searchResult.Items) {
        return NextResponse.json({ products: [], totalPages: 0 });
    }

    const products = searchResult.Items.map(item => ({
      id: item.ASIN,
      name: item.ItemInfo?.Title?.DisplayValue || 'Product',
      category: item.ItemInfo?.ByLineInfo?.Brand?.DisplayValue || item.BrowseNodeInfo?.BrowseNodes?.[0]?.DisplayName || 'General',
      price: item.Offers?.Listings?.[0]?.Price?.DisplayAmount || 'On Sale',
      imageUrl: item.Images?.Primary?.Large?.URL || `https://placehold.co/400x300/CCCCCC/1A1A1A?text=No+Image`,
      amazonLink: item.DetailPageURL,
      rating: item.CustomerReviews?.StarRating || 0,
      reviewCount: item.CustomerReviews?.Count || 0,
      onPromotion: !!item.Offers?.Listings?.[0]?.IsBuyBoxWinner
    }));

    // 6. Respond with the full list of products
    return NextResponse.json({ products });

  } catch (error) {
    console.error('Failed to fetch from Amazon API:', error);
    return NextResponse.json({ error: 'A network or unknown error occurred while fetching products.' }, { status: 500 });
  }
}

