/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllPostsWithCategorySlug
// ====================================================

export interface GetAllPostsWithCategorySlug_posts_nodes_categories_nodes {
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

export interface GetAllPostsWithCategorySlug_posts_nodes_categories {
  __typename: "PostToCategoryConnection";
  /**
   * The nodes of the connection, without the edges
   */
  nodes: (GetAllPostsWithCategorySlug_posts_nodes_categories_nodes | null)[] | null;
}

export interface GetAllPostsWithCategorySlug_posts_nodes {
  __typename: "Post";
  /**
   * Connection between the post type and the category type
   */
  categories: GetAllPostsWithCategorySlug_posts_nodes_categories | null;
}

export interface GetAllPostsWithCategorySlug_posts {
  __typename: "RootQueryToPostConnection";
  /**
   * The nodes of the connection, without the edges
   */
  nodes: (GetAllPostsWithCategorySlug_posts_nodes | null)[] | null;
}

export interface GetAllPostsWithCategorySlug {
  /**
   * Connection between the RootQuery type and the post type
   */
  posts: GetAllPostsWithCategorySlug_posts | null;
}
