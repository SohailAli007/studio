
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
    name: "Burgers",
    items: [
      { name: "Classic Beef Burger", price: "$12.99", imageUrl: "https://placehold.co/300x200.png", imageHint: "beef burger", description: "Juicy beef patty with fresh lettuce, tomato, and our special sauce." },
      { name: "Chicken Burger", price: "$11.99", imageUrl: "https://placehold.co/300x200.png", imageHint: "chicken burger", description: "Grilled chicken breast with a tangy mayo and crispy pickles." },
      { name: "Veggie Burger", price: "$10.99", imageUrl: "https://placehold.co/300x200.png", imageHint: "veggie burger", description: "A delicious plant-based patty packed with flavor." },
      { name: "Spicy Jalapeño Burger", price: "$13.50", imageUrl: "https://placehold.co/300x200.png", imageHint: "spicy burger", description: "For those who like it hot, with spicy jalapeños and pepper jack cheese." },
      { name: "Mushroom Swiss Burger", price: "$13.75", imageUrl: "https://placehold.co/300x200.png", imageHint: "mushroom burger", description: "Sautéed mushrooms and melted Swiss cheese on a beef patty." },
    ],
  },
  {
    name: "Pizzas",
    items: [
      { name: "Margherita Pizza", price: "$14.99", imageUrl: "https://placehold.co/300x200.png", imageHint: "margherita pizza", description: "Classic pizza with fresh mozzarella, tomatoes, and basil." },
      { name: "Pepperoni Pizza", price: "$16.99", imageUrl: "https://placehold.co/300x200.png", imageHint: "pepperoni pizza", description: "A crowd favorite with generous pepperoni slices." },
      { name: "BBQ Chicken Pizza", price: "$17.99", imageUrl: "https://placehold.co/300x200.png", imageHint: "bbq pizza", description: "Tangy BBQ sauce, chicken, and red onions." },
      { name: "Veggie Supreme Pizza", price: "$15.99", imageUrl: "https://placehold.co/300x200.png", imageHint: "veggie pizza", description: "Loaded with a variety of fresh vegetables." },
      { name: "Hawaiian Pizza", price: "$16.50", imageUrl: "https://placehold.co/300x200.png", imageHint: "hawaiian pizza", description: "A controversial classic with ham and pineapple." },
    ],
  },
  {
    name: "Noodles",
    items: [
      { name: "Chicken Pad Thai", price: "$13.99", imageUrl: "https://placehold.co/300x200.png", imageHint: "pad thai", description: "Stir-fried rice noodles with chicken, peanuts, and tamarind sauce." },
      { name: "Beef Chow Mein", price: "$14.50", imageUrl: "https://placehold.co/300x200.png", imageHint: "chow mein", description: "Classic Chinese stir-fried noodles with beef and vegetables." },
      { name: "Spicy Ramen", price: "$12.99", imageUrl: "https://placehold.co/300x200.png", imageHint: "ramen noodles", description: "Rich and spicy broth with noodles, pork, and a soft-boiled egg." },
      { name: "Vegetable Lo Mein", price: "$11.99", imageUrl: "https://placehold.co/300x200.png", imageHint: "lo mein", description: "Stir-fried egg noodles with mixed vegetables in a savory sauce." },
      { name: "Shrimp Scampi Pasta", price: "$15.99", imageUrl: "https://placehold.co/300x200.png", imageHint: "shrimp pasta", description: "Garlic shrimp tossed with linguine in a white wine butter sauce." },
    ],
  },
  {
    name: "Desserts",
    items: [
      { name: "Chocolate Lava Cake", price: "$8.99", imageUrl: "https://placehold.co/300x200.png", imageHint: "lava cake", description: "Warm chocolate cake with a molten chocolate center." },
      { name: "New York Cheesecake", price: "$7.99", imageUrl: "https://placehold.co/300x200.png", imageHint: "cheesecake slice", description: "Rich and creamy classic cheesecake with a graham cracker crust." },
      { name: "Apple Pie", price: "$6.99", imageUrl: "https://placehold.co/300x200.png", imageHint: "apple pie", description: "Warm apple pie with a flaky crust, served with a scoop of vanilla ice cream." },
      { name: "Tiramisu", price: "$8.50", imageUrl: "https://placehold.co/300x200.png", imageHint: "tiramisu dessert", description: "Italian classic with coffee-soaked ladyfingers and mascarpone cream." },
      { name: "Ice Cream Sundae", price: "$7.50", imageUrl: "https://placehold.co/300x200.png", imageHint: "ice cream", description: "Your choice of ice cream with hot fudge, whipped cream, and a cherry." },
    ],
  },
  {
    name: "Beverages",
    items: [
      { name: "Coca-Cola", price: "$2.99", imageUrl: "https://placehold.co/300x200.png", imageHint: "soda can", description: "Classic Coca-Cola." },
      { name: "Fresh Lemonade", price: "$3.50", imageUrl: "https://placehold.co/300x200.png", imageHint: "lemonade drink", description: "Homemade fresh lemonade." },
      { name: "Iced Tea", price: "$3.25", imageUrl: "https://placehold.co/300x200.png", imageHint: "iced tea", description: "Refreshing iced tea, sweetened or unsweetened." },
      { name: "Orange Juice", price: "$3.75", imageUrl: "https://placehold.co/300x200.png", imageHint: "orange juice", description: "Freshly squeezed orange juice." },
      { name: "Craft Beer", price: "$6.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "beer glass", description: "Selection of local craft beers." },
    ],
  },
  {
    name: "Sides",
    items: [
      { name: "French Fries", price: "$4.50", imageUrl: "https://placehold.co/300x200.png", imageHint: "french fries", description: "Crispy golden french fries." },
      { name: "Onion Rings", price: "$5.50", imageUrl: "https://placehold.co/300x200.png", imageHint: "onion rings", description: "Battered and fried onion rings." },
      { name: "Side Salad", price: "$4.00", imageUrl: "https://placehold.co/300x200.png", imageHint: "salad bowl", description: "Fresh garden salad with your choice of dressing." },
      { name: "Garlic Bread", price: "$3.50", imageUrl: "https://placehold.co/300x200.png", imageHint: "garlic bread", description: "Toasted bread with garlic butter." },
      { name: "Steamed Vegetables", price: "$4.75", imageUrl: "https://placehold.co/300x200.png", imageHint: "steamed vegetables", description: "A healthy mix of seasonal steamed vegetables." },
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
    <main className="flex-grow container mx-auto p-4 sm:p-6 md:p-8">
      {!selectedCategory && !selectedItem && (
        <>
          <HeaderOffers />
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
        </>
      )}

      {selectedCategory && !selectedItem && (
        <>
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
        </>
      )}

      {selectedItem && selectedCategory && (
        <>
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
        </>
      )}
    </main>
  );
}
