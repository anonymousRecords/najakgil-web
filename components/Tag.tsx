import React from "react";

type TagProps = {
  tag: string;
};

function Tag({ tag }: TagProps) {
  return (
    <div className="flex h-5 items-center rounded-full bg-gray-200 px-2.5 py-1 text-[12px] text-gray-500 xl:h-7 xl:text-sm">
      {tag}
    </div>
  );
}

export default Tag;
