/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PostFields
// ====================================================

export interface PostFields_featuredImage_node {
  __typename: "MediaItem";
  /**
   * Url of the mediaItem
   */
  sourceUrl: string | null;
}

export interface PostFields_featuredImage {
  __typename: "NodeWithFeaturedImageToMediaItemConnectionEdge";
  /**
   * The node of the connection, without the edges
   */
  node: PostFields_featuredImage_node | null;
}

export interface PostFields_author_node_avatar {
  __typename: "Avatar";
  /**
   * URL for the gravatar image source.
   */
  url: string | null;
}

export interface PostFields_author_node {
  __typename: "User";
  /**
   * Display name of the user. This is equivalent to the WP_User-&gt;dispaly_name property.
   */
  name: string | null;
  /**
   * The slug for the user. This field is equivalent to WP_User-&gt;user_nicename
   */
  slug: string | null;
  /**
   * Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument.
   */
  avatar: PostFields_author_node_avatar | null;
}

export interface PostFields_author {
  __typename: "NodeWithAuthorToUserConnectionEdge";
  /**
   * The node of the connection, without the edges
   */
  node: PostFields_author_node | null;
}

export interface PostFields_categories_nodes {
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

export interface PostFields_categories {
  __typename: "PostToCategoryConnection";
  /**
   * The nodes of the connection, without the edges
   */
  nodes: (PostFields_categories_nodes | null)[] | null;
}

export interface PostFields_tags_nodes {
  __typename: "Tag";
  /**
   * The human friendly name of the object.
   */
  name: string | null;
  /**
   * An alphanumeric identifier for the object unique to its type.
   */
  slug: string | null;
}

export interface PostFields_tags {
  __typename: "PostToTagConnection";
  /**
   * The nodes of the connection, without the edges
   */
  nodes: (PostFields_tags_nodes | null)[] | null;
}

export interface PostFields {
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
  featuredImage: PostFields_featuredImage | null;
  /**
   * Connection between the NodeWithAuthor type and the User type
   */
  author: PostFields_author | null;
  /**
   * Connection between the post type and the category type
   */
  categories: PostFields_categories | null;
  /**
   * Connection between the post type and the tag type
   */
  tags: PostFields_tags | null;
}
