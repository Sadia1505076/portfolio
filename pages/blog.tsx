import { Suspense, useState } from 'react';
import Container from 'components/Container';
import { allBlogs } from 'lib/global';
import BlogCard from 'components/BlogCard';

export default function Blogs() {
    const [searchValue, setSearchValue] = useState('');
    const filteredBlogPosts = allBlogs.filter(
      (blog) => blog.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
      <Container
        title="Blog – Sadia Tasnim"
        description="My blogs"
      >
        <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
            Blogs
          </h1>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            {`Here are my blogs.\n\n Use the search below to filter by title.`}
          </p>
          <div className="relative w-full mb-4">
            <input
              aria-label="Search projects"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          {!searchValue ? (
            <Suspense fallback={null}>
              {allBlogs.map((blog, index) => {
                return (
                  <BlogCard
                    key={index}
                    index={(index + 1).toString()}
                    href={blog.notionLink}
                    length={"~" + blog.length + " read"}
                    title={blog.title}
                  />
                );
              })}
            </Suspense>
          ) : (
            <Suspense fallback={null}>
              <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
                Search Result
              </h3>
              {!filteredBlogPosts.length && (
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  No posts found.
                </p>
              )}
              {filteredBlogPosts.map((blog, index) => (
                <BlogCard
                  key={index}
                  index={(index + 1).toString()}
                  href={blog.notionLink}
                  length={"~" + blog.length + " read"}
                  title={blog.title}
                />
              ))}
            </Suspense>
          )}
        </div>
      </Container>
    );
}