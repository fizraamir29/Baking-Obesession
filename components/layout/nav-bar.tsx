import { Heart, Home, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavBarProps {
  className?: string;
}

export function NavBar({ className = "" }: NavBarProps) {
  return (
    <nav className={`bg-[#FED2C7] px-6 py-4 ${className}`}>
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2 text-[#6A1B1A] hover:text-[#FE724C] transition-colors"
        >
          <Home className="h-6 w-6" />
          <span className="text-sm hidden md:inline">Home</span>
        </Link>
        <Link
          href="/wishlist"
          className="flex items-center gap-2 text-[#6A1B1A] hover:text-[#FE724C] transition-colors"
        >
          <Heart className="h-6 w-6" />
          <span className="text-sm hidden md:inline">Wishlist</span>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 text-[#6A1B1A] hover:text-[#FE724C] transition-colors">
            <User className="h-6 w-6" />
            <span className="text-sm hidden md:inline">Profile</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href="/auth/login" className="w-full text-[#6A1B1A]">
                Login
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/auth/register" className="w-full text-[#6A1B1A]">
                Sign Up
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/profile" className="w-full text-[#6A1B1A]">
                My Profile
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link
          href="/cart"
          className="flex items-center gap-2 text-[#6A1B1A] hover:text-[#FE724C] transition-colors"
        >
          <ShoppingCart className="h-6 w-6" />
          <span className="text-sm hidden md:inline">Cart</span>
        </Link>
      </div>
    </nav>
  );
}
