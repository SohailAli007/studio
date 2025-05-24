
"use client";

import React, { useState } from 'react';
import { HeaderOffers } from "@/components/home/header-offers";
import { FoodItemCard } from "@/components/home/food-item-card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image'; // Added for item previews

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
      { id: 'b4', dishName: "Double Bacon Cheeseburger", amount: "$14.99", imageUrl: "https://placehold.co/600x400.png", imageHint: "bacon cheeseburger", description: "Two beef patties, crispy bacon, melted cheese, lettuce, and tomato." },
      { id: 'b5', dishName: "Mushroom Swiss Burger", amount: "$13.25", imageUrl: "https://placehold.co/600x400.png", imageHint: "mushroom burger", description: "Beef patty topped with sautéed mushrooms and melted Swiss cheese." },
    ]
  },
  {
    categoryName: "Pizzas",
    items: [
      { id: 'p1', dishName: "Margherita Pizza", amount: "$14.00", imageUrl: "https://placehold.co/600x400.png", imageHint: "pizza margherita", description: "Classic margherita with fresh mozzarella, tomatoes, and basil." },
      { id: 'p2', dishName: "Pepperoni Feast Pizza", amount: "$16.50", imageUrl: "https://placehold.co/600x400.png", imageHint: "pizza pepperoni", description: "Loaded with pepperoni and extra cheese." },
      { id: 'p3', dishName: "Veggie Supreme Pizza", amount: "$15.00", imageUrl: "https://placehold.co/600x400.png", imageHint: "pizza vegetable", description: "A garden of fresh vegetables on a cheesy crust." },
      { id: 'p4', dishName: "Hawaiian Pizza", amount: "$15.75", imageUrl: "https://placehold.co/600x400.png", imageHint: "pizza hawaiian", description: "A controversial classic: ham, pineapple, and mozzarella." },
      { id: 'p5', dishName: "BBQ Chicken Pizza", amount: "$17.00", imageUrl: "https://placehold.co/600x400.png", imageHint: "pizza bbq chicken", description: "Grilled chicken, red onions, cilantro, and BBQ sauce drizzle." },
    ]
  },
  {
    categoryName: "Pastas",
    items: [
      { id: 'pa1', dishName: "Spicy Tomato Pasta", amount: "$12.99", imageUrl: "https://placehold.co/600x400.png", imageHint: "pasta tomato", description: "Penne pasta in a zesty arrabbiata sauce." },
      { id: 'pa2', dishName: "Creamy Carbonara", amount: "$14.50", imageUrl: "https://placehold.co/600x400.png", imageHint: "pasta carbonara", description: "Spaghetti with a rich and creamy egg, cheese, and pancetta sauce." },
      { id: 'pa3', dishName: "Pesto Perfection", amount: "$13.75", imageUrl: "https://placehold.co/600x400.png", imageHint: "pasta pesto", description: "Fusilli tossed in fresh basil pesto and cherry tomatoes." },
      { id: 'pa4', dishName: "Lasagna Classico", amount: "$15.25", imageUrl: "https://placehold.co/600x400.png", imageHint: "lasagna slice", description: "Layers of pasta, rich meat sauce, béchamel, and mozzarella, baked to perfection." },
      { id: 'pa5', dishName: "Seafood Linguine", amount: "$18.00", imageUrl: "https://placehold.co/600x400.png", imageHint: "seafood pasta", description: "Linguine with shrimp, mussels, and calamari in a light tomato garlic sauce." },
    ]
  },
  {
    categoryName: "Salads",
    items: [
      { id: 's1', dishName: "Grilled Chicken Salad", amount: "$15.50", imageUrl: "https://placehold.co/600x400.png", imageHint: "chicken salad", description: "Tender grilled chicken over mixed greens with a light vinaigrette." },
      { id: 's2', dishName: "Caesar Salad", amount: "$10.00", imageUrl: "https://placehold.co/600x400.png", imageHint: "caesar salad", description: "Crisp romaine lettuce, croutons, Parmesan cheese, and Caesar dressing." },
      { id: 's3', dishName: "Greek Salad", amount: "$12.00", imageUrl: "https://placehold.co/600x400.png", imageHint: "greek salad", description: "Tomatoes, cucumbers, olives, feta cheese, and a lemon-herb dressing." },
      { id: 's4', dishName: "Quinoa Salad", amount: "$13.50", imageUrl: "https://placehold.co/600x400.png", imageHint: "quinoa salad", description: "Nutrient-packed quinoa with mixed vegetables, chickpeas, and a tahini dressing." },
    ]
  },
  {
    categoryName: "Sides",
    items: [
      { id: 'sd1', dishName: "French Fries", amount: "$4.50", imageUrl: "https://placehold.co/600x400.png", imageHint: "french fries", description: "Crispy golden french fries, lightly salted." },
      { id: 'sd2', dishName: "Onion Rings", amount: "$5.50", imageUrl: "https://placehold.co/600x400.png", imageHint: "onion rings", description: "Battered and fried onion rings, served with a dipping sauce." },
      { id: 'sd3', dishName: "Garlic Bread", amount: "$4.00", imageUrl: "https://placehold.co/600x400.png", imageHint: "garlic bread", description: "Toasted bread with garlic butter and herbs." },
      { id: 'sd4', dishName: "Side Salad", amount: "$5.00", imageUrl: "https://placehold.co/600x400.png", imageHint: "side salad", description: "A smaller portion of mixed greens with your choice of dressing." },
    ]
  },
  {
    categoryName: "Desserts",
    items: [
      { id: 'd1', dishName: "Chocolate Lava Cake", amount: "$8.00", imageUrl: "https://placehold.co/600x400.png", imageHint: "chocolate cake", description: "Warm chocolate cake with a gooey molten center, served with ice cream." },
      { id: 'd2', dishName: "New York Cheesecake", amount: "$7.50", imageUrl: "https://placehold.co/600x400.png", imageHint: "cheesecake slice", description: "Classic creamy cheesecake with a graham cracker crust." },
      { id: 'd3', dishName: "Apple Pie", amount: "$7.00", imageUrl: "https://placehold.co/600x400.png", imageHint: "apple pie", description: "Warm apple pie with a flaky crust, served with vanilla ice cream." },
      { id: 'd4', dishName: "Strawberry Shortcake", amount: "$8.50", imageUrl: "https://placehold.co/600x400.png", imageHint: "strawberry shortcake", description: "Layers of fluffy cake, fresh strawberries, and whipped cream." },
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
                  <div className="w-full h-32 mb-2 overflow-hidden rounded-md relative">
                     <Image src={item.imageUrl} alt={item.dishName} layout="fill" objectFit="cover" data-ai-hint={item.imageHint} className="rounded-md"/>
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


    