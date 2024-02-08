import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className="flex flex-col min-h-screen">
        <header className="bg-gray-500 flex items-center justify-center h-20">
          Header
        </header>
        <main className="flex-1 flex">{children}</main>
        <footer className="bg-gray-500 flex items-center justify-center h-20">
          Footer
        </footer>
      </body>
    </html>
  );
}
