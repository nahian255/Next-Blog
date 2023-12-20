import React from 'react';
import jdata from '@/jsonData/blog2.json'


const blog2 = () => {
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
                                <li>2. Hands-On Practice with Code</li>
                                <li>3.Explore React Hooks</li>
                                <li>4.Routing with React Router</li>
                                <li>5.State Management with Redux</li>
                                <li>6.Testing React Applications</li>
                                <li>7.Stay Updated with React Ecosystem</li>
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

export default blog2;