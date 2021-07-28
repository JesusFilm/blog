import React from 'react'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import {
  getMenus,
  getPostsForAuthor,
  getAllPostsWithAuthorSlug
} from '../../src/lib/api'
import { GetStaticPaths, GetStaticProps } from 'next'
import { GetPostsForAuthor } from '../../src/lib/__generated__/GetPostsForAuthor'
import { Helmet } from 'react-helmet'
import { AppProps } from '../_app'
import LocalLink from '../../src/components/LocalLink'
import { Box, Container, Grid } from '@material-ui/core'
import { PostList } from '@jesus-film/ark.compounds.core'

type AuthorPageProps = AppProps & GetPostsForAuthor

export default function AuthorPage({ posts }: AuthorPageProps) {
  const router = useRouter()
  if (!router.isFallback && !posts?.nodes[0]?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      {router.isFallback ? (
        <>Loading…</>
      ) : (
        <>
          <Helmet>
            <title>
              {posts.nodes[0].author?.node?.name} | Jesus Film Project
            </title>
            <meta
              property="og:image"
              content={posts.nodes[0].featuredImage?.node?.sourceUrl}
            />
          </Helmet>
          <Container>
            <Box my={5}>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  <PostList
                    posts={posts}
                    variant="default"
                    PostLink={LocalLink('posts')}
                    CategoryLink={LocalLink('categories')}
                  />
                </Grid>
              </Grid>
            </Box>
          </Container>
        </>
      )}
    </>
  )
}

export const getStaticProps: GetStaticProps<AuthorPageProps> = async ({
  params
}) => {
  const data = await getPostsForAuthor(params.slug)
  const menus = await getMenus()

  return {
    props: {
      ...data,
      menus
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithAuthorSlug()

  return {
    paths: allPosts.map((slug) => `/authors/${slug}`) || [],
    fallback: true
  }
}
