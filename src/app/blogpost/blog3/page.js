import React from 'react';
import jdata from '@/jsonData/blog3.json'


const blog3 = () => {
    return (
        <div className="min-h-screen  p-12">
            {
                jdata.map((item) => (
                    <div key={item.id}>
                        <h1 className='text-4xl font-bold'>{item.name}</h1>
                        <p className='py-4'>{item.Containt}</p>
                        <div>
                            <p className='text-2xl text-blue-700 '> Table of Contents -</p>
                            <ul className='text-lg'>
                                <li>1.Understand the Basics</li>
                                <li>2.Set Up Your Development Environment</li>
                                <li>3.Learn Next.js Fundamentals</li>
                                <li>4.Explore Advanced Concepts</li>
                                <li>5. Dive into Styling and UI Libraries</li>
                                <li>6.Build Real-World Projects</li>
                                <li>7.Join the Next.js Community</li>
                                <li>8.Tips for Success</li>
                            </ul>
                        </div>
                        <p className='py-4'>{item.Conclusion}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default blog3;