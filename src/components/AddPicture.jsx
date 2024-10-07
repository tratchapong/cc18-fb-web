import React from 'react'
import { AddPictureIcon } from '../icons'

export default function AddPicture(props) {
	const {closeMe} = props
	const hdlClose = e => {
		e.stopPropagation()
		closeMe()
	}
	return (
		<div className="flex flex-col p-2 border rounded-lg">
			<div className="bg-slate-100 hover:bg-slate-200 min-h-40 rounded-lg relative cursor-pointer"
				onClick={()=>document.getElementById('input-file').click()}
			>
				<input type="file" className='opacity-0' id='input-file' />
				<button 
					className='btn btn-sm btn-circle btn-outline border-gray-300 absolute top-1 right-1 opacity-50'
					onClick={hdlClose}	
				>x</button>
				<p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
					<AddPictureIcon className='w-10 opacity-70' />
				</p>
			</div>
		</div>
	)
}
