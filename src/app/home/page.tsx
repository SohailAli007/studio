
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FoodItemCard } from '@/components/home/food-item-card';
import { HeaderOffers } from '@/components/home/header-offers';
import { ChevronLeft } from 'lucide-react';

interface MenuItem {
  name: string;
  price: string;
  imageUrl: string;
  imageHint: string;
  description: string;
}

interface MenuCategory {
  name: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    name: "Appetizers",
    items: [
      { name: "Garlic Bread", price: "$50.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "garlic bread", description: "Classic garlic bread with a crispy crust and rich butter." },
      { name: "Bruschetta", price: "$45.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "bruschetta tomato", description: "Toasted bread topped with fresh tomatoes, garlic, basil, and olive oil." },
      { name: "Stuffed Mushrooms", price: "$48.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "stuffed mushrooms", description: "Mushrooms filled with a savory blend of herbs, breadcrumbs, and cheese." },
      { name: "Shrimp Cocktail", price: "$52.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "shrimp cocktail", description: "Chilled jumbo shrimp served with a tangy cocktail sauce." },
      { name: "Caprese Skewers", price: "$47.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "caprese skewers", description: "Cherry tomatoes, fresh mozzarella, and basil drizzled with balsamic glaze." },
      { name: "Spinach Artichoke Dip", price: "$55.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "artichoke dip", description: "Creamy spinach and artichoke dip served with tortilla chips or bread."}
    ],
  },
  {
    name: "Soups and Salads",
    items: [
      { name: "Caesar Salad", price: "$50.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "caesar salad", description: "Crisp romaine lettuce, Parmesan cheese, croutons, and Caesar dressing." },
      { name: "Minestrone Soup", price: "$45.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "minestrone soup", description: "A hearty Italian vegetable soup with pasta and beans." },
      { name: "Greek Salad", price: "$48.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "greek salad", description: "Tomatoes, cucumbers, olives, feta cheese, and a light vinaigrette." },
      { name: "Lobster Bisque", price: "$52.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "lobster bisque", description: "A creamy and rich soup made with fresh lobster stock and meat." },
      { name: "Asian Chicken Salad", price: "$53.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "asian salad", description: "Grilled chicken, mixed greens, mandarin oranges, and a sesame ginger dressing." },
      { name: "Tomato Basil Soup", price: "$46.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "tomato soup", description: "Creamy tomato soup infused with fresh basil."}
    ],
  },
  {
    name: "Entrees",
    items: [
      { name: "Grilled Salmon", price: "$50.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "grilled salmon", description: "Perfectly grilled salmon fillet served with asparagus and lemon butter sauce." },
      { name: "Filet Mignon", price: "$45.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "filet mignon", description: "A tender and juicy cut of beef, cooked to your liking, with mashed potatoes." },
      { name: "Chicken Piccata", price: "$48.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "chicken piccata", description: "Sautéed chicken breast with a lemon butter and caper sauce, served over pasta." },
      { name: "Vegetable Stir-Fry", price: "$52.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "vegetable stirfry", description: "A medley of fresh vegetables stir-fried in a savory sauce with tofu or chicken." },
      { name: "Lamb Chops", price: "$58.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "lamb chops", description: "Grilled lamb chops with a mint glaze, served with roasted vegetables."},
      { name: "Beef Stroganoff", price: "$54.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "beef stroganoff", description: "Tender beef strips in a creamy mushroom sauce, served over egg noodles."}
    ],
  },
  {
    name: "Pasta and Risotto",
    items: [
      { name: "Spaghetti Carbonara", price: "$50.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "spaghetti carbonara", description: "Spaghetti with a creamy egg sauce, pancetta, Pecorino Romano, and black pepper." },
      { name: "Fettuccine Alfredo", price: "$45.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "fettuccine alfredo", description: "Fettuccine pasta tossed in a rich and creamy Alfredo sauce with Parmesan cheese." },
      { name: "Linguine with Clam Sauce", price: "$48.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "linguine clams", description: "Linguine pasta with a flavorful white wine and garlic clam sauce." },
      { name: "Wild Mushroom Risotto", price: "$52.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "mushroom risotto", description: "Creamy Arborio rice risotto with a variety of wild mushrooms and Parmesan." },
      { name: "Penne alla Vodka", price: "$49.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "penne vodka", description: "Penne pasta in a creamy tomato and vodka sauce." },
      { name: "Lasagna Bolognese", price: "$53.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "lasagna slice", description: "Layers of pasta, rich meat sauce, béchamel, and cheese, baked to perfection."}
    ],
  },
  {
    name: "Desserts",
    items: [
      { name: "Tiramisu", price: "$50.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "tiramisu slice", description: "Classic Italian coffee-flavored dessert with ladyfingers, mascarpone, and cocoa." },
      { name: "Chocolate Lava Cake", price: "$45.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "lava cake", description: "Warm chocolate cake with a molten chocolate center, served with vanilla ice cream." },
      { name: "Crème Brûlée", price: "$48.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "creme brulee", description: "Rich custard base topped with a layer of hardened caramelized sugar." },
      { name: "New York Cheesecake", price: "$52.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "cheesecake slice", description: "Creamy New York style cheesecake with a graham cracker crust and berry coulis." },
      { name: "Apple Crumble", price: "$47.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "apple crumble", description: "Warm spiced apples topped with a buttery crumble, served with caramel sauce." },
      { name: "Panna Cotta", price: "$46.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "panna cotta", description: "Italian cooked cream dessert, often flavored with vanilla and served with fruit."}
    ],
  },
  {
    name: "Beverages",
    items: [
      { name: "Coca-Cola", price: "$10.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "coke can", description: "Classic Coca-Cola, served chilled." },
      { name: "Orange Juice", price: "$15.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "orange juice", description: "Freshly squeezed orange juice." },
      { name: "Iced Lemon Tea", price: "$12.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "iced tea", description: "Refreshing iced tea with a hint of lemon." },
      { name: "Espresso", price: "$18.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "espresso shot", description: "Strong and aromatic Italian espresso." },
      { name: "Sparkling Water", price: "$8.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "sparkling water", description: "Chilled sparkling mineral water."},
      { name: "Red Wine (Glass)", price: "$25.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "red wine", description: "A glass of our house red wine selection."}
    ],
  },
  {
    name: "Sides",
    items: [
      { name: "French Fries", price: "$15.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "french fries", description: "Crispy golden French fries, lightly salted." },
      { name: "Onion Rings", price: "$18.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "onion rings", description: "Battered and deep-fried onion rings." },
      { name: "Side Salad", price: "$20.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "garden salad", description: "Mixed greens with cherry tomatoes, cucumber, and choice of dressing." },
      { name: "Steamed Vegetables", price: "$22.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "steamed vegetables", description: "A healthy mix of seasonal steamed vegetables." },
      { name: "Garlic Mashed Potatoes", price: "$20.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "mashed potatoes", description: "Creamy mashed potatoes infused with roasted garlic."}
    ]
  }
];

export default function HomePage() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const handleItemSelect = (item: MenuItem) => {
    setSelectedItem(item);
  };

  const handleBackToMenu = () => {
    setSelectedItem(null);
  };

  return (
    <main className="flex-grow">
      {!selectedItem ? (
        <>
          <HeaderOffers />
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
          </div>
        </div>
      )}
    </main>
  );
}
