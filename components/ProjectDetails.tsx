import Link from 'next/link';
import { isEmptyOrNull } from 'lib/helper';

export default function ProjectDetails({
  title,
  tools,
  githubLink,
  startDate,
  endDate
}: {
  title: string;
  tools: string[];
  githubLink: string;
  startDate?: string;
  endDate?: string;
}) {
  let duration = !isEmptyOrNull(startDate)
    ? startDate +
      (isEmptyOrNull(endDate)
        ? ' - Current'
        : startDate == endDate
        ? ''
        : ' - ' + endDate)
    : '';

  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href={githubLink}
      className="w-full transform hover:scale-[1.01] transition-all"
    >
      <div className="w-full mb-8">
        <div className="flex flex-col justify-between md:flex-row">
          <h4 className="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">
            {title}
          </h4>
          {!isEmptyOrNull(duration) ? (
            <p className="w-32 mb-4 text-left text-gray-500 md:text-right md:mb-0">
              {duration}
            </p>
          ) : null}
        </div>
        <p className="text-gray-600 dark:text-gray-400">{tools.join(', ')}</p>
      </div>
    </Link>
  );
}
