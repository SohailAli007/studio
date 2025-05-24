
"use client";

import React, { useState } from 'react';
import { HeaderOffers } from "@/components/home/header-offers";
import { FoodItemCard } from "@/components/home/food-item-card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';

interface FoodItem {
  id: string;
  dishName: string;
  amount: string;
  imageUrl: string;
  imageHint: string;
  description?: string; // Optional description for the card
}

interface MenuCategory {
  categoryName: string;
  items: FoodItem[];
}

const menuData: MenuCategory[] = [
  {
    categoryName: "Burgers",
    items: [
      { id: 'b1', dishName: "Classic Beef Burger", amount: "$11.75", imageUrl: "https://placehold.co/600x400.png", imageHint: "beef burger", description: "A juicy beef patty with fresh lettuce, tomato, and our special sauce." },
      { id: 'b2', dishName: "Spicy Chicken Burger", amount: "$12.50", imageUrl: "https://placehold.co/600x400.png", imageHint: "chicken burger", description: "Crispy chicken fillet with a spicy kick, cheese, and pickles." },
      { id: 'b3', dishName: "Veggie Delight Burger", amount: "$10.50", imageUrl: "https://placehold.co/600x400.png", imageHint: "veggie burger", description: "A delicious plant-based patty with all the classic toppings." },
    ]
  },
  {
    categoryName: "Pizzas",
    items: [
      { id: 'p1', dishName: "Margherita Pizza", amount: "$14.00", imageUrl: "https://placehold.co/600x400.png", imageHint: "pizza margherita", description: "Classic margherita with fresh mozzarella, tomatoes, and basil." },
      { id: 'p2', dishName: "Pepperoni Feast Pizza", amount: "$16.50", imageUrl: "https://placehold.co/600x400.png", imageHint: "pizza pepperoni", description: "Loaded with pepperoni and extra cheese." },
      { id: 'p3', dishName: "Veggie Supreme Pizza", amount: "$15.00", imageUrl: "https://placehold.co/600x400.png", imageHint: "pizza vegetable", description: "A garden of fresh vegetables on a cheesy crust." },
    ]
  },
  {
    categoryName: "Pastas",
    items: [
      { id: 'pa1', dishName: "Spicy Tomato Pasta", amount: "$12.99", imageUrl: "https://placehold.co/600x400.png", imageHint: "pasta tomato", description: "Penne pasta in a zesty arrabbiata sauce." },
      { id: 'pa2', dishName: "Creamy Carbonara", amount: "$14.50", imageUrl: "https://placehold.co/600x400.png", imageHint: "pasta carbonara", description: "Spaghetti with a rich and creamy egg, cheese, and pancetta sauce." },
      { id: 'pa3', dishName: "Pesto Perfection", amount: "$13.75", imageUrl: "https://placehold.co/600x400.png", imageHint: "pasta pesto", description: "Fusilli tossed in fresh basil pesto and cherry tomatoes." },
    ]
  },
  {
    categoryName: "Salads",
    items: [
      { id: 's1', dishName: "Grilled Chicken Salad", amount: "$15.50", imageUrl: "https://placehold.co/600x400.png", imageHint: "chicken salad", description: "Tender grilled chicken over mixed greens with a light vinaigrette." },
      { id: 's2', dishName: "Caesar Salad", amount: "$10.00", imageUrl: "https://placehold.co/600x400.png", imageHint: "caesar salad", description: "Crisp romaine lettuce, croutons, Parmesan cheese, and Caesar dressing." },
    ]
  },
  {
    categoryName: "Desserts",
    items: [
      { id: 'd1', dishName: "Chocolate Lava Cake", amount: "$8.00", imageUrl: "https://placehold.co/600x400.png", imageHint: "chocolate cake", description: "Warm chocolate cake with a gooey molten center, served with ice cream." },
      { id: 'd2', dishName: "New York Cheesecake", amount: "$7.50", imageUrl: "https://placehold.co/600x400.png", imageHint: "cheesecake slice", description: "Classic creamy cheesecake with a graham cracker crust." },
    ]
  },
];

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | null>(null);
  const [selectedItem, setSelectedItem] = useState<FoodItem | null>(null);

  const handleCategorySelect = (category: MenuCategory) => {
    setSelectedCategory(category);
    setSelectedItem(null); // Reset selected item when category changes
  };

  const handleItemSelect = (item: FoodItem) => {
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
    <>
      <HeaderOffers />
      <main className="flex-grow container mx-auto p-4 sm:p-6 md:p-8">
        <h2 className="text-3xl font-bold my-8 text-center text-foreground">
          Our Delicious Menu
        </h2>

        {selectedItem ? (
          // Displaying selected FoodItemCard
          <div className="flex flex-col items-center">
            <Button variant="outline" onClick={handleBackToItems} className="mb-6 self-start">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to {selectedCategory?.categoryName || 'Items'}
            </Button>
            <div className="w-full max-w-md">
              <FoodItemCard
                dishName={selectedItem.dishName}
                amount={selectedItem.amount}
                imageUrl={selectedItem.imageUrl}
                imageHint={selectedItem.imageHint}
                description={selectedItem.description}
              />
            </div>
          </div>
        ) : selectedCategory ? (
          // Displaying items of a selected category
          <div>
            <Button variant="outline" onClick={handleBackToCategories} className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Categories
            </Button>
            <h3 className="text-2xl font-semibold mb-6 text-center text-foreground">
              {selectedCategory.categoryName}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {selectedCategory.items.map((item) => (
                <Button
                  key={item.id}
                  variant="outline"
                  className="p-4 h-auto flex flex-col items-center justify-center text-center shadow hover:shadow-md"
                  onClick={() => handleItemSelect(item)}
                >
                  <div className="w-full h-32 mb-2 overflow-hidden rounded-md">
                     <img src={item.imageUrl} alt={item.dishName} data-ai-hint={item.imageHint} className="w-full h-full object-cover"/>
                  </div>
                  <span className="text-lg font-medium">{item.dishName}</span>
                  <span className="text-primary">{item.amount}</span>
                </Button>
              ))}
            </div>
          </div>
        ) : (
          // Displaying categories
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {menuData.map((category) => (
              <Button
                key={category.categoryName}
                variant="outline"
                className="p-6 h-32 text-xl font-semibold shadow hover:shadow-md"
                onClick={() => handleCategorySelect(category)}
              >
                {category.categoryName}
              </Button>
            ))}
          </div>
        )}
      </main>
    </>
  );
}

