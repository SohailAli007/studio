
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShoppingCart, Package, UserCog, KeyRound } from "lucide-react";

export default function ProfilePage() {
  // Placeholder user data
  const user = {
    name: "Alex Doe",
    email: "alex.doe@example.com",
    initials: "AD",
    avatarUrl: "https://placehold.co/100x100.png" 
  };

  return (
    <main className="flex-grow container mx-auto p-4 sm:p-6 md:p-8">
      <div className="flex justify-center py-12">
        <Card className="w-full max-w-lg shadow-lg">
          <CardHeader className="items-center text-center">
            <Avatar className="w-24 h-24 mb-4">
              <AvatarImage src={user.avatarUrl} alt={user.name} data-ai-hint="person portrait"/>
              <AvatarFallback>{user.initials}</AvatarFallback>
            </Avatar>
            <CardTitle className="text-2xl">{user.name}</CardTitle>
            <p className="text-muted-foreground">{user.email}</p>
          </CardHeader>
          <CardContent className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Profile Information</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>Name:</strong> {user.name}</li>
                <li><strong>Email:</strong> {user.email}</li>
                <li><strong>Joined:</strong> January 1, 2023</li> {/* Placeholder */}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">Manage Your Account</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button asChild className="w-full" variant="outline">
                  <Link href="/home/cart" className="flex items-center justify-center">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    My Cart
                  </Link>
                </Button>
                <Button asChild className="w-full" variant="outline">
                  <Link href="/home/orders" className="flex items-center justify-center">
                    <Package className="mr-2 h-5 w-5" />
                    My Orders
                  </Link>
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">Profile Settings</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button className="w-full">
                  <UserCog className="mr-2 h-5 w-5" />
                  Edit Profile
                </Button>
                <Button variant="outline" className="w-full">
                  <KeyRound className="mr-2 h-5 w-5" />
                  Change Password
                </Button>
              </div>
            </div>
            
            <Link href="/home" className="block text-center pt-2">
              <Button variant="link">Back to Menu</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
