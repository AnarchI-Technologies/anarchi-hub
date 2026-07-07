import "./globals.css";
import SiteNav from "./components/SiteNav";
import Script from "next/script";
export const metadata = {
  title: "AnarchI Technologies",
  description: "Deterministic wallet safety reports and practical software tools.",
  icons: {
    icon: "/favicon.svg",
  },
};
const MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {MEASUREMENT_ID && (
          <> 
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`} strategy="afterInteractive" />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);} 
                gtag('js', new Date());
                gtag('config', '${MEASUREMENT_ID}', { send_page_view: true });
              `}
            </Script>
          </>
        )}
      </head>
      <body>
        <SiteNav />
        {children}
      </body>
    </html>
  );
}

