import { serialize } from 'next-mdx-remote/serialize';
import readingTime from 'reading-time';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';

export async function mdxToHtml(source) {
  const mdxSource = await serialize(source, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['anchor']
            }
          }
        ]
      ],
      format: 'mdx'
    }
  });
  return mdxSource;
}

// import { remark } from 'remark';
// import html from 'remark-html';
// import prism from 'remark-prism';

// export default async function mdxToHtml(markdown) {
//   const result = await remark()
//     // https://github.com/sergioramos/remark-prism/issues/265
//     .use(html, { sanitize: false })
//     .use(prism)
//     .process(markdown);
//   return result.toString();
// }