    import { Product } from "../interfaces";
    /*

    * Example product object
    {
        id: "prod001",
        slug: "robot-vacuum-cleaner",
        name: "Robot Vacuum Cleaner",
        category: "Home Appliances",
        price: "299.99",
        oldPrice: "349.99",
        imageUrl: "https://images.unsplash.com/photo-1653990480360-31a12ce9723e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        galleryImages: [
            "https://images.unsplash.com/photo-1653990480360-31a12ce9723e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        amazonLink: "#",
        rating: 4.5,
        reviewCount: 150,
        onPromotion: true,
        shortDescription: "Efficient robot vacuum for automated home cleaning.",
        longDescription: "<p>The Robot Vacuum Cleaner is your smart home cleaning companion that works autonomously to keep your floors spotless. With advanced navigation and powerful suction, it efficiently cleans carpets and hard floors while avoiding obstacles.</p><h3>Key Features:</h3><ul><li><strong>Smart Navigation:</strong> Uses laser mapping to efficiently clean your home</li><li><strong>Strong Suction:</strong> 2000Pa power for deep cleaning</li><li><strong>App Control:</strong> Schedule cleanings and monitor progress from your phone</li><li><strong>Self-Charging:</strong> Returns to dock when battery is low</li><li><strong>Voice Control:</strong> Works with Alexa and Google Assistant</li></ul>",
        features: ["Smart Navigation", "App Control", "Self-Charging", "Voice Control", "Multi-Surface Cleaning"],
        specs: { "Suction Power": "2000Pa", "Battery Life": "150 mins", "Dustbin Capacity": "0.6L", "Noise Level": "65dB" },
        relatedProductSlugs: ['hepa-air-purifier', 'smart-home-thermostat'],
        isDeal: true
    },
    */

const products: Product[] = [
   {
        id:"prod001",
        slug:"Vaseline-Intensive-Advanced-Repair-Lotion",
        name:"Vaseline Intensive Care Advanced Repair Lotion",
        category:"Body Care",
        price:0,
        oldPrice:0,
        imageUrl:"https://m.media-amazon.com/images/I/61Ho+7RVNkL._SY355_.jpg",
        galleryImages:[
            "https://m.media-amazon.com/images/I/61s00aSwVXL._SY355_.jpg",
            "https://m.media-amazon.com/images/I/61Ho+7RVNkL._SY355_.jpg",
            "https://m.media-amazon.com/images/I/61J36-U4j1L._SY355_.jpg"
        ],
        amazonLink:"https://amzn.to/4kY2TP9",
        rating:4.3,
        reviewCount:6402,
        onPromotion: true,
        shortDescription:"Vaseline Derma Care Advanced Repair Body Lotion, For Sensitive, Dry Skin, Non Greasy, Long Lasting Moisturisation, 100 ml",
        longDescription:"<p>Vaseline Intensive Care Advanced Repair Lotion is specially formulated to provide deep moisture to dry skin. This fast-absorbing, non-greasy lotion is enriched with micro-droplets of Vaseline Jelly, which helps to lock in moisture and heal dry skin. It is clinically proven to heal very dry skin in just 5 days, making it ideal for those with extremely dry skin conditions.</p><h3>Key Features:</h3><ul><li><strong>Deep Moisture:</strong> Provides long-lasting hydration to dry skin</li><li><strong>Fast-Absorbing:</strong> Non-greasy formula that absorbs quickly</li><li><strong>Healing Properties:</strong> Contains micro-droplets of Vaseline Jelly to help restore the skin's natural barrier</li><li><strong>Dermatologist Recommended:</strong> Suitable for sensitive skin and clinically proven to heal very dry skin</li><li><strong>Fragrance-Free:</strong> Ideal for those who prefer unscented products</li></ul>",
        features: [
            "Deep Moisture",
            "Fast-Absorbing",
            "Healing Properties",
            "Dermatologist Recommended",
            "Fragrance-Free"
        ],
        specs: {
            "Volume": "100 ml",
            "Skin Type": "Sensitive, Dry",
            "Formulation": "Lotion",
            "Scent": "Unscented",
            "Brand": "Vaseline"
        },
        relatedProductSlugs: ['',''],
        isDeal: true
    },
    {
        id:"prod002",
    }
]

export default products;