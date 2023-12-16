import React from 'react';


const pageroute = async () => {

    // const res = await fetch('https://jsonplaceholder.typicode.com/users')
    // const repo = await res.json()
    // // console.log(repo);

    return (
        <div className=' min-h-screen p-20'>
            <h1 >This isddddddd about page </h1>
            {repo.map((item) => (
                <h1 key={item.id} className='bg-red-100'>
                    Name - {item.name}
                </h1>
            ))}
            <h1 className='bg-red-500'> under map</h1>
        </div>
    );
};

export default pageroute;