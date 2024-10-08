import React from 'react'
import CommentItem from './CommentItem'
import CommentForm from './CommentForm'

export default function CommentContainer() {
	return (
		<div className='flex flex-col gap-3'>
			<div className="text-xs">see all comments</div>
			<CommentItem />
			<CommentForm />

		</div>
	)
}
