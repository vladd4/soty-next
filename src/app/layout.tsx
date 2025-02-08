import "../styles/globals.scss";

import { mont } from "@/fonts/fonts";
import ReduxProvider from "@/providers/ReduxProvider";
import TanStackProvider from "@/providers/TanStackProvider";
import { Toaster } from "react-hot-toast";
import Fancybox from "@/components/FancyBox";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Соти | Ваш міні склад",
  description:
    "Соти - це сучасний сервіс зберігання особистих речей та бізнес-майна.",
  alternates: {
    canonical: "/uk",
    languages: {
      en: "/en",
      uk: "/uk",
    },
  },
  openGraph: {
    description:
      "Соти - це сучасний сервіс зберігання особистих речей та бізнес-майна.",
    title: "Соти | Ваш міні склад",
    type: "website",
    siteName: "Соти | Ваш міні склад ",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  // const messages = useMessages();
  return (
    <html lang="uk">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta property="author" content="vladdonets" />
      </head>
      <body className={`${mont.className}`}>
        {/* <NextIntlClientProvider messages={messages}> */}
        <ReduxProvider>
          <TanStackProvider>
            <Fancybox
              options={{
                Carousel: {
                  infinite: false,
                },
              }}
            >
              <Toaster
                position={"bottom-left"}
                toastOptions={{
                  duration: 7000,
                  style: {
                    maxWidth: 500,
                  },
                }}
              />
              {children}
            </Fancybox>
          </TanStackProvider>
        </ReduxProvider>
        {/* </NextIntlClientProvider> */}
      </body>
    </html>
  );
}
