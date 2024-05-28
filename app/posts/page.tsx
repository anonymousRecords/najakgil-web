import ListItem from "@/components/ListItem";
import { getSortedPostsData } from "@/lib/getSortedPostsData";
import React from "react";

function Posts() {
  const posts = getSortedPostsData();
  return (
    <section className="flex flex-col justify-center gap-5 px-10 xl:gap-10 xl:px-40">
      {posts.map((post) => (
        <>
          <ListItem key={post.id} post={post} />
        </>
      ))}
    </section>
  );
}

export default Posts;
