import { Navbar } from "@/components/Navbar";
import "@/styles/globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import { AnimatePresence } from "motion/react";

const plus_Jakarta_Sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export default function App({ Component, pageProps, router }) {
  return (
    <div className={plus_Jakarta_Sans.className}>
      <Navbar />
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
