import axios from 'axios'
import {create} from 'zustand'
import {produce} from 'immer'
import useUserStore from './userStore'
import zukeeper from 'zukeeper'

const usePostStore = create(zukeeper( (set, get) => ({
	posts : [],
	totalRows : 0,
	currentPost : null,
	loading: false,
	createPost : async (body, token, user) => {
		const rs = await axios.post('http://localhost:8899/post', body , {
			headers : { Authorization : `Bearer ${token}`}
		})	

		// set(state => ({
		// 	posts : [ {...rs.data, user, likes: [], comments: []}, ...state.posts]
		// }))

		set( produce( state => {state.posts.unshift( {...rs.data, user, likes:[], comments:[]}) }) )
	},
	getAllPosts : async (token,skip=get().posts.length, perPage=3) => {
		set(produce(state =>  {state.loading = true }))
		// set({loading: true})
		const rs = await  axios.get(`http://localhost:8899/post?skip=${skip}&perPage=${perPage}`, {
			headers : { Authorization : `Bearer ${token}`}
		})
		console.log(rs.data.posts)
		// set(state => ({posts: [...state.posts, ...rs.data.posts], loading: false, totalRows: rs.data.rows}))
		set(produce(state => {
			state.posts.push(...rs.data.posts)
			state.loading = false
			state.totalRows = rs.data.rows
		}))
		set({loading: false})
	},
	deletePost : async ( token, id) => {
		const rs = await axios.delete(`http://localhost:8899/post/${id}`, {
			headers : { Authorization : `Bearer ${token}`}
		})
		// set(state => ({
		// 	posts: state.posts.filter(el => el.id !== id)
		// }))
		set( produce( state => { 
			let idx = state.posts.findIndex(el=>el.id === id)
			state.posts.splice(idx,1)
		 }) )
	},
	setCurrentPost : (post) => {
		set({currentPost : post})
	},

	updatePost : async (body, token, id) => {
		const rs = await axios.put(`http://localhost:8899/post/${id}`, body, {
			headers : { Authorization : `Bearer ${token}`}	
		})
		// set(state => ({
		// 	posts : state.posts.map(el=> el.id===id ? {...el, ...rs.data} : el  )
		// }))
		set( produce( state => {
			let idx = state.posts.findIndex(el=>el.id === id)
			state.posts[idx] = { ...state.posts[idx], ...rs.data }
		} ))
	},
	createComment : async (body, token) => {
		const rs = await axios.post('http://localhost:8899/comment' ,body, {
			headers : { Authorization : `Bearer ${token}`}	
		})	
		// set(state => ({
		// 	posts : state.posts.map( el => el.id===body.postId 
		// 		? {...el, comments : [...el.comments, {...rs.data, user: useUserStore.getState().user } ]}
		// 		: el 
		// 	)
		// }))
		set( produce( state => {
			let idx = state.posts.findIndex(el => el.id === body.postId)
			state.posts[idx].comments.push({...rs.data, ...useUserStore.getState().user })
		}))
	},
	createLike : async (token, body) => {
		const rs = await axios.post('http://localhost:8899/like', body, {
			headers : { Authorization : `Bearer ${token}`}	
		})
		// set(state => ({
		// 	posts : state.posts.map( el => el.id===body.postId
		// 	? {...el, likes : [...el.likes, {...rs.data, user: useUserStore.getState().user }]}
		// 	: el 
		// )
		// }))
		set(produce( state => {
			let idx = state.posts.findIndex(el => el.id === body.postId)
			state.posts[idx].likes.push({...rs.data, ...useUserStore.getState().user})
		}))
	},
	unLike : async  (token, id) => {
		const rs = await axios.delete(`http://localhost:8899/like/${id}`, {
			headers : { Authorization : `Bearer ${token}`}	
		})
		// set(state => ({
		// 	posts: state.posts.map( el => el.id===id 
		// 		? {...el, likes : el.likes.filter ( x => x.postId !== id && x.userId !== useUserStore.getState().user.id)}
		// 		: el
		// 	)
		// }))
		set(produce(state => {
			let idx = state.posts.findIndex(el => el.id === id)
			let idx2 = state.posts[idx].likes.findIndex(el => el.postId === id && el.userId === useUserStore.getState().user.id)
			state.posts[idx].likes.splice(idx2, 1)
		}))
	},
	resetPosts : () => {
		set(state => ({ posts : [], totalRows : 0, currentPost: null, loading: false}))
	}
})))

window.store = usePostStore

export default usePostStore