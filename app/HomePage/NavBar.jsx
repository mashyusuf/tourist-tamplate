
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Container from "../componenets/container/Container";
import { Image } from 'lucide-react';
import { assets } from "@/Assets/assets";

export default function NavBar() {
  return (
    <Container>
      <div className="flex items-center justify-between py-4">
        {/* Logo Section */}
        <div className="flex items-center">
        <Image src={assets.logo} width={180} alt='logo' className='w-[130px] sm:w-auto' />
          <span className="text-xl font-bold text-gray-800">Brand Name</span>
        </div>

        {/* Navigation Links */}
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-6">
            <NavigationMenuItem>
              <NavigationMenuLink href="/" className="hover:underline">
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/tour-destini" className="hover:underline">
                Tour Destini
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/activities" className="hover:underline">
                Activities
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/contact" className="hover:underline">
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/pages" className="hover:underline">
                Pages
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 text-sm font-medium text-gray-800 bg-gray-200 rounded hover:bg-gray-300">
            USD
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-800 bg-gray-200 rounded hover:bg-gray-300">
            Help
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600">
            Login
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded hover:bg-green-600">
            Sign Up
          </button>
        </div>
      </div>
    </Container>
  );
}
