"use client"

import Link from "next/link"
import { Menu, X, Satellite } from 'lucide-react'
import { useState, useEffect } from 'react'
import Logo from "./public/log.webp" 
import { Button } from "@/components/ui/button"
import Image from "next/image"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Data",
    href: "/data",
    children: [
      { name: "Satellite Imagery", href: "/data/satellite-imagery" },
      { name: "Geospatial Data", href: "/data/geospatial" },
      { name: "Time Series", href: "/data/time-series" },
      { name: "Data Catalog", href: "/data/catalog" },
    ],
  },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "Data Analysis", href: "/services/data-analysis" },
      { name: "Custom Solutions", href: "/services/custom-solutions" },
      { name: "Consulting", href: "/services/consulting" },
      { name: "Training", href: "/services/training" },
    ],
  },
  {
    name: "Resources",
    href: "/resources",
    children: [
      { name: "Documentation", href: "/resources/documentation" },
      { name: "API Reference", href: "/resources/api" },
      { name: "Tutorials", href: "/resources/tutorials" },
      { name: "Case Studies", href: "/resources/case-studies" },
      { name: "Research Papers", href: "/resources/research-papers" },
    ],
  },
  { name: "Contact", href: "/contact" },
]

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Nigerian Satellite Data Platform</span>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <Image src={Logo} className="h-9 w-auto relative" alt="NSDP Logo"/>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <NavigationMenu>
            <NavigationMenuList>
              {navigation.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.children ? (
                    <>
                      <NavigationMenuTrigger className="text-blue-300 hover:text-blue-100 transition-colors duration-300 font-medium">
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-slate-900/95 backdrop-blur-md rounded-lg border border-blue-500/20">
                          {item.children.map((child) => (
                            <li key={child.name}>
                              <NavigationMenuLink asChild>
                                <a
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-900/30 focus:bg-blue-900/30 text-blue-200 hover:text-blue-100"
                                  href={child.href}
                                >
                                  <div className="text-sm font-medium leading-none">{child.name}</div>
                                  <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                                    {child.description}
                                  </p>
                                </a>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-blue-300 hover:text-blue-100 bg-transparent hover:bg-blue-900/30 transition-all duration-300 font-medium`}>
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild variant="outline" className="text-blue-300 border-blue-500 hover:bg-blue-900/50 hover:text-blue-100 transition-all duration-300">
            <Link href="/Login">Log in</Link>
          </Button>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Nigerian Satellite Data Platform</span>
                <Image
                  className="h-8 w-auto"
                  src={Logo}
                  alt="NSDP Logo"
                />
              </Link>
              <Button
                variant="ghost"
                className="-m-2.5 rounded-md p-2.5 text-gray-300 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-white/10"
                      >
                        {item.name}
                      </Link>
                      {item.children && (
                        <div className="ml-4 space-y-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="-mx-3 block rounded-lg px-3 py-2 text-sm leading-7 text-gray-300 hover:bg-white/10 hover:text-white"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="py-6">
                  <Button asChild variant="outline" className="w-full text-white border-white hover:bg-white hover:text-black transition-colors">
                    <Link href="/Login">Log in</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

