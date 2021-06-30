import { useRouter } from "next/router";
import ErrorPage from "next/error";
// import Container from "../../components/container";
// import PostBody from "../../components/post-body";
// import MoreStories from "../../components/more-stories";
// import Header from "../../components/header";
// import PostHeader from "../../components/post-header";
// import SectionSeparator from "../../components/section-separator";
// import Layout from "../../components/layout";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../src/lib/api";
import { Container } from "@material-ui/core";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  GetPostAndMorePosts_post,
  GetPostAndMorePosts_posts,
} from "../../src/lib/__generated__/GetPostAndMorePosts";
import Link from "next/link";
// import PostTitle from "../../components/post-title";
import Head from "next/head";
// import { CMS_NAME } from "../../lib/constants";
// import Tags from "../../components/tags";

type PostPageProps = {
  preview: boolean;
  post: GetPostAndMorePosts_post;
  posts: GetPostAndMorePosts_posts;
};

export default function PostPage({ post, posts, preview }: PostPageProps) {
  const router = useRouter();
  const morePosts = posts?.nodes;

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      {router.isFallback ? (
        <>Loading…</>
      ) : (
        <>
          <Head>
            <title>{post.title} | Jesus Film Blog</title>
            <meta
              property="og:image"
              content={post.featuredImage?.node?.sourceUrl}
            />
          </Head>

          {/* <PostHeader
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            src={post.featuredImage.node.sourceUrl}
            author={post.author.node.name}
            category={post.categories.nodes[0].name}
            CategoryLink={(props) => (
              <Link
                href={`/categories/${post.categories.nodes[0].slug}`}
                passHref
              >
                <a {...props} />
              </Link>
            )}
            AuthorLink={(props) => (
              <Link href={`/authors/${post.author.node.slug}`} passHref>
                <a {...props} />
              </Link>
            )}
          /> */}
          <Container>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </Container>
        </>
      )}
    </>
    // <Layout preview={preview}>
    //   <Container>
    //     <Header />
    //     {router.isFallback ? (
    //       <PostTitle>Loading…</PostTitle>
    //     ) : (
    //       <>
    //         <article>
    //           <Head>
    //             <title>
    //               {post.title} | Next.js Blog Example with {CMS_NAME}
    //             </title>
    //             <meta
    //               property="og:image"
    //               content={post.featuredImage?.node?.sourceUrl}
    //             />
    //           </Head>
    //           <PostHeader
    //             title={post.title}
    //             coverImage={post.featuredImage?.node}
    //             date={post.date}
    //             author={post.author?.node}
    //             categories={post.categories}
    //           />
    //           <PostBody content={post.content} />
    //           <footer>
    //             {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
    //           </footer>
    //         </article>

    //         <SectionSeparator />
    //         {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    //       </>
    //     )}
    //   </Container>
    // </Layout>
  );
}

export const getStaticProps: GetStaticProps<PostPageProps> = async ({
  params,
  preview = false,
  previewData,
}) => {
  const data = await getPostAndMorePosts(params.slug, preview, previewData);

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.nodes.map(({ slug }) => `/posts/${slug}`) || [],
    fallback: true,
  };
};
