import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

export default function UserLayout() {
  return (
    <div className="min-h-screen bg-yellow-100">
    <Header />
    <main className="relative flex bg-gray-100 border pt-14">
      <Outlet />
    </main>
  </div>
  )
}
