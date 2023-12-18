import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className=" flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <Link href={'/blogpost/blog1'}>
                    <h1 className='text-xl font-bold'> Blog title is this 1</h1>
                </Link>
                <h5> blog subtitle</h5>
            </div>
            <div>
                <Link href={'/blogpost/blog2'}>
                    <h1 className='text-xl font-bold'> Blog title is this 1</h1>
                </Link>
                <h5> blog subtitle</h5>
            </div>
            <div>
                <h1 className='text-xl font-bold'> Blog title is this 3</h1>
                <h5> blog subtitle</h5>
            </div>

        </div>
    );
};

export default page;