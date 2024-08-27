import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_SECRET });

export const fetchDatabaseByFavourite = async () => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      property: 'tag',
      multi_select: {
        contains: 'Favourite',
      },
    },
    sorts: [
      {
        property: 'order', // Another property to sort by
        direction: 'ascending',
      },
    ],
  });
  return response.results;
};

export const fetchFullDatabase = async () => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    sorts: [
      {
        property: 'order', // Another property to sort by
        direction: 'ascending',
      },
    ],
  });
  return response.results;
};

export const getBlogDatabaseId = async () => {
  const response = await notion.search({
    query: "blog",
    filter: { property: "object", value: "database" },
  });
  return response.results[0].id;
}

export const fetchPage = async (pageId: string) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};

export const fetchPageBlocks = async (pageId: string) => {
  const response = await notion.blocks.children.list({ block_id: pageId });
  return response.results; // This contains the content blocks
};