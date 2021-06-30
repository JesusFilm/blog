import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getAllPostsForHome } from "../src/lib/api";
import { Container } from "@material-ui/core";
import { GetStaticProps } from "next";
import { GetAllPostsForHome_posts } from "../src/lib/__generated__/GetAllPostsForHome";
import Link from "next/link";

type HomePageProps = {
  preview: boolean;
  posts: GetAllPostsForHome_posts;
};

export default function PostPage({ posts, preview }: HomePageProps) {
  return (
    <>
      <Container>
        {posts.nodes.map((node) => (
          <Link href={`posts/${node.slug}`} key={node.slug}>
            <div>
              {node.title}
              <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              <img src={node.featuredImage.node.sourceUrl} width={100} />
            </div>
          </Link>
        ))}
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps<HomePageProps> = async ({
  preview = false,
}) => {
  const data = await getAllPostsForHome(preview);

  return {
    props: {
      preview,
      posts: data.posts,
    },
  };
};
