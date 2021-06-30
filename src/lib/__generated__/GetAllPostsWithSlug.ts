/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllPostsWithSlug
// ====================================================

export interface GetAllPostsWithSlug_posts_nodes {
  __typename: "Post";
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name
   * field and the post_name column in the database for the
   * &quot;post_objects&quot; table.
   */
  slug: string | null;
}

export interface GetAllPostsWithSlug_posts {
  __typename: "RootQueryToPostConnection";
  /**
   * The nodes of the connection, without the edges
   */
  nodes: (GetAllPostsWithSlug_posts_nodes | null)[] | null;
}

export interface GetAllPostsWithSlug {
  /**
   * Connection between the RootQuery type and the post type
   */
  posts: GetAllPostsWithSlug_posts | null;
}
