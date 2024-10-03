import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom'
import Login from '../pages/Login'
import UserLayout from '../layouts/UserLayout'
import PostOutlet from '../layouts/PostOutlet'

const guestRouter = createBrowserRouter([
  {    path: '/', element: <Login />  },
  {    path: '*', element: <Navigate to='/' />},
])

const userRouter = createBrowserRouter([
  {
    path: '/', element: <UserLayout />,
    children: [
      { path: '', element : <PostOutlet />},
      { path: 'friends', element : <p className="text-xl w-fit mx-auto py-10">Friends Page</p> },
    ]
  }
])

export default function AppRouter() {
  const user = null
  const finalRouter = user? userRouter : guestRouter
  return (
    <RouterProvider router={finalRouter}/>
  )
}
