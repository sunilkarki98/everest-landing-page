"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

type MenuKey = "popular" | "student" | "migration" | "other";

interface MenuItem {
  key: MenuKey;
  label: string;
  href: string;
  links: Array<{
    label: string;
    href: string;
    description?: string;
  }>;
}

interface NavbarProps {
  className?: string;
  logoSrc?: string;
  logoAlt?: string;
  brandName?: string;
}

export default function Navbar({
  className = "",
  logoSrc = "/images/logo.jpeg",
  logoAlt = "Everest Education",
  brandName = "GRACE INTERNATIONAL",
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<Record<MenuKey, boolean>>({
    popular: false,
    student: false,
    migration: false,
    other: false,
  });
  const [activeDropdown, setActiveDropdown] = useState<MenuKey | null>(null);

  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const menus: MenuItem[] = [
    {
      key: "popular",
      label: "Popular Courses",
      href: "/courses",
      links: [
        {
          label: "IELTS",
          href: "/courses/ielts",
          description: "International English Language Testing System",
        },
        {
          label: "PTE",
          href: "/courses/pte",
          description: "Pearson Test of English",
        },
        {
          label: "TOEFL",
          href: "/courses/toefl",
          description: "Test of English as a Foreign Language",
        },
      ],
    },
    {
      key: "student",
      label: "Student Services",
      href: "/services/student",
      links: [
        { label: "Counseling", href: "/services/counseling" },
        { label: "Visa Assistance", href: "/services/visa" },
        { label: "Career Guidance", href: "/services/career" },
      ],
    },
    {
      key: "migration",
      label: "Migration Services",
      href: "/services/migration",
      links: [
        { label: "Australia", href: "/migration/australia" },
        { label: "Canada", href: "/migration/canada" },
        { label: "New Zealand", href: "/migration/new-zealand" },
      ],
    },
    {
      key: "other",
      label: "Other Services",
      href: "/services/other",
      links: [
        { label: "Language Training", href: "/services/language" },
        { label: "Document Translation", href: "/services/translation" },
        { label: "Interview Preparation", href: "/services/interview" },
      ],
    },
  ];

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
          popular: false,
          student: false,
          migration: false,
          other: false,
        });
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

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

  return (
    <nav
      ref={navRef}
      className={`bg-white text-primary shadow-lg py-3 relative z-50 font-sans ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Link
              href="/"
              className="flex items-center gap-1 font-bold text-xl transition-transform hover:scale-105"
            >
              <img
                src={logoSrc}
                alt={logoAlt}
                className="h-20 w-auto object-contain drop-shadow-sm"
                width={50}
                height={50}
                loading="eager"
              />
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center h-full space-x-1">
            <Link href="/" className="px-4 py-2 font-medium relative group">
              Home
              <span className="absolute inset-x-0 bottom-1 h-0.5 bg-blue-500 scale-x-100 transition-transform origin-left"></span>
            </Link>

            {menus.map((menu) => (
              <div key={menu.key} className="relative">
                <button
                  onMouseEnter={() => handleMouseEnter(menu.key)}
                  onMouseLeave={handleMouseLeave}
                  className="px-3 py-2 font-medium flex items-center gap-0 relative group"
                >
                  {menu.label}
                  <ChevronDown
                    size={16}
                    className="text-blue-500 translate-y-[1px]"
                  />
                  <span className="absolute inset-x-0 bottom-1 h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </button>
                <div
                  className={`absolute top-full left-0 bg-white text-primary shadow-xl rounded-lg mt-1 w-72 border border-gray-100 transition-all duration-200 origin-top
                    ${
                      activeDropdown === menu.key
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                    }`}
                  onMouseEnter={() => handleMouseEnter(menu.key)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="py-2">
                    <Link
                      href={menu.href}
                      className="block px-4 py-3 font-semibold text-blue-500 hover:bg-blue-50 border-b border-gray-100"
                    >
                      View All {menu.label}
                    </Link>
                    {menu.links.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 hover:bg-gray-50"
                      >
                        <div className="font-medium">{item.label}</div>
                        {item.description && (
                          <div className="text-sm text-gray-500 mt-1">
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
              href="/contact"
              className="px-4 py-2 font-medium relative group"
            >
              Contact
              <span className="absolute inset-x-0 -bottom-0.5 h-0.75 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <button onClick={toggleMobileMenu} className="p-2 text-primary">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-t border-gray-200 transition-all duration-300 ease-out ${
          mobileOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        } overflow-hidden`}
      >
        <div className="px-4 py-4 space-y-1 text-primary">
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="block py-3 px-4 font-medium text-base rounded-lg hover:bg-blue-50"
          >
            Home
          </Link>
          {menus.map((menu) => (
            <div key={menu.key} className="space-y-1">
              <button
                onClick={() => toggleDropdown(menu.key)}
                className="flex items-center justify-between w-full py-3 px-4 font-medium text-base rounded-lg hover:bg-blue-50"
              >
                <span>{menu.label}</span>
                <ChevronDown
                  size={18}
                  className={`${
                    dropdownOpen[menu.key] ? "rotate-180" : ""
                  } text-blue-500 transition-transform`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  dropdownOpen[menu.key]
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-4 py-2 space-y-1">
                  <Link
                    href={menu.href}
                    onClick={closeMobileMenu}
                    className="block py-2 px-4 text-sm font-medium text-blue-500 rounded-md hover:bg-blue-50"
                  >
                    View All {menu.label}
                  </Link>
                  {menu.links.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="block py-2 px-4 text-sm rounded-md hover:bg-blue-50"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <Link
            href="/contact"
            onClick={closeMobileMenu}
            className="block py-3 px-4 font-medium text-base rounded-lg hover:bg-blue-50"
          >
            Contact
          </Link>
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
