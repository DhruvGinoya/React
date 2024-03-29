import React, { useEffect, useState } from 'react'

function Github() {
    const [data , setData]= useState([])
    useEffect(() => {
       fetch('http://api.github.com/users/DhruvGinoya')
       .then(Response => Response.json() )
       .then (data =>{
        console.log(data);
        setData(data)
       })
    }, [])

    return (
        <div className=" text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github Followers : {data.followers}
        <img src={data.avatar_url} alt="" />
        </div>
    )
}

export default Github
