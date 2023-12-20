import Image from "next/image";
import homeImg from '../../public/coding-on-a-computer.jpg'
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  const pageTitle = 'Home'
  return (
    <main
      className=" flex min-h-screen flex-col items-center  justify-between p-12">
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <h1 className="text-4xl font-bold pb-10 ">Script Stalker</h1>
      <Image src={homeImg} alt="" width={500} height={400} className="rounded-xl" />

      <h1 className="text-4xl p-4 font-bold" > Latest Bloges</h1>
      <div className="">
        <div className="py-4">
          <Link href={'/blogpost/blog1'}>
            <h1 className='text-xl font-bold'>How To Learn JavaScript in 2024: A Comprehensive Guide</h1>
          </Link>
          <h5> JavaScript, the language that powers the interactive and dynamic...</h5>
        </div >
        <div className="py-4">
          <Link href={'/blogpost/blog1'}>
            <h1 className='text-xl font-bold'>How To Learn React in 2024: A Comprehensive Guide</h1>
          </Link>
          <h5> Before diving into complex concepts, make sure you have a solid ....</h5>
        </div>
        <div className="py-4">
          <Link href={'/blogpost/blog1'}>
            <h1 className='text-xl font-bold'>How To Learn Next js in 2024: A Comprehensive Guide</h1>
          </Link>
          <h5>In the ever-evolving landscape of web development, staying up-to-date...</h5>
        </div>
      </div>
    </main>
  )
}
