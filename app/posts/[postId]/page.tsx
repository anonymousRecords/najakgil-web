import { getPostData } from "@/lib/getPostData";
import { getSortedPostsData } from "@/lib/getSortedPostsData";
import React from "react";

async function DetailedPost({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;
  if (!posts.find((post) => post.id === postId)) return <div>dd</div>;
  const { title, date, description, contentHtml } = await getPostData(postId);
  return (
    <div className="flex flex-col items-center justify-center gap-5 px-40 py-20">
      <h1 className="text-[42px] font-bold text-[#FFBF00]">{title}</h1>
      <p className="text-[18px] font-semibold text-white">
        {date}&nbsp;&nbsp;|&nbsp;&nbsp;{description}
      </p>
      <div
        className="prose prose-2xl mt-6 w-full text-white"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </div>
  );
}

export default DetailedPost;
