import { Blog, BlogTag, Project, ProjectTag } from './types';

export const allProjects: Project[] = [
  {
    title: 'Url Shortener using Ticket Server and Base62 encoding',
    githubLink: 'https://github.com/Sadia1505076/url_shortener',
    tools: ['NextJs', 'Prisma', 'MySql'],
    startDate: 'Jan 2023',
    tag: [ProjectTag.MostRecent, ProjectTag.Favorite]
  },
  {
    title: 'Analyzing hCov genome sequence',
    githubLink:
      'https://github.com/pythonLoader/Analyzing-hCov-Genome-Sequence',
    tools: ['Python', 'Keras', 'Scikit-Learn'],
    startDate: 'Mar 2020',
    endDate: 'Feb 2021',
    tag: [ProjectTag.Research]
  },
  {
    title: 'Leetcode',
    githubLink: 'https://github.com/Sadia1505076/leetcode',
    tools: ['C++'],
    startDate: 'Jan 2023',
    tag: [ProjectTag.ProblemSolving]
  },
  {
    title: 'Project Euler',
    githubLink: 'https://github.com/Sadia1505076/Project-Euler',
    tools: ['TypeScript'],
    startDate: 'Aug 2020',
    tag: [ProjectTag.ProblemSolving]
  },
  {
    title: 'Prediction of stock prices using time-Series analytical models.',
    githubLink: 'https://github.com/Sadia1505076/stock-price-predictor',
    tools: ['Django', 'Python', 'Keras', 'MySql'],
    startDate: 'May 2019',
    endDate: 'May 2019',
    tag: [ProjectTag.Favorite],
  },
  {
    title: 'Chaldal tech job portal',
    githubLink: 'https://github.com/Sadia1505076/chaldal_job_portal_react',
    tools: ['React', 'CSS'],
    startDate: 'Aug 2020',
    endDate: 'Aug 2020',
    tag: [ProjectTag.Favorite]
  },
  {
    title: 'Automated Medication System',
    githubLink: 'https://github.com/Sadia1505076/Automated_medication_system',
    tools: ['C', 'ATmega32', 'RTC module'],
    startDate: 'July 2018',
    endDate: 'July 2018'
  },
  {
    title: 'Bookstore',
    githubLink: 'https://github.com/Sadia1505076/bookstore_db_project',
    tools: ['Java', 'HTML', 'CSS'],
    startDate: 'Jun 2018',
    endDate: 'Jun 2018'
  },
  {
    title: 'SMTP server',
    githubLink: 'https://github.com/Sadia1505076/smtp/',
    tools: ['Java'],
    startDate: 'Nov 2018',
    endDate: 'Nov 2018'
  },
  {
    title: 'HTTP server',
    githubLink: 'https://github.com/Sadia1505076/HTTPserver',
    tools: ['Java'],
    startDate: 'Nov 2018',
    endDate: 'Nov 2018'
  }
];

export const allBlogs: Blog[] = [
  {
    title: 'Terraform - the basics and how to install it on windows',
    notionLink:
      'https://sadiatasnim.notion.site/Terraform-IaC-Infrastructure-as-Code-cd14290775294a6189c584d5a88d9468',
    length: '3 mins',
    tag: [BlogTag.Favorite]
  },
  {
    title: 'MDX with NextJs',
    notionLink:
      'https://sadiatasnim.notion.site/MDX-with-NextJs-e322c579735c4eccb6fd66e15720fb91',
    length: '3 mins', // ~ word_count / 200
    tag: [BlogTag.Favorite]
  },
  {
    title: 'F# - cleanliness and readability',
    notionLink:
      'https://sadiatasnim.notion.site/F-cleanliness-and-readability-715630d9c50c42ada5a81e8d188c3817',
    length: '3 mins 30 secs',
    tag: [BlogTag.Favorite]
  },
  {
    title: 'C++ cheat sheet',
    notionLink:
      'https://sadiatasnim.notion.site/CPP-cheat-sheet-5fea2d5e1c0e496396c1a68a50897521',
    length: '6 mins',
  },
  {
    title: 'Typescript - Classes',
    notionLink:
      'https://sadiatasnim.notion.site/Typescript-9247cea5f5be47aa8d0bf3bc3a448103',
    length: '1 mins 30 secs',
  },
  {
    title: 'Typescript - Type manipulation',
    notionLink:
      'https://sadiatasnim.notion.site/Typescript-9247cea5f5be47aa8d0bf3bc3a448103',
    length: '2 mins',
  },
  {
    title: 'Typescript - Miscellaneous',
    notionLink:
      'https://sadiatasnim.notion.site/Typescript-9247cea5f5be47aa8d0bf3bc3a448103',
    length: '1 mins',
  }
];
