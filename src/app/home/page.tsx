
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FoodItemCard } from '@/components/home/food-item-card';
import { HeaderOffers } from '@/components/home/header-offers';
import { ChevronLeft } from 'lucide-react';
import { Card } from "@/components/ui/card";


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
      { name: "Garlic Bread", price: "$50.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "garlic bread", description: "Classic garlic bread with a crispy crust." },
      { name: "Bruschetta", price: "$45.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "bruschetta", description: "Toasted bread topped with fresh tomatoes and basil." },
      { name: "Stuffed Mushrooms", price: "$48.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "stuffed mushrooms", description: "Mushrooms filled with a savory stuffing." },
      { name: "Shrimp Cocktail", price: "$52.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "shrimp cocktail", description: "Chilled shrimp served with a tangy cocktail sauce." },
      { name: "Caprese Salad", price: "$47.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "caprese salad", description: "Fresh mozzarella, tomatoes, and basil drizzled with olive oil." },
    ],
  },
  {
    name: "Soups and Salads",
    items: [
      { name: "Caesar Salad", price: "$50.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "caesar salad", description: "Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan." },
      { name: "Minestrone Soup", price: "$45.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "minestrone soup", description: "A hearty Italian vegetable soup." },
      { name: "Greek Salad", price: "$48.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "greek salad", description: "Tomatoes, cucumbers, olives, feta cheese, and a light vinaigrette." },
      { name: "Lobster Bisque", price: "$52.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "lobster bisque", description: "A creamy and rich soup made with lobster." },
      { name: "Spinach Salad", price: "$47.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "spinach salad", description: "Fresh spinach with bacon, eggs, and a warm dressing." },
    ],
  },
  {
    name: "Entrees",
    items: [
      { name: "Grilled Salmon", price: "$50.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "grilled salmon", description: "Perfectly grilled salmon fillet served with lemon." },
      { name: "Filet Mignon", price: "$45.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "filet mignon", description: "A tender and juicy cut of beef, cooked to your liking." },
      { name: "Chicken Piccata", price: "$48.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "chicken piccata", description: "Sautéed chicken breast with a lemon butter and caper sauce." },
      { name: "Vegetable Stir-Fry", price: "$52.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "vegetable stirfry", description: "A medley of fresh vegetables stir-fried in a savory sauce." },
      { name: "Eggplant Parmesan", price: "$47.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "eggplant parmesan", description: "Breaded eggplant slices layered with marinara sauce and cheese." },
    ],
  },
  {
    name: "Pasta and Risotto",
    items: [
      { name: "Spaghetti Carbonara", price: "$50.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "spaghetti carbonara", description: "Spaghetti with a creamy egg sauce, pancetta, and Parmesan." },
      { name: "Fettuccine Alfredo", price: "$45.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "fettuccine alfredo", description: "Fettuccine pasta tossed in a rich Alfredo sauce." },
      { name: "Linguine with Clam Sauce", price: "$48.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "linguine clams", description: "Linguine pasta with a flavorful clam sauce." },
      { name: "Wild Mushroom Risotto", price: "$52.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "mushroom risotto", description: "Creamy risotto with a variety of wild mushrooms." },
      { name: "Penne Arrabbiata", price: "$47.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "penne arrabbiata", description: "Penne pasta in a spicy tomato sauce." },
    ],
  },
  {
    name: "Desserts",
    items: [
      { name: "Tiramisu", price: "$50.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "tiramisu dessert", description: "Classic Italian coffee-flavored dessert." },
      { name: "Chocolate Lava Cake", price: "$45.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "lava cake", description: "Warm chocolate cake with a molten chocolate center." },
      { name: "Crème Brûlée", price: "$48.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "creme brulee", description: "Rich custard base topped with a layer of hardened caramelized sugar." },
      { name: "Cheesecake", price: "$52.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "cheesecake slice", description: "Creamy New York style cheesecake with a graham cracker crust." },
      { name: "Apple Pie", price: "$47.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "apple pie", description: "Warm apple pie with a flaky crust, perfect with ice cream." },
    ],
  },
  {
    name: "Beverages",
    items: [
      { name: "Soft drinks", price: "$50.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "soda can", description: "Assorted soft drinks available." },
      { name: "Juices", price: "$45.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "juice glass", description: "Selection of fresh fruit juices." },
      { name: "Iced Tea", price: "$48.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "iced tea", description: "Refreshing iced tea, sweetened or unsweetened." },
      { name: "Hot Tea", price: "$52.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "tea cup", description: "Variety of hot teas." },
      { name: "Coffee", price: "$47.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "coffee cup", description: "Freshly brewed coffee." },
    ],
  }
];

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | null>(null);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const handleCategorySelect = (category: MenuCategory) => {
    setSelectedCategory(category);
    setSelectedItem(null); // Reset selected item when category changes
  };

  const handleItemSelect = (item: MenuItem) => {
    setSelectedItem(item);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setSelectedItem(null);
  };

  const handleBackToItems = () => {
    setSelectedItem(null);
  };

  return (
    <main className="flex-grow"> {/* Removed container classes from here */}
      {!selectedCategory && !selectedItem && (
        <>
          <HeaderOffers />
          {/* Added a new div with container classes for the content below HeaderOffers */}
          <div className="container mx-auto p-4 sm:p-6 md:p-8">
            <div className="my-8 text-center">
              <h1 className="text-4xl font-bold mb-4 text-foreground">Our Delicious Menu</h1>
              <p className="text-lg text-muted-foreground">Explore our wide range of dishes crafted with the freshest ingredients.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuData.map((category) => (
                <Button
                  key={category.name}
                  onClick={() => handleCategorySelect(category)}
                  variant="outline"
                  className="h-20 text-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </>
      )}

      {selectedCategory && !selectedItem && (
         // Added a new div with container classes for this view
        <div className="container mx-auto p-4 sm:p-6 md:p-8">
          <Button onClick={handleBackToCategories} variant="ghost" className="mb-6">
            <ChevronLeft className="mr-2 h-5 w-5" /> Back to Categories
          </Button>
          <h2 className="text-3xl font-bold mb-6 text-center text-foreground">{selectedCategory.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {selectedCategory.items.map((item) => (
              <Card
                key={item.name}
                onClick={() => handleItemSelect(item)}
                className="cursor-pointer hover:shadow-xl transition-shadow overflow-hidden group"
              >
                <div className="relative w-full h-40">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    data-ai-hint={item.imageHint}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1 text-foreground">{item.name}</h3>
                  <p className="text-sm text-muted-foreground truncate group-hover:whitespace-normal group-hover:overflow-visible">{item.description}</p>
                  <p className="text-md font-bold text-primary mt-2">{item.price}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {selectedItem && selectedCategory && (
        // Added a new div with container classes for this view
        <div className="container mx-auto p-4 sm:p-6 md:p-8">
          <Button onClick={handleBackToItems} variant="ghost" className="mb-6">
            <ChevronLeft className="mr-2 h-5 w-5" /> Back to {selectedCategory.name}
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
