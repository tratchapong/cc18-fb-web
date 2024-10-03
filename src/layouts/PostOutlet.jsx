import React from "react";
import SidebarMenu from "../components/SidebarMenu";
import PostContainer from "../components/PostContainer";
import SidebarContact from "../components/SidebarContact";

export default function PostOutlet() {
  return (
    <>
      <SidebarMenu />
      <PostContainer />
      <SidebarContact />
    </>
  );
}
