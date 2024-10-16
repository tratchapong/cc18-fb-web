import React, { useState } from 'react'
import Avatar from './Avatar'
import { SendMessageIcon } from '../icons'
import { toast } from 'react-toastify'
import { selectCreateComment, selectToken, selectUser } from '../stores/selector'

export default function CommentForm(props) {
	const { postId } = props
	const token = selectToken()
	const user = selectUser()
	const createComment = selectCreateComment()


	const [message, setMessage] = useState('')

	const hdlSendComment = async e => {
		try {
					//validation
		if(!message.trim()) {
			return toast.error('Please fill comment')
		}
		const body = {
			message : message,
			postId : postId
		}
		await createComment(body ,token)
		// getAllPosts(token)
		setMessage('')
		}catch(err) {
			const errMsg = err.response?.data?.error || err.message
			toast.error(errMsg)
			console.log(errMsg)
		}
	}
	return (
		<div className='relative'>
			<div className="flex gap-3 items-start">
				<Avatar className='w-11 h-11 rounded-full' 
					imgSrc={user.profileImage}
				/>
				<textarea 
					className='textarea w-full p-1 leading-5'
					rows={message.split('\n').length}
					placeholder={`comment by ${user.firstName} ${user.lastName} `}
					value={message}
					onChange={e => setMessage(e.target.value)}
				></textarea>
			</div>
			<button className='btn btn-circle btn-sm absolute bottom-1 right-2'
				onClick={hdlSendComment}
			>
				<SendMessageIcon className='w-6 ms-1' />
			</button>
		</div>
	)
}
