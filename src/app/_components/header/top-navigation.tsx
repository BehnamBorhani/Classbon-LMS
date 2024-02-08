"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems: NavigationMenuItem[] = [
  { title: "صفحه اصلی", href: "/" },
  { title: "دوره های ری اکت و نکست", href: "/courses" },
  { title: "مقالات", href: "/blog" },
];

export const TopNavigation: React.FC = () => {
  const pathName = usePathname();

  return (
    <ul className="flex gap-x-8 mr-12">
      {menuItems.map((item) => {
        const isActive = pathName === item.href;
        return (
          <li
            key={`navigation${item.href}`}
            className={`dark:hover:text-primary transition-colors pb-2 ${
              isActive && "border-b-2 dark:text-primary dark:border-primary/30"
            }`}
          >
            <Link href={item.href}>{item.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};
