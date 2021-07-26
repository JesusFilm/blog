import React from 'react'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import {
  getMenus,
  getPostsForCategory,
  getAllPostsWithCategorySlug
} from '../../src/lib/api'
import { GetStaticPaths, GetStaticProps } from 'next'
import { GetPostsForCategory } from '../../src/lib/__generated__/GetPostsForCategory'
import { Helmet } from 'react-helmet'
import { AppProps } from '../_app'
import LocalLink from '../../src/components/LocalLink'
import { Box, Container, Grid } from '@material-ui/core'
import { PostList } from '@jesus-film/ark.compounds.core'

type CategoryPageProps = AppProps & GetPostsForCategory

export default function CategoryPage({ posts }: CategoryPageProps) {
  const router = useRouter()
  if (!router.isFallback && !posts?.nodes[0].slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      {router.isFallback ? (
        <>Loading…</>
      ) : (
        <>
          <Helmet>
            <title>{posts.nodes[0].title} | Jesus Film Project</title>
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

export const getStaticProps: GetStaticProps<CategoryPageProps> = async ({
  params
}) => {
  const data = await getPostsForCategory(params.slug)
  const menus = await getMenus()

  return {
    props: {
      ...data,
      menus
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithCategorySlug()

  return {
    paths: allPosts.map((slug) => `/categories/${slug}`) || [],
    fallback: true
  }
}
