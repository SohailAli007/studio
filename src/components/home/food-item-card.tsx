
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from 'lucide-react';

interface FoodItemCardProps {
  dishName: string;
  amount: string;
  imageUrl: string;
  imageHint: string;
  description?: string; // Added optional description
}

export function FoodItemCard({ dishName, amount, imageUrl, imageHint, description }: FoodItemCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <CardHeader className="p-0">
        <div className="relative w-full h-56"> {/* Increased height for better image display */}
          <Image
            src={imageUrl}
            alt={dishName}
            data-ai-hint={imageHint}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-2xl mb-1">{dishName}</CardTitle>
        {description && ( /* Display description if provided */
          <p className="text-sm text-muted-foreground mb-2">{description}</p>
        )}
        <CardDescription className="text-xl font-semibold text-primary">{amount}</CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" variant="default">
          <ShoppingCart className="mr-2 h-5 w-5" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}

