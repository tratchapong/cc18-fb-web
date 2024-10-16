import Avatar from "./Avatar";
import { PhotoIcon, SmileIcon, VideoIcon } from "../icons";
import PostForm from "./PostForm";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { selectUser } from "../stores/selector";

export default function CreatePost() {
  const user = selectUser()
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex gap-2">
            <Avatar
              imgSrc={user.profileImage}
              className="w-11 h11 rounded-full"
            />
            {/* <button
              className="btn flex-1 rounded-full justify-start"
              onClick={() => {
                setIsOpen(true);
                document.getElementById("postform-modal").showModal();
              }}
            >
              What do you think?
            </button> */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger className ="btn flex-1 rounded-full justify-start" onClick={()=>setIsOpen(true)}>
								What do you think?
							</DialogTrigger>
              <DialogContent>
								<DialogTitle className='text-center'>Create Post</DialogTitle>
								<DialogDescription />
								{isOpen && <PostForm closeMe={()=>setIsOpen(false)} />}
              </DialogContent>
            </Dialog>
          </div>
          <div className="divider mt-1 mb-0"></div>
          <div className="flex gap-3 justify-between">
            <div className="flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg flex-1 py-2 ">
              <VideoIcon height="24" width="24" />
              Live /Stream
            </div>
            <div className="flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg flex-1 py-2 ">
              <PhotoIcon height="24" width="24" />
              Photo / Video
            </div>
            <div className="flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg flex-1 py-2 ">
              <SmileIcon height="24" width="24" />
              Activity
            </div>
          </div>
        </div>
      </div>
      {/* <dialog
        id="postform-modal"
        className="modal"
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <div className="modal-box">
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={(e) => e.target.closest("dialog").close()}
          >
            ✕
          </button>
          {isOpen && <PostForm />}
        </div>
      </dialog> */}
    </>
  );
}
