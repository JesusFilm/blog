import { useRouter } from "next/router";
import ErrorPage from "next/error";
import {
  getAllPostsWithSlug,
  getMenus,
  getPostAndMorePosts,
} from "../../src/lib/api";
import { Container } from "@material-ui/core";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  GetPostAndMorePosts_post,
  GetPostAndMorePosts_posts,
} from "../../src/lib/__generated__/GetPostAndMorePosts";
import { Helmet } from "react-helmet";
import { AppProps } from "../_app";

interface PostPageProps extends AppProps {
  preview: boolean;
  post: GetPostAndMorePosts_post;
  posts: GetPostAndMorePosts_posts;
}

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
          <Helmet>
            <title>{post.title} | Jesus Film Blog</title>
            <meta
              property="og:image"
              content={post.featuredImage?.node?.sourceUrl}
            />
          </Helmet>

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
  const menus = await getMenus();

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
      menus,
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
