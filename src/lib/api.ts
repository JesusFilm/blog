import { GraphQLClient, gql } from "graphql-request";
import { GetAllPostsForHome } from "./__generated__/GetAllPostsForHome";
import { GetAllPostsWithSlug } from "./__generated__/GetAllPostsWithSlug";
import { GetPostAndMorePosts } from "./__generated__/GetPostAndMorePosts";
import { GetPreviewPost } from "./__generated__/GetPreviewPost";

const client = new GraphQLClient(process.env.WORDPRESS_API_URL, {
  headers: {
    authorization: process.env.WORDPRESS_AUTH_REFRESH_TOKEN
      ? `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
      : undefined,
  },
});

const GET_PREVIEW_POST = gql`
  query GetPreviewPost($id: ID!, $idType: PostIdType!) {
    post(id: $id, idType: $idType) {
      databaseId
      slug
      status
    }
  }
`;

export async function getPreviewPost(id, idType = "DATABASE_ID") {
  const data = await client.request<GetPreviewPost>(GET_PREVIEW_POST, {
    id,
    idType,
  });
  return data.post;
}

const GET_ALL_POSTS_WITH_SLUG = gql`
  query GetAllPostsWithSlug {
    posts(first: 10000) {
      edges {
        node {
          slug
        }
      }
    }
  }
`;

export async function getAllPostsWithSlug() {
  const data = await client.request<GetAllPostsWithSlug>(
    GET_ALL_POSTS_WITH_SLUG
  );
  return data?.posts;
}

const GET_ALL_POSTS_FOR_HOME = gql`
  query GetAllPostsForHome {
    posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
      edges {
        node {
          title
          excerpt
          slug
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
          author {
            node {
              name
              firstName
              lastName
              avatar {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export async function getAllPostsForHome(preview) {
  const data = await client.request<GetAllPostsForHome>(
    GET_ALL_POSTS_FOR_HOME,
    {
      onlyEnabled: !preview,
      preview,
    }
  );

  return data?.posts;
}

const GET_POST_AND_MORE_POSTS = gql`
  fragment AuthorFields on User {
    name
    avatar {
      url
    }
  }
  fragment PostFields on Post {
    title
    excerpt
    slug
    date
    featuredImage {
      node {
        sourceUrl
      }
    }
    author {
      node {
        ...AuthorFields
      }
    }
    categories {
      edges {
        node {
          name
        }
      }
    }
    tags {
      edges {
        node {
          name
        }
      }
    }
  }
  query GetPostAndMorePosts($id: ID!, $idType: PostIdType!) {
    post(id: $id, idType: $idType) {
      ...PostFields
      content
      revisions(
        first: 1
        where: { orderby: { field: MODIFIED, order: DESC } }
      ) {
        edges {
          node {
            title
            excerpt
            content
            author {
              node {
                ...AuthorFields
              }
            }
          }
        }
      }
    }
    posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
      edges {
        node {
          ...PostFields
        }
      }
    }
  }
`;

export async function getPostAndMorePosts(slug, preview, previewData) {
  const postPreview = preview && previewData?.post;
  // The slug may be the id of an unpublished post
  const isId = Number.isInteger(Number(slug));
  const isSamePost = isId
    ? Number(slug) === postPreview.id
    : slug === postPreview.slug;
  const isDraft = isSamePost && postPreview?.status === "draft";
  const isRevision = isSamePost && postPreview?.status === "publish";
  const data = await client.request<GetPostAndMorePosts>(
    GET_POST_AND_MORE_POSTS,
    {
      id: isDraft ? postPreview.id : slug,
      idType: isDraft ? "DATABASE_ID" : "SLUG",
    }
  );

  // Draft posts may not have an slug
  if (isDraft) data.post.slug = postPreview.id;
  // Apply a revision (changes in a published post)
  if (isRevision && data.post.revisions) {
    const revision = data.post.revisions.edges[0]?.node;

    if (revision) Object.assign(data.post, revision);
    delete data.post.revisions;
  }

  // Filter out the main post
  data.posts.edges = data.posts.edges.filter(({ node }) => node.slug !== slug);
  // If there are still 3 posts, remove the last one
  if (data.posts.edges.length > 2) data.posts.edges.pop();

  return data;
}
