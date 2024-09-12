import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Public from './components/Public'
import Login from "./components/Login"
import './App.css'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Public />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
