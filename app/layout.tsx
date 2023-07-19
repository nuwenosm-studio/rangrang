import './globals.css';
import type { Metadata } from 'next';

import { NavBar } from '@/components';

export const metadata: Metadata = {
   title: 'RangRang Coffee',
   description: 'Vietnamese Coffee',
}

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="en">
         <body className="relative p-6">
            <NavBar />
            {children}
         </body>
      </html>
   )
}
