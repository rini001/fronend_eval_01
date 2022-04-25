import React, { useEffect, useState } from 'react'

export const User = () => {
    const [user,setUser]=useState([])
    useEffect(() => {
		fetch(`http://localhost:8000/posts`, {
			method: "GET",
			headers: {
				"content-type": "application/json; charset=utf-8",
			},
		})
			.then((response) => {
				return response.json();
			})
			.then((res) => {
				setUser(res);
			})
			.catch((err) => {
				console.log(err);
			});
	},[]);
  return (
    <div>
        {user.map((el)=>(
            <div>
                <h1>{el.id}</h1>
                <div>{el.uname}</div>
                <div>{el.age}</div>
                <div>{el.dob}</div>
                <div>{el.residence}</div>
                <div>{el.address}</div>
                <div>{el.pin}</div>    
            </div>
            
        ))}
    </div>
  )
}
