import Image from "next/image";
import { TopNavigation } from "./top-navigation";
import Link from "next/link";
import { Button } from "../button";

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
        <Link href="signin">
          <Button variant="primary" className="mr-auto">
            ثبت‌نام/ورود
          </Button>
        </Link>
      </div>
    </header>
  );
};
