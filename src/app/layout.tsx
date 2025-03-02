'use client'
import "./globals.css";

import { Poppins } from "next/font/google";
import StarBackground from "./components/StarBackground";
import { LanguageProvider, useLanguage } from "../../public/contexts/LanguageContext"; 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { metadata } from "../utils/metadata";
import { IntlProvider } from "react-intl";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <LanguageProvider>
          <LanguageWrapper>
            <StarBackground />
            {children}
          </LanguageWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}

const LanguageWrapper = ({ children }: { children: React.ReactNode }) => {
  const { language, messages } = useLanguage();
  return (
    <IntlProvider
  locale={language.location}
  messages={messages}
  onError={(error) => {
    if (error.code === 'MISSING_TRANSLATION') {
    } else {
      console.error(error); 
    }
  }}
>
  {children}
</IntlProvider>
  );
};
