/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllPostsForHome
// ====================================================

export interface GetAllPostsForHome_posts_edges_node_featuredImage_node {
  __typename: "MediaItem";
  /**
   * Url of the mediaItem
   */
  sourceUrl: string | null;
}

export interface GetAllPostsForHome_posts_edges_node_featuredImage {
  __typename: "NodeWithFeaturedImageToMediaItemConnectionEdge";
  /**
   * The nodes of the connection, without the edges
   */
  node: GetAllPostsForHome_posts_edges_node_featuredImage_node | null;
}

export interface GetAllPostsForHome_posts_edges_node_author_node_avatar {
  __typename: "Avatar";
  /**
   * URL for the gravatar image source.
   */
  url: string | null;
}

export interface GetAllPostsForHome_posts_edges_node_author_node {
  __typename: "User";
  /**
   * Display name of the user. This is equivalent to the WP_User-&gt;dispaly_name property.
   */
  name: string | null;
  /**
   * First name of the user. This is equivalent to the WP_User-&gt;user_first_name property.
   */
  firstName: string | null;
  /**
   * Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property.
   */
  lastName: string | null;
  /**
   * Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument.
   */
  avatar: GetAllPostsForHome_posts_edges_node_author_node_avatar | null;
}

export interface GetAllPostsForHome_posts_edges_node_author {
  __typename: "NodeWithAuthorToUserConnectionEdge";
  /**
   * The nodes of the connection, without the edges
   */
  node: GetAllPostsForHome_posts_edges_node_author_node | null;
}

export interface GetAllPostsForHome_posts_edges_node {
  __typename: "Post";
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   */
  title: string | null;
  /**
   * The excerpt of the post.
   */
  excerpt: string | null;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name
   * field and the post_name column in the database for the
   * &quot;post_objects&quot; table.
   */
  slug: string | null;
  /**
   * Post publishing date.
   */
  date: string | null;
  /**
   * Connection between the NodeWithFeaturedImage type and the MediaItem type
   */
  featuredImage: GetAllPostsForHome_posts_edges_node_featuredImage | null;
  /**
   * Connection between the NodeWithAuthor type and the User type
   */
  author: GetAllPostsForHome_posts_edges_node_author | null;
}

export interface GetAllPostsForHome_posts_edges {
  __typename: "RootQueryToPostConnectionEdge";
  /**
   * The item at the end of the edge
   */
  node: GetAllPostsForHome_posts_edges_node | null;
}

export interface GetAllPostsForHome_posts {
  __typename: "RootQueryToPostConnection";
  /**
   * Edges for the RootQueryToPostConnection connection
   */
  edges: (GetAllPostsForHome_posts_edges | null)[] | null;
}

export interface GetAllPostsForHome {
  /**
   * Connection between the RootQuery type and the post type
   */
  posts: GetAllPostsForHome_posts | null;
}
