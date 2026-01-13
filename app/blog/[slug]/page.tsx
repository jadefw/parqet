import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { HeroHeader } from '@/components/header';
import Footer from '@/components/footer';
import { getBlogPost, getBlogPosts } from '@/lib/blog';

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.metadata.title} - Parqet Blog`,
    description: post.metadata.description,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <HeroHeader />
      <main className="min-h-screen pt-24 pb-20">
        <article className="container mx-auto px-6 max-w-3xl">
          <header className="mb-10 text-center">
             <div className="flex items-center justify-center gap-2 mb-6">
               <span className="bg-muted text-muted-foreground rounded-full px-3 py-1 text-sm font-medium">
                 {post.metadata.category}
               </span>
               <time className="text-muted-foreground text-sm">
                 {post.metadata.date}
               </time>
             </div>
             <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6">{post.metadata.title}</h1>
             <p className="text-xl text-muted-foreground">
               {post.metadata.description}
             </p>
          </header>
          
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <MDXRemote source={post.content} />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
