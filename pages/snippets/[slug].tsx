import { MDXRemote } from 'next-mdx-remote';
import SnippetLayout from 'layouts/snippets';
import components from 'components/MDXComponents';
import { snippetsQuery, snippetSlugsQuery } from 'lib/queries';
import { sanityClient, getClient } from 'lib/sanity-server';
import { mdxToHtml } from 'lib/mdx';
import { Snippet } from 'lib/types';
import fs from 'fs';
import matter from "gray-matter"

export default function SnippetsPage({ snippet }: { snippet: Snippet }) {
  return (
    <SnippetLayout snippet={snippet}>
      <MDXRemote {...snippet.content} components={components} />
    </SnippetLayout>
  );
}

export async function getStaticPaths() {
  // const paths = await sanityClient.fetch(snippetSlugsQuery);
  // return {
  //   paths: paths.map((slug) => ({ params: { slug } })),
  //   fallback: 'blocking'
  // };

  return {
    paths: [{ params: { slug: 'js' } }],
    fallback: 'blocking', // can also be true or 'blocking'
  }
}

export async function getStaticProps({ params, preview = false }) {
  // const { snippet } = await getClient(preview).fetch(snippetsQuery, {
  //   slug: params.slug
  // });

  // if (!snippet) {
  //   return { notFound: true };
  // }
  // let snippet: Snippet = {
  //   _id: "id",
  //   slug: "js",
  //   title: "jstitle",
  //   description: "jsdescription",
  //   content
  // }

  // const { html } = await mdxToHtml(snippet.content);
  
// Calling the readFileSync() method
// to read 'input.txt' file
  const { slug } = params;
  const mdxFile = fs.readFileSync(`content/${slug}.mdx`, {encoding:'utf8', flag:'r'});
  const { data, content } = matter(mdxFile)
  const html = await mdxToHtml(content);
  return {
    props: {
      snippet: {
        content: html,
        id: slug,
        slug: slug,
        title: data.title,
        description: data.description,
        logo: data.logo
      }
    }
  };
}

// import { Suspense } from 'react';
// import Container from 'components/Container';
// import dynamic from 'next/dynamic';
// import mdxToHtml from 'lib/mdx';

// const Tooltip = dynamic(
//   () => import("/content/tooltip.mdx"),
// );
// const HashMap = dynamic(
//   () => import("/content/hash-map.mdx"),
// );
// const BinarySearch = dynamic(
//   () => import("/content/binary-search.mdx"),
// );

// function getMdx(slug: string) {
//   console.log("slug inside getmdx func is:", slug)
//   switch (slug) {
//     case "tooltip":
//       return <Tooltip/>
//     case "binary-search":
//       return <BinarySearch/>
//     case "hash-map":
//     default:
//       return <HashMap/>
//   }
// } 

// export default function SnippetDetails({html}) {
//   console.log("inside snippet details:", html);
//   return (
//     <Container
//       title="Code Snippets – Lee Robinson"
//       description="A collection of code snippets – including serverless functions, Node.js scripts, and CSS tricks."
//     >
//       {html}
//     </Container>
//   );
// }

// export async function getStaticPaths() {
//   return { 
//     paths: [{ params: { slug: 'js' } }],
//     fallback: 'blocking', // can also be true or 'blocking' };
//   }
// }

// export async function getStaticProps({ params }) {
//   const { slug } = params;
//   let html = await mdxToHtml(getMdx(slug)); // this is faster than doing it inside SnippetDetails
//   console.log("what is happening:", html)
//   return {
//     props: {
//       html
//     }
//   }
// }