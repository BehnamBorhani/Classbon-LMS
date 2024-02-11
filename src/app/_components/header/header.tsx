import Image from "next/image";
import { TopNavigation } from "./top-navigation";
import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <header className="border-b dark:border-base-content dark:border-opacity-5">
      <div className="container flex justify-between items-center">
        <Link href="/">
          <Image
            src="/images/logo-light.svg"
            width={100}
            height={36}
            alt="کلاسبن"
          />
        </Link>
        <TopNavigation />
        <span className="mr-auto">Auth</span>
      </div>
    </header>
  );
};
