import { HeroHeader } from '@/components/header';
import Footer from '@/components/footer';
import { getBlogPosts, getAllCategories } from '@/lib/blog';
import { BlogList } from './blog-list';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Blog - Parqet',
  description: 'Latest news and updates from Parqet.',
};

export const dynamic = 'force-dynamic';

export default function BlogPage() {
  const posts = getBlogPosts();
  const categories = getAllCategories();

  return (
    <>
      <HeroHeader />
      <section className="py-16 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-2xl space-y-6 text-center">
            <h1 className="text-center text-4xl font-semibold lg:text-5xl">Parqet Blog</h1>
            <p>Alles Neue rund um Parqet.</p>
          </div>

          <Suspense fallback={<div className="py-10 text-center">Loading...</div>}>
            <BlogList posts={posts} categories={categories} />
          </Suspense>
        </div>
      </section>
      <Footer />
    </>
  );
}
