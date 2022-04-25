import React, { createContext } from "react";
import { useState } from "react";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [data, setdata] = useState([{}]);
  const [disable, setDisable] = useState(true);
  const handleInfo = (e) => {
    const { name, value } = e.currentTarget;
    setdata({
      ...data,
      [name]: value,
    });
    setDisable(false);
  };

  const handleSubmit = () => {
    // e.prevent.default();
    // console.log(data)
    let _data = {
      uname: data.uname,
      age: data.age,
      dob: data.dob,
      residence: data.residence,
      address: data.address,
      pin: data.pin,
    };

    fetch("http://localhost:8000/posts", {
      method: "POST",
      body: JSON.stringify(_data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
  };

  return (
    <AuthContext.Provider value={{ data, handleInfo, handleSubmit, disable }}>
      {children}
    </AuthContext.Provider>
  );
};
