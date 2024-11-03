import { type PageProps } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";

import Navbar from "../islands/Navbar.tsx";

export default function App({ Component }: PageProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Himansu - Developer</title>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="icon" href="/icon-circle.png" />
      </head>
      <body className="font-sans text-gray-900 dark:text-gray-100 dark:bg-gray-900">
        <Navbar />
        <main className="container mx-auto px-4 py-8 mt-28">
          <Component />
        </main>
        <Footer />
      </body>
    </html>
  );
}
