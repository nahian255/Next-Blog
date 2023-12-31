import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Script Stalker',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className='bg-slate-300  justify-items-center '>
          <div className=' text-2xl font-bold pl-4 flex justify-center p-4'>
            <Link href={'/'} className='px-10'>Home</Link>
            <Link href={'/blog'}>Blog</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
