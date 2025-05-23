import { Provider } from "@/components/ui/provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { UserProvider } from "@/providers/user-provider";
import "./globals.css";
import { SearchProductProvider } from "@/providers/search-product-provider";
import { CartProvider } from "@/providers/cart-provider";
import { ToasterProvider } from "@/providers/toaster-provider";
import { ModalActionsProvider } from "@/providers/modal-actions-provider";
import { ModalProvider } from "@/providers/modal-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js E-commerce",
  description: "A simple e-commerce application built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UserProvider>
          <SearchProductProvider>
            <CartProvider>
              <Provider>
                <ModalActionsProvider>
                  <ModalProvider />
                  <ToasterProvider>{children}</ToasterProvider>
                </ModalActionsProvider>
              </Provider>
            </CartProvider>
          </SearchProductProvider>
        </UserProvider>
      </body>
    </html>
  );
}
