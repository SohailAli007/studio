
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
// Removed Card, CardContent imports as they are not used
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Offer {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
}

const offersData: Offer[] = [
  { id: '1', title: '20% Off All Pizzas!', description: 'Use code PIZZA20 at checkout. Limited time offer.', imageUrl: 'https://placehold.co/1200x400.png', imageHint: 'pizza food' },
  { id: '2', title: 'Weekend Special', description: 'Free Appetizer with any two main courses. Every Saturday & Sunday.', imageUrl: 'https://placehold.co/1200x400.png', imageHint: 'appetizer meal' },
  { id: '3', title: 'Happy Hour Deals', description: '5-7 PM Daily: Buy 1 Get 1 Free on select drinks!', imageUrl: 'https://placehold.co/1200x400.png', imageHint: 'drinks cocktails' },
];

export function HeaderOffers() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === offersData.length - 1 ? 0 : prevIndex + 1));
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? offersData.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, [nextSlide]);

  if (offersData.length === 0) {
    return null;
  }

  // const currentOffer = offersData[currentIndex]; // Not strictly needed if not used elsewhere

  return (
    <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden group"> {/* Increased height */}
      <div
        className="w-full h-full flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {offersData.map((offer) => (
          <div key={offer.id} className="w-full h-full flex-shrink-0 relative">
            <Image
              src={offer.imageUrl}
              alt={offer.title}
              data-ai-hint={offer.imageHint}
              layout="fill"
              objectFit="cover"
              priority={offer.id === offersData[0].id} // Prioritize first image
              className="brightness-75"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 p-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 shadow-md">{offer.title}</h2>
              <p className="text-lg md:text-xl text-gray-200 shadow-sm">{offer.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 opacity-50 group-hover:opacity-100 transition-opacity rounded-full bg-background/70 hover:bg-background"
        onClick={prevSlide}
        aria-label="Previous offer"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 opacity-50 group-hover:opacity-100 transition-opacity rounded-full bg-background/70 hover:bg-background"
        onClick={nextSlide}
        aria-label="Next offer"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {offersData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to offer ${index + 1}`}
            className={cn(
              'h-2 w-2 rounded-full transition-all',
              currentIndex === index ? 'bg-primary w-4' : 'bg-gray-300 hover:bg-gray-400'
            )}
          />
        ))}
      </div>
    </section>
  );
}
