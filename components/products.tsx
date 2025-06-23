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
        slug:"Excite-Deodorant-Protection-Coconut-Pepper",
        name:"Excite Deodorant Protection Coconut & Pepper",
        category:"Body Care",
        price:0,
        oldPrice:0,
        imageUrl:"https://m.media-amazon.com/images/I/61O00RqQBnL._SY355_.jpg",
        galleryImages:[
            "https://m.media-amazon.com/images/I/61+rG3EIQLL._SY355_.jpg",
            "https://m.media-amazon.com/images/I/71A62fJHdCL._SY355_.jpg",
            "https://m.media-amazon.com/images/I/71wnJQCo6nL._SY355_.jpg"
        ],
        amazonLink:"https://amzn.to/4kLhc9v",
        rating:4.2,
        reviewCount:27,
        onPromotion: true,
        shortDescription:"Axe Excite Deodorant Body Spray for Men | 48H* Odour Protection | Crisp Coconut & Black Pepper Scent | 150ml",
        longDescription:"<p>Axe Excite Deodorant Body Spray for Men is designed to provide long-lasting odour protection with a refreshing scent. The combination of crisp coconut and black pepper creates a unique fragrance that keeps you feeling fresh throughout the day. With 48-hour odour protection, this deodorant spray is perfect for the modern man who wants to stay confident and invigorated.</p><h3>Key Features:</h3><ul><li><strong>48H Odour Protection:</strong> Keeps you feeling fresh all day long</li><li><strong>Unique Scent:</strong> Crisp coconut and black pepper fragrance</li><li><strong>Easy to Use:</strong> Convenient spray format</li></ul>",
        features: [
            "48H Odour Protection",
            "Unique Scent",
            "Easy to Use"
        ],
        specs: {
            "Volume": "150 ml",
            "Skin Type": "All Skin Types",
            "Formulation": "Spray",
            "Scent": "Crisp Coconut & Black Pepper",
            "Brand": "Axe"
        },
        relatedProductSlugs: ['',''],
        isDeal: true
    },
    {
        id:"prod003",
        slug:"Fashnex-Sweat-Slim-Neoprene-Women",
        name:"Fashnex Sweat Slim Neopreme-Women",
        category:"Body Care",
        price:0,
        oldPrice:0,
        imageUrl:"https://m.media-amazon.com/images/I/61UkXKsUs8S._SX425_.jpg",
        galleryImages:[
            "https://m.media-amazon.com/images/I/71rx++enStS._SX425_.jpg",
            "https://m.media-amazon.com/images/I/71GViRBJqiL._SX425_.jpg",
            "https://m.media-amazon.com/images/I/71SHdXJuLES._SX425_.jpg"
        ],
        amazonLink:"https://amzn.to/443MVM3",
        rating:4.4,
        reviewCount:1266,
        onPromotion: true,
        shortDescription:"Fashnex Waist Belt Made of Neoprene for Women & Men for Tummy Exercise.",
        longDescription:"<p>Fashnex Sweat Slim Neoprene Waist Belt is designed to help you achieve your fitness goals by enhancing your workout experience. Made from high-quality neoprene, this waist belt provides support and helps to increase sweat production during exercise, promoting weight loss and toning of the abdominal area. It is suitable for both men and women, making it a versatile addition to your fitness routine.</p><h3>Key Features:</h3><ul><li><strong>High-Quality Neoprene:</strong> Durable and comfortable material</li><li><strong>Increased Sweat Production:</strong> Helps you sweat more during workouts</li><li><strong>Adjustable Fit:</strong> One size fits most</li></ul>",
        features: [
            "High-Quality Neoprene",
            "Increased Sweat Production",
            "Adjustable Fit"
        ],
        specs: {
            "Size": "One Size Fits Most",
            "Material": "Neoprene",
            "Color": "Black",
            "Brand": "Fashnex"
        },
        relatedProductSlugs: ['',''],
        isDeal: true
    },
    {
        id:"prod004",
        slug:"Chubs-Stand-Exercise-Multicolor-Women",
        name:"Chubs Stand Exercise Multicolor-Women",
        category:"Body Care",
        price:0,
        oldPrice:0,
        imageUrl:"https://m.media-amazon.com/images/I/41MusjX1zDL._SX425_.jpg",
        galleryImages:[
            "https://m.media-amazon.com/images/I/51uNf9XJsOL._SX425_.jpg",
            "https://m.media-amazon.com/images/I/41xzF06l2GL._SX425_.jpg",
            "https://m.media-amazon.com/images/I/41vqJNfdxzL._SX425_.jpg",
        ],
        amazonLink:"https://amzn.to/4e81uCW",
        rating:3.3,
        reviewCount:96,
        onPromotion: true,
        shortDescription:"Chubs Push Up Bar Stand For Gym & Home Exercise (Multicolor) for Men And Women",
        longDescription:"<p>Chubs Stand Exercise Push Up Bar is designed to enhance your workout routine by providing a stable and comfortable grip for push-ups. This push-up bar is suitable for both men and women, making it a versatile addition to your home gym.</p><h3>Key Features:</h3><ul><li><strong>Durable Construction:</strong> Made from high-quality materials for long-lasting use</li><li><strong>Non-Slip Grip:</strong> Provides a secure grip during workouts</li><li><strong>Compact Design:</strong> Easy to store and transport</li></ul>",
        features: [
            "Durable Construction",
            "Non-Slip Grip",
            "Compact Design"
        ],
        specs: {
            "Color": "Multicolor",
            "Material": "Plastic",
            "Brand": "Chubs"
        },
        relatedProductSlugs: ['',''],
        isDeal: true
    },
    {
        id:"prod005",
        slug:"Wizme-Bluetooth-Wireless-Portable-Microphone",
        name:"Wizme Bluetooth Wireless Portable Microphone",
        category:"Music Accessories",
        price:0,
        oldPrice:0,
        imageUrl:"https://m.media-amazon.com/images/I/71JLfT4pILL._SY355_.jpg",
        galleryImages:[
            "https://m.media-amazon.com/images/I/61+rvdfapAL._SY355_.jpg",
            "https://m.media-amazon.com/images/I/71QzwMTonkL._SY355_.jpg",
            "https://m.media-amazon.com/images/I/71eJG3d28gL._SY355_.jpg",
        ],
        amazonLink:"https://amzn.to/45ws4nc",
        rating:4.4,
        reviewCount:2,
        onPromotion: true,
        shortDescription:"Wizme Mini Bluetooth Speaker with Mic | Wireless Portable Bluetooth Speaker with Microphone & Led Lights | Birthday Gift for Kids Boys, Girls and Adults (Speaker with Mic)",
        longDescription:"<p>Wizme Bluetooth Wireless Portable Microphone is a compact and versatile microphone designed for music lovers and content creators. This portable microphone features Bluetooth connectivity, allowing you to easily connect it to your smartphone, tablet, or laptop. With its built-in speaker and LED lights, it not only captures high-quality audio but also adds a fun visual element to your performances. Whether you're singing, recording, or hosting a party, this microphone is the perfect companion.</p><h3>Key Features:</h3><ul><li><strong>Bluetooth Connectivity:</strong> Easily connects to your devices</li><li><strong>Built-in Speaker:</strong> Enjoy high-quality audio playback</li><li><strong>LED Lights:</strong> Adds a fun visual element to your performances</li><li><strong>Compact Design:</strong> Portable and easy to carry</li><li><strong>Rechargeable Battery:</strong> Long-lasting performance for extended use</li></ul>",
        features: [
            "Bluetooth Connectivity",
            "Built-in Speaker",
            "LED Lights",
            "Compact Design",
            "Rechargeable Battery"
        ],
        specs: {
            "Color": "Black",
            "Material": "Plastic",
            "Brand": "Wizme",
            "Battery Life": "Up to 6 hours",
            "Connectivity": "Bluetooth"
        },
        relatedProductSlugs: ['',''],
        isDeal: true
    },
    {
        id:"prod006",
        slug:"pTron-Musicbot-Lite-Bluetooth-Connectivity",
        name:"pTron Musicbot Lite Bluetooth Connectivity",
        category:"Music Accessories",
        price:0,
        oldPrice:0,
        imageUrl:"https://m.media-amazon.com/images/I/51JIW7MfGJL._SY355_.jpg",
        galleryImages:[
            "https://m.media-amazon.com/images/I/71bTtpxWsEL._SY355_.jpg",
            "https://m.media-amazon.com/images/I/61Y52p7Z3KL._SY355_.jpg",
            "https://m.media-amazon.com/images/I/71yBPJsfJvL._SY355_.jpg"
        ],
        amazonLink:"https://amzn.to/3G3UUkk",
        rating:3.8,
        reviewCount:149,
        onPromotion: true,
        shortDescription:"pTron Musicbot Lite 6W Bluetooth Speaker with 8 Hrs Playtime, 2.04\" Neo Driver for Pristine Sound, Mini Size Portable Speaker, BTv5.1 Connectivity, TWS Feature & Type C Charging (Blue)",
        longDescription:"<p>pTron Musicbot Lite Bluetooth Speaker is a compact and portable speaker designed for music lovers on the go. With its 6W output and 8 hours of playtime, this speaker delivers high-quality sound in a small package. The Bluetooth v5.1 connectivity ensures a stable connection with your devices, while the TWS feature allows you to pair two speakers for an enhanced audio experience. Its mini size makes it easy to carry, making it perfect for outdoor activities or travel.</p><h3>Key Features:</h3><ul><li><strong>6W Output:</strong> Delivers powerful sound</li><li><strong>8 Hours Playtime:</strong> Long-lasting battery life</li><li><strong>Bluetooth v5.1:</strong> Stable and fast connectivity</li><li><strong>TWS Feature:</strong> Pair two speakers for stereo sound</li><li><strong>Compact Design:</strong> Easy to carry and store</li></ul>",
        features: [
            "6W Output",
            "8 Hours Playtime",
            "Bluetooth v5.1",
            "TWS Feature",
            "Compact Design"
        ],
        specs: {
            "Color": "Blue",
            "Material": "Plastic",
            "Brand": "pTron",
            "Battery Life": "Up to 8 hours",
            "Connectivity": "Bluetooth v5.1",
            "Speaker Size": "2.04 inches"
        },
        relatedProductSlugs: ['',''],
        isDeal: true
    }
]

export default products;