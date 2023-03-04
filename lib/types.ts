import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type Post = {
  _id: string;
  slug: string;
  content: MDXRemoteSerializeResult;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  readingTime: string;
  tweets: any[];
};

export type Snippet = {
  _id: string;
  slug: string;
  content: MDXRemoteSerializeResult;
  title: string;
  description: string;
  logo: string;
};

export enum ProjectTag {
  MostRecent,
  Favorite,
  Research,
  ProblemSolving
}

export enum BlogTag {
  Favorite
}

export type Project = {
  title: string;
  githubLink: string;
  tools: string[];
  startDate?: string;
  endDate?: string;
  tag?: ProjectTag[];
};

export type Blog = {
  title: string;
  notionLink: string;
  length: string;
  tag?: BlogTag[];
};

export type SnippetCard = {
  title: string;
  description: string;
  logo: string;
  slug: string;
}
