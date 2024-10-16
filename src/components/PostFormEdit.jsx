import React, { useState } from 'react'
import Avatar from './Avatar'
import { PhotoIcon } from '../icons'
import { toast } from 'react-toastify'
import AddPicture from './AddPicture'
import { selectCurrentPost, selectLoading, selectSetCurrentPost, selectToken, selectUpdatePost, selectUser } from '../stores/selector'

export default function PostFormEdit(props) {
	const {closeMe} =props
	const user = selectUser()
	const token = selectToken()
	const currentPost = selectCurrentPost()
	const setCurrentPost = selectSetCurrentPost()
	const updatePost = selectUpdatePost()
	const loading = selectLoading()

	const [message, setMessage] = useState(currentPost.message)
	const [addPic, setAddPic] = useState(false)
	const [file, setFile] = useState(null)
	const [removePic, setRemovePic] = useState(false)

	const hdlChange = e => {
		setMessage(e.target.value)
	}
	const hdlEditPost = async e => {
		try {
			const body = new FormData()
			body.append('message', message)
			if(file) {
				body.append('image', file)
			}
			if(removePic) {
				body.append('removePic', true)
			}
			await updatePost(body, token, currentPost.id)
			closeMe()
		}catch(err) {
			const errMsg = err.response?.data?.error || err.message
			console.log(errMsg)
			toast.error(errMsg)		
		}finally{
			
		}
	}
	return (
		<div className="flex flex-col gap-2">
			{ loading && <span className="loading loading-dots loading-xs"></span> }
			<div className="divider mt-1 mb-0"></div>
			<div className="flex gap-2">
				<Avatar
					className='w-11 h-11 rounded-full'
					imgSrc={user.profileImage}
				/>
				<div className="flex flex-col">
					<div className="text-sm">{user.firstName} {user.lastName}</div>
					<select className="select bg-slate-200 select-xs w-full max-w-xs"
						defaultValue={'who can see?'}
					>
						<option disabled>who can see?</option>
						<option>public</option>
						<option>friends</option>
					</select>
				</div>
			</div>
			<textarea className="textarea textarea-ghost"
				placeholder={`what do you think? ${user.firstName}`}
				value={message}
				onChange={hdlChange}
				rows={message.split('\n').length}
			></textarea>
			{currentPost.image && !removePic && (
				<div className='border flex justify-evenly items-center'>
					<img src={currentPost.image} className='h-[100px] object-contain' />
					<button className='btn btn-sm' onClick={()=>setRemovePic(true)} >Remove</button>
				</div>
			) }
			{addPic && 
				<AddPicture closeMe={()=>setAddPic(false)} 
					file={file} setFile={setFile}
				/>}
			<div className="flex border rounded-lg p-2 justify-between items-center">
				<p>add with your post</p>
				<div className="flex gap-2">
					<div
						onClick={()=>setAddPic(prv=>!prv)}
						className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex justify-center items-center
	active:scale-110">
						<PhotoIcon className="w-7 h-7" />
					</div>
				</div>
			</div>
			<button className={`btn btn-sm ${message.trim() ? 'btn-primary' : 'btn-disabled'}`} onClick={hdlEditPost}>Update Post</button>
		</div>
	)
}
