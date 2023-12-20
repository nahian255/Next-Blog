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
                        <h1 className='text-2xl font-bold'>How To Learn React in 2024: A Comprehensive Guide</h1>
                    </Link>
                    <h5> React.js continues to be one of the most popular JavaScript libraries for building user interfaces. Whether you're a beginner or an experienced developer looking to stay up-to-date, this guide will help you navigate the world of React in 2024.</h5>
                </div>
                <div className="py-4">
                    <Link href={'/blogpost/blog3'}>
                        <h1 className='text-2xl font-bold'>How To Learn Next js in 2024: A Comprehensive Guide</h1>
                    </Link>
                    <h5> JIn the ever-evolving landscape of web development, staying up-to-date with the latest technologies is crucial. Next.js has emerged as a powerful and popular framework for building modern, server-rendered React applications. If you're eager to master Next.js in 2024, you're in the right place. This guide will walk you through the essential steps to become proficient in Next.js.</h5>
                </div>
            </div>

        </div>
    );
};

export default page;