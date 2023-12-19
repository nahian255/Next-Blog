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
                            <p> Table of Contents </p>
                            <ul>
                                <li>Understanding the Basics</li>
                                <li>Mastering Control Flow</li>
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