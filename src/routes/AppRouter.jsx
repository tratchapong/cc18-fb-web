import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom'
import Login from '../pages/Login'
import App from '../App'
import SidebarMenu from '../components/SidebarMenu'
import PostContainer from '../components/PostContainer'
import SidebarContact from '../components/SidebarContact'
import useUserStore from '../stores/userStore'
import Profile from '../pages/Profile'
import Friends from '../pages/Friends'

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
			{path: 'friends', element : <Friends />},
			{path: 'profile', element : <Profile />},
			{path: '*', element : <Navigate to='/' />}
		]
	},	
])

export default function AppRouter() {
	const user = useUserStore(state=>state.user)
	const finalRouter = user ? userRouter : guestRouter
	return(
		<RouterProvider router={finalRouter} />
	)
}
