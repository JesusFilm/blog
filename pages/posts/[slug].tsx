import React from 'react'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import {
  getAllPostsWithSlug,
  getMenus,
  getPostAndMorePosts
} from '../../src/lib/api'
import { GetStaticPaths, GetStaticProps } from 'next'
import { GetPostAndMorePosts } from '../../src/lib/__generated__/GetPostAndMorePosts'
import { Helmet } from 'react-helmet'
import { AppProps } from '../_app'
import { Post } from '@jesus-film/ark.elements.core'
import LocalLink from '../../src/components/LocalLink'

type PostPageProps = AppProps &
  GetPostAndMorePosts & {
    preview: boolean
  }

export default function PostPage({ post }: PostPageProps) {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      {router.isFallback ? (
        <>Loading…</>
      ) : (
        <>
          <Helmet>
            <title>{post.title} | Jesus Film Project</title>
            <meta
              property="og:image"
              content={post.featuredImage?.node?.sourceUrl}
            />
          </Helmet>
          <Post
            {...post}
            CategoryLink={LocalLink('categories')}
            AuthorLink={LocalLink('authors')}
          />
        </>
      )}
    </>
  )
}

export const getStaticProps: GetStaticProps<PostPageProps> = async ({
  params,
  preview = false,
  previewData
}) => {
  const data = await getPostAndMorePosts(params.slug, preview, previewData)
  const menus = await getMenus()

  return {
    props: {
      ...data,
      preview,
      menus
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts.nodes.map(({ slug }) => `/posts/${slug}`) || [],
    fallback: true
  }
}
