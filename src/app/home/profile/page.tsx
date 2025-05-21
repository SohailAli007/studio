
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Profile Information</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>Name:</strong> {user.name}</li>
                <li><strong>Email:</strong> {user.email}</li>
                <li><strong>Joined:</strong> January 1, 2023</li> {/* Placeholder */}
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="w-full">Edit Profile</Button>
              <Button variant="outline" className="w-full">Change Password</Button>
            </div>
              <Link href="/home" className="block text-center mt-6">
              <Button variant="link">Back to Home</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
