import "./globals.css";
import { i18n } from "@/i18n.config";

import { Providers } from "./GlobalRedux/provider";
import Navbar from "./components/global-components/navbar";
import Footer from "./components/global-components/footer";
import { getDictionary } from "@/lib/dictionary";

export const metadata = {
  title: "Smart Equestrian",
  description: "Generated by create next app",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({ children, params }) {
  // const { lang } = params;
  const { navigation } = await getDictionary(params.lang);

  return (
    // <html lang="pl">
    <html lang={params.lang}>
      <body className="min-h-screen flex flex-col">
        {" "}
        <Providers>
          <div className="pt-28"> {children} </div>
          <Footer />
        </Providers>{" "}
      </body>
    </html>
  );
}

{
  /* <div id="portal"></div> */
}