import { Metadata } from "next";
import { notFound } from "next/navigation";
import { asImageSrc } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, type SliceComponentProps } from "@prismicio/react";

type Params = { uid: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("guide", uid).catch(() => notFound());
  // Access the fields using page.data.field throughout the entire blog from start to the end incorporating styles
  // Also make the blog have the the title below the image rather than on the image (style)

  /*
   * Image - data.image   i.e access as page.data.image and uses prismicnextimage
   * Title - data.title  i.e text
   * Author - data.author i.e text
   * Date - data.date i.e a prismic date field
   * Guide - data.guide i.e PrismicRichText (Content creaters can compose any of the following html elements: h1 to h6, p for paragraph, ul, ol, embed for youtube videos mainly, Image)
   * Comparisons - data.comparisons i.e an array of comparisons, each just a two or three card side by side comparisons of items in the blog. Each of the comparisons in the array needs to be displayed in this sectioneg a 2 phones array comparison, a 3 watch comparison thereafter... Till all array elements are shown.... 
   - Now onto each comparison array element content model:
     Rank1 - item.rank1 i.e top left of product/card 1 eg labelling Top Pick
     Rank2 - item.rank2 i.e top left of product/card 2 eg labelling Upgrade Pick
     Rank3 - item.rank3 i.e top left of product/card 3 eg labelling Budget Pick
    Image1 - item.image1 i.e card image of product 1
    Image2 - item.image2 i.e card image of product 2
    Image3 - item.image3 i.e card image of product 3
    Title1 - item.title1 i.e Title of product/card 1 eg The best Android smartphone
    Title2 - item.title2 i.e Title of product/card 2 eg A larger, higher-end Android phone
    Title3 - item.title3 i.e Title of product/card 3 eg Nearly the best for less
    Name1 - item.name1 i.e the name of the product 1 eg Google Pixel 10  (but it will be a link to the purchasing site)
    Name2 - item.name2 i.e the name of the product 2 eg Google Pixel 10 Pro XL (but it will be a link to the purchasing site  )
    Name3 - item.name3 i.e the name of the product 3 eg Google Pixel 9a  (but it will be a link to the purchasing site  )
    Paragraph1 - item.paragraph1 i.e product/card 1 descriptive text 
    Paragraph2 - item.paragraph2 i.e product/card 2 descriptive text
    Paragraph3 - item.paragraph3 i.e product/card 3 descriptive text
    Link1 - item.link1 i.e an array of links of product 1 with descriptive text can be 0 or 1,2, or more
    Link2 - item.link2 i.e an array of links of product 2 with descriptive text
    Link3 - item.link3 i.e an array of links of product 3 with descriptive text
   *
   * To check if it is a Two card or Three card comparison, you check if the title of 3 is there or not. If there, its 3 cards/products, else 2 card comparison.
   * Furthermore, to even decide if I need to write a comparisons section, check if page.data.comparisons returns a non-empty array. A modern, latest comparison section architecture converts clients
   *
   * After comparisons section:
   * 
   * EndGuide - data.endguide i.e another PrismicRichText section allowing the continuation of blog writing till the end
   * Links - data.links i.e  an array of links at the end of the guide with descriptive text
   *
   *
   */

 
    
  return (/* Curate the guide here */);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("guide", uid).catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      images: [{ url: asImageSrc(page.data.meta_image) ?? "" }],
    },
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("guide");

  return pages.map((page) => ({ uid: page.uid }));
}
