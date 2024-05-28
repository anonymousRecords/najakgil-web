import { Post } from "@/type";
import Link from "next/link";
import React from "react";
import Tag from "./Tag";

type ListItemProps = {
  post: Post;
};

export default function ListItem({ post }: ListItemProps) {
  const { id, title, description, category } = post;
  return (
    <Link
      className="hover: mx-auto flex flex-col justify-between space-y-4 rounded-xl border-2 bg-white p-8 transition-all duration-300 ease-in-out hover:-translate-y-1.5 md:mx-20 md:flex-row md:space-y-0"
      href={`/posts/${id}`}
    >
      <div className="flex flex-1 flex-col">
        <h3 className="text-[18px] font-semibold xl:text-[22px]">{title}</h3>
        <p className="mt-3 text-[16px] text-[#868b94]">{description}</p>
      </div>
      <div className="flex items-end md:ml-4 md:justify-end">
        <Tag tag={category} />
      </div>
    </Link>
  );
}
