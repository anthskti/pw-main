import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";


export const metadata = {
  title: "Anthony Pham",
  // metadataBase: new URL("https://anthonypham.ca"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
      <main className="flex justify-center bg-white dark:bg-neutral-900 min-h-screen [background-size:16px_16px]">
          <div className="flex flex-col gap-4 w-full md:max-w-[500px] m-6 md:m-20 font-[380] md:mt-[60px] text-neutral-700 dark:text-stone-200">
            <Header />
            {children}
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
