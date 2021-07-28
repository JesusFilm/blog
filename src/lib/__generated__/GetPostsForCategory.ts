/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPostsForCategory
// ====================================================

export interface GetPostsForCategory_posts_nodes_categories_nodes {
  __typename: "Category";
  /**
   * The human friendly name of the object.
   */
  name: string | null;
  /**
   * An alphanumeric identifier for the object unique to its type.
   */
  slug: string | null;
}

export interface GetPostsForCategory_posts_nodes_categories {
  __typename: "PostToCategoryConnection";
  /**
   * The nodes of the connection, without the edges
   */
  nodes: (GetPostsForCategory_posts_nodes_categories_nodes | null)[] | null;
}

export interface GetPostsForCategory_posts_nodes_featuredImage_node {
  __typename: "MediaItem";
  /**
   * Url of the mediaItem
   */
  sourceUrl: string | null;
}

export interface GetPostsForCategory_posts_nodes_featuredImage {
  __typename: "NodeWithFeaturedImageToMediaItemConnectionEdge";
  /**
   * The node of the connection, without the edges
   */
  node: GetPostsForCategory_posts_nodes_featuredImage_node | null;
}

export interface GetPostsForCategory_posts_nodes {
  __typename: "Post";
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   */
  title: string | null;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name
   * field and the post_name column in the database for the
   * &quot;post_objects&quot; table.
   */
  slug: string | null;
  /**
   * The excerpt of the post.
   */
  excerpt: string | null;
  /**
   * Connection between the post type and the category type
   */
  categories: GetPostsForCategory_posts_nodes_categories | null;
  /**
   * Connection between the NodeWithFeaturedImage type and the MediaItem type
   */
  featuredImage: GetPostsForCategory_posts_nodes_featuredImage | null;
  /**
   * Post publishing date.
   */
  date: string | null;
}

export interface GetPostsForCategory_posts {
  __typename: "RootQueryToPostConnection";
  /**
   * The nodes of the connection, without the edges
   */
  nodes: (GetPostsForCategory_posts_nodes | null)[] | null;
}

export interface GetPostsForCategory {
  /**
   * Connection between the RootQuery type and the post type
   */
  posts: GetPostsForCategory_posts | null;
}

export interface GetPostsForCategoryVariables {
  slug: string;
}
