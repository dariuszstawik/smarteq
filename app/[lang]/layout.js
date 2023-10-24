import "./globals.css";
import { i18n } from "@/i18n.config";
import { Providers } from "./GlobalRedux/provider";
import Footer from "./components/global-components/footer";
import { getDictionary } from "@/lib/dictionary";

export const metadata = {
  title: "Smart Equestrian",
  description:
    "Jesteśmy grupą projektującą materiały promocyjne. Dzięki naszym realizacjom poprawisz swoją sprzedaż i będziesz wyróżniał się dobrą jakością na rynku, w którym obraca się twoja marka.",
};

// export async function generateStaticParams() {
//   return i18n.locales.map((locale) => ({ lang: locale }));
// }

export default async function RootLayout({ children, params }) {
  const lang = i18n.defaultLocale;
  const { privacyPolicy, termsAndConditions } = await getDictionary(
    params.lang
  );

  return (
    <html lang={lang}>
      <body
        className="min-h-screen flex flex-col max-w-full overflow-x-hidden mt-0"
        id="top"
      >
        {" "}
        <Providers>
          <div className="pt-28"> {children} </div>
          <Footer
            lang={lang}
            privacyPolicy={privacyPolicy}
            termsAndConditions={termsAndConditions}
          />
        </Providers>{" "}
      </body>
    </html>
  );
}
