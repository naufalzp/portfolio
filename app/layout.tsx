import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Zhafif's Portfolio",
    description:
        "I'm a full stack developer based in Indonesia. I love to build things with React, Next.js, and Tailwind CSS.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' className='snap-y snap-mandatory scroll-smooth'>
            <body
                className={`${montserrat.className} text-black dark:text-white dark:bg-neutral-900 bg-white`}
            >
                {children}
            </body>
        </html>
    );
}
