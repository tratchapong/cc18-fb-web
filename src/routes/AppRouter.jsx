import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom'
import Login from '../pages/Login'
import App from '../App'
import SidebarMenu from '../components/SidebarMenu'
import PostContainer from '../components/PostContainer'
import SidebarContact from '../components/SidebarContact'

const guestRouter = createBrowserRouter([
	{ path : '/', element: <Login />},
	{ path : '*', element: <Navigate to='/' />}
])

const userRouter = createBrowserRouter([
	{ path : '/', element : <App />, 
		children : [
			{path: '', element :<>
				<SidebarMenu />
				<PostContainer />
				<SidebarContact />
			</>},
			{path: 'friends', element : <p>Friends Page</p>},
			{path: '*', element : <Navigate to='/' />}
		]
	},
	
])

export default function AppRouter() {
	const user = {}
	const finalRouter = user ? userRouter : guestRouter
	return(
		<RouterProvider router={finalRouter} />
	)
}
