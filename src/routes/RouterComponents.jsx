import React from 'react'
import { Routes, Route} from 'react-router-dom'
import { Form2 } from '../components/Form2'
import { Home } from '../components/Home'
import { User } from '../components/User'


export const RouterComponents = () => {
  return (
    <div>
        <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/two" element={<Form2/>}></Route>
      <Route path="/two/user" element={<User/>}></Route>
      </Routes>
    </div>
  )
}
