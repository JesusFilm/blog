import { useRouter } from "next/router";
import ErrorPage from "next/error";
import {
  getAllPostsWithSlug,
  getMenus,
  getPostAndMorePosts,
} from "../../src/lib/api";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  GetPostAndMorePosts_post,
  GetPostAndMorePosts_posts,
} from "../../src/lib/__generated__/GetPostAndMorePosts";
import { Helmet } from "react-helmet";
import { AppProps } from "../_app";
import { Post } from "@jesus-film/ark.elements.core";
import Link from "next/link";

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
          <Post
            {...post}
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
          />
        </>
      )}
    </>
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
