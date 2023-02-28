import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Container from '../components/Container';
import ProjectCard from '../components/ProjectCard';
import BlogCard from '../components/BlogCard';
import { allProjects } from 'lib/global';
import { Project, ProjectTag } from 'lib/types';

export default function Home() {
  const favProjects: Project[] = allProjects.filter(project => project.tag !== undefined && project.tag.includes(ProjectTag.Favorite));
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
                alt="Sadia Tasnim"
                height={176}
                width={176}
                src="/sadia.jpg"
                sizes="30vw"
                priority
                className="rounded-full filter"
              />
            </div>
          </div>

          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
            Featured Projects
          </h3>
          <div className="flex gap-6 flex-col md:flex-row">
            {favProjects.map((project) => (
              <ProjectCard
                title={project.title}
                githubLink={project.githubLink}
                gradient={project.gradient}
                tools={project.tools}
              />
            ))}
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
          <BlogCard
            index="01"
            href="https://sadiatasnim.notion.site/CPP-cheat-sheet-5fea2d5e1c0e496396c1a68a50897521"
            length="~6 mins read"
            title="C++ cheat sheet"
          />
          <BlogCard
            index="02"
            href="https://www.notion.so/sadiatasnim/Terraform-IaC-Infrastructure-as-Code-cd14290775294a6189c584d5a88d9468?pvs=4"
            length="~3 mins read"
            title="Terraform - the basics and how to install it on windows"
          />
          <BlogCard
            index="03"
            href="https://sadiatasnim.notion.site/Typescript-9247cea5f5be47aa8d0bf3bc3a448103"
            length="~4 mins read"
            title="Typescript - Classes, Type manipulation and Miscellaneous"
          />
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
          {/* <Subscribe /> */}
        </div>
      </Container>
    </Suspense>
  );
}
