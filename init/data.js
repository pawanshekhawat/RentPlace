const data = [
    {
        title: "Cozy Beachfront Cottage",
        description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
        image: {
            url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            filename: "placeImage"
        },
        price: 1500,
        location: "Malibu",
        country: "United States",
        category: "Beachfront"
    },
    {
        title: "Modern Loft in Downtown",
        description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
        image: {
            url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            filename: "placeImage"
        },
        price: 1200,
        location: "New York City",
        country: "United States",
        category: "Urban"
    },
    {
        title: "Mountain Retreat",
        description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
        image: {
            url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            filename: "placeImage"
        },
        price: 1000,
        location: "Aspen",
        country: "United States",
        category: "Mountains"
    },
    {
        title: "Historic Villa in Tuscany",
        description: "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
        image: {
            url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            filename: "placeImage"
        },
        price: 2500,
        location: "Florence",
        country: "Italy",
        category: "Historic"
    },
    {
        title: "Secluded Treehouse Getaway",
        description: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
        image: {
            url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            filename: "placeImage"
        },
        price: 800,
        location: "Portland",
        country: "United States",
        category: "Unique"
    },
    {
        title: "Beachfront Paradise",
        description: "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
        image: {
            url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            filename: "placeImage"
        },
        price: 2000,
        location: "Cancun",
        country: "Mexico",
        category: "Beachfront"
    },
    {
        title: "Rustic Cabin by the Lake",
        description: "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
        image: {
            url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            filename: "placeImage"
        },
        price: 900,
        location: "Lake Tahoe",
        country: "United States",
        category: "Beachfront"
    },
    {
        title: "Luxury Penthouse with City Views",
        description: "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
        image: {
            url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            filename: "placeImage"
        },
        price: 3500,
        location: "Los Angeles",
        country: "United States",
        category: "Luxury"
    },
    {
        title: "Ski-In/Ski-Out Chalet",
        description: "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
        image: {
            url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            filename: "placeImage"
        },
        price: 3000,
        location: "Verbier",
        country: "Switzerland",
        category: "Arctic"
    },
    {
        title: "Safari Lodge in the Serengeti",
        description: "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
        image: {
            url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            filename: "placeImage"
        },
        price: 4000,
        location: "Serengeti National Park",
        country: "Tanzania",
        category: "Safari"
    },
    {
        title: "Historic Canal House",
        description: "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
        image: {
            url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            filename: "placeImage"
        },
        price: 1800,
        location: "Amsterdam",
        country: "Netherlands",
        category: "Historic"
    },
    {
        title: "Arctic Ice Hotel",
        description: "Stay in an otherworldly ice hotel built entirely of snow and ice. Experience the Arctic like never before.",
        image: {
            url: "https://images.unsplash.com/photo-1514995428455-447d4443fa7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
            filename: "placeImage"
        },
        price: 5000,
        location: "Jukkasjärvi",
        country: "Sweden",
        category: "Arctic"
    },
    {
        title: "Luxury Room with Ocean Views",
        description: "Indulge in luxury with sweeping ocean views from this elegantly designed room in a world-class resort.",
        image: {
            url: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            filename: "placeImage"
        },
        price: 4500,
        location: "Maldives",
        country: "Maldives",
        category: "Luxury"
    },
    {
        title: "Iconic Parisian Apartment",
        description: "Stay in the heart of Paris in this chic apartment with views of the Eiffel Tower.",
        image: {
            url: "https://images.unsplash.com/photo-1502039064150-257df473df76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFyaXNpYW4lMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            filename: "placeImage"
        },
        price: 3200,
        location: "Paris",
        country: "France",
        category: "Iconic Cities"
    },
    {
        title: "Historic Castle Stay",
        description: "Experience royal treatment in a centuries-old castle, complete with grand rooms and lush gardens.",
        image: {
            url: "https://images.unsplash.com/photo-1530055324572-8a6c3d0d54c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FzdGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            filename: "placeImage"
        },
        price: 6000,
        location: "Edinburgh",
        country: "Scotland",
        category: "Castles"
    },
    {
        title: "Mountain Camping Adventure",
        description: "Pitch a tent under the stars and wake up to breathtaking mountain views in this remote campsite.",
        image: {
            url: "https://images.unsplash.com/photo-1553958451-bd0a702a6d47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            filename: "placeImage"
        },
        price: 400,
        location: "Rocky Mountains",
        country: "United States",
        category: "Camping"
    },
    {
        title: "Luxurious Dungeon Stay",
        description: "For the daring, this luxurious dungeon offers a unique and thrilling experience with modern amenities.",
        image: {
            url: "https://images.unsplash.com/photo-1563729784474-cd0d63b9869a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHVuZ2VvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            filename: "placeImage"
        },
        price: 2500,
        location: "Prague",
        country: "Czech Republic",
        category: "Dungeon"
    },
    {
        title: "Safari Glamping Experience",
        description: "Enjoy the thrill of the wild in style with this luxury glamping experience on an African safari.",
        image: {
            url: "https://images.unsplash.com/photo-1504386106331-3e4e71712b38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2FmYXJpJTIwZ2xhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            filename: "placeImage"
        },
        price: 5500,
        location: "Maasai Mara",
        country: "Kenya",
        category: "Safari"
    },
    {
        title: "Unique Igloo Stay",
        description: "Sleep under the Northern Lights in a cozy, warm igloo. An unforgettable arctic experience awaits.",
        image: {
            url: "https://images.unsplash.com/photo-1511174511562-5f7f18b87289?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aWdsb298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            filename: "placeImage"
        },
        price: 7000,
        location: "Lapland",
        country: "Finland",
        category: "Igloo"
    },
    {
        title: "Rustic Farmhouse Retreat",
        description: "Enjoy a peaceful escape to the countryside in this charming, rustic farmhouse surrounded by nature.",
        image: {
            url: "https://images.unsplash.com/photo-1551477926-cb83d5e63d0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZhcm1ob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            filename: "placeImage"
        },
        price: 1200,
        location: "Tuscany",
        country: "Italy",
        category: "Farms"
    },
    {
        title: "Urban High-Rise Suite",
        description: "Experience city life at its finest in this stylish high-rise suite with panoramic views of the skyline.",
        image: {
            url: "https://images.unsplash.com/photo-1541386763603-7b183f4a6be6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXJiYW4lMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            filename: "placeImage"
        },
        price: 3000,
        location: "Tokyo",
        country: "Japan",
        category: "Urban"
    },
    {
        title: "Mountain Chalet with Pool",
        description: "Relax in a heated pool surrounded by snow-capped mountains in this luxurious mountain chalet.",
        image: {
            url: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3dpbW1pbmclMjBwb29sfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            filename: "placeImage"
        },
        price: 5000,
        location: "Zermatt",
        country: "Switzerland",
        category: "Swimming Pools"
    },
    {
        title: "Unique Treehouse on the Beach",
        description: "Stay in a treehouse just steps away from the ocean. This unique stay combines adventure with comfort.",
        image: {
            url: "https://images.unsplash.com/photo-1496180472019-c17d7f9ff9ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            filename: "placeImage"
        },
        price: 4300,
        location: "Phuket",
        country: "Thailand",
        category: "Beachfront"
    },
    {
        title: "Historic Urban Loft",
        description: "Step into history in this beautifully restored loft in a historic building, located in the heart of the city.",
        image: {
            url: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGlzdG9yaWMlMjBsb2Z0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            filename: "placeImage"
        },
        price: 3700,
        location: "New York City",
        country: "United States",
        category: "Historic"
    },
];

module.exports = data;