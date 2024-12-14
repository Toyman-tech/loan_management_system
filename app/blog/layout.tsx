import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { dark } from "@clerk/themes";

import "../globals.css";
import LeftSidebar from "@/components/shared/LeftSidebar";
import Bottombar from "@/components/shared/Bottombar";
import RightSidebar from "@/components/shared/RightSidebar";

import { getPosts } from "@/graphql";
import Topbar from "@/components/shared/Topbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'THE DAWN',
  description: 'A website for all pious muslims',
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    
      <html lang='en'>
        <body className={inter.className}>
          <Topbar />
          <main className='flex flex-row'>
            <LeftSidebar />
            <section className='main-container max-sm:px-[0.5rem]'>
              <div className='w-full '>{children }</div>
            </section>
            {/* @ts-ignore */ }
            <RightSidebar />
          </main>

          <Bottombar />
        </body>
      </html>
  );
}

// export async function getStaticProps() {
//   const posts = (await getPosts()) || [];
//   return {
//     props: { posts },
//   };
// }