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

export enum Form {
  Initial,
  Loading,
  Success,
  Error
}

export type FormState = {
  state: Form;
  message?: string;
};

export type Subscribers = {
  count: number;
};

export type Views = {
  total: number;
};

export type Song = {
  songUrl: string;
  artist: string;
  title: string;
};

export type NowPlayingSong = {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
};

export type TopTracks = {
  tracks: Song[];
};

export type YouTube = {
  subscriberCount: number;
  viewCount: number;
};

export type GitHub = {
  stars: number;
};

export type Unsplash = {
  downloads: number;
  views: number;
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
  gradient?: string;
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
