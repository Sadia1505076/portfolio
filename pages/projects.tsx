import { Suspense, useState } from 'react';

import Container from 'components/Container';
import BlogPost from 'components/BlogPost';
import { InferGetStaticPropsType } from 'next';
import { indexQuery } from 'lib/queries';
import { getClient } from 'lib/sanity-server';
import { Post, Project } from 'lib/types';

// export default function Blog({
//     posts
//   }: InferGetStaticPropsType<typeof getStaticProps>) {

export default function Blog() {
    const mostRecentProjects: Project[] = [
        {
            title: "Url Shortener using Ticket Server and Base62 encoding",
            githubLink: "https://github.com/Sadia1505076/url_shortener",
            gradient: "from-[#D8B4FE] to-[#818CF8]",
            tools: ["NextJs", "Prisma", "MySql"]
        },
    ];
  const allProjects: Project[] = [
    {
        title: "Prediction of stock prices using time-Series analytical models.",
        githubLink: "https://github.com/Sadia1505076/stock-price-predictor",
        gradient: "from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]",
        tools: ["Django", "Python", "Keras", "MySql"]
    },
    {
        title: "Chaldal tech job portal",
        githubLink: "https://github.com/Sadia1505076/chaldal_job_portal_react",
        gradient: "from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]",
        tools: ["React", "CSS"]
    }
  ];
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = allProjects.filter((project) =>
    project.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Container
      title="Projects – Sadia Tasnim"
      description="My projects so far"
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Projects
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          {`Here are my projects.
            Use the search below to filter by title.`}
        </p>
        <div className="relative w-full mb-4">
          <input
            aria-label="Search articles"
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
        {!searchValue && (
          <>
            <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
              Most Recent
            </h3>
            {mostRecentProjects.map(project => {
                return (
                    <BlogPost
                        title={project.title}
                        tools={project.tools}
                    //   excerpt="Why is Rust being used to replace parts of the JavaScript web ecosystem like minification (Terser), transpilation (Babel), formatting (Prettier), bundling (webpack), linting (ESLint), and more?"
                    //   slug="rust"
                    />
                );
            })}
            {/* <BlogPost
              title="Everything I Know About Style Guides, Design Systems, and Component Libraries"
            //   excerpt="A deep-dive on everything I've learned in the past year building style guides, design systems, component libraries, and their best practices."
            //   slug="style-guides-component-libraries-design-systems"
            />
            <BlogPost
              title="Building a Design System Monorepo with Turborepo"
            //   excerpt="Manage multiple packages with a shared build, test, and release process using Turborepo, Changesets, Storybook, and more."
            //   slug="turborepo-design-system-monorepo"
            /> */}
          </>
        )}
        <Suspense fallback={null}>
          <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
            All Posts
          </h3>
          {!filteredBlogPosts.length && (
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              No posts found.
            </p>
          )}
          {filteredBlogPosts.map((project) => (
            <BlogPost
              key={project.title}
            //   slug={post.slug}
              title={project.title}
              tools={project.tools}
            //   excerpt={post.excerpt}
            />
          ))}
        </Suspense>
      </div>
    </Container>
  );
}

// export async function getStaticProps({ preview = false }) {
//   const posts: Post[] = await getClient(preview).fetch(indexQuery);

//   return { props: { posts } };
// }
