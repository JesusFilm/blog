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
   * The node of the connection, without the edges
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
   * The slug for the user. This field is equivalent to WP_User-&gt;user_nicename
   */
  slug: string | null;
  /**
   * Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument.
   */
  avatar: GetPostAndMorePosts_post_author_node_avatar | null;
}

export interface GetPostAndMorePosts_post_author {
  __typename: "NodeWithAuthorToUserConnectionEdge";
  /**
   * The node of the connection, without the edges
   */
  node: GetPostAndMorePosts_post_author_node | null;
}

export interface GetPostAndMorePosts_post_categories_nodes {
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

export interface GetPostAndMorePosts_post_categories {
  __typename: "PostToCategoryConnection";
  /**
   * The nodes of the connection, without the edges
   */
  nodes: (GetPostAndMorePosts_post_categories_nodes | null)[] | null;
}

export interface GetPostAndMorePosts_post_tags_nodes {
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

export interface GetPostAndMorePosts_post_tags {
  __typename: "PostToTagConnection";
  /**
   * The nodes of the connection, without the edges
   */
  nodes: (GetPostAndMorePosts_post_tags_nodes | null)[] | null;
}

export interface GetPostAndMorePosts_post_blocks_LazyblockCoreFreeBlock {
  __typename: "LazyblockCoreFreeBlock" | "LazyblockArclightBlock" | "CoreShortcodeBlock" | "CoreArchivesBlock" | "CoreAudioBlock" | "CoreButtonBlock" | "CoreButtonsBlock" | "CoreCalendarBlock" | "CoreCategoriesBlock" | "CoreCodeBlock" | "CoreColumnsBlock" | "CoreColumnBlock" | "CoreCoverBlock" | "CoreEmbedBlock" | "CoreFileBlock" | "CoreGroupBlock" | "CoreFreeformBlock" | "CoreHtmlBlock" | "CoreMediaTextBlock" | "CoreLatestCommentsBlock" | "CoreLatestPostsBlock" | "CoreMissingBlock" | "CoreMoreBlock" | "CoreNextpageBlock" | "CorePreformattedBlock" | "CorePullquoteBlock" | "CoreRssBlock" | "CoreSearchBlock" | "CoreSeparatorBlock" | "CoreBlock" | "CoreSocialLinksBlock" | "CoreSocialLinkBlock" | "CoreSpacerBlock" | "CoreSubheadBlock" | "CoreTableBlock" | "CoreTagCloudBlock" | "CoreTextColumnsBlock" | "CoreVerseBlock" | "CoreVideoBlock";
}

export interface GetPostAndMorePosts_post_blocks_CoreParagraphBlock_attributes_CoreParagraphBlockDeprecatedV1Attributes {
  __typename: "CoreParagraphBlockDeprecatedV1Attributes" | "CoreParagraphBlockDeprecatedV2Attributes" | "CoreParagraphBlockDeprecatedV3Attributes" | "CoreParagraphBlockDeprecatedV4Attributes" | "CoreParagraphBlockDeprecatedV5Attributes";
}

export interface GetPostAndMorePosts_post_blocks_CoreParagraphBlock_attributes_CoreParagraphBlockAttributes {
  __typename: "CoreParagraphBlockAttributes";
  content: string;
}

export type GetPostAndMorePosts_post_blocks_CoreParagraphBlock_attributes = GetPostAndMorePosts_post_blocks_CoreParagraphBlock_attributes_CoreParagraphBlockDeprecatedV1Attributes | GetPostAndMorePosts_post_blocks_CoreParagraphBlock_attributes_CoreParagraphBlockAttributes;

export interface GetPostAndMorePosts_post_blocks_CoreParagraphBlock {
  __typename: "CoreParagraphBlock";
  attributes: GetPostAndMorePosts_post_blocks_CoreParagraphBlock_attributes | null;
}

export interface GetPostAndMorePosts_post_blocks_CoreImageBlock_attributes_CoreImageBlockDeprecatedV1Attributes {
  __typename: "CoreImageBlockDeprecatedV1Attributes" | "CoreImageBlockDeprecatedV2Attributes" | "CoreImageBlockDeprecatedV3Attributes";
}

export interface GetPostAndMorePosts_post_blocks_CoreImageBlock_attributes_CoreImageBlockAttributes {
  __typename: "CoreImageBlockAttributes";
  id: number | null;
  href: string | null;
  title: string | null;
  url: string | null;
  alt: string;
  anchor: string | null;
  align: string | null;
}

export type GetPostAndMorePosts_post_blocks_CoreImageBlock_attributes = GetPostAndMorePosts_post_blocks_CoreImageBlock_attributes_CoreImageBlockDeprecatedV1Attributes | GetPostAndMorePosts_post_blocks_CoreImageBlock_attributes_CoreImageBlockAttributes;

export interface GetPostAndMorePosts_post_blocks_CoreImageBlock {
  __typename: "CoreImageBlock";
  attributes: GetPostAndMorePosts_post_blocks_CoreImageBlock_attributes | null;
}

export interface GetPostAndMorePosts_post_blocks_CoreListBlock_attributes {
  __typename: "CoreListBlockAttributes";
  ordered: boolean;
  values: string;
}

export interface GetPostAndMorePosts_post_blocks_CoreListBlock {
  __typename: "CoreListBlock";
  attributes: GetPostAndMorePosts_post_blocks_CoreListBlock_attributes | null;
}

export interface GetPostAndMorePosts_post_blocks_CoreHeadingBlock_attributes_CoreHeadingBlockDeprecatedV1Attributes {
  __typename: "CoreHeadingBlockDeprecatedV1Attributes" | "CoreHeadingBlockDeprecatedV2Attributes" | "CoreHeadingBlockDeprecatedV3Attributes" | "CoreHeadingBlockDeprecatedV4Attributes";
}

export interface GetPostAndMorePosts_post_blocks_CoreHeadingBlock_attributes_CoreHeadingBlockAttributes {
  __typename: "CoreHeadingBlockAttributes";
  align: string | null;
  textAlign: string | null;
  content: string;
  fontSize: string | null;
  level: number;
}

export type GetPostAndMorePosts_post_blocks_CoreHeadingBlock_attributes = GetPostAndMorePosts_post_blocks_CoreHeadingBlock_attributes_CoreHeadingBlockDeprecatedV1Attributes | GetPostAndMorePosts_post_blocks_CoreHeadingBlock_attributes_CoreHeadingBlockAttributes;

export interface GetPostAndMorePosts_post_blocks_CoreHeadingBlock {
  __typename: "CoreHeadingBlock";
  attributes: GetPostAndMorePosts_post_blocks_CoreHeadingBlock_attributes | null;
}

export interface GetPostAndMorePosts_post_blocks_CoreGalleryBlock_attributes_CoreGalleryBlockDeprecatedV1Attributes {
  __typename: "CoreGalleryBlockDeprecatedV1Attributes" | "CoreGalleryBlockDeprecatedV2Attributes" | "CoreGalleryBlockDeprecatedV3Attributes" | "CoreGalleryBlockDeprecatedV4Attributes" | "CoreGalleryBlockDeprecatedV5Attributes";
}

export interface GetPostAndMorePosts_post_blocks_CoreGalleryBlock_attributes_CoreGalleryBlockAttributes_images {
  __typename: "CoreGalleryBlockAttributesImages";
  fullUrl: string | null;
  link: string | null;
  alt: string;
}

export interface GetPostAndMorePosts_post_blocks_CoreGalleryBlock_attributes_CoreGalleryBlockAttributes {
  __typename: "CoreGalleryBlockAttributes";
  align: string | null;
  images: (GetPostAndMorePosts_post_blocks_CoreGalleryBlock_attributes_CoreGalleryBlockAttributes_images | null)[];
  imageCrop: boolean;
  columns: number | null;
}

export type GetPostAndMorePosts_post_blocks_CoreGalleryBlock_attributes = GetPostAndMorePosts_post_blocks_CoreGalleryBlock_attributes_CoreGalleryBlockDeprecatedV1Attributes | GetPostAndMorePosts_post_blocks_CoreGalleryBlock_attributes_CoreGalleryBlockAttributes;

export interface GetPostAndMorePosts_post_blocks_CoreGalleryBlock {
  __typename: "CoreGalleryBlock";
  attributes: GetPostAndMorePosts_post_blocks_CoreGalleryBlock_attributes | null;
}

export interface GetPostAndMorePosts_post_blocks_CoreQuoteBlock_attributes_CoreQuoteBlockDeprecatedV1Attributes {
  __typename: "CoreQuoteBlockDeprecatedV1Attributes" | "CoreQuoteBlockDeprecatedV2Attributes" | "CoreQuoteBlockDeprecatedV3Attributes";
}

export interface GetPostAndMorePosts_post_blocks_CoreQuoteBlock_attributes_CoreQuoteBlockAttributes {
  __typename: "CoreQuoteBlockAttributes";
  value: string;
  citation: string;
}

export type GetPostAndMorePosts_post_blocks_CoreQuoteBlock_attributes = GetPostAndMorePosts_post_blocks_CoreQuoteBlock_attributes_CoreQuoteBlockDeprecatedV1Attributes | GetPostAndMorePosts_post_blocks_CoreQuoteBlock_attributes_CoreQuoteBlockAttributes;

export interface GetPostAndMorePosts_post_blocks_CoreQuoteBlock {
  __typename: "CoreQuoteBlock";
  attributes: GetPostAndMorePosts_post_blocks_CoreQuoteBlock_attributes | null;
}

export type GetPostAndMorePosts_post_blocks = GetPostAndMorePosts_post_blocks_LazyblockCoreFreeBlock | GetPostAndMorePosts_post_blocks_CoreParagraphBlock | GetPostAndMorePosts_post_blocks_CoreImageBlock | GetPostAndMorePosts_post_blocks_CoreListBlock | GetPostAndMorePosts_post_blocks_CoreHeadingBlock | GetPostAndMorePosts_post_blocks_CoreGalleryBlock | GetPostAndMorePosts_post_blocks_CoreQuoteBlock;

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
   * Gutenberg blocks
   */
  blocks: GetPostAndMorePosts_post_blocks[] | null;
}

export interface GetPostAndMorePosts_posts_nodes_featuredImage_node {
  __typename: "MediaItem";
  /**
   * Url of the mediaItem
   */
  sourceUrl: string | null;
}

export interface GetPostAndMorePosts_posts_nodes_featuredImage {
  __typename: "NodeWithFeaturedImageToMediaItemConnectionEdge";
  /**
   * The node of the connection, without the edges
   */
  node: GetPostAndMorePosts_posts_nodes_featuredImage_node | null;
}

export interface GetPostAndMorePosts_posts_nodes_author_node_avatar {
  __typename: "Avatar";
  /**
   * URL for the gravatar image source.
   */
  url: string | null;
}

export interface GetPostAndMorePosts_posts_nodes_author_node {
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
  avatar: GetPostAndMorePosts_posts_nodes_author_node_avatar | null;
}

export interface GetPostAndMorePosts_posts_nodes_author {
  __typename: "NodeWithAuthorToUserConnectionEdge";
  /**
   * The node of the connection, without the edges
   */
  node: GetPostAndMorePosts_posts_nodes_author_node | null;
}

export interface GetPostAndMorePosts_posts_nodes_categories_nodes {
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

export interface GetPostAndMorePosts_posts_nodes_categories {
  __typename: "PostToCategoryConnection";
  /**
   * The nodes of the connection, without the edges
   */
  nodes: (GetPostAndMorePosts_posts_nodes_categories_nodes | null)[] | null;
}

export interface GetPostAndMorePosts_posts_nodes_tags_nodes {
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

export interface GetPostAndMorePosts_posts_nodes_tags {
  __typename: "PostToTagConnection";
  /**
   * The nodes of the connection, without the edges
   */
  nodes: (GetPostAndMorePosts_posts_nodes_tags_nodes | null)[] | null;
}

export interface GetPostAndMorePosts_posts_nodes {
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
  featuredImage: GetPostAndMorePosts_posts_nodes_featuredImage | null;
  /**
   * Connection between the NodeWithAuthor type and the User type
   */
  author: GetPostAndMorePosts_posts_nodes_author | null;
  /**
   * Connection between the post type and the category type
   */
  categories: GetPostAndMorePosts_posts_nodes_categories | null;
  /**
   * Connection between the post type and the tag type
   */
  tags: GetPostAndMorePosts_posts_nodes_tags | null;
}

export interface GetPostAndMorePosts_posts {
  __typename: "RootQueryToPostConnection";
  /**
   * The nodes of the connection, without the edges
   */
  nodes: (GetPostAndMorePosts_posts_nodes | null)[] | null;
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
