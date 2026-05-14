import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > (window.innerHeight * 0.02));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Keyboards", path: "/keyboards" },
    { name: "Products", path: "/products" },
  ];

  return (
    <nav className="relative w-full">

      <div 
        className={`
          top-0 left-0 right-0 z-50 
          transition-all duration-500
          ${scrolled ? "pt-[0.5%]" : "pt-[0%] sm:pt-[1%]"}
          fixed sm:static flex justify-center px-[2%]
        `}
      >
        <div
          className={`
            w-[95%] sm:w-[85%] flex items-center justify-between
            px-[5%]
            bg-black/70 backdrop-blur-md
            border border-white/10
            shadow-2xl
            transition-all duration-300
            ${scrolled 
              ? "h-[60%] rounded-[25px] sm:rounded-[25px]" 
              : "h-full rounded-[10px] sm:rounded-[40px]"
            }
          `}
          style={{ height: scrolled ? '8vh' : '12vh' }} 
        >
          <Link to="/" className="flex items-center h-full w-[30%]">
            <img 
              src="img/Logo/no-bg-logo.png" 
              alt="Logo" 
              className={`transition-all duration-300 w-full h-full rounded-xl object-contain object-left ${
                scrolled ? "h-full" : "h-[85%]"
              }`}
            />
          </Link>

          <div className="flex items-center justify-end gap-[5%] w-[60%]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-[58%] sm:text-[110%] font-medium text-gray-400 hover:text-white transition-colors tracking-widest uppercase whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      <div className="sm:hidden" style={{ height: '12vh' }} />
    </nav>
  );
}