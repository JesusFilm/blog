import React from 'react'
import { getAllPostsForHome, getMenus } from '../src/lib/api'
import { Box, Container, Grid } from '@material-ui/core'
import { PostList } from '@jesus-film/ark.compounds.core'
import { PostCard } from '@jesus-film/ark.elements.core'
import { GetStaticProps } from 'next'
import { GetAllPostsForHome } from '../src/lib/__generated__/GetAllPostsForHome'
import NextLink from 'next/link'
import { AppProps } from './_app'

type HomePageProps = AppProps &
  GetAllPostsForHome & {
    preview: boolean
  }

export default function PostPage({
  premierePosts,
  quotePosts,
  defaultPosts
}: HomePageProps) {
  return (
    <Container>
      <Box my={5}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <PostList
              posts={premierePosts}
              variant="premiere"
              PostLink={(props) => (
                <NextLink {...props} href={`/posts/${props.href}`} passHref />
              )}
            />
          </Grid>
          {quotePosts?.nodes?.[0] && (
            <Grid item xs={12}>
              <PostCard
                variant="quote"
                {...quotePosts.nodes[0]}
                PostLink={(props) => (
                  <NextLink {...props} href={`/posts/${props.href}`} passHref />
                )}
              />
            </Grid>
          )}
          <Grid item xs={12}>
            <PostList posts={defaultPosts} variant="default" />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export const getStaticProps: GetStaticProps<HomePageProps> = async ({
  preview = false
}) => {
  const data = await getAllPostsForHome(preview)
  const menus = await getMenus()

  return {
    props: {
      ...data,
      preview,
      menus
    }
  }
}
