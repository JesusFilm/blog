/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PostIdType } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: GetPostAndMorePosts
// ====================================================

export interface GetPostAndMorePosts_post_featuredImage_node {
  __typename: "MediaItem";
  /**
   * Url of the mediaItem
   */
  sourceUrl: string | null;
}

export interface GetPostAndMorePosts_post_featuredImage {
  __typename: "NodeWithFeaturedImageToMediaItemConnectionEdge";
  /**
   * The nodes of the connection, without the edges
   */
  node: GetPostAndMorePosts_post_featuredImage_node | null;
}

export interface GetPostAndMorePosts_post_author_node_avatar {
  __typename: "Avatar";
  /**
   * URL for the gravatar image source.
   */
  url: string | null;
}

export interface GetPostAndMorePosts_post_author_node {
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
  avatar: GetPostAndMorePosts_post_author_node_avatar | null;
}

export interface GetPostAndMorePosts_post_author {
  __typename: "NodeWithAuthorToUserConnectionEdge";
  /**
   * The nodes of the connection, without the edges
   */
  node: GetPostAndMorePosts_post_author_node | null;
}

export interface GetPostAndMorePosts_post_categories_edges_node {
  __typename: "Category";
  /**
   * The human friendly name of the object.
   */
  name: string | null;
}

export interface GetPostAndMorePosts_post_categories_edges {
  __typename: "PostToCategoryConnectionEdge";
  /**
   * The item at the end of the edge
   */
  node: GetPostAndMorePosts_post_categories_edges_node | null;
}

export interface GetPostAndMorePosts_post_categories {
  __typename: "PostToCategoryConnection";
  /**
   * Edges for the PostToCategoryConnection connection
   */
  edges: (GetPostAndMorePosts_post_categories_edges | null)[] | null;
}

export interface GetPostAndMorePosts_post_tags_edges_node {
  __typename: "Tag";
  /**
   * The human friendly name of the object.
   */
  name: string | null;
}

export interface GetPostAndMorePosts_post_tags_edges {
  __typename: "PostToTagConnectionEdge";
  /**
   * The item at the end of the edge
   */
  node: GetPostAndMorePosts_post_tags_edges_node | null;
}

export interface GetPostAndMorePosts_post_tags {
  __typename: "PostToTagConnection";
  /**
   * Edges for the PostToTagConnection connection
   */
  edges: (GetPostAndMorePosts_post_tags_edges | null)[] | null;
}

export interface GetPostAndMorePosts_post_revisions_edges_node_author_node_avatar {
  __typename: "Avatar";
  /**
   * URL for the gravatar image source.
   */
  url: string | null;
}

export interface GetPostAndMorePosts_post_revisions_edges_node_author_node {
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
  avatar: GetPostAndMorePosts_post_revisions_edges_node_author_node_avatar | null;
}

export interface GetPostAndMorePosts_post_revisions_edges_node_author {
  __typename: "NodeWithAuthorToUserConnectionEdge";
  /**
   * The nodes of the connection, without the edges
   */
  node: GetPostAndMorePosts_post_revisions_edges_node_author_node | null;
}

export interface GetPostAndMorePosts_post_revisions_edges_node {
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
   * The content of the post.
   */
  content: string | null;
  /**
   * Connection between the NodeWithAuthor type and the User type
   */
  author: GetPostAndMorePosts_post_revisions_edges_node_author | null;
}

export interface GetPostAndMorePosts_post_revisions_edges {
  __typename: "PostToRevisionConnectionEdge";
  /**
   * The item at the end of the edge
   */
  node: GetPostAndMorePosts_post_revisions_edges_node | null;
}

export interface GetPostAndMorePosts_post_revisions {
  __typename: "PostToRevisionConnection";
  /**
   * Edges for the postToRevisionConnection connection
   */
  edges: (GetPostAndMorePosts_post_revisions_edges | null)[] | null;
}

export interface GetPostAndMorePosts_post {
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
  featuredImage: GetPostAndMorePosts_post_featuredImage | null;
  /**
   * Connection between the NodeWithAuthor type and the User type
   */
  author: GetPostAndMorePosts_post_author | null;
  /**
   * Connection between the post type and the category type
   */
  categories: GetPostAndMorePosts_post_categories | null;
  /**
   * Connection between the post type and the tag type
   */
  tags: GetPostAndMorePosts_post_tags | null;
  /**
   * The content of the post.
   */
  content: string | null;
  /**
   * Connection between the post type and the post type
   */
  revisions: GetPostAndMorePosts_post_revisions | null;
}

export interface GetPostAndMorePosts_posts_edges_node_featuredImage_node {
  __typename: "MediaItem";
  /**
   * Url of the mediaItem
   */
  sourceUrl: string | null;
}

export interface GetPostAndMorePosts_posts_edges_node_featuredImage {
  __typename: "NodeWithFeaturedImageToMediaItemConnectionEdge";
  /**
   * The nodes of the connection, without the edges
   */
  node: GetPostAndMorePosts_posts_edges_node_featuredImage_node | null;
}

export interface GetPostAndMorePosts_posts_edges_node_author_node_avatar {
  __typename: "Avatar";
  /**
   * URL for the gravatar image source.
   */
  url: string | null;
}

export interface GetPostAndMorePosts_posts_edges_node_author_node {
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
  avatar: GetPostAndMorePosts_posts_edges_node_author_node_avatar | null;
}

export interface GetPostAndMorePosts_posts_edges_node_author {
  __typename: "NodeWithAuthorToUserConnectionEdge";
  /**
   * The nodes of the connection, without the edges
   */
  node: GetPostAndMorePosts_posts_edges_node_author_node | null;
}

export interface GetPostAndMorePosts_posts_edges_node_categories_edges_node {
  __typename: "Category";
  /**
   * The human friendly name of the object.
   */
  name: string | null;
}

export interface GetPostAndMorePosts_posts_edges_node_categories_edges {
  __typename: "PostToCategoryConnectionEdge";
  /**
   * The item at the end of the edge
   */
  node: GetPostAndMorePosts_posts_edges_node_categories_edges_node | null;
}

export interface GetPostAndMorePosts_posts_edges_node_categories {
  __typename: "PostToCategoryConnection";
  /**
   * Edges for the PostToCategoryConnection connection
   */
  edges: (GetPostAndMorePosts_posts_edges_node_categories_edges | null)[] | null;
}

export interface GetPostAndMorePosts_posts_edges_node_tags_edges_node {
  __typename: "Tag";
  /**
   * The human friendly name of the object.
   */
  name: string | null;
}

export interface GetPostAndMorePosts_posts_edges_node_tags_edges {
  __typename: "PostToTagConnectionEdge";
  /**
   * The item at the end of the edge
   */
  node: GetPostAndMorePosts_posts_edges_node_tags_edges_node | null;
}

export interface GetPostAndMorePosts_posts_edges_node_tags {
  __typename: "PostToTagConnection";
  /**
   * Edges for the PostToTagConnection connection
   */
  edges: (GetPostAndMorePosts_posts_edges_node_tags_edges | null)[] | null;
}

export interface GetPostAndMorePosts_posts_edges_node {
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
  featuredImage: GetPostAndMorePosts_posts_edges_node_featuredImage | null;
  /**
   * Connection between the NodeWithAuthor type and the User type
   */
  author: GetPostAndMorePosts_posts_edges_node_author | null;
  /**
   * Connection between the post type and the category type
   */
  categories: GetPostAndMorePosts_posts_edges_node_categories | null;
  /**
   * Connection between the post type and the tag type
   */
  tags: GetPostAndMorePosts_posts_edges_node_tags | null;
}

export interface GetPostAndMorePosts_posts_edges {
  __typename: "RootQueryToPostConnectionEdge";
  /**
   * The item at the end of the edge
   */
  node: GetPostAndMorePosts_posts_edges_node | null;
}

export interface GetPostAndMorePosts_posts {
  __typename: "RootQueryToPostConnection";
  /**
   * Edges for the RootQueryToPostConnection connection
   */
  edges: (GetPostAndMorePosts_posts_edges | null)[] | null;
}

export interface GetPostAndMorePosts {
  /**
   * An object of the post Type. 
   */
  post: GetPostAndMorePosts_post | null;
  /**
   * Connection between the RootQuery type and the post type
   */
  posts: GetPostAndMorePosts_posts | null;
}

export interface GetPostAndMorePostsVariables {
  id: string;
  idType: PostIdType;
}
