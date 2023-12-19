import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className=" flex min-h-screen flex-col items-center justify-between p-12">
            <div className="">
                <div className="py-4">
                    <Link href={'/blogpost/blog1'}>
                        <h1 className='text-2xl font-bold pb-2'>How To Learn JavaScript in 2024: A Comprehensive Guide</h1>
                    </Link>
                    <h5> JavaScript, the language that powers the interactive and dynamic aspects of the web, continues to be a crucial skill for developers in 2024. Whether you&apos;re a beginner taking your first steps into the world of programming or an experienced developer looking to expand your skill set, this guide will provide you with a roadmap to master JavaScript effectively.</h5>
                </div >
                <div className="py-4">
                    <Link href={'/blogpost/blog2'}>
                        <h1 className='text-xl font-bold'>How To Learn React in 2024: A Comprehensive Guide</h1>
                    </Link>
                    <h5> Reaxt, the liberay  that powers the interactive and dynamic...</h5>
                </div>
                <div className="py-4">
                    <Link href={'/blogpost/blog3'}>
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

        </div>
    );
};

export default page;