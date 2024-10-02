import React from 'react'
import { FacebookLogo } from '../icons'

export default function Header() {
	return (
		<header className="bg-orange-200 h-14 w-full fixed top-0 z-10 px-1">
			<div className="flex gap-2 items-center">
				<FacebookLogo className='w-12' />
				<label className="input input-bordered flex items-center gap-2 w-64 h-10 rounded-full">
					<input type="text" className="grow" placeholder="Search" />
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						fill="currentColor"
						className="h-4 w-4 opacity-70">
						<path
							fillRule="evenodd"
							d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
							clipRule="evenodd" />
					</svg>
				</label>

			</div>
		</header>
	)
}
