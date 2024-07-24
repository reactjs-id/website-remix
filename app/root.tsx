import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { SiteNavigation } from "~/components/shared/site-navigation";
import { SiteFooter } from "~/components/shared/site-footer";

import "./tailwind.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-x-black-900 text-slate-50 flex flex-col min-h-screen">
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
