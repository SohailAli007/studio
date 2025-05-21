
import { HeaderOffers } from "@/components/home/header-offers";
import { FoodItemCard } from "@/components/home/food-item-card";

const foodItems = [
  { id: '1', dishName: "Spicy Tomato Pasta", amount: "$12.99", imageUrl: "https://placehold.co/600x400.png", imageHint: "pasta tomato" },
  { id: '2', dishName: "Grilled Chicken Salad", amount: "$15.50", imageUrl: "https://placehold.co/600x400.png", imageHint: "chicken salad" },
  { id: '3', dishName: "Chocolate Lava Cake", amount: "$8.00", imageUrl: "https://placehold.co/600x400.png", imageHint: "chocolate cake" },
  { id: '4', dishName: "Margherita Pizza", amount: "$14.00", imageUrl: "https://placehold.co/600x400.png", imageHint: "pizza margherita" },
  { id: '5', dishName: "Classic Burger", amount: "$11.75", imageUrl: "https://placehold.co/600x400.png", imageHint: "burger fries" },
  { id: '6', dishName: "Sushi Platter", amount: "$22.00", imageUrl: "https://placehold.co/600x400.png", imageHint: "sushi platter" },
];

export default function HomePage() {
  return (
    <>
      <HeaderOffers />
      <main className="flex-grow container mx-auto p-4 sm:p-6 md:p-8">
        <h2 className="text-3xl font-bold my-8 text-center text-foreground">
          Our Delicious Menu
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {foodItems.map((item) => (
            <FoodItemCard
              key={item.id}
              dishName={item.dishName}
              amount={item.amount}
              imageUrl={item.imageUrl}
              imageHint={item.imageHint}
            />
          ))}
        </div>
      </main>
    </>
  );
}
