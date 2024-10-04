import axios from 'axios'
import {create} from 'zustand'

const useUserStore = create( (set, get)=> ({
	user: null,
	token : '',
	login : async (input)=>{
		const rs = await axios.post('http://localhost:8899/auth/login', input)
		console.log(rs.data)
		set({token : rs.data.token , user: rs.data.user})
		return rs.data
	},
	logout : ()=>{
		set({token: '', user: null})
	}
}) )

export default useUserStore