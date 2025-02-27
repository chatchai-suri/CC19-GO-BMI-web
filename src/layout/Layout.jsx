//rfce
import React from 'react'
import { Outlet } from 'react-router'
import UserNavBar from '../components/UserNavBar'

function Layout() {
  return (
    <div>
      Layout
      <UserNavBar />
      <Outlet />
    </div>
  )
}

export default Layout