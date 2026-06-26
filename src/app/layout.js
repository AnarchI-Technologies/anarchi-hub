import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "AnarchI - Deterministic Freedom Systems",
    description: "Deterministic tools, wallet safety intelligence, and agent-ready logic libraries.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="wrap">
                    <Navbar />
                </div>
                {children}
            </body>
        </html>
    );
}