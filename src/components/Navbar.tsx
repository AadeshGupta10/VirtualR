import { useState } from "react";
import { navItems } from "@/constants";
import { useTheme } from "@/context/Themeprovider";
import { Menu, Moon, Sun, X } from "lucide-react";

const Navbar = () => {
  const [menu, setMenu] = useState<boolean>(false);

  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark";

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  return (
    <nav className="sticky min-h-10 top-0 z-50 w-full border-b backdrop-blur bg-background/95 supports-[backdrop-filter]:bg-background/80">
      <div className="container p-3 mx-auto text-sm flex flex-wrap justify-between items-center">

        {/* Logo and Name */}
        <div className="flex gap-2 items-center">
          <img className="size-10" src={"/logo.png"} alt="Logo" />
          <span className="text-xl tracking-tight font-medium select-none">VirtualR</span>
        </div>

        {/* Large Devices */}
        <div className="hidden lg:flex gap-10 list-none">
          <NavItems />
        </div>

        <div className="flex items-center gap-5">
          {/* Theme Toggler */}
          <div
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`flex justify-center items-center cursor-pointer transition-transform duration-500
                    ${isDark ? "rotate-180" : "rotate-0"}`}>
            {
              isDark ?
                <Sun className="size-6 text-yellow-500 rotate-0 transition-all" />
                :
                <Moon className="size-6 text-blue-500 rotate-0 transition-all" />
            }
          </div>

          <button
            className="flex flex-col justify-end lg:hidden"
            onClick={toggleNavbar}>
            {menu ? <X /> : <Menu />}
          </button>
        </div>

        {/* Small and Medium Devices */}
        {menu && (
          <div className="w-full py-4 flex flex-col justify-center items-center gap-5 lg:hidden list-none">
            <NavItems />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

const NavItems = () => {
  return (
    navItems.map((item, index) => (
      <li key={index} className="font-medium select-none cursor-pointer hover:underline underline-offset-8">
        {item.label}
      </li>
    ))
  )
}