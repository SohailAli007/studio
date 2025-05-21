
import { SiteHeader } from "@/components/home/site-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CartPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-grow container mx-auto p-4 sm:p-6 md:p-8">
        <div className="flex flex-col items-center justify-center py-12">
          <h1 className="text-3xl font-bold mb-6 text-foreground">Your Shopping Cart</h1>
          <p className="text-muted-foreground mb-8">Your cart is currently empty.</p>
          <Link href="/home">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      </main>
      <footer className="py-8 text-center text-muted-foreground border-t">
        © {new Date().getFullYear()} Gastronomic Getaway. All rights reserved.
      </footer>
    </div>
  );
}
