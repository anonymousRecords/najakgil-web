import React from "react";

type TagProps = {
  tag: string;
};

function Tag({ tag }: TagProps) {
  return (
    <div className="mt-6 h-7 rounded-full bg-gray-200 px-2.5 py-1 text-sm text-gray-500">
      {tag}
    </div>
  );
}

export default Tag;
