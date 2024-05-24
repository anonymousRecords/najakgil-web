// 전체 포스트 데이터를 가져오는 함수

import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { Post } from "@/type";

const postsDirectory = path.join(process.cwd(), "POST_ARCHIVE");

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    const blogPost: Post = {
      id,
      title: matterResult.data.title,
      description: matterResult.data.description,
      category: matterResult.data.category,
      date: matterResult.data.date,
    };

    return blogPost;
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
