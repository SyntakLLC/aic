'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { NavItem } from './NavItem';
import { navigationItems } from '@/config/navigation';
import Image from 'next/image';
import aicLogo from '@/images/aic-logo.jpg';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-xl dark:bg-slate-900/80 border-b dark:border-none border-gray-200 dark:border-gray-800 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-4">
              <Image src={aicLogo} alt="AIC Logo"
                width={40}
                height={40}
                className="object-cover"/>

                <span className='hidden md:block uppercase'>
                    Andover Islamic Center
                </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {navigationItems.map((item) => (
                <NavItem key={item.href} {...item} />
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden pr-4">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-darkGreen dark:text-gray-300 dark:hover:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none transition-colors duration-200"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-slate-900/50 dark:bg-slate-900/70 z-40 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white dark:bg-slate-900 border-l border-gray-200 dark:border-gray-800 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close button in drawer */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-md text-gray-600 hover:text-darkGreen dark:text-gray-300 dark:hover:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none transition-colors duration-200 pr-4"
        >
          <span className="sr-only">Close menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="pt-16 pb-3 h-full overflow-y-auto">
          {navigationItems.map((item) => (
            <div key={item.href} className="block py-2 my-4" onClick={() => setIsMobileMenuOpen(false)}>
              <NavItem {...item} isMobile />
            </div>
          ))}
        </div>
      </div>
    </>
  );
} 