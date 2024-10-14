import React, { useEffect, useRef, useState } from "react";
import CreatePost from "./CreatePost";
import PostItem from "./PostItem";
import usePostStore from "../stores/postStore";
import useUserStore from "../stores/userStore";
import PostFormEdit from "./PostFormEdit";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function PostContainer() {
	// console.log('PostContainer run...')
  const posts = usePostStore((state) => state.posts);
  const getAllPosts = usePostStore((state) => state.getAllPosts);
  const totalRows = usePostStore((state) => state.totalRows);
  const token = useUserStore((state) => state.token);
  const currentPost = usePostStore((state) => state.currentPost);
  const setCurrentPost = usePostStore((state) => state.setCurrentPost);
  const [skip, setSkip] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleOnScroll = () => {
    if (
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight
    ) {
      setSkip(posts.length);
    }
  };

  useEffect(() => {
    getAllPosts(token, skip, 3);
  }, [skip]);

  useEffect(() => {
    posts.length < totalRows
      ? window.addEventListener("scroll", handleOnScroll)
      : window.removeEventListener("scroll", handleOnScroll);
    return () => {
      window.removeEventListener("scroll", handleOnScroll);
    };
  }, [posts.length]);

  return (
    <>
      <div className="w-[680px] mx-auto min-h-screen my-3 flex flex-col gap-4 rounded-lg ">
        <CreatePost />
        {posts.map((el) => (
          <PostItem key={el.id} post={el} setIsOpen={setIsOpen} />
        ))}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent>
            <DialogTitle className="text-center">Edit Post</DialogTitle>
            <DialogDescription />
              {isOpen && (
                <PostFormEdit
                  closeMe={() => setIsOpen(false)}
                />
              )}
          </DialogContent>
        </Dialog>

        {/* <button
					className={`btn ${posts.length >= totalRows ? 'btn-disabled' : 'btn-primary'}`}
					onClick={() => setSkip(prv => prv + 3)}>Next</button> */}

        {posts.length >= totalRows && (
          <button
            className="btn btn-primary"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            Scroll to Top
          </button>
        )}
      </div>

      {/* modal */}
      {/* <dialog id="editform-modal" className="modal" onClose={() => setCurrentPost(null)}>
				<div className="modal-box">
					<button
						type="button"
						className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
						onClick={e => e.target.closest('dialog').close()}
					>✕</button>
					{currentPost && <PostFormEdit />}

				</div>
			</dialog> */}
    </>
  );
}
