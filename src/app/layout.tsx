import "./globals.css";
import { Figtree } from "next/font/google";
import localFont from "next/font/local";

const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
});

const yekanbakh = localFont({
  src: [
    {
      path: "../../public/fonts/yekanbakh/YekanBakh-Light.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/yekanbakh/YekanBakh-Regular.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/yekanbakh/YekanBakh-Medium.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/yekanbakh/YekanBakh-Bold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/yekanbakh/YekanBakh-Fat.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/yekanbakh/YekanBakh-Heavy.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-yekanbakh",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" className={`${figtree.variable} ${yekanbakh.variable}`}>
      <body className="flex flex-col min-h-screen">
        <header className="bg-gray-500 flex items-center justify-center h-20 text-3xl">
          دوره معماری ری اکت
        </header>
        <main className="flex-1 flex">{children}</main>
        <footer className="bg-gray-500 flex items-center justify-center h-20 text-3xl">
          Footer
        </footer>
      </body>
    </html>
  );
}
