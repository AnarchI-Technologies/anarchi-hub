import "./globals.css";
import SiteNav from "./components/SiteNav";
export const metadata = {
  title: "AnarchI Technologies",
  description: "Deterministic wallet safety reports and practical software tools.",
  icons: {
    icon: "/favicon.svg",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><SiteNav />{children}</body>
    </html>
  );
}

