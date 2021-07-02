import { getAllPostsForHome, getMenus } from "../src/lib/api";
import { Container } from "@material-ui/core";
import { GetStaticProps } from "next";
import { GetAllPostsForHome_posts } from "../src/lib/__generated__/GetAllPostsForHome";
import Link from "next/link";
import { AppProps } from "./_app";

interface HomePageProps extends AppProps {
  preview: boolean;
  posts: GetAllPostsForHome_posts;
}

export default function PostPage({ posts }: HomePageProps) {
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
  const menus = await getMenus();

  return {
    props: {
      preview,
      posts: data.posts,
      menus,
    },
  };
};
