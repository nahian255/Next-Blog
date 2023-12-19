import Image from "next/image";
import homeImg from '../../public/coding-on-a-computer.jpg'
import Link from "next/link";

export default function Home() {
  return (
    <main
      className=" flex min-h-screen flex-col items-center  justify-between p-12">
      <h1 className="text-4xl font-bold pb-10 ">Script Stalker</h1>
      <Image src={homeImg} alt="" width={500} height={400} />

      <h1 className="text-2xl p-4"> Latest Bloges</h1>
      <div className="">
        <div className="py-4">
          <Link href={'/blogpost/blog1'}>
            <h1 className='text-xl font-bold'>How To Learn JavaScript in 2024: A Comprehensive Guide</h1>
          </Link>
          <h5> JavaScript, the language that powers the interactive and dynamic...</h5>
        </div >
        <div className="py-4">
          <Link href={'/blogpost/blog1'}>
            <h1 className='text-xl font-bold'>How To Learn JavaScript in 2024: A Comprehensive Guide</h1>
          </Link>
          <h5> JavaScript, the language that powers the interactive and dynamic...</h5>
        </div>
        <div className="py-4">
          <Link href={'/blogpost/blog1'}>
            <h1 className='text-xl font-bold'>How To Learn JavaScript in 2024: A Comprehensive Guide</h1>
          </Link>
          <h5> JavaScript, the language that powers the interactive and dynamic...</h5>
        </div>
        <div className="py-4">
          <Link href={'/blogpost/blog1'}>
            <h1 className='text-xl font-bold'>How To Learn JavaScript in 2024: A Comprehensive Guide</h1>
          </Link>
          <h5> JavaScript, the language that powers the interactive and dynamic...</h5>
        </div>

      </div>
    </main>
  )
}
