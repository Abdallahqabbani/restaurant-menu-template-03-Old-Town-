
/* =====================================
   OLD TOWN RESTAURANT
   Menu Data & Functionality
===================================== */

// Language detection
const currentLanguage =
  document.documentElement.lang === "ar" ? "ar" : "en";

// =====================================
// MENU DATA
// Edit products here
// =====================================

const menuItems = [
  // SPECIALS
  {
    id: 1,
    category: "specials",
    name: {
      en: "Old Town Special",
      ar: "طبق أولد تاون الخاص"
    },
    description: {
      en: "Our traditional house recipe with fresh ingredients.",
      ar: "وصفتنا التقليدية الخاصة مع مكونات طازجة."
    },
    price: 6.50,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
  },
  {
    id: 2,
    category: "specials",
    name: {
      en: "Classic Town Burger",
      ar: "برجر تاون الكلاسيكي"
    },
    description: {
      en: "A timeless recipe made with premium ingredients.",
      ar: "وصفة كلاسيكية مميزة محضرة من مكونات مختارة."
    },
    price: 5.50,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
  },
  {
    id: 3,
    category: "specials",
    name: {
      en: "Grilled Chicken Plate",
      ar: "طبق الدجاج المشوي"
    },
    description: {
      en: "Tender grilled chicken served with classic sides.",
      ar: "دجاج طري مشوي يقدم مع أطباق جانبية كلاسيكية."
    },
    price: 7.50,
    image: "https://images.unsplash.com/photo-1579751626657-72bc17010498"
  },
  {
    id: 4,
    category: "specials",
    name: {
      en: "Classic Margherita",
      ar: "مارغريتا الكلاسيكية"
    },
    description: {
      en: "Fresh tomato, mozzarella and traditional herbs.",
      ar: "طماطم طازجة وجبنة موزاريلا وأعشاب تقليدية."
    },
    price: 5.00,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002"
  },
  {
    id: 5,
    category: "specials",
    name: {
      en: "Town Chicken Meal",
      ar: "وجبة دجاج تاون"
    },
    description: {
      en: "Golden chicken with homemade potatoes and salad.",
      ar: "دجاج ذهبي مع بطاطا وسلطة منزلية."
    },
    price: 8.00,
    image: "https://images.unsplash.com/photo-1521305916504-4a1121188589"
  },

  // STARTERS
  {
    id: 6,
    category: "starters",
    name: {
      en: "Homemade Soup",
      ar: "شوربة منزلية"
    },
    description: {
      en: "Warm traditional soup prepared fresh every day.",
      ar: "شوربة دافئة تقليدية تحضر طازجة كل يوم."
    },
    price: 2.50,
    image: "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7"
  },
  {
    id: 7,
    category: "starters",
    name: {
      en: "Town Garden Salad",
      ar: "سلطة حديقة تاون"
    },
    description: {
      en: "Fresh seasonal vegetables with our house dressing.",
      ar: "خضروات موسمية طازجة مع صوصنا الخاص."
    },
    price: 3.00,
    image: "https://images.unsplash.com/photo-1541014741259-de529411b96a"
  },
  {
    id: 8,
    category: "starters",
    name: {
      en: "Classic Hummus",
      ar: "حمص كلاسيكي"
    },
    description: {
      en: "Creamy chickpeas blended with tahini and olive oil.",
      ar: "حمص كريمي مع الطحينة وزيت الزيتون."
    },
    price: 2.50,
    image: "https://images.unsplash.com/photo-1628294895950-9805252327bc"
  },
  {
    id: 9,
    category: "starters",
    name: {
      en: "Golden Fries",
      ar: "بطاطا ذهبية"
    },
    description: {
      en: "Crispy golden potatoes served with our house sauce.",
      ar: "بطاطا مقرمشة تقدم مع صوص البيت الخاص."
    },
    price: 2.00,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd"
  },
  {
    id: 10,
    category: "starters",
    name: {
      en: "Traditional Samosa",
      ar: "سمبوسك تقليدي"
    },
    description: {
      en: "Crispy pastry filled with seasoned vegetables.",
      ar: "عجينة مقرمشة محشوة بالخضروات المتبلة."
    },
    price: 2.50,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950"
  },

  // MAIN DISHES
  {
    id: 11,
    category: "main-dishes",
    name: {
      en: "Traditional Grilled Chicken",
      ar: "دجاج مشوي تقليدي"
    },
    description: {
      en: "Tender chicken grilled with classic herbs and spices.",
      ar: "دجاج طري مشوي مع الأعشاب والتوابل الكلاسيكية."
    },
    price: 7.50,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554"
  },
  {
    id: 12,
    category: "main-dishes",
    name: {
      en: "Old Town Steak",
      ar: "ستيك أولد تاون"
    },
    description: {
      en: "Juicy grilled steak served with our traditional sides.",
      ar: "ستيك مشوي طري يقدم مع أطباقنا الجانبية التقليدية."
    },
    price: 10.00,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947"
  },
  {
    id: 13,
    category: "main-dishes",
    name: {
      en: "Old Town Burger",
      ar: "برجر أولد تاون"
    },
    description: {
      en: "Handcrafted beef burger with fresh vegetables.",
      ar: "برجر لحم محضر بعناية مع الخضروات الطازجة."
    },
    price: 5.50,
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828"
  },
  {
    id: 14,
    category: "main-dishes",
    name: {
      en: "Margherita Pizza",
      ar: "بيتزا مارغريتا"
    },
    description: {
      en: "Classic pizza with tomato, mozzarella and basil.",
      ar: "بيتزا كلاسيكية مع الطماطم والموزاريلا والريحان."
    },
    price: 5.00,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002"
  },
  {
    id: 15,
    category: "main-dishes",
    name: {
      en: "Classic Pepperoni",
      ar: "بيبروني كلاسيكية"
    },
    description: {
      en: "Traditional pizza topped with premium pepperoni.",
      ar: "بيتزا تقليدية مغطاة بشرائح البيبروني الفاخرة."
    },
    price: 6.00,
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47"
  },

  // DESSERTS
  {
    id: 16,
    category: "desserts",
    name: {
      en: "Classic Chocolate Cake",
      ar: "كيكة الشوكولاتة الكلاسيكية"
    },
    description: {
      en: "Rich homemade chocolate cake with a soft center.",
      ar: "كيكة شوكولاتة منزلية غنية بقلب طري."
    },
    price: 3.50,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587"
  },
  {
    id: 17,
    category: "desserts",
    name: {
      en: "Traditional Cheesecake",
      ar: "التشيز كيك التقليدية"
    },
    description: {
      en: "Creamy cheesecake prepared with our classic recipe.",
      ar: "تشيز كيك كريمية محضرة وصفتنا الكلاسيكية."
    },
    price: 3.50,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187"
  },
  {
    id: 18,
    category: "desserts",
    name: {
      en: "Old Town Donuts",
      ar: "دونات أولد تاون"
    },
    description: {
      en: "Soft handmade donuts finished with a sweet glaze.",
      ar: "دونات طرية منزلية مغطاة بطبقة حلوة."
    },
    price: 2.50,
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b"
  },
  {
    id: 19,
    category: "desserts",
    name: {
      en: "Vanilla Cupcake",
      ar: "كب كيك بالفانيلا"
    },
    description: {
      en: "Light vanilla cake topped with homemade cream.",
      ar: "كيكة فانيلا خفيفة مغطاة بالكريمة المنزلية."
    },
    price: 2.00,
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307"
  },
  {
    id: 20,
    category: "desserts",
    name: {
      en: "Classic Ice Cream",
      ar: "آيس كريم كلاسيكي"
    },
    description: {
      en: "Creamy vanilla ice cream served with chocolate sauce.",
      ar: "آيس كريم فانيلا كريمي مع صوص الشوكولاتة."
    },
    price: 2.50,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb"
  },

  // DRINKS
  {
    id: 21,
    category: "drinks",
    name: {
      en: "Fresh Orange Juice",
      ar: "عصير برتقال طازج"
    },
    description: {
      en: "Freshly squeezed orange juice served chilled.",
      ar: "عصير برتقال طازج ومعصور حديثًا ويقدم باردًا."
    },
    price: 2.00,
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e"
  },
  {
    id: 22,
    category: "drinks",
    name: {
      en: "Old Town Coffee",
      ar: "قهوة أولد تاون"
    },
    description: {
      en: "Rich traditional coffee with a classic aroma.",
      ar: "قهوة تقليدية غنية برائحة ونكهة كلاسيكية."
    },
    price: 1.50,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
  },
  {
    id: 23,
    category: "drinks",
    name: {
      en: "Classic Lemonade",
      ar: "ليمونادة كلاسيكية"
    },
    description: {
      en: "Fresh homemade lemonade served ice cold.",
      ar: "ليمونادة منزلية طازجة تقدم باردة."
    },
    price: 2.00,
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87"
  },
  {
    id: 24,
    category: "drinks",
    name: {
      en: "Fresh Mojito",
      ar: "موهيتو طازج"
    },
    description: {
      en: "Refreshing mint, lime and sparkling water.",
      ar: "نعناع طازج وليمون ومياه غازية منعشة."
    },
    price: 2.50,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd"
  },
  {
    id: 25,
    category: "drinks",
    name: {
      en: "Traditional Tea",
      ar: "شاي تقليدي"
    },
    description: {
      en: "Warm classic tea served with fresh mint.",
      ar: "شاي كلاسيكي دافئ يقدم مع النعناع الطازج."
    },
    price: 1.50,
    image: "https://images.unsplash.com/photo-1510627498534-cf7e9002facc"
  }
];

// =====================================
// RENDER MENU
// =====================================

function renderMenu() {
  const categories = [
    "specials",
    "starters",
    "main-dishes",
    "desserts",
    "drinks"
  ];

  categories.forEach((category) => {
    const container = document.getElementById(
      `${category}-products`
    );

    if (!container) return;

    const products = menuItems.filter(
      (item) => item.category === category
    );

    container.innerHTML = products
      .map((item) => {
        return `
          <article class="product-card">
            <img
              src="${item.image}?auto=format&fit=crop&w=600&q=75"
              alt="${item.name[currentLanguage]}"
              loading="lazy"
              decoding="async"
            >

            <div class="product-info">
              <h3>${item.name[currentLanguage]}</h3>
              <p>${item.description[currentLanguage]}</p>
              <span class="price">
                ${item.price.toFixed(2)} JD
              </span>
            </div>
          </article>
        `;
      })
      .join("");
  });
}

// =====================================
// SMOOTH NAVIGATION
// =====================================

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (!targetSection) return;

    event.preventDefault();

    targetSection.scrollIntoView({
      behavior: "smooth"
    });
  });
});

// =====================================
// ACTIVE NAVIGATION
// =====================================

const sections = document.querySelectorAll(".menu-section");

let scrollScheduled = false;

function updateActiveNavigation() {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 180;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${currentSection}`
    );
  });

  scrollScheduled = false;
}

window.addEventListener(
  "scroll",
  () => {
    if (!scrollScheduled) {
      scrollScheduled = true;
      requestAnimationFrame(updateActiveNavigation);
    }
  },
  { passive: true }
);

// =====================================
// PRODUCT CARD SELECTION
// =====================================

document.addEventListener("click", (event) => {
  const card = event.target.closest(".product-card");

  if (card) {
    card.classList.toggle("selected");
  }
});

// =====================================
// INITIALIZATION
// =====================================

renderMenu();
updateActiveNavigation();
