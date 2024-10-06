import Avatar from "./Avatar";
import {
  CloseIcon,
  CommentIcon,
  LikeIcon,
  MenuIcon,
  PhotoIcon,
  ShareIcon,
  SmileIcon,
  ThreeDotIcon,
  VideoIcon,
} from "../icons";
import useUserStore from "../stores/userStore";

export default function PostItem(props) {
  const { post } = props;
  const user = useUserStore((state) => state.user);
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body p-3">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <Avatar
              imgSrc={post.user.profileImage}
              className="w-11 h11 rounded-full"
            />
            <div className="flex flex-col">
              <p className="font-bold">
                {post.user.firstName} {post.user.lastName}
              </p>
              <p className="text-xs font-bold opacity-50">59 min.</p>
            </div>
          </div>
          <div className="flex gap-2">
            {post.userId === user.id && (
              <div className="dropdown">
                <div tabIndex={0} role="button" className="">
                  <div className="avatar items-center cursor-pointer ">
                    <div className="w-10 h-10 rounded-full !flex justify-center items-center  hover:bg-gray-200">
                      <ThreeDotIcon className="w-6" />
                    </div>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                >
                  <li>
                    <a>Edit</a>
                  </li>
                  <li>
                    <a>Delete</a>
                  </li>
                </ul>
              </div>
            )}

            <div className="avatar items-center cursor-pointer ">
              <div className="w-10 h-10 rounded-full !flex justify-center items-center hover:bg-gray-200 ">
                <CloseIcon className="w-6" />
              </div>
            </div>
          </div>
        </div>
        {/* Post message */}
        <p>{post.message}</p>
        {post.image && (
          <img src={post.image} className="p-4 max-h-[500px] object-contain" />
        )}

        <div className="divider h-0 my-0"></div>
        <div className="flex gap-3 justify-between">
          <div className="flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg flex-1 py-2 ">
            <LikeIcon className="w-6" />
            Like
          </div>
          <div className="flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg flex-1 py-2 ">
            <CommentIcon className="w-7" />
            Comment
          </div>
          <div className="flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg flex-1 py-2 ">
            <ShareIcon height="24" width="24" />
            Share
          </div>
        </div>
        <div className="divider h-0 my-0"></div>
      </div>
    </div>
  );
}
