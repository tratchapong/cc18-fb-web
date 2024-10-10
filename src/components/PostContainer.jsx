import React, { useEffect, useState } from 'react'
import CreatePost from './CreatePost'
import PostItem from './PostItem'
import usePostStore from '../stores/postStore'
import useUserStore from '../stores/userStore'
import PostFormEdit from './PostFormEdit'

export default function PostContainer() {
	const posts = usePostStore(state => state.posts)
	const getAllPosts = usePostStore(state => state.getAllPosts)
	const totalRows = usePostStore(state => state.totalRows)
	const token = useUserStore(state => state.token)
	const currentPost = usePostStore(state => state.currentPost)
	const setCurrentPost = usePostStore(state => state.setCurrentPost)
	const [page, setPage] = useState(1)

	useEffect(() => {
		getAllPosts(token, page, 3)
	}, [page])

	const handleOnScroll = () => {
		if (
			window.scrollY + window.innerHeight >=
			document.documentElement.scrollHeight
		) {
			setPage((prev) => prev + 1);
		}
	};

	useEffect(() => {
		posts.length < totalRows
			? window.addEventListener('scroll', handleOnScroll)
			: window.removeEventListener('scroll', handleOnScroll)
		return () => {
			window.removeEventListener('scroll', handleOnScroll)

		}
	}, [posts.length])

	// console.log(posts)
	return (
		<>
			<div className="w-[680px] mx-auto min-h-screen my-3 flex flex-col gap-4 rounded-lg ">
				<CreatePost />
				{posts.map(el => (
					<PostItem key={el.id} post={el} />
				))}
				{/* <button 
					className={`btn ${posts.length >= totalRows ? 'btn-disabled' : 'btn-primary'}`}
					onClick={() => setPage(prv => prv + 1)}>Next</button> */}
				{posts.length >= totalRows && <button
					className='btn btn-primary'
					onClick={() => {
						window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
					}}
				>
					Scroll to Top
				</button>}
			</div>

			{/* modal */}
			<dialog id="editform-modal" className="modal" onClose={() => setCurrentPost(null)}>
				<div className="modal-box">
					<button
						type="button"
						className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
						onClick={e => e.target.closest('dialog').close()}
					>✕</button>
					{currentPost && <PostFormEdit />}

				</div>
			</dialog>
		</>
	)
}
