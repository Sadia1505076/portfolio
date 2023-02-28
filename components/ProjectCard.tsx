import Link from 'next/link';
import useSWR from 'swr';
import cn from 'classnames';

import fetcher from 'lib/fetcher';
import { Project, Views } from 'lib/types';

export default function BlogPostCard(project: Project) {
  //const { data } = useSWR<Views>(`/api/views/${project.slug}`, fetcher);
  //const views = data?.total;
  return (
    <Link
      //href={`/blog/${project.slug}`}
      target="_blank"
      rel="noopener noreferrer"
      href={project.githubLink}
      className={cn(
        'transform hover:scale-[1.01] transition-all',
        'rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1',
        project.gradient
      )}
    >
      <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4">
        <div className="flex flex-col justify-between">
          <h4 className="text-lg md:text-lg font-medium w-full text-gray-900 dark:text-gray-100 tracking-tight">
            {project.title}
          </h4>
          <div className="flex items-center text-gray-800 dark:text-gray-200 m-2 ml-10">
            <ul className="list-disc">
              {project.tools.map(tool => {
                return <li>{tool}</li>
              })}
            </ul>
          </div>
        </div>
        <div className="flex items-center text-gray-800 dark:text-gray-200 capsize">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg> */}
          {/* <span className="ml-2 align-baseline capsize">
            {views ? new Number(views).toLocaleString() : '–––'}
          </span> */}
        </div>
      </div>
    </Link>
  );
}