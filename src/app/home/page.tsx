
"use client";

import React from 'react';
import Image from 'next/image';
import { Phone, Globe } from 'lucide-react';

interface MenuItem {
  name: string;
  price: string;
}

interface MenuCategoryData {
  name: string;
  items: MenuItem[];
}

const menuPageData: {
  title: string;
  restaurantName: string;
  columns: MenuCategoryData[][];
  footerContact: { phone: string; website: string };
  decorativeImages: { src: string; alt: string; hint: string; position: string }[];
} = {
  title: "Menu",
  restaurantName: "Borcelle Restaurant",
  columns: [
    // Left Column
    [
      {
        name: "Appetizers",
        items: [
          { name: "Garlic Bread", price: "$ 50" },
          { name: "Bruschetta", price: "$ 45" },
          { name: "Stuffed Mushrooms", price: "$ 48" },
          { name: "Shrimp Cocktail", price: "$ 52" },
          { name: "Caprese Salad", price: "$ 47" },
        ],
      },
      {
        name: "Soups and Salads",
        items: [
          { name: "Caesar Salad", price: "$ 50" },
          { name: "Minestrone Soup", price: "$ 45" },
          { name: "Greek Salad", price: "$ 48" },
          { name: "Lobster Bisque", price: "$ 52" },
          { name: "Spinach Salad", price: "$ 47" },
        ],
      },
      {
        name: "Entrees",
        items: [
          { name: "Grilled Salmon", price: "$ 50" },
          { name: "Filet Mignon", price: "$ 45" },
          { name: "Chicken Piccata", price: "$ 48" },
          { name: "Vegetable Stir-Fry", price: "$ 52" },
          { name: "Eggplant Parmesan", price: "$ 47" },
        ],
      },
    ],
    // Right Column
    [
      {
        name: "Pasta and Risotto",
        items: [
          { name: "Spaghetti Carbonara", price: "$ 50" },
          { name: "Fettuccine Alfredo", price: "$ 45" },
          { name: "Linguine with Clam Sauce", price: "$ 48" },
          { name: "Wild Mushroom Risotto", price: "$ 52" },
          { name: "Penne Arrabbiata", price: "$ 47" },
        ],
      },
      {
        name: "Desserts",
        items: [
          { name: "Tiramisu", price: "$ 50" },
          { name: "Chocolate Lava Cake", price: "$ 45" },
          { name: "Crème Brûlée", price: "$ 48" },
          { name: "Cheesecake", price: "$ 52" },
          { name: "Apple Pie", price: "$ 47" },
        ],
      },
      {
        name: "Beverages",
        items: [
          { name: "Soft drinks", price: "$ 50" }, // Assuming $50 is a typo and should be $5.00, but following image
          { name: "Juices", price: "$ 45" }, // Same assumption
          { name: "Iced Tea", price: "$ 48" },
          { name: "Hot Tea", price: "$ 52" },
          { name: "Coffee", price: "$ 47" },
        ],
      },
    ],
  ],
  footerContact: {
    phone: "+123-456-7890",
    website: "www.reallygreatsite.com",
  },
  decorativeImages: [
    { src: "https://placehold.co/300x200.png", alt: "Delicious food", hint: "gourmet food", position: "absolute top-0 left-0 -mt-4 -ml-4" },
    { src: "https://placehold.co/300x200.png", alt: "Tasty dish", hint: "restaurant dish", position: "absolute top-0 right-0 -mt-4 -mr-4" },
    { src: "https://placehold.co/300x200.png", alt: "Appetizing meal", hint: "fine dining", position: "absolute bottom-0 left-0 -mb-4 -ml-4" },
    { src: "https://placehold.co/300x200.png", alt: "Specialty cuisine", hint: "chef special", position: "absolute bottom-0 right-0 -mb-4 -mr-4" },
  ]
};

export default function HomePage() {
  return (
    <main className="flex-grow bg-menu-dark text-white p-4 md:p-8 relative overflow-hidden">
      {/* Decorative Images - simplified as corner images */}
      {menuPageData.decorativeImages.map((img, index) => (
        <div key={index} className={`hidden md:block ${img.position} opacity-30 w-48 h-32`}>
           <Image src={img.src} alt={img.alt} layout="fill" objectFit="cover" data-ai-hint={img.hint} className="rounded-lg"/>
        </div>
      ))}
      
      <div className="relative z-10 container mx-auto">
        <header className="text-center my-8 md:my-12">
          <h1 className="text-5xl md:text-7xl font-bold text-menu-gold tracking-wider">
            {menuPageData.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mt-2">
            {menuPageData.restaurantName}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {menuPageData.columns.map((column, colIndex) => (
            <div key={colIndex} className="space-y-8">
              {column.map((category) => (
                <section key={category.name}>
                  <h2 className="text-2xl font-semibold bg-menu-gold text-menu-dark py-2 px-4 rounded-t-md mb-4 text-center md:text-left">
                    {category.name}
                  </h2>
                  <ul className="space-y-3 bg-black/30 p-4 rounded-b-md">
                    {category.items.map((item) => (
                      <li key={item.name} className="flex justify-between border-b border-gray-700 py-2 last:border-b-0">
                        <span className="text-gray-200">{item.name}</span>
                        <span className="font-medium text-menu-gold">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          ))}
        </div>

        <footer className="text-center mt-12 md:mt-16 py-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-menu-gold">
            <div className="flex items-center space-x-2">
              <Phone size={20} />
              <span>{menuPageData.footerContact.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe size={20} />
              <a href={`http://${menuPageData.footerContact.website}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {menuPageData.footerContact.website}
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
