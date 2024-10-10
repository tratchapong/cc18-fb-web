import axios from 'axios'
import {create} from 'zustand'
import useUserStore from './userStore'

const usePostStore = create( (set, get) => ({
	posts : [],
	totalRows : 0,
	currentPost : null,
	loading: false,
	createPost : async (body, token, user) => {
		const rs = await axios.post('http://localhost:8899/post', body , {
			headers : { Authorization : `Bearer ${token}`}
		})	
		set(state => ({
			posts : [ {...rs.data, user, likes: [], comments: []}, ...state.posts]
		}))
	},
	getAllPosts : async (token,page=1, perPage=5) => {
		set({loading: true})
		const rs = await  axios.get(`http://localhost:8899/post?page=${page}&perPage=${perPage}`, {
			headers : { Authorization : `Bearer ${token}`}
		})
		console.log(rs.data.posts)
		set(state => ({posts: [...state.posts, ...rs.data.posts], loading: false, totalRows: rs.data.rows}))
	},
	deletePost : async ( token, id) => {
		const rs = await axios.delete(`http://localhost:8899/post/${id}`, {
			headers : { Authorization : `Bearer ${token}`}
		})
		set(state => ({
			posts: state.posts.filter(el => el.id !== id)
		}))
	},
	setCurrentPost : (post) => {
		set({currentPost : post})
	},

	updatePost : async (body, token, id) => {
		const rs = await axios.put(`http://localhost:8899/post/${id}`, body, {
			headers : { Authorization : `Bearer ${token}`}	
		})
		set(state => ({
			posts : state.posts.map(el=> el.id===id ? {...el, ...rs.data} : el  )
		}))
		console.log(get().posts)
	},
	createComment : async (body, token) => {
		const rs = await axios.post('http://localhost:8899/comment' ,body, {
			headers : { Authorization : `Bearer ${token}`}	
		})	
		set(state => ({
			posts : state.posts.map( el => el.id===body.postId 
				? {...el, comments : [...el.comments, {...rs.data, user: useUserStore.getState().user } ]}
				: el 
			)
		}))
	},
	createLike : async (token, body) => {
		const rs = await axios.post('http://localhost:8899/like', body, {
			headers : { Authorization : `Bearer ${token}`}	
		})
		set(state => ({
			posts : state.posts.map( el => el.id===body.postId
			? {...el, likes : [...el.likes, {...rs.data, user: useUserStore.getState().user }]}
			: el 
		)
		}))
	},
	unLike : async  (token, id) => {
		const rs = await axios.delete(`http://localhost:8899/like/${id}`, {
			headers : { Authorization : `Bearer ${token}`}	
		})
		set(state => ({
			posts: state.posts.map( el => el.id===id 
				? {...el, likes : el.likes.filter ( x => x.postId !== id && x.userId !== useUserStore.getState().user.id)}
				: el
			)
		}))
	},
	resetPosts : () => {
		set(state => ({ posts : [], totalRows : 0, currentPost: null, loading: false}))
	}
}))

export default usePostStore