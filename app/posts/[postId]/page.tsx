import { getPostData } from "@/lib/getPostData";
import { getSortedPostsData } from "@/lib/getSortedPostsData";
import React from "react";

async function DetailedPost({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;
  if (!posts.find((post) => post.id === postId)) return <div>dd</div>;
  const { title, date, description, contentHtml } = await getPostData(postId);
  return (
    <div className="flex flex-col items-center justify-center gap-5 p-10 md:px-40 md:py-20">
      <h1 className="text-[32px] font-bold text-[#FFBF00] md:text-[42px]">
        {title}
      </h1>
      <p className="text-[18px] font-semibold text-white">
        {date}&nbsp;&nbsp;|&nbsp;&nbsp;{description}
      </p>
      <div
        className="prose prose-sm mt-6 w-full text-white prose-headings:text-white prose-a:text-white prose-strong:text-yellow-400 prose-code:text-pink-300"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </div>
  );
}

export default DetailedPost;
