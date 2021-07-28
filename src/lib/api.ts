import { GraphQLClient, gql } from 'graphql-request'
import { GetAllPostsForHome } from './__generated__/GetAllPostsForHome'
import { GetAllPostsWithSlug } from './__generated__/GetAllPostsWithSlug'
import { GetAllPostsWithCategorySlug } from './__generated__/GetAllPostsWithCategorySlug'
import { GetMenus } from './__generated__/GetMenus'
import { GetPostAndMorePosts } from './__generated__/GetPostAndMorePosts'
import { GetPostsForCategory } from './__generated__/GetPostsForCategory'
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
            ... on CoreParagraphBlockDeprecatedV1Attributes {
              content
            }
            ... on CoreParagraphBlockDeprecatedV2Attributes {
              content
            }
            ... on CoreParagraphBlockDeprecatedV3Attributes {
              content
            }
            ... on CoreParagraphBlockDeprecatedV4Attributes {
              content
            }
            ... on CoreParagraphBlockDeprecatedV5Attributes {
              content
            }
          }
        }
        ... on CoreImageBlock {
          attributes {
            ... on CoreImageBlockAttributes {
              alt
              url
              title
              id
            }
            ... on CoreImageBlockDeprecatedV1Attributes {
              alt
              url
              title
              id
            }
            ... on CoreImageBlockDeprecatedV2Attributes {
              alt
              url
              title
              id
            }
            ... on CoreImageBlockDeprecatedV3Attributes {
              alt
              url
              title
              id
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
            ... on CoreHeadingBlockDeprecatedV1Attributes {
              align
              textAlign
              content
              fontSize
              level
            }
            ... on CoreHeadingBlockDeprecatedV2Attributes {
              align
              textAlign
              content
              fontSize
              level
            }
            ... on CoreHeadingBlockDeprecatedV3Attributes {
              align
              textAlign
              content
              fontSize
              level
            }
            ... on CoreHeadingBlockDeprecatedV4Attributes {
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
              images {
                fullUrl
                alt
              }
            }
            ... on CoreGalleryBlockDeprecatedV1Attributes {
              images {
                fullUrl
                alt
              }
            }
            ... on CoreGalleryBlockDeprecatedV2Attributes {
              images {
                fullUrl
                alt
              }
            }
            ... on CoreGalleryBlockDeprecatedV3Attributes {
              images {
                fullUrl
                alt
              }
            }
            ... on CoreGalleryBlockDeprecatedV4Attributes {
              images {
                fullUrl
                alt
              }
            }
            ... on CoreGalleryBlockDeprecatedV5Attributes {
              images {
                fullUrl
                alt
              }
            }
          }
        }
        ... on CoreQuoteBlock {
          attributes {
            ... on CoreQuoteBlockAttributes {
              value
              citation
            }
            ... on CoreQuoteBlockDeprecatedV1Attributes {
              value
              citation
            }
            ... on CoreQuoteBlockDeprecatedV2Attributes {
              value
              citation
            }
            ... on CoreQuoteBlockDeprecatedV3Attributes {
              value
              citation
            }
          }
        }
        ... on CoreEmbedBlock {
          attributes {
            ... on CoreEmbedBlockAttributes {
              url
              providerNameSlug
              align
            }
            ... on CoreEmbedBlockDeprecatedV1Attributes {
              url
              providerNameSlug
              align
            }
          }
        }
        ... on LazyblockArclightBlock {
          attributes {
            ... on LazyblockArclightBlockAttributes {
              refId
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

const GET_POSTS_FOR_CATEGORY = gql`
  query GetPostsForCategory($slug: String!) {
    posts(
      first: 10
      where: { categoryName: $slug, orderby: { field: DATE, order: DESC } }
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
  }
`

export async function getPostsForCategory(slug) {
  const data = await client.request<GetPostsForCategory>(
    GET_POSTS_FOR_CATEGORY,
    {
      slug
    }
  )

  return data
}

const GET_ALL_POSTS_WITH_CATEGORY_SLUG = gql`
  query GetAllPostsWithCategorySlug {
    posts(first: 10000) {
      nodes {
        categories {
          nodes {
            name
            slug
          }
        }
      }
    }
  }
`

export async function getAllPostsWithCategorySlug() {
  const data = await client.request<GetAllPostsWithCategorySlug>(
    GET_ALL_POSTS_WITH_CATEGORY_SLUG
  )
  return data?.posts?.nodes.map(({ categories }) =>
    categories.nodes.map(({ slug }) => slug)
  )
}
