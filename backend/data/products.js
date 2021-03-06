const products = [
  {
    _id: '1',
    name: 'Iphone 12 Pro Max',
    image: '/images/Iphone-12-Pro-Max.jpg',
    description:
      "It’s a leap year. 5G goes Pro. A14 Bionic rockets past every other smartphone chip. The Pro camera system takes low-light photography to the next level — with an even bigger jump on iPhone 12 Pro Max. And Ceramic Shield delivers four times better drop performance. Let’s see what this thing can do.",
    brand: 'Apple',
    category: 'Electronics',
    price:  175999,
    countInStock: 20,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: '2',
    name: 'Sony PlayStation 5',
    image: '/images/Playstation5.jpg',
    description:
      "Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers and 3D Audio*, and an all-new generation of incredible PlayStation® games.",
    brand: 'Sony',
    category: 'Electronics',
    price: 75000,
    countInStock: 0,
    rating: 5.0,
    numReviews: 8,
  },
  {
    _id: '3',
    name: 'Mi LED Desk Lamp',
    image: '/images/Mi-LED-Desk-Lamp.jpg',
    description:
      "Flicker-free | Intuitive brightness and color temperature adjustment| 4 different lighting modes| Durable, minimalist design.",
    brand: 'Xiaomi',
    category: 'Electronics',
    price: 4200,
    countInStock: 11,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: '4',
    name: 'HP EliteDisplay E223',
    image: '/images/HP-Elite-Display-E223.jpg',
    description:
      "HP EliteDisplay E223 21.5-inch Full HD Monitor has a 3-sided micro-edge bezel for seamless multi-display and 4-way adjustability for comfortable use. It ensures perfect business usability with 1920 x 1080 Full HD resolution IPS screen. The stand of this monitor has the adaptability up to 150 mm height that allows to setup multiple displays.",
    brand: 'HP',
    category: 'Electronics',
    price: 15000,
    countInStock: 11,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: '5',
    name: 'Asus ROG Strix G531',
    image: '/images/Asus-ROG-Strix-G531.jpg',
    description:
      "Featuring the latest 9th Gen Intel Core processors and GeForce RTX™ graphics, it brings impactful gaming performance to a wide audience. Intelligent Cooling unleashes the full potential of its leading-edge processors, while RangeBoost provides the strongest possible Wi-Fi signal for your environment. Wherever you play, illuminate the surroundings with Aura Sync on the new triple-edged light bar and 4-zone RGB keyboard.",
    brand: 'Asus',
    category: 'Electronics',
    price: 105000,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    _id: '6',
    name: 'Amazon Echo Dot 3rd Generation',
    image: '/images/alexa.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'Amazon',
    category: 'Electronics',
    price: 3400,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: '7',
    name: 'MacBook Air',
    image: '/images/Macbook-Air.jpg',
    description:
      "thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. Our most advanced Neural Engine for up to 9x faster machine learning. The longest battery life ever in a MacBook Air. And a silent, fanless design. This much power has never been this ready to go.",
    brand: 'Apple',
    category: 'Electronics',
    price: 98000,
    countInStock: 12,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: '8',
    name: 'Soundcore Spirit X',
    image: '/images/Soundcore-Spirit-X.jpg',
    description:
      "Ensure your tunes hold firm as you sprint, jump, and flip through your workout. No matter how close you go to your limit, Spirit X are guaranteed to stay in place. Customizable eartips, wings, and an adjustable cable clip allow everyone to tailor their perfect fit.",
    brand: 'Soundcore',
    category: 'Electronics',
    price: 3300,
    countInStock: 5,
    rating: 3.5,
    numReviews: 12,
  },
  {
    _id: '9',
    name: 'Xiaomi Amazfit GTS A1914',
    image: '/images/Xiaomi-Amazfit-GTS-A1914.jpg',
    description:
      "Amazfit GTS uses a top-class high-resolution screen, whose pixel density is as high as 341 PPI and has a 348 by 442 resolution, bringing an unprecedented clearness in details. Moreover, the customized 1.65 inch AMOLED display takes the fineness of the color display to a whole new level. The 100% NTSC color spectrum and ultra-high color saturation make the display super-lifelike, while a bright and transparent 2.5D glass lens makes every screen-on as stunning as if you're seeing it for the very first time.",
    brand: 'Xiaomi',
    category: 'Electronics',
    price:  9500,
    countInStock: 20,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: '10',
    name: 'TP-Link TL-WR841N',
    image: '/images/TP-Link-TL-WR841N.jpg',
    description:
      "300Mbps Wireless N Router TL-WR841N is a combined wired/wireless network connection device designed specifically for small business and home office networking requirements.",
    brand: 'TP-Link',
    category: 'Electronics',
    price: 75000,
    countInStock: 7,
    rating: 3.8,
    numReviews: 8,
  },
  {
    _id: '11',
    name: 'Razer Viper',
    image: '/images/Razer-Viper.jpg',
    description:
      'Control the outcome of any battle with a gaming mouse that combines high precision, a cutting-edge lightweight body, and the fastest actuation in gaming. Meet the Razer Viper—featuring industry-leading mice technology that’s designed with and tested by Team Razer athletes, bringing you a mouse that’s bred to tear up the pro scene.',
    brand: 'Razer',
    category: 'Electronics',
    price: 6700,
    countInStock: 5,
    rating: 4.2,
    numReviews: 12,
  },
  {
    _id: '12',
    name: 'Canon EOS 80D DSLR Camera',
    image: '/images/Canon-EOS-80D.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'Cannon',
    category: 'Electronics',
    price: 76500,
    countInStock: 5,
    rating: 3.5,
    numReviews: 12,
  },
  
]

export default products
