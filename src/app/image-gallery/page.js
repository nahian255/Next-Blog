import Image from 'next/image';
import React from 'react';
// import Img from '../../../public/images.jpg'

async function getData() {
    let pic = await fetch('http://localhost:3000/api/new-api')
    pic = pic.json()
    return pic;
}

const page = async () => {

    const data = await getData()
    console.log(data);

    // let pic = await fetch('http://localhost:3000/api')
    // pic = await pic.json()
    // console.log(pic);

    return (

        <div className='bg-slate-300 min-h-screen'>
            <div className='  container pt-20 mx-auto'>
                <div className='bg-white p-10 rounded-2xl'>
                    {/* <div className='grid grid-cols-5 gap-4'>
                        {imgArry.map((img) => (
                            <Image
                                key={img.id}
                                src={img.imgLink}
                                alt="Picture of the author"
                                width={500}
                                height={500}
                            />
                        ))}
                    </div> */}
                    {
                        data.map((img) => (
                            <h1 key={img.id}> f</h1> // console.log(img)
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default page;