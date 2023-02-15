import {
  json,
  Links,
  LiveReload,
  LoaderFunction,
  Meta,
  Outlet,
  redirect,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
} from "remix";
import type { LinksFunction } from "remix";

import styles from "./styles/app.css";

import { Analytics } from '@vercel/analytics/react';

import { useLocation, useMatches } from "@remix-run/react";
import { useEffect } from "react";
import { withSentry } from "@sentry/remix";

// https://remix.run/api/app#links
export let links: LinksFunction = () => {
  return [
    { rel: "preload", href: styles, as: "style" },
  ];
};


// https://remix.run/api/conventions#default-export
// https://remix.run/api/conventions#route-filenames
function App() {
  return (
    <Document>      
      <Outlet />
      <Analytics />
    </Document>
  );
}

export default withSentry(App);

function Document({ children, title }: { children: React.ReactNode; title?: string }) {  
  return (    
    <html lang='en' className='h-full'>
      <head>
        <link rel="icon" href="favicon.ico?v=2" />
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        {title ? <title>{title}</title> : <title>ECA - The Esports Coaching Academy</title>}
        <Meta />
        <Links />
      </head>
      <body className='h-full'>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>    
  );
}
