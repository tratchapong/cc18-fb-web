// resource :  https://chatgpt.com/share/670fd320-34a4-800a-9603-7d46a9cd5f9d

import usePostStore from '../stores/postStore'
import useUserStore from '../stores/userStore'

// Function selectors to be used in components
export const selectToken = () => useUserStore(state => state.token);
export const selectUser = () => useUserStore(state => state.user);
export const selectLogout = () => useUserStore(state => state.logout)
export const selectCreateComment = () => usePostStore(state => state.createComment);
export const selectGetAllPosts = () => usePostStore(state => state.getAllPosts);
export const selectResetPosts = () => usePostStore((state) => state.resetPosts);
export const selectPosts = () => usePostStore((state) => state.posts);
export const selectTotalRows = () => usePostStore((state) => state.totalRows);
export const selectCurrentPost = () => usePostStore((state) => state.currentPost);
export const selectSetCurrentPost = () => usePostStore((state) => state.setCurrentPost);
export const selectCreatePost = () => usePostStore(state => state.createPost);
export const selectLoading = () => usePostStore(state => state.loading);
export const selectUpdatePost = () => usePostStore(state => state.updatePost);
export const selectDeletePost = () => usePostStore((state) => state.deletePost);
export const selectCreateLike = () => usePostStore((state) => state.createLike);
export const selectUnLike = () => usePostStore((state) => state.unLike);


// next time : try to use useShallow instead
// const { user, logout } = useUserStore(
//   useShallow((state) => ({ user: state.user, logout: state.logout }))
// );