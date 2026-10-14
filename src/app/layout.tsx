import type { Metadata } from "next";
import { Oswald, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Crust Pizza Co. | Chicago-Style Thin Crust Pizza",
  description: "Delicious, made-from-scratch pizzas, Chicago-style thin crust, catering, and Italian favorites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#F9F6F0] text-[#1A1816] font-sans antialiased selection:bg-[#EA6A28] selection:text-white">
        {children}
      </body>
    </html>
  );
}

