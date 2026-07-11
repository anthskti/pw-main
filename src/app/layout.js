import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

import { Red_Hat_Display } from "next/font/google";

import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Anthony Pham",
  metadataBase: new URL("https://anthonypham.ca"),
  description: "Anthony Pham's personal website",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "./favicon.ico",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "./favicon.dark.ico",
      },
    ],
  },
};

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-red-hat-display",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased ${redHatDisplay.variable}`}>
        <ThemeProvider>
          <main className="flex justify-center bg-white dark:bg-zinc-950 min-h-screen bg-[radial-gradient(#ffedb5_1px,transparent_1px)] dark:bg-[radial-gradient(#241840_1px,transparent_1px)] [background-size:16px_16px]">
            <div className="flex flex-col gap-4 w-full px-4 sm:px-6 max-w-6xl mx-auto m-6 md:m-12 lg:m-16 md:mt-[60px] font-display text-zinc-700 dark:text-stone-200">
              <Header />
              {children}
              <Footer />
            </div>
          </main>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
