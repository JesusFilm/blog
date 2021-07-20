/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllPostsForHome
// ====================================================

export interface GetAllPostsForHome_premierePosts_nodes_featuredImage_node {
  __typename: "MediaItem";
  /**
   * Url of the mediaItem
   */
  sourceUrl: string | null;
}

export interface GetAllPostsForHome_premierePosts_nodes_featuredImage {
  __typename: "NodeWithFeaturedImageToMediaItemConnectionEdge";
  /**
   * The node of the connection, without the edges
   */
  node: GetAllPostsForHome_premierePosts_nodes_featuredImage_node | null;
}

export interface GetAllPostsForHome_premierePosts_nodes {
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
   * Connection between the NodeWithFeaturedImage type and the MediaItem type
   */
  featuredImage: GetAllPostsForHome_premierePosts_nodes_featuredImage | null;
}

export interface GetAllPostsForHome_premierePosts {
  __typename: "RootQueryToPostConnection";
  /**
   * The nodes of the connection, without the edges
   */
  nodes: (GetAllPostsForHome_premierePosts_nodes | null)[] | null;
}

export interface GetAllPostsForHome_defaultPosts_nodes_categories_nodes {
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

export interface GetAllPostsForHome_defaultPosts_nodes_categories {
  __typename: "PostToCategoryConnection";
  /**
   * The nodes of the connection, without the edges
   */
  nodes: (GetAllPostsForHome_defaultPosts_nodes_categories_nodes | null)[] | null;
}

export interface GetAllPostsForHome_defaultPosts_nodes_featuredImage_node {
  __typename: "MediaItem";
  /**
   * Url of the mediaItem
   */
  sourceUrl: string | null;
}

export interface GetAllPostsForHome_defaultPosts_nodes_featuredImage {
  __typename: "NodeWithFeaturedImageToMediaItemConnectionEdge";
  /**
   * The node of the connection, without the edges
   */
  node: GetAllPostsForHome_defaultPosts_nodes_featuredImage_node | null;
}

export interface GetAllPostsForHome_defaultPosts_nodes {
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
  categories: GetAllPostsForHome_defaultPosts_nodes_categories | null;
  /**
   * Connection between the NodeWithFeaturedImage type and the MediaItem type
   */
  featuredImage: GetAllPostsForHome_defaultPosts_nodes_featuredImage | null;
  /**
   * Post publishing date.
   */
  date: string | null;
}

export interface GetAllPostsForHome_defaultPosts {
  __typename: "RootQueryToPostConnection";
  /**
   * The nodes of the connection, without the edges
   */
  nodes: (GetAllPostsForHome_defaultPosts_nodes | null)[] | null;
}

export interface GetAllPostsForHome_quotePosts_nodes_customPostFields {
  __typename: "Post_Custompostfields";
  quote: string | null;
}

export interface GetAllPostsForHome_quotePosts_nodes {
  __typename: "Post";
  /**
   * The globally unique identifier of the post object.
   */
  id: string;
  /**
   * Post publishing date.
   */
  date: string | null;
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
   * Added to the GraphQL Schema because the ACF Field Group &quot;Custom Post Fields&quot; was set to Show in GraphQL.
   */
  customPostFields: GetAllPostsForHome_quotePosts_nodes_customPostFields | null;
}

export interface GetAllPostsForHome_quotePosts {
  __typename: "RootQueryToPostConnection";
  /**
   * The nodes of the connection, without the edges
   */
  nodes: (GetAllPostsForHome_quotePosts_nodes | null)[] | null;
}

export interface GetAllPostsForHome {
  /**
   * Connection between the RootQuery type and the post type
   */
  premierePosts: GetAllPostsForHome_premierePosts | null;
  /**
   * Connection between the RootQuery type and the post type
   */
  defaultPosts: GetAllPostsForHome_defaultPosts | null;
  /**
   * Connection between the RootQuery type and the post type
   */
  quotePosts: GetAllPostsForHome_quotePosts | null;
}
