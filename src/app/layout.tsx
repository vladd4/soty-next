/* eslint-disable @next/next/no-img-element */
import "../styles/globals.scss";

import { mont } from "@/fonts/fonts";
import ReduxProvider from "@/providers/ReduxProvider";
import TanStackProvider from "@/providers/TanStackProvider";
import { Toaster } from "react-hot-toast";
import Fancybox from "@/components/FancyBox";
import { Metadata } from "next";
import { ReactNode } from "react";
import Script from "next/script";

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
  return (
    <html lang="uk">
      <head>
        <meta
          name="google-site-verification"
          content="5P6su6d3XkVpd_Tfh3kpj8j_70JKF91efJ1TgEZ-A0c"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta property="author" content="vladdonets" />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WLZX2XHD');
          `,
          }}
        />
        {/* Facebook Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '1203812067826121');
                fbq('track', 'PageView');
              `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1203812067826121&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Facebook Pixel Code */}
      </head>
      <body className={`${mont.className}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WLZX2XHD"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

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
        <Script
          id="binotel-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(d, w, s) {
              var widgetHash = '8gkqz1d7dlgoc63iipre', gcw = d.createElement(s); 
              gcw.type = 'text/javascript'; 
              gcw.async = true;
              gcw.src = '//widgets.binotel.com/getcall/widgets/'+ widgetHash +'.js';
              var sn = d.getElementsByTagName(s)[0]; 
              sn.parentNode.insertBefore(gcw, sn);
            })(document, window, 'script');
          `,
          }}
        />
      </body>
    </html>
  );
}
