import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Container from '../components/Container';
import ProjectCard from '../components/ProjectCard';
import BlogCard from '../components/BlogCard';
import { allBlogs, allProjects } from 'lib/global';
import { Blog, BlogTag, Project, ProjectTag } from 'lib/types';

export default function Home() {
  const favProjects: Project[] = allProjects.filter(
    (project) =>
      project.tag !== undefined && project.tag.includes(ProjectTag.Favorite)
  );
  const favBlogs: Blog[] = allBlogs.filter(
    (project) =>
      project.tag !== undefined && project.tag.includes(BlogTag.Favorite)
  );
  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                Sadia Tasnim
              </h1>
              <h2 className="text-gray-700 dark:text-gray-200 mb-4">
                Software Engineer
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-16">
                I'm a software engineer who enjoys solving problems and is
                constantly keen to learn about and try out new technologies.
              </p>
            </div>
            <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
              <Image
                style={{borderRadius: '50%'}}
                alt="Sadia Tasnim"
                height={176}
                width={176}
                src="/sadia.jpg"
                sizes="30vw"
                priority
                className="rounded-full filter w-[80px] sm:w-[176px]"
              />
            </div>
          </div>

          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
            Featured Projects
          </h3>
          <div className="flex gap-6 flex-col md:flex-row">
            {favProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                githubLink={project.githubLink}
                tools={project.tools}
              />)
            )}
          </div>
          <Link
            href="/project"
            className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
          >
            <>
              {'All projects'}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 ml-1"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                />
              </svg>
            </>
          </Link>

          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white">
            What I am upto
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            These are the things I have been practicing and learning about.
          </p>
          {favBlogs.map((blog, index) => {
            return (
              <BlogCard
                key={index}
                index={(index + 1).toString()}
                href={blog.notionLink}
                length={'~' + blog.length + ' read'}
                title={blog.title}
              />
            );
          })}
          <Link
            href="/blog"
            className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
          >
            Read all posts
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </Link>
          <span className="h-16" />
        </div>
      </Container>
    </Suspense>
  );
}
