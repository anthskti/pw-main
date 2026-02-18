import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ThemeProvider from "./components/ThemeProvider";

import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Anthony Pham",
  metadataBase: new URL("https://anthonypham.ca"),
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: './favicon.ico',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: './favicon.dark.ico',
      },
    ],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ThemeProvider>
          <main className="flex justify-center bg-white dark:bg-neutral-900 min-h-screen  bg-[radial-gradient(#ffedb5_1px,transparent_1px)] dark:bg-[radial-gradient(#241840_1px,transparent_1px)] [background-size:16px_16px]">
            <div className="flex flex-col gap-4 w-full md:max-w-[500px] m-6 md:m-20 font-[380] md:mt-[60px] text-neutral-700 dark:text-stone-200">
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
