/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllPostsWithAuthorSlug
// ====================================================

export interface GetAllPostsWithAuthorSlug_posts_nodes_author_node {
  __typename: "User";
  /**
   * The slug for the user. This field is equivalent to WP_User-&gt;user_nicename
   */
  slug: string | null;
}

export interface GetAllPostsWithAuthorSlug_posts_nodes_author {
  __typename: "NodeWithAuthorToUserConnectionEdge";
  /**
   * The node of the connection, without the edges
   */
  node: GetAllPostsWithAuthorSlug_posts_nodes_author_node | null;
}

export interface GetAllPostsWithAuthorSlug_posts_nodes {
  __typename: "Post";
  /**
   * Connection between the NodeWithAuthor type and the User type
   */
  author: GetAllPostsWithAuthorSlug_posts_nodes_author | null;
}

export interface GetAllPostsWithAuthorSlug_posts {
  __typename: "RootQueryToPostConnection";
  /**
   * The nodes of the connection, without the edges
   */
  nodes: (GetAllPostsWithAuthorSlug_posts_nodes | null)[] | null;
}

export interface GetAllPostsWithAuthorSlug {
  /**
   * Connection between the RootQuery type and the post type
   */
  posts: GetAllPostsWithAuthorSlug_posts | null;
}
