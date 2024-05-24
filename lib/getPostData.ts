import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { Post } from "@/type";

const postsDirectory = path.join(process.cwd(), "POST_ARCHIVE");

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  const blogPostWithHTML: Post & { contentHtml: string } = {
    id,
    title: matterResult.data.title,
    description: matterResult.data.description,
    date: matterResult.data.date,
    category: matterResult.data.category,
    contentHtml,
  };

  return blogPostWithHTML;
}
