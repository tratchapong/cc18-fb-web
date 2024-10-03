import React from 'react'
import { BookmarkIcon, ClockIcon, FriendIcon, GroupIcon, HomeIcon, MoreIcon, PlayIcon, ShopIcon } from '../icons'
import MenuItem from './MenuItem'


export default function SidebarMenu() {
	return (
		<div className="fixed top-14 h-full w-[350px] 
		overflow-auto flex flex-col gap-2 min-w-[220px] max-xl:w-[200px]">
			<MenuItem icon={HomeIcon} text="Andy Codecamp" className='w-10' />
			<MenuItem icon={FriendIcon} text="Friends" className="w-11" />
			<MenuItem icon={ClockIcon} text="Memories" className="w-10" />
			<MenuItem icon={BookmarkIcon} text="Save" className="w-10" />
			<MenuItem
				icon={GroupIcon}
				text="Group"
				className="w-10 border border-gray-500 rounded-ful"
			/>
			<MenuItem icon={PlayIcon} text="Video" className="w-10" />
			<MenuItem icon={ShopIcon} text="Marketplace" className="w-10" />
			<MenuItem
				icon={MoreIcon}
				text="More.."
				className="w-10 p-2 border border-gray-500 rounded-full"
			/>
			<div className="divider"></div>
		</div>
	)
}
