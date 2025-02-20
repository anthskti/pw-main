import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "Anthony Pham",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <main className="flex justify-center bg-stone-100 dark:bg-black min-h-screen[background-size:16px_16px]">
          <div className="flex flex-col gap-4 md:max-w-[500px] m-6 md:m-20 font-[380] md:mt-[60px]">
            <Header />
            {children}
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
