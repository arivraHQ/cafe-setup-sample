export interface MenuItem {
  name: string;
  description: string;
  price: number;
  isVeg: boolean;
  isBestseller?: boolean;
  handwrittenNote?: string;
}

export interface SignaturePolaroid {
  id: string;
  title: string;
  description: string;
  price: number;
  rotation: number; // degrees: -2 to 2
  tapeOffset: string;
  annotation: string;
  imageUrl: string;
  imageAlt: string;
  imageBrief: string;
}

export interface Happening {
  id: string;
  day: string;
  time: string;
  title: string;
  subtitle: string;
  ticketNo: string;
  badge: string;
}

export interface CustomerReview {
  id: string;
  quote: string;
  author: string;
  context: string;
  rotation: number;
  paperTone: string;
  pinColor: string;
}

export const siteConfig = {
  name: "Mitti Cafe",
  city: "Kanpur",
  tagline: "Slow mornings. Strong coffee.",
  subheadline:
    "A neighbourhood corner in Swaroop Nagar built out of baked terracotta, sunlit reading nooks, and fresh pour-overs. Take your time—nobody is rushing you here.",
  whatsappNumber: "+919000000000",
  whatsappDisplay: "+91 90000 00000",
  whatsappDefaultMsg: "Namaste Mitti Cafe! I'd like to reserve a table for this week.",
  hours: {
    openHour: 8, // 8:00 AM
    closeHour: 23, // 11:00 PM
    display: "8:00 AM – 11:00 PM, All Days",
  },
  address: {
    line1: "14/112, Mall Road, Near Swaroop Nagar Corner",
    line2: "Opposite Phool Bagh Garden lane",
    city: "Kanpur, Uttar Pradesh 208001",
    landmark: "Behind the old red-brick postal building",
  },
  socials: {
    instagram: "https://instagram.com/mitticafe.kanpur",
    zomato: "https://zomato.com/kanpur/mitti-cafe",
    swiggy: "https://swiggy.com/restaurants/mitti-cafe-kanpur",
  },
  heroCollage: [
    {
      title: "Morning Pour-over & Sourdough",
      rotation: -1.8,
      offset: "translate-y-2",
      imageUrl: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=80",
      imageBrief: "Morning pour-over dripping into handmade ceramic cup on aged teak table, steam rising gently, window light filtering through linen curtains",
    },
    {
      title: "Sunlit Terracotta Corner",
      rotation: 1.4,
      offset: "-translate-y-4",
      imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80",
      imageBrief: "Sunlit cosy cafe nook with terracotta planter, open paperback book, half-eaten walnut cake on speckled ceramic plate",
    },
    {
      title: "Chai Steaming in Mitti Kulhad",
      rotation: -0.9,
      offset: "translate-y-6",
      imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80",
      imageBrief: "Clay earthen kulhad filled with steaming masala chai, scattered crushed green cardamom and cinnamon bark on raw wooden counter",
    },
  ],
  signatures: [
    {
      id: "sig-1",
      title: "Bara Banki Jaggery Cortado",
      description: "Double ristretto over steamed velvety milk, sweetened with unrefined desi gur from nearby Awadh farms.",
      price: 210,
      rotation: -1.7,
      tapeOffset: "left-6",
      annotation: "Staff obsession!",
      imageUrl: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Bara Banki Jaggery Cortado in a handmade earthen cup",
      imageBrief: "Cortado in a ribbed terracotta tumbler, microfoam latte art, warm morning ray from left, wooden coaster",
    },
    {
      id: "sig-2",
      title: "Kanpur Truffle & Wild Mushroom Toast",
      description: "Slow-roasted shimeji & cremini on country sourdough loaf with thyme-whipped labneh and cracked tellicherry pepper.",
      price: 340,
      rotation: 1.2,
      tapeOffset: "right-8",
      annotation: "Baked fresh at 7 AM daily",
      imageUrl: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Wild mushroom sourdough toast on ceramic plate",
      imageBrief: "Sourdough toast laden with golden pan-seared mushrooms and herbs on handcrafted pottery plate, textured linen backdrop",
    },
    {
      id: "sig-3",
      title: "Saffron & Cardamom Clay-Pot Chai",
      description: "Slow simmered Assam whole leaf blend brewed with whole spices in unglazed red earth pots for that smoky petrichor warmth.",
      price: 140,
      rotation: -1.1,
      tapeOffset: "left-10",
      annotation: "Served in real Mitti kulhad",
      imageUrl: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Steaming spiced tea in an unglazed clay pot",
      imageBrief: "Earthen kulhad overflowing with frothy steaming chai, crushed whole spices alongside on warm timber table",
    },
    {
      id: "sig-4",
      title: "Burnt Butter Gnocchi in Sage Broth",
      description: "Hand-rolled potato pillows seared golden in nutty brown butter, crisped garden sage leaves, and shavings of aged parmesan.",
      price: 420,
      rotation: 1.8,
      tapeOffset: "right-6",
      annotation: "Comfort in a bowl",
      imageUrl: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Handmade potato gnocchi in golden sage butter",
      imageBrief: "Hand-rolled gnocchi glistening with sage brown butter, shallow stoneware bowl, overhead angled daylight",
    },
    {
      id: "sig-5",
      title: "Warm Spiced Date & Jaggery Cake",
      description: "Dense sticky date pudding soaked in warm salted toffee drizzle, crowned with cold vanilla bean mascarpone.",
      price: 280,
      rotation: -0.8,
      tapeOffset: "left-8",
      annotation: "Order before it sells out!",
      imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Slice of warm sticky date cake with caramel drizzle",
      imageBrief: "Dark rich date cake slice dripping with warm toffee sauce, speckled pottery dish, small vintage brass spoon",
    },
  ] as SignaturePolaroid[],
  menuCategories: [
    {
      id: "coffee",
      label: "Specialty Coffee",
      tagline: "Single-origin Arabica sourced directly from estates in Chikmagalur & Biligirirangana Hills.",
      items: [
        {
          name: "Espresso (Double Shot)",
          description: "Syrupy body with notes of toasted almond, dark cocoa, and dried plum.",
          price: 150,
          isVeg: true,
        },
        {
          name: "Flat White",
          description: "Double shot ristretto with silky microfoam served in a 180ml earthenware cup.",
          price: 210,
          isVeg: true,
          isBestseller: true,
          handwrittenNote: "Barista pick",
        },
        {
          name: "Bara Banki Jaggery Cortado",
          description: "Equal parts espresso and steamed milk kissed with pure desi gur.",
          price: 210,
          isVeg: true,
          isBestseller: true,
        },
        {
          name: "Manual Pour-over (V60 / Kalita)",
          description: "Light, floral brew highlighting washed heirloom beans. Takes 6 patient minutes.",
          price: 240,
          isVeg: true,
        },
        {
          name: "Kanpur Cold Brew (18h Steep)",
          description: "Slow-dripped overnight over ice. Smooth chocolate finish, zero bitterness.",
          price: 220,
          isVeg: true,
          handwrittenNote: "Summer life-saver",
        },
        {
          name: "Iced Orange Tonic Espresso",
          description: "Freshly squeezed Valencia orange, tonic reduction, and a floated double shot.",
          price: 260,
          isVeg: true,
        },
        {
          name: "Vietnamese Mitti Drip",
          description: "Dark roast dripped slowly over sweet condensed milk and hand-crushed ice.",
          price: 230,
          isVeg: true,
        },
      ],
    },
    {
      id: "chai",
      label: "Chai & Infusions",
      tagline: "Slow-brewed in earthenware, infused with wild herbs, raw roots, and whole spices.",
      items: [
        {
          name: "Mitti Kulhad Masala Chai",
          description: "Crushed ginger, green cardamom, black pepper, and whole milk simmered to perfection.",
          price: 120,
          isVeg: true,
          isBestseller: true,
          handwrittenNote: "Kanpur favourite",
        },
        {
          name: "Kashmiri Kahwa & Saffron Threads",
          description: "Green tea steeped with saffron, dried rose petals, and slivered almonds.",
          price: 180,
          isVeg: true,
        },
        {
          name: "Lemongrass & Raw Honey Tisane",
          description: "Fresh garden lemongrass stalks bruised and infused with forest honey.",
          price: 150,
          isVeg: true,
        },
        {
          name: "Tulsi Mint Digestif",
          description: "Holy basil leaves plucked from our terrace garden with field spearmint.",
          price: 140,
          isVeg: true,
        },
        {
          name: "Turmeric Ashwagandha Golden Latte",
          description: "Lakadong high-curcumin turmeric whisked with steamed almond milk and cracked black pepper.",
          price: 220,
          isVeg: true,
        },
        {
          name: "Iced Hibiscus Rose Cooler",
          description: "Cold brewed hibiscus calyces with Kannauj rose water and chia seeds.",
          price: 190,
          isVeg: true,
        },
      ],
    },
    {
      id: "breakfast",
      label: "All-Day Breakfast",
      tagline: "Served from 8:00 AM until sunset. Eggs from free-roaming hens, breads baked that very dawn.",
      items: [
        {
          name: "Akuri on Buttered Pao",
          description: "Parsi-style spiced soft scrambled eggs, fresh coriander, ginger juliennes, toasted ladi pao.",
          price: 240,
          isVeg: false,
          isBestseller: true,
        },
        {
          name: "Mushroom & Whipped Labneh Sourdough",
          description: "Pan-roasted forest mushrooms, garlic oil, whipped goat labneh on 36-hour sourdough.",
          price: 340,
          isVeg: true,
          handwrittenNote: "Our pride!",
        },
        {
          name: "Turkish Poached Eggs in Garlic Yogurt",
          description: "Two poached eggs nestled over seasoned garlicky hung curd, warm chilli butter drizzle, sourdough soldier.",
          price: 320,
          isVeg: false,
        },
        {
          name: "Avocado & Slow-Roasted Tomato Tartine",
          description: "Coarsely mashed Hass avocado, balsamic-glazed cherry tomatoes, toasted pumpkin seeds.",
          price: 360,
          isVeg: true,
        },
        {
          name: "Baked Shakshuka with Feta",
          description: "Rich cumin-spiced tomato bell pepper stew, baked eggs, crumbled barrel feta, flatbread.",
          price: 330,
          isVeg: false,
        },
        {
          name: "Steel-Cut Oats with Caramelised Figs",
          description: "Simmered in coconut milk, spiced apple compote, toasted pecans, wildflower honey.",
          price: 220,
          isVeg: true,
        },
      ],
    },
    {
      id: "mains",
      label: "Pastas & Sourdough Melts",
      tagline: "Hand-rolled noodles and slow-fermented sandwich loaves. No shortcuts.",
      items: [
        {
          name: "Burnt Butter Gnocchi with Sage",
          description: "Handcrafted potato gnocchi browned in cultured butter, crisped sage leaves, parmesan.",
          price: 420,
          isVeg: true,
          isBestseller: true,
          handwrittenNote: "Must try",
        },
        {
          name: "Slow-Braised Chicken Ragu Tagliatelle",
          description: "Farm chicken braised 4 hours in San Marzano tomato jus, rosemary, hand-cut egg pasta.",
          price: 450,
          isVeg: false,
        },
        {
          name: "Three-Cheese Sourdough Toastie",
          description: "Aged English cheddar, gouda, and fresh mozzarella with house green chilli pickle on crusty country bread.",
          price: 310,
          isVeg: true,
        },
        {
          name: "Smoked Chicken & Pesto Panini",
          description: "Shredded chicken breast, house basil walnut pesto, roasted red peppers on ciabatta.",
          price: 360,
          isVeg: false,
        },
        {
          name: "Cacio e Pepe with Tellicherry Pepper",
          description: "Bucatini pasta tossed simply with Pecorino Romano, starchy pasta water, and freshly cracked Malabar black pepper.",
          price: 380,
          isVeg: true,
        },
        {
          name: "Roasted Aubergine & Feta Sandwich",
          description: "Charred eggplant steaks, sun-dried tomato tapenade, arugula, and crumbly feta on focaccia.",
          price: 320,
          isVeg: true,
        },
      ],
    },
    {
      id: "desserts",
      label: "Bakes & Sweet Endings",
      tagline: "Everything out of our small deck oven. Honest butter, raw sugar, zero artificial essences.",
      items: [
        {
          name: "Sticky Date & Jaggery Pudding",
          description: "Served warm with butterscotch toffee sauce and a dollop of chilled mascarpone.",
          price: 280,
          isVeg: true,
          isBestseller: true,
          handwrittenNote: "Warm comfort",
        },
        {
          name: "Basque Burnt Cheesecake",
          description: "Caramelised exterior giving way to an impossibly creamy, molten vanilla centre.",
          price: 320,
          isVeg: true,
        },
        {
          name: "Almond Flour Chocolate Torte",
          description: "70% single-origin Kerala chocolate, gluten-free, finished with flaky sea salt.",
          price: 290,
          isVeg: true,
        },
        {
          name: "Kannauj Rosewater & Pistachio Tart",
          description: "Crisp almond sable shell filled with rose-scented pastry cream and crushed green pistachios.",
          price: 270,
          isVeg: true,
        },
        {
          name: "Earl Grey & Lemon Tea Loaf",
          description: "Tender slice infused with bergamot black tea, coated in a tart citrus glaze.",
          price: 180,
          isVeg: true,
        },
        {
          name: "Affogato al Cafe",
          description: "Scoop of artisanal Madagascar vanilla bean gelato drowned in a scorching double ristretto.",
          price: 210,
          isVeg: true,
        },
      ],
    },
  ],
  story: {
    founderName: "Aditi & Raghav Verma",
    founderRole: "Co-founders & Bakers",
    quote: "We wanted a spot in Kanpur where nobody hands you the bill the minute your cup is half empty.",
    leadParagraph:
      "Mitti started in the winter of 2021 with six tables, an antique manual lever espresso machine, and a sack of clay kulhads sourced from potters in Bithoor. We missed the quiet, unhurried cadence of Kanpur's older courtyard homes—where mornings stretched over endless chai and heated debates about literature, cricket, and city gossip.",
    secondaryParagraph:
      "Every corner here is built by hand: the exposed lime-washed brick, the reclaimed teak benches from old colonial bungalows in Civil Lines, and the handwritten library cards inside our shared bookshelf. Whether you come to write your thesis, bring your grandmother for ginger chai, or sing an unpolished ballad on Friday night—this space belongs to you as much as it does to us.",
    portraitUrl: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=800&q=80",
    portraitBrief: "Warm candid portrait of co-founder in linen apron holding an earthenware bowl, natural window light, rustic wooden kitchen background",
  },
  ambiencePhotos: [
    {
      caption: "The sun-washed reading corner on winter mornings",
      span: "col-span-1 md:col-span-2",
      url: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1000&q=80",
      brief: "Wide view of cosy sunlit cafe interior with brick walls, green potted ferns, wooden communal tables, and soft warm lighting",
    },
    {
      caption: "The aroma of freshly baked sourdough at 7:15 AM",
      span: "col-span-1",
      url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80",
      brief: "Artisan sourdough loaves cooling on wire rack dusted with flour, deep crusty golden brown",
    },
    {
      caption: "Friday night acoustic set under the warm filament glow",
      span: "col-span-1",
      url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=700&q=80",
      brief: "Acoustic guitar leaning against a brick wall under a low hanging vintage warm bulb, intimate warm cafe ambiance",
    },
    {
      caption: "Our community book-exchange shelf in the mezzanine",
      span: "col-span-1 md:col-span-2",
      url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1000&q=80",
      brief: "Rustic wooden bookshelves overflowing with dog-eared novels, small terracotta succulent pots, warm reading lamp",
    },
  ],
  happenings: [
    {
      id: "open-mic",
      day: "EVERY FRIDAY",
      time: "7:00 PM – 9:30 PM",
      title: "Chai, Sher & Guftagu: Open Mic",
      subtitle: "Acoustic sets, Hindustani poetry, stand-up, and spoken word. 12 open slots. Walk-ins warmly welcomed.",
      ticketNo: "NO. 0842-FR",
      badge: "Free Entry / Reserve Seat",
    },
    {
      id: "weekend-brunch",
      day: "SAT & SUN",
      time: "9:00 AM – 2:00 PM",
      title: "The Slow Awadhi Weekend Brunch",
      subtitle: "Unlimited sourdough toasts, house preserves, shakshuka pans, and bottomless French press brews.",
      ticketNo: "NO. 1109-WKND",
      badge: "Rs. 699 per person",
    },
    {
      id: "board-games",
      day: "SUNDAYS",
      time: "4:00 PM – 8:00 PM",
      title: "Catan, Chai & Quiet Board Games",
      subtitle: "Over 40 tabletop board games. Come solo or bring your squad; our game master sets up the board.",
      ticketNo: "NO. 0321-SN",
      badge: "Community Event",
    },
  ] as Happening[],
  reviews: [
    {
      id: "rev-1",
      quote:
        "The jaggery cortado and that wild mushroom sourdough ruined every other cafe in Kanpur for me. It feels like stepping into an old artist friend's living room.",
      author: "Pooja Trivedi",
      context: "Regular since 2022 • Swaroop Nagar",
      rotation: -1.5,
      paperTone: "bg-[#FFF9EE]",
      pinColor: "text-coffee",
    },
    {
      id: "rev-2",
      quote:
        "Finally a cafe that doesn't blast generic EDM! You can actually read a book, hear yourself think, or write uninterrupted for hours. Their staff is pure kindness.",
      author: "Dr. Alok Mehrotra",
      context: "IIT Kanpur Faculty",
      rotation: 1.8,
      paperTone: "bg-[#F7EFE1]",
      pinColor: "text-marigold",
    },
    {
      id: "rev-3",
      quote:
        "The Friday poetry open mic is Kanpur's best-kept secret. Sitting with an earthen kulhad of spiced chai while someone sings a Kabir bhajan is sublime.",
      author: "Sana Farooqui",
      context: "Poet & Architect",
      rotation: -0.9,
      paperTone: "bg-[#FAF2E6]",
      pinColor: "text-sage",
    },
    {
      id: "rev-4",
      quote:
        "Real sourdough with real crust. None of that spongy bread dressed up with fancy names. Mitti has raised the bar for honest food in UP.",
      author: "Vikramjit Bawa",
      context: "Weekend cyclist & Food Enthusiast",
      rotation: 1.3,
      paperTone: "bg-[#FFFDF7]",
      pinColor: "text-coffee",
    },
    {
      id: "rev-5",
      quote:
        "The date pudding served warm with jaggery butterscotch is worth walking 5 miles for. My kids love the board games corner on Sundays.",
      author: "Shalini Bajpai",
      context: "Civil Lines resident",
      rotation: -1.9,
      paperTone: "bg-[#F3E8D2]",
      pinColor: "text-marigold",
    },
  ] as CustomerReview[],
};
