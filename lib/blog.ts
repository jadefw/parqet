import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content/blog');

export type BlogPost = {
  slug: string;
  metadata: {
    title: string;
    date: string;
    description: string;
    category: string;
    [key: string]: any;
  };
  content: string;
};

export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(contentDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        metadata: data as BlogPost['metadata'],
        content,
      };
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.metadata.date < b.metadata.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getBlogPost(slug: string): BlogPost | null {
  const fullPath = path.join(contentDirectory, `${slug}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    metadata: data as BlogPost['metadata'],
    content,
  };
}

export function getAllCategories(): string[] {
  const posts = getBlogPosts();
  const categories = new Set(posts.map((post) => post.metadata.category));
  return Array.from(categories);
}
