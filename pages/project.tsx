import { Suspense, useState } from 'react';
import Container from 'components/Container';
import BlogPost from 'components/BlogPost';
import { Project, ProjectTag } from 'lib/types';
import { allProjects } from 'lib/global';

function projectsWithHeader (projects: Project[], headerText: string) {
  return (
    projects.length != 0 && (
      <Suspense fallback={null}>
        <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
          {headerText}
        </h3>
        {projects.map((project) => {
          return (
            <BlogPost
              title={project.title}
              tools={project.tools}
              githubLink={project.githubLink}
              startDate={project.startDate}
              endDate={project.endDate}
            />
          );
        })}
      </Suspense>
    )
  );
}

export default function Projects() {
    const mostRecentProjects: Project[] = allProjects.filter(project =>
      project.tag !== undefined && project.tag.includes(ProjectTag.MostRecent)
    );
    const researchProjects: Project[] = allProjects.filter(project =>
      project.tag !== undefined && project.tag.includes(ProjectTag.Research)
    );
    const problemSolvingProjects: Project[] = allProjects.filter(project =>
      project.tag !== undefined && project.tag.includes(ProjectTag.ProblemSolving)
    );
    const rest: Project[] = allProjects.filter(project => project.tag == undefined || project.tag.length == 0);

    const [searchValue, setSearchValue] = useState('');
    const filteredBlogPosts = allProjects.filter(
      (project) =>
        project.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        project.tools.findIndex(tool => tool.toLowerCase() == searchValue.toLowerCase()) != -1
    );

    return (
      <Container
        title="Project – Sadia Tasnim"
        description="My projects so far"
      >
        <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
            Projects
          </h1>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            {`Here are my projects.\n\n Use the search below to filter by title or any tech stack.`}
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
            <>
              {projectsWithHeader(mostRecentProjects, 'Most Recent')}
              {projectsWithHeader(researchProjects, 'Research')}
              {projectsWithHeader(problemSolvingProjects, 'Problem Solving')}
              {projectsWithHeader(rest, 'Others')}
            </>
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
              {filteredBlogPosts.map((project) => (
                <BlogPost
                  key={project.title}
                  title={project.title}
                  tools={project.tools}
                  githubLink={project.githubLink}
                  startDate={project.startDate}
                  endDate={project.endDate}
                />
              ))}
            </Suspense>
          )}
        </div>
      </Container>
    );
}