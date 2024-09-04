import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import dayjs from "dayjs";

import { SiteNavigation } from "~/components/shared/site-navigation";
import { SiteFooter } from "~/components/shared/site-footer";

import "dayjs/locale/id";
import "./tailwind.css";

export function Layout({ children }: { children: React.ReactNode }) {
  dayjs.locale("id");

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-brand-black-aswad text-slate-50 flex flex-col min-h-screen">
        <SiteNavigation />

        <main className="flex-1">{children}</main>

        <SiteFooter />

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
