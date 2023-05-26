import React from 'react';


const Data = async( ) => {
    const post = async() => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        return res.json();
        // console.log(docs);
    };
    const data = await post();
    return(

        <div className="m-5 font bold  grid grid-cols-3">
          {data.map((data,key)=>{
            return(
                <div key={key}>
                    <h1 className='border p-5 shadow-lg rounded-lg'>{data.title}</h1>
                    </div>
            )
          })}
        </div>
    )
};
export default Data;
