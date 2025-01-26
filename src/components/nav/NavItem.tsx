'use client';

import Link from 'next/link';
import { type NavItem } from '@/config/navigation';

interface NavItemProps extends NavItem {
  isMobile?: boolean;
}

export function NavItem({ title, href, isMobile = false }: NavItemProps) {
  return (
    <Link
      href={href}
      className={`${
        isMobile
          ? 'w-full text-lg py-4 px-6 hover:bg-gray-100 dark:hover:bg-gray-800'
          : 'px-4 py-2 text-sm text-gray-600 hover:text-darkGreen dark:text-gray-300 dark:hover:text-gray-50'
      } transition-colors duration-200`}
    >
      {title}
    </Link>
  );
} 