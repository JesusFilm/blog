import { GraphQLClient, gql } from 'graphql-request'
import { GetAllPostsForHome } from './__generated__/GetAllPostsForHome'
import { GetAllPostsWithSlug } from './__generated__/GetAllPostsWithSlug'
import { GetMenus } from './__generated__/GetMenus'
import { GetPostAndMorePosts } from './__generated__/GetPostAndMorePosts'
import { GetPreviewPost } from './__generated__/GetPreviewPost'

const client = new GraphQLClient(process.env.WORDPRESS_API_URL, {
  headers: {
    authorization: process.env.WORDPRESS_BASE64_ENCODED_CREDENTIALS
      ? `Basic ${process.env.WORDPRESS_BASE64_ENCODED_CREDENTIALS}`
      : undefined
  }
})

const GET_PREVIEW_POST = gql`
  query GetPreviewPost($id: ID!, $idType: PostIdType!) {
    post(id: $id, idType: $idType) {
      databaseId
      slug
      status
    }
  }
`

export async function getPreviewPost(id, idType = 'DATABASE_ID') {
  const data = await client.request<GetPreviewPost>(GET_PREVIEW_POST, {
    id,
    idType
  })
  return data.post
}

const GET_ALL_POSTS_WITH_SLUG = gql`
  query GetAllPostsWithSlug {
    posts(first: 10000) {
      nodes {
        slug
      }
    }
  }
`

export async function getAllPostsWithSlug() {
  const data = await client.request<GetAllPostsWithSlug>(
    GET_ALL_POSTS_WITH_SLUG
  )
  return data?.posts
}

const GET_ALL_POSTS_FOR_HOME = gql`
  query GetAllPostsForHome {
    premierePosts: posts(
      first: 3
      where: { orderby: { field: DATE, order: DESC } }
    ) {
      nodes {
        title
        slug
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
    defaultPosts: posts(
      first: 6
      where: { orderby: { field: DATE, order: DESC } }
    ) {
      nodes {
        title
        slug
        excerpt
        categories {
          nodes {
            name
            slug
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
        date
      }
    }
    quotePosts: posts(
      first: 1
      where: { tag: "quote", orderby: { field: DATE, order: ASC } }
    ) {
      nodes {
        id
        date
        title
        slug
        customPostFields {
          quote
        }
      }
    }
  }
`

export async function getAllPostsForHome(preview) {
  const data = await client.request<GetAllPostsForHome>(
    GET_ALL_POSTS_FOR_HOME,
    {
      onlyEnabled: !preview,
      preview
    }
  )

  return data
}

const GET_POST_AND_MORE_POSTS = gql`
  fragment AuthorFields on User {
    name
    slug
    avatar {
      url
    }
  }
  fragment PostFields on Post {
    title
    excerpt(format: RAW)
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
      nodes {
        name
        slug
      }
    }
    tags {
      nodes {
        name
        slug
      }
    }
  }
  query GetPostAndMorePosts($id: ID!, $idType: PostIdType!) {
    post(id: $id, idType: $idType) {
      ...PostFields
      blocks {
        __typename
        ... on CoreParagraphBlock {
          attributes {
            ... on CoreParagraphBlockAttributes {
              content
            }
          }
        }
        ... on CoreImageBlock {
          attributes {
            ... on CoreImageBlockAttributes {
              id
              href
              title
              url
              alt
              anchor
              align
            }
          }
        }
        ... on CoreListBlock {
          attributes {
            ordered
            values
          }
        }
        ... on CoreHeadingBlock {
          attributes {
            ... on CoreHeadingBlockAttributes {
              align
              textAlign
              content
              fontSize
              level
            }
          }
        }
        ... on CoreGalleryBlock {
          attributes {
            ... on CoreGalleryBlockAttributes {
              align
              images {
                fullUrl
                link
                alt
              }
              imageCrop
              columns
            }
          }
        }
        ... on CoreQuoteBlock {
          attributes {
            ... on CoreQuoteBlockAttributes {
              value
              citation
            }
          }
        }
      }
    }
    posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        ...PostFields
      }
    }
  }
`

export async function getPostAndMorePosts(slug, preview, previewData) {
  const postPreview = preview && previewData?.post
  // The slug may be the id of an unpublished post
  const isId = Number.isInteger(Number(slug))
  const isSamePost = isId
    ? Number(slug) === postPreview.id
    : slug === postPreview.slug
  const isDraft = isSamePost && postPreview?.status === 'draft'
  const data = await client.request<GetPostAndMorePosts>(
    GET_POST_AND_MORE_POSTS,
    {
      id: isDraft ? postPreview.id : slug,
      idType: isDraft ? 'DATABASE_ID' : 'SLUG'
    }
  )

  // Draft posts may not have an slug
  if (isDraft) data.post.slug = postPreview.id

  // Filter out the main post
  data.posts.nodes = data.posts.nodes.filter((node) => node.slug !== slug)
  // If there are still 3 posts, remove the last one
  if (data.posts.nodes.length > 2) data.posts.nodes.pop()

  return data
}

const GET_MENUS = gql`
  query GetMenus {
    menus {
      nodes {
        id
        name
        locations
        menuItems {
          nodes {
            id
            parentId
            label
            target
            title
            url
          }
        }
      }
    }
  }
`

export async function getMenus() {
  return await client.request<GetMenus>(GET_MENUS)
}
