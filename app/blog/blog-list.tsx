'use client';

import { useQueryState } from 'nuqs';
import Link from 'next/link';
import { BlogPost } from '@/lib/blog';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface BlogListProps {
  posts: BlogPost[];
  categories: string[];
}

export function BlogList({ posts, categories }: BlogListProps) {
  const [selectedCategory, setSelectedCategory] = useQueryState('category');

  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.metadata.category === selectedCategory)
    : posts;

  return (
    <div className="space-y-8 mt-8">
      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedCategory === null ? 'default' : 'outline'}
          onClick={() => setSelectedCategory(null)}
          size="sm"
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(category)}
            size="sm"
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block transition-transform hover:-translate-y-1"
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{post.metadata.title}</CardTitle>
                <CardDescription>{post.metadata.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.metadata.description}</p>
              </CardContent>
              <CardFooter>
                <span className="bg-muted text-muted-foreground rounded-full px-2.5 py-0.5 text-xs font-semibold">
                  {post.metadata.category}
                </span>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <p className="text-muted-foreground text-center py-10">No posts found.</p>
      )}
    </div>
  );
}
