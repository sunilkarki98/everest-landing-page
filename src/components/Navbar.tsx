"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { siteConfig, MenuItem, MenuKey } from "../config/site";
import { Button } from "@/components/ui/Button";

interface NavbarProps {
  className?: string;
  logoSrc?: string;
  logoAlt?: string;
}

export default function Navbar({
  className = "",
  logoSrc = "/logos/everestlogo.png",
  logoAlt = "Everest Education",
}: NavbarProps) {
  const pathname = usePathname() || "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<Record<MenuKey, boolean>>({
    courses: false,
    visaMigration: false,
    abroadStudy: false,
    otherServices: false,
  });
  const [activeDropdown, setActiveDropdown] = useState<MenuKey | null>(null);

  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const menus: MenuItem[] = siteConfig.nav;

  // --- Effects ---
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileOpen(false);
        setActiveDropdown(null);
      }
    };

    if (mobileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setActiveDropdown(null);
        setDropdownOpen({
          courses: false,
          visaMigration: false,
          abroadStudy: false,
          otherServices: false,
        });
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileOpen) {
        setMobileOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileOpen]);

  // --- Handlers ---
  const toggleMobileMenu = useCallback(
    () => setMobileOpen((prev) => !prev),
    []
  );

  const toggleDropdown = useCallback((menu: MenuKey) => {
    setDropdownOpen((prev) => ({
      ...Object.keys(prev).reduce(
        (acc, key) => ({ ...acc, [key]: false }),
        {} as Record<MenuKey, boolean>
      ),
      [menu]: !prev[menu],
    }));
  }, []);

  const handleMouseEnter = useCallback((menu: MenuKey) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menu);
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  }, []);

  const closeMobileMenu = useCallback(() => setMobileOpen(false), []);

  // --- JSX ---
  return (
    <nav
      ref={navRef}
      className={`relative z-50 font-sans ${className}`}
    >
      <div className="max-w-[90rem] mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 lg:h-[72px]">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Link
              href="/"
              className="flex items-center h-full gap-1 font-bold text-xl transition-transform hover:scale-105"
            >
              <Image
                src={logoSrc}
                alt={logoAlt || "Company Logo"}
                width={200}
                height={100}
                className="h-14 sm:h-16 lg:h-[72px] w-auto object-contain drop-shadow-sm scale-[1.35] origin-center"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center h-full space-x-1">
            <Link
              href="/"
              className={`px-4 py-2 font-medium relative group ${pathname === "/" ? "text-accent" : "text-primary hover:text-accent"}`}
            >
              Home
              <span className={`absolute inset-x-0 bottom-1 h-0.5 transition-transform origin-left bg-secondary ${pathname === "/" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
            </Link>

            {menus.map((menu) => (
              <div key={menu.key} className="relative">
                <button
                  onMouseEnter={() => handleMouseEnter(menu.key)}
                  onMouseLeave={handleMouseLeave}
                  className={`px-3 py-2 font-medium flex items-center gap-0 relative group ${menu.href && pathname.startsWith(menu.href) ? "text-accent" : "text-primary hover:text-accent"}`}
                >
                  {menu.label}
                  <ChevronDown
                    size={16}
                    className="translate-y-[1px] text-secondary"
                  />
                  <span className={`absolute inset-x-0 bottom-1 h-0.5 transition-transform origin-left bg-secondary ${menu.href && pathname.startsWith(menu.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
                </button>

                <div
                  className={`absolute top-full left-0 bg-white/85 backdrop-blur-2xl text-foreground shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] rounded-xl mt-2 w-72 border border-white/60 transition-all duration-300 origin-top ${activeDropdown === menu.key
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                    }`}
                  onMouseEnter={() => handleMouseEnter(menu.key)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="py-2">
                    {menu.href ? (
                      <Link
                        href={menu.href}
                        className="block px-4 py-3 font-semibold border-b border-border text-primary"
                      >
                        {menu.label}
                      </Link>
                    ) : (
                      <span className="block px-4 py-3 font-semibold border-b border-border text-muted-foreground cursor-not-allowed">
                        {menu.label}
                      </span>
                    )}
                    {menu.links.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-3 transition-colors duration-200 text-foreground hover:bg-secondary hover:text-secondary-foreground"
                      >
                        <div className="font-medium">{item.label}</div>
                        {item.description && (
                          <div className="text-sm mt-1 opacity-80">
                            {item.description}
                          </div>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <Link
              href="/blog"
              className={`px-4 py-2 font-medium relative group ${pathname.startsWith("/blog") ? "text-accent" : "text-primary hover:text-accent"}`}
            >
              Blog
              <span className={`absolute inset-x-0 bottom-1 h-0.5 transition-transform origin-left bg-secondary ${pathname.startsWith("/blog") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
            </Link>

            <Link
              href="#contact-us"
              className="px-4 py-2 font-medium relative group text-primary"
            >
              Contact
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left bg-secondary"></span>
            </Link>

            {/* Book Consultation Button */}
            <Button
              variant="accent"
              className="ml-4 relative overflow-hidden group shadow-[0_0_15px_hsl(var(--accent)/0.4)] hover:shadow-[0_0_25px_hsl(var(--accent)/0.7)] transition-all duration-300 hover:-translate-y-0.5 bg-gradient-to-r from-accent via-yellow-300 to-accent animate-moving-gradient border-none"
              asChild
            >
              <Link href="#contact-us" className="flex items-center justify-center">
                <span className="relative z-10 font-bold tracking-wide">Book Consultation</span>
                {/* Premium Shine Sweep Effect */}
                <span className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] transition-all duration-700 ease-out group-hover:left-[200%] z-0" />
              </Link>
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <button onClick={toggleMobileMenu} className="p-2 text-primary" aria-label="Toggle mobile menu">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-background border-t border-border transition-all duration-300 ease-out ${mobileOpen
          ? "max-h-[80vh] opacity-100 overflow-y-auto"
          : "max-h-0 opacity-0 pointer-events-none"
          } overflow-hidden`}
      >
        <div className="px-4 py-4 space-y-1">
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="block py-3 px-4 font-medium text-base rounded-lg transition-colors text-primary hover:bg-muted"
          >
            Home
          </Link>

          <Link
            href="/blog"
            onClick={closeMobileMenu}
            className="block py-3 px-4 font-medium text-base rounded-lg transition-colors text-primary hover:bg-muted"
          >
            Blog
          </Link>

          <Link
            href="#contact-us"
            onClick={closeMobileMenu}
            className="block py-3 px-4 font-medium text-base rounded-lg transition-colors text-primary hover:bg-muted"
          >
            Contact
          </Link>

          {menus.map((menu) => (
            <div key={menu.key} className="space-y-1">
              <button
                onClick={() => toggleDropdown(menu.key)}
                className="flex items-center justify-between w-full py-3 px-4 font-medium text-base rounded-lg transition-colors text-primary hover:bg-muted"
              >
                <span>{menu.label}</span>
                <ChevronDown
                  size={18}
                  className={`text-secondary transition-transform ${dropdownOpen[menu.key] ? "rotate-180" : ""
                    }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${dropdownOpen[menu.key]
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
                  }`}
              >
                <div className="pl-4 py-2 space-y-1">
                  {menu.links.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="block py-2 px-4 text-sm rounded-md transition-colors text-foreground hover:bg-secondary hover:text-secondary-foreground"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <Link
            href="#contact-us"
            onClick={closeMobileMenu}
            className="block py-3 px-4 font-medium text-base rounded-lg text-primary hover:bg-muted"
          >
            Contact
          </Link>
          {/* Mobile Book Consultation */}
          <Button
            variant="accent"
            className="w-full mt-2 relative overflow-hidden group shadow-[0_0_15px_hsl(var(--accent)/0.3)] hover:shadow-[0_0_20px_hsl(var(--accent)/0.6)] transition-all duration-300 bg-gradient-to-r from-accent via-yellow-300 to-accent animate-moving-gradient border-none"
            asChild
          >
            <Link href="#contact-us" onClick={closeMobileMenu} className="flex items-center justify-center">
              <span className="relative z-10 font-bold tracking-wide">Book Consultation</span>
              {/* Premium Shine Sweep Effect */}
              <span className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] transition-all duration-700 ease-out group-hover:left-[200%] z-0" />
            </Link>
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden -z-10"
          onClick={closeMobileMenu}
        />
      )}
    </nav>
  );
}
