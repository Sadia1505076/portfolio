import Link from 'next/link';
import cn from 'classnames';
import { Project } from 'lib/types';

const ProjectCard = (project: Project) => {
  console.log(project.title+ ' - '+project.gradient);
  
  return (
    <Link
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
              {project.tools.map((tool, index) => {
                return <li key={index}>{tool}</li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard