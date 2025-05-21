
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const DISH_EMOJIS = ['🍕', '🍔', '🍟', '🍩', '🍰', '🍦', '🍜', '🍣', '🌮', '🥗', '🍝', '🍲', '🎂', '🥐', '🥞'];
const NUM_DISHES = 20;

interface Dish {
  id: number;
  emoji: string;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
}

const FloatingDishesBackground: React.FC = () => {
  const [dishes, setDishes] = useState<Dish[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const generateDish = (id: number): Dish => {
      return {
        id,
        emoji: DISH_EMOJIS[Math.floor(Math.random() * DISH_EMOJIS.length)],
        x: Math.random() * 100, // vw
        y: Math.random() * 100, // vh
        size: Math.random() * 40 + 35, // px (Increased size: 35px to 75px)
        speedX: (Math.random() - 0.5) * 0.1,
        speedY: (Math.random() - 0.5) * 0.1,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() * 0.1) + 0.15, // Ensures clockwise rotation, speed between 0.15 and 0.25 deg/frame
      };
    };

    const initialDishes = Array.from({ length: NUM_DISHES }, (_, i) => generateDish(i));
    setDishes(initialDishes);
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      setDishes((prevDishes) =>
        prevDishes.map((dish) => {
          let newX = dish.x + dish.speedX;
          let newY = dish.y + dish.speedY;
          let newSpeedX = dish.speedX;
          let newSpeedY = dish.speedY;

          if (newX < -5 || newX > 105) newSpeedX *= -1; // Reverse direction when out of viewport width + buffer
          if (newY < -5 || newY > 105) newSpeedY *= -1; // Reverse direction when out of viewport height + buffer
          
          newX = Math.max(-5, Math.min(105, newX + newSpeedX));
          newY = Math.max(-5, Math.min(105, newY + newSpeedY));


          return {
            ...dish,
            x: newX,
            y: newY,
            speedX: newSpeedX,
            speedY: newSpeedY,
            rotation: (dish.rotation + dish.rotationSpeed) % 360, // Keep rotation within 0-360 for sanity, though CSS handles overflow
          };
        })
      );
      animationFrameId = requestAnimationFrame(animate);
    };

    if (dishes.length > 0) {
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [dishes.length]); // Re-run if dishes are initialized

  return (
    <div
      ref={containerRef}
      className={cn(
        "fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-background via-[hsl(200,30%,92%)] to-[hsl(200,30%,89%)]"
      )}
      aria-hidden="true"
    >
      {dishes.map((dish) => (
        <div
          key={dish.id}
          className="absolute"
          style={{
            left: `${dish.x}vw`,
            top: `${dish.y}vh`,
            fontSize: `${dish.size}px`,
            transform: `translate(-50%, -50%) rotate(${dish.rotation}deg)`,
            transition: 'left 0.1s linear, top 0.1s linear', // Smoother transition for movement
          }}
        >
          {dish.emoji}
        </div>
      ))}
    </div>
  );
};

export default FloatingDishesBackground;
