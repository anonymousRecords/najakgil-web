import ListItem from "@/components/ListItem";
import { getSortedPostsData } from "@/lib/getSortedPostsData";
import React from "react";

function Posts() {
  const posts = getSortedPostsData();
  return (
    <div className=" ">
      <section className="flex flex-col justify-center gap-10 py-9">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </section>
    </div>
  );
}

export default Posts;
