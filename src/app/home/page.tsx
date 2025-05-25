
"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FoodItemCard } from '@/components/home/food-item-card';
import { HeaderOffers } from '@/components/home/header-offers';
import { SiteFooter } from '@/components/home/site-footer';
import { ChevronLeft, ExternalLink } from 'lucide-react';

interface MenuItem {
  name: string;
  price: string;
  imageUrl: string;
  imageHint: string;
  description: string;
  imageSearchUrl?: string;
}

interface MenuCategory {
  name: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    name: "Appetizers",
    items: [
      { name: "Garlic Bread", price: "$50.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "garlic bread butter", description: "Classic garlic bread with a crispy crust and rich butter.", imageSearchUrl: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent("Garlic Bread food dish")}` },
      { name: "Bruschetta", price: "$45.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "bruschetta tomato basil", description: "Toasted bread topped with fresh tomatoes, garlic, basil, and olive oil.", imageSearchUrl: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent("Bruschetta food dish")}` },
      { name: "Stuffed Mushrooms", price: "$48.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "stuffed mushrooms cheese", description: "Mushrooms filled with a savory blend of herbs, breadcrumbs, and cheese.", imageSearchUrl: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent("Stuffed Mushrooms food dish")}` },
      { name: "Shrimp Cocktail", price: "$52.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "shrimp cocktail seafood", description: "Chilled jumbo shrimp served with a tangy cocktail sauce.", imageSearchUrl: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent("Shrimp Cocktail food dish")}` },
      { name: "Caprese Skewers", price: "$47.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "caprese skewers mozzarella", description: "Cherry tomatoes, fresh mozzarella, and basil drizzled with balsamic glaze.", imageSearchUrl: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent("Caprese Skewers food dish")}` },
      { name: "Spinach Artichoke Dip", price: "$55.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "artichoke dip appetizer", description: "Creamy spinach and artichoke dip served with tortilla chips or bread.", imageSearchUrl: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent("Spinach Artichoke Dip food dish")}`}
    ],
  },
  {
    name: "Soups and Salads",
    items: [
      { name: "Caesar Salad", price: "$50.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "caesar salad chicken", description: "Crisp romaine lettuce, Parmesan cheese, croutons, and Caesar dressing.", imageSearchUrl: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent("Caesar Salad food dish")}` },
      { name: "Minestrone Soup", price: "$45.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "minestrone soup vegetable", description: "A hearty Italian vegetable soup with pasta and beans.", imageSearchUrl: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent("Minestrone Soup food dish")}` },
      { name: "Greek Salad", price: "$48.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "greek salad feta", description: "Tomatoes, cucumbers, olives, feta cheese, and a light vinaigrette.", imageSearchUrl: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent("Greek Salad food dish")}` },
      { name: "Lobster Bisque", price: "$52.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "lobster bisque creamy", description: "A creamy and rich soup made with fresh lobster stock and meat.", imageSearchUrl: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent("Lobster Bisque food dish")}` },
      { name: "Asian Chicken Salad", price: "$53.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "asian chicken salad sesame", description: "Grilled chicken, mixed greens, mandarin oranges, and a sesame ginger dressing.", imageSearchUrl: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent("Asian Chicken Salad food dish")}` },
      { name: "Tomato Basil Soup", price: "$46.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "tomato basil soup creamy", description: "Creamy tomato soup infused with fresh basil.", imageSearchUrl: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent("Tomato Basil Soup food dish")}`}
    ],
  },
  {
    name: "Entrees",
    items: [
      { name: "Grilled Salmon", price: "$50.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "grilled salmon asparagus", description: "Perfectly grilled salmon fillet served with asparagus and lemon butter sauce.", imageSearchUrl: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent("Grilled Salmon food dish")}` },
      { name: "Filet Mignon", price: "$45.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "filet mignon steak potato", description: "A tender and juicy cut of beef, cooked to your liking, with mashed potatoes.", imageSearchUrl: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent("Filet Mignon food dish")}` },
      { name: "Chicken Piccata", price: "$48.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "chicken piccata lemon", description: "Sautéed chicken breast with a lemon butter and caper sauce, served over pasta.", imageSearchUrl: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent("Chicken Piccata food dish")}` },
      { name: "Vegetable Stir-Fry", price: "$52.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "vegetable stir fry tofu", description: "A medley of fresh vegetables stir-fried in a savory sauce with tofu or chicken.", imageSearchUrl: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent("Vegetable Stir-Fry food dish")}` },
      { name: "Lamb Chops", price: "$58.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "lamb chops grilled mint", description: "Grilled lamb chops with a mint glaze, served with roasted vegetables.", imageSearchUrl: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent("Lamb Chops food dish")}`},
      { name: "Beef Stroganoff", price: "$54.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "beef stroganoff noodles mushroom", description: "Tender beef strips in a creamy mushroom sauce, served over egg noodles.", imageSearchUrl: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent("Beef Stroganoff food dish")}`}
    ],
  },
  {
    name: "Pasta and Risotto",
    items: [
      { name: "Spaghetti Carbonara", price: "$50.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "spaghetti carbonara pancetta", description: "Spaghetti with a creamy egg sauce, pancetta, Pecorino Romano, and black pepper.", imageSearchUrl: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent("Spaghetti Carbonara food dish")}` },
      { name: "Fettuccine Alfredo", price: "$45.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "fettuccine alfredo creamy", description: "Fettuccine pasta tossed in a rich and creamy Alfredo sauce with Parmesan cheese.", imageSearchUrl: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent("Fettuccine Alfredo food dish")}` },
      { name: "Linguine with Clam Sauce", price: "$48.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "linguine clam sauce white wine", description: "Linguine pasta with a flavorful white wine and garlic clam sauce.", imageSearchUrl: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent("Linguine with Clam Sauce food dish")}` },
      { name: "Wild Mushroom Risotto", price: "$52.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "mushroom risotto parmesan", description: "Creamy Arborio rice risotto with a variety of wild mushrooms and Parmesan.", imageSearchUrl: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent("Wild Mushroom Risotto food dish")}` },
      { name: "Penne alla Vodka", price: "$49.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "penne alla vodka tomato cream", description: "Penne pasta in a creamy tomato and vodka sauce.", imageSearchUrl: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent("Penne alla Vodka food dish")}` },
      { name: "Lasagna Bolognese", price: "$53.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "lasagna bolognese meat sauce", description: "Layers of pasta, rich meat sauce, béchamel, and cheese, baked to perfection.", imageSearchUrl: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent("Lasagna Bolognese food dish")}`}
    ],
  },
  {
    name: "Desserts",
    items: [
      { name: "Tiramisu", price: "$50.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "tiramisu coffee mascarpone", description: "Classic Italian coffee-flavored dessert with ladyfingers, mascarpone, and cocoa.", imageSearchUrl: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent("Tiramisu food dish")}` },
      { name: "Chocolate Lava Cake", price: "$45.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "chocolate lava cake molten", description: "Warm chocolate cake with a molten chocolate center, served with vanilla ice cream.", imageSearchUrl: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent("Chocolate Lava Cake food dish")}` },
      { name: "Crème Brûlée", price: "$48.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "creme brulee custard", description: "Rich custard base topped with a layer of hardened caramelized sugar.", imageSearchUrl: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent("Crème Brûlée food dish")}` },
      { name: "New York Cheesecake", price: "$52.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "new york cheesecake slice", description: "Creamy New York style cheesecake with a graham cracker crust and berry coulis.", imageSearchUrl: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent("New York Cheesecake food dish")}` },
      { name: "Apple Crumble", price: "$47.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "apple crumble warm dessert", description: "Warm spiced apples topped with a buttery crumble, served with caramel sauce.", imageSearchUrl: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent("Apple Crumble food dish")}` },
      { name: "Panna Cotta", price: "$46.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "panna cotta berry", description: "Italian cooked cream dessert, often flavored with vanilla and served with fruit.", imageSearchUrl: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent("Panna Cotta food dish")}`}
    ],
  },
  {
    name: "Beverages",
    items: [
      { name: "Coca-Cola", price: "$10.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "coca cola can", description: "Classic Coca-Cola, served chilled.", imageSearchUrl: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent("Coca-Cola drink")}` },
      { name: "Orange Juice", price: "$15.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "orange juice fresh", description: "Freshly squeezed orange juice.", imageSearchUrl: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent("Orange Juice drink")}` },
      { name: "Iced Lemon Tea", price: "$12.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "iced lemon tea refreshing", description: "Refreshing iced tea with a hint of lemon.", imageSearchUrl: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent("Iced Lemon Tea drink")}` },
      { name: "Espresso", price: "$18.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "espresso coffee strong", description: "Strong and aromatic Italian espresso.", imageSearchUrl: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent("Espresso coffee")}` },
      { name: "Sparkling Water", price: "$8.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "sparkling water bottle", description: "Chilled sparkling mineral water.", imageSearchUrl: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent("Sparkling Water drink")}`},
      { name: "Red Wine (Glass)", price: "$25.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "red wine glass", description: "A glass of our house red wine selection.", imageSearchUrl: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent("Red Wine glass")}`}
    ],
  },
  {
    name: "Sides",
    items: [
      { name: "French Fries", price: "$15.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "french fries crispy", description: "Crispy golden French fries, lightly salted.", imageSearchUrl: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent("French Fries food dish")}` },
      { name: "Onion Rings", price: "$18.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "onion rings battered", description: "Battered and deep-fried onion rings.", imageSearchUrl: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent("Onion Rings food dish")}` },
      { name: "Side Salad", price: "$20.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "side salad fresh", description: "Mixed greens with cherry tomatoes, cucumber, and choice of dressing.", imageSearchUrl: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent("Side Salad food dish")}` },
      { name: "Steamed Vegetables", price: "$22.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "steamed vegetables healthy", description: "A healthy mix of seasonal steamed vegetables.", imageSearchUrl: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent("Steamed Vegetables food dish")}` },
      { name: "Garlic Mashed Potatoes", price: "$20.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "garlic mashed potatoes creamy", description: "Creamy mashed potatoes infused with roasted garlic.", imageSearchUrl: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent("Garlic Mashed Potatoes food dish")}`}
    ]
  }
];

export default function HomePage() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const scrollPositionRef = useRef<number | null>(null);

  const handleItemSelect = (item: MenuItem) => {
    const scrollableMain = document.querySelector('main.flex-grow.overflow-y-auto');
    if (scrollableMain) {
      scrollPositionRef.current = scrollableMain.scrollTop;
    } else {
      // Fallback if the specific selector isn't found.
      // This could lead to scrolling to top if selector fails.
      console.warn("Scrollable main element not found in handleItemSelect. Defaulting scroll to 0.");
      scrollPositionRef.current = 0; 
    }
    setSelectedItem(item);
  };

  const handleBackToMenu = () => {
    setSelectedItem(null);
    // Scroll restoration is handled by useEffect
  };

  useEffect(() => {
    if (selectedItem === null && typeof scrollPositionRef.current === 'number') {
      const scrollableMain = document.querySelector('main.flex-grow.overflow-y-auto');
      if (scrollableMain) {
        requestAnimationFrame(() => {
          if (typeof scrollPositionRef.current === 'number') {
             scrollableMain.scrollTop = scrollPositionRef.current;
          }
        });
      } else {
         console.warn("Scrollable main element not found in useEffect for scroll restoration.");
      }
      // Do not reset scrollPositionRef.current to null here.
      // It will be updated on the next item selection.
    }
  }, [selectedItem]);

  return (
    <div className="w-full"> {/* Main wrapper for HomePage content */}
      {!selectedItem ? (
        <>
          <HeaderOffers />
          {/* Container for menu content below HeaderOffers */}
          <div className="container mx-auto p-4 sm:p-6 md:p-8">
            <div className="my-8 text-center">
              <h1 className="text-4xl font-bold mb-4 text-foreground">Our Delicious Menu</h1>
              <p className="text-lg text-muted-foreground">
                Explore our wide range of dishes crafted with the freshest ingredients.
              </p>
            </div>
            {menuData.map((category) => (
              <section key={category.name} className="mb-12">
                <h2 className="text-3xl font-semibold mb-6 text-primary border-b-2 border-primary/50 pb-3">
                  {category.name}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      onClick={() => handleItemSelect(item)}
                      className="cursor-pointer group p-3 rounded-lg hover:bg-accent/10 dark:hover:bg-accent/20 transition-colors"
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-md font-semibold text-primary">
                          {item.price}
                        </p>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <SiteFooter /> {/* Conditionally render SiteFooter here */}
        </>
      ) : (
        <div className="container mx-auto p-4 sm:p-6 md:p-8">
          <Button onClick={handleBackToMenu} variant="ghost" className="mb-6">
            <ChevronLeft className="mr-2 h-5 w-5" /> Back to Menu
          </Button>
          <div className="max-w-2xl mx-auto">
            <FoodItemCard
              dishName={selectedItem.name}
              amount={selectedItem.price}
              imageUrl={selectedItem.imageUrl}
              imageHint={selectedItem.imageHint}
              description={selectedItem.description}
            />
            {selectedItem.imageSearchUrl && (
                <a
                  href={selectedItem.imageSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center text-sm text-blue-600 hover:underline dark:text-blue-400"
                >
                  Find image on Google <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              )}
          </div>
          {/* Footer is not rendered when an item is selected */}
        </div>
      )}
    </div>
  );
}
