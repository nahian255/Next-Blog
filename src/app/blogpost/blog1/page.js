import React from 'react';
import jdata from '@/jsonData/blog1.json'
const blog1 = () => {
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
                                <li> 1.Understanding the Basics</li>
                                <li> 2.Mastering Control Flow</li>
                                <li>3.Working with the DOM</li>
                                <li>4.Modern JavaScript Features</li>
                                <li>5.Frameworks and Libraries</li>
                                <li>6.Projects for Practical Experience</li>
                                <li>7.Resources for Continuous Learning</li>
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

export default blog1;