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
  __typename: "LazyblockCoreFreeBlock" | "CoreShortcodeBlock" | "CoreArchivesBlock" | "CoreAudioBlock" | "CoreButtonBlock" | "CoreButtonsBlock" | "CoreCalendarBlock" | "CoreCategoriesBlock" | "CoreCodeBlock" | "CoreColumnsBlock" | "CoreColumnBlock" | "CoreCoverBlock" | "CoreFileBlock" | "CoreGroupBlock" | "CoreFreeformBlock" | "CoreHtmlBlock" | "CoreMediaTextBlock" | "CoreLatestCommentsBlock" | "CoreLatestPostsBlock" | "CoreMissingBlock" | "CoreMoreBlock" | "CoreNextpageBlock" | "CorePageListBlock" | "CorePreformattedBlock" | "CorePullquoteBlock" | "CoreRssBlock" | "CoreSearchBlock" | "CoreSeparatorBlock" | "CoreBlock" | "CoreSocialLinksBlock" | "CoreSocialLinkBlock" | "CoreSpacerBlock" | "CoreTableBlock" | "CoreTagCloudBlock" | "CoreTextColumnsBlock" | "CoreVerseBlock" | "CoreVideoBlock" | "CoreSiteLogoBlock" | "CoreSiteTaglineBlock" | "CoreSiteTitleBlock" | "CoreQueryBlock" | "CorePostTemplateBlock" | "CoreQueryTitleBlock" | "CoreQueryPaginationBlock" | "CoreQueryPaginationNextBlock" | "CoreQueryPaginationNumbersBlock" | "CoreQueryPaginationPreviousBlock" | "CorePostTitleBlock" | "CorePostContentBlock" | "CorePostDateBlock" | "CorePostExcerptBlock" | "CorePostFeaturedImageBlock" | "CorePostTermsBlock" | "CoreLoginoutBlock";
}

export interface GetPostAndMorePosts_post_blocks_CoreParagraphBlock_attributes_CoreParagraphBlockAttributes {
  __typename: "CoreParagraphBlockAttributes";
  content: string;
}

export interface GetPostAndMorePosts_post_blocks_CoreParagraphBlock_attributes_CoreParagraphBlockDeprecatedV1Attributes {
  __typename: "CoreParagraphBlockDeprecatedV1Attributes";
  content: string;
}

export interface GetPostAndMorePosts_post_blocks_CoreParagraphBlock_attributes_CoreParagraphBlockDeprecatedV2Attributes {
  __typename: "CoreParagraphBlockDeprecatedV2Attributes";
  content: string;
}

export interface GetPostAndMorePosts_post_blocks_CoreParagraphBlock_attributes_CoreParagraphBlockDeprecatedV3Attributes {
  __typename: "CoreParagraphBlockDeprecatedV3Attributes";
  content: string;
}

export interface GetPostAndMorePosts_post_blocks_CoreParagraphBlock_attributes_CoreParagraphBlockDeprecatedV4Attributes {
  __typename: "CoreParagraphBlockDeprecatedV4Attributes";
  content: string;
}

export interface GetPostAndMorePosts_post_blocks_CoreParagraphBlock_attributes_CoreParagraphBlockDeprecatedV5Attributes {
  __typename: "CoreParagraphBlockDeprecatedV5Attributes";
  content: string;
}

export type GetPostAndMorePosts_post_blocks_CoreParagraphBlock_attributes = GetPostAndMorePosts_post_blocks_CoreParagraphBlock_attributes_CoreParagraphBlockAttributes | GetPostAndMorePosts_post_blocks_CoreParagraphBlock_attributes_CoreParagraphBlockDeprecatedV1Attributes | GetPostAndMorePosts_post_blocks_CoreParagraphBlock_attributes_CoreParagraphBlockDeprecatedV2Attributes | GetPostAndMorePosts_post_blocks_CoreParagraphBlock_attributes_CoreParagraphBlockDeprecatedV3Attributes | GetPostAndMorePosts_post_blocks_CoreParagraphBlock_attributes_CoreParagraphBlockDeprecatedV4Attributes | GetPostAndMorePosts_post_blocks_CoreParagraphBlock_attributes_CoreParagraphBlockDeprecatedV5Attributes;

export interface GetPostAndMorePosts_post_blocks_CoreParagraphBlock {
  __typename: "CoreParagraphBlock";
  attributes: GetPostAndMorePosts_post_blocks_CoreParagraphBlock_attributes | null;
}

export interface GetPostAndMorePosts_post_blocks_CoreImageBlock_attributes_CoreImageBlockAttributes {
  __typename: "CoreImageBlockAttributes";
  alt: string;
  url: string | null;
  title: string | null;
  id: number | null;
}

export interface GetPostAndMorePosts_post_blocks_CoreImageBlock_attributes_CoreImageBlockDeprecatedV1Attributes {
  __typename: "CoreImageBlockDeprecatedV1Attributes";
  alt: string;
  url: string | null;
  title: string | null;
  id: number | null;
}

export interface GetPostAndMorePosts_post_blocks_CoreImageBlock_attributes_CoreImageBlockDeprecatedV2Attributes {
  __typename: "CoreImageBlockDeprecatedV2Attributes";
  alt: string;
  url: string | null;
  title: string | null;
  id: number | null;
}

export interface GetPostAndMorePosts_post_blocks_CoreImageBlock_attributes_CoreImageBlockDeprecatedV3Attributes {
  __typename: "CoreImageBlockDeprecatedV3Attributes";
  alt: string;
  url: string | null;
  title: string | null;
  id: number | null;
}

export type GetPostAndMorePosts_post_blocks_CoreImageBlock_attributes = GetPostAndMorePosts_post_blocks_CoreImageBlock_attributes_CoreImageBlockAttributes | GetPostAndMorePosts_post_blocks_CoreImageBlock_attributes_CoreImageBlockDeprecatedV1Attributes | GetPostAndMorePosts_post_blocks_CoreImageBlock_attributes_CoreImageBlockDeprecatedV2Attributes | GetPostAndMorePosts_post_blocks_CoreImageBlock_attributes_CoreImageBlockDeprecatedV3Attributes;

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

export interface GetPostAndMorePosts_post_blocks_CoreHeadingBlock_attributes_CoreHeadingBlockAttributes {
  __typename: "CoreHeadingBlockAttributes";
  align: string | null;
  textAlign: string | null;
  content: string;
  fontSize: string | null;
  level: number;
}

export interface GetPostAndMorePosts_post_blocks_CoreHeadingBlock_attributes_CoreHeadingBlockDeprecatedV1Attributes {
  __typename: "CoreHeadingBlockDeprecatedV1Attributes";
  align: string | null;
  textAlign: string | null;
  content: string;
  fontSize: string | null;
  level: number;
}

export interface GetPostAndMorePosts_post_blocks_CoreHeadingBlock_attributes_CoreHeadingBlockDeprecatedV2Attributes {
  __typename: "CoreHeadingBlockDeprecatedV2Attributes";
  align: string | null;
  textAlign: string | null;
  content: string;
  fontSize: string | null;
  level: number;
}

export interface GetPostAndMorePosts_post_blocks_CoreHeadingBlock_attributes_CoreHeadingBlockDeprecatedV3Attributes {
  __typename: "CoreHeadingBlockDeprecatedV3Attributes";
  align: string | null;
  textAlign: string | null;
  content: string;
  fontSize: string | null;
  level: number;
}

export interface GetPostAndMorePosts_post_blocks_CoreHeadingBlock_attributes_CoreHeadingBlockDeprecatedV4Attributes {
  __typename: "CoreHeadingBlockDeprecatedV4Attributes";
  align: string | null;
  textAlign: string | null;
  content: string;
  fontSize: string | null;
  level: number;
}

export type GetPostAndMorePosts_post_blocks_CoreHeadingBlock_attributes = GetPostAndMorePosts_post_blocks_CoreHeadingBlock_attributes_CoreHeadingBlockAttributes | GetPostAndMorePosts_post_blocks_CoreHeadingBlock_attributes_CoreHeadingBlockDeprecatedV1Attributes | GetPostAndMorePosts_post_blocks_CoreHeadingBlock_attributes_CoreHeadingBlockDeprecatedV2Attributes | GetPostAndMorePosts_post_blocks_CoreHeadingBlock_attributes_CoreHeadingBlockDeprecatedV3Attributes | GetPostAndMorePosts_post_blocks_CoreHeadingBlock_attributes_CoreHeadingBlockDeprecatedV4Attributes;

export interface GetPostAndMorePosts_post_blocks_CoreHeadingBlock {
  __typename: "CoreHeadingBlock";
  attributes: GetPostAndMorePosts_post_blocks_CoreHeadingBlock_attributes | null;
}

export interface GetPostAndMorePosts_post_blocks_CoreGalleryBlock_attributes_CoreGalleryBlockAttributes_images {
  __typename: "CoreGalleryBlockAttributesImages";
  fullUrl: string | null;
  alt: string;
}

export interface GetPostAndMorePosts_post_blocks_CoreGalleryBlock_attributes_CoreGalleryBlockAttributes {
  __typename: "CoreGalleryBlockAttributes";
  images: (GetPostAndMorePosts_post_blocks_CoreGalleryBlock_attributes_CoreGalleryBlockAttributes_images | null)[];
}

export interface GetPostAndMorePosts_post_blocks_CoreGalleryBlock_attributes_CoreGalleryBlockDeprecatedV1Attributes_images {
  __typename: "CoreGalleryBlockDeprecatedV1AttributesImages";
  fullUrl: string | null;
  alt: string;
}

export interface GetPostAndMorePosts_post_blocks_CoreGalleryBlock_attributes_CoreGalleryBlockDeprecatedV1Attributes {
  __typename: "CoreGalleryBlockDeprecatedV1Attributes";
  images: (GetPostAndMorePosts_post_blocks_CoreGalleryBlock_attributes_CoreGalleryBlockDeprecatedV1Attributes_images | null)[];
}

export interface GetPostAndMorePosts_post_blocks_CoreGalleryBlock_attributes_CoreGalleryBlockDeprecatedV2Attributes_images {
  __typename: "CoreGalleryBlockDeprecatedV2AttributesImages";
  fullUrl: string | null;
  alt: string;
}

export interface GetPostAndMorePosts_post_blocks_CoreGalleryBlock_attributes_CoreGalleryBlockDeprecatedV2Attributes {
  __typename: "CoreGalleryBlockDeprecatedV2Attributes";
  images: (GetPostAndMorePosts_post_blocks_CoreGalleryBlock_attributes_CoreGalleryBlockDeprecatedV2Attributes_images | null)[];
}

export interface GetPostAndMorePosts_post_blocks_CoreGalleryBlock_attributes_CoreGalleryBlockDeprecatedV3Attributes_images {
  __typename: "CoreGalleryBlockDeprecatedV3AttributesImages";
  fullUrl: string | null;
  alt: string;
}

export interface GetPostAndMorePosts_post_blocks_CoreGalleryBlock_attributes_CoreGalleryBlockDeprecatedV3Attributes {
  __typename: "CoreGalleryBlockDeprecatedV3Attributes";
  images: (GetPostAndMorePosts_post_blocks_CoreGalleryBlock_attributes_CoreGalleryBlockDeprecatedV3Attributes_images | null)[];
}

export interface GetPostAndMorePosts_post_blocks_CoreGalleryBlock_attributes_CoreGalleryBlockDeprecatedV4Attributes_images {
  __typename: "CoreGalleryBlockDeprecatedV4AttributesImages";
  fullUrl: string | null;
  alt: string;
}

export interface GetPostAndMorePosts_post_blocks_CoreGalleryBlock_attributes_CoreGalleryBlockDeprecatedV4Attributes {
  __typename: "CoreGalleryBlockDeprecatedV4Attributes";
  images: (GetPostAndMorePosts_post_blocks_CoreGalleryBlock_attributes_CoreGalleryBlockDeprecatedV4Attributes_images | null)[];
}

export interface GetPostAndMorePosts_post_blocks_CoreGalleryBlock_attributes_CoreGalleryBlockDeprecatedV5Attributes_images {
  __typename: "CoreGalleryBlockDeprecatedV5AttributesImages";
  fullUrl: string | null;
  alt: string;
}

export interface GetPostAndMorePosts_post_blocks_CoreGalleryBlock_attributes_CoreGalleryBlockDeprecatedV5Attributes {
  __typename: "CoreGalleryBlockDeprecatedV5Attributes";
  images: (GetPostAndMorePosts_post_blocks_CoreGalleryBlock_attributes_CoreGalleryBlockDeprecatedV5Attributes_images | null)[];
}

export type GetPostAndMorePosts_post_blocks_CoreGalleryBlock_attributes = GetPostAndMorePosts_post_blocks_CoreGalleryBlock_attributes_CoreGalleryBlockAttributes | GetPostAndMorePosts_post_blocks_CoreGalleryBlock_attributes_CoreGalleryBlockDeprecatedV1Attributes | GetPostAndMorePosts_post_blocks_CoreGalleryBlock_attributes_CoreGalleryBlockDeprecatedV2Attributes | GetPostAndMorePosts_post_blocks_CoreGalleryBlock_attributes_CoreGalleryBlockDeprecatedV3Attributes | GetPostAndMorePosts_post_blocks_CoreGalleryBlock_attributes_CoreGalleryBlockDeprecatedV4Attributes | GetPostAndMorePosts_post_blocks_CoreGalleryBlock_attributes_CoreGalleryBlockDeprecatedV5Attributes;

export interface GetPostAndMorePosts_post_blocks_CoreGalleryBlock {
  __typename: "CoreGalleryBlock";
  attributes: GetPostAndMorePosts_post_blocks_CoreGalleryBlock_attributes | null;
}

export interface GetPostAndMorePosts_post_blocks_CoreQuoteBlock_attributes_CoreQuoteBlockAttributes {
  __typename: "CoreQuoteBlockAttributes";
  value: string;
  citation: string;
}

export interface GetPostAndMorePosts_post_blocks_CoreQuoteBlock_attributes_CoreQuoteBlockDeprecatedV1Attributes {
  __typename: "CoreQuoteBlockDeprecatedV1Attributes";
  value: string;
  citation: string;
}

export interface GetPostAndMorePosts_post_blocks_CoreQuoteBlock_attributes_CoreQuoteBlockDeprecatedV2Attributes {
  __typename: "CoreQuoteBlockDeprecatedV2Attributes";
  value: string;
  citation: string;
}

export interface GetPostAndMorePosts_post_blocks_CoreQuoteBlock_attributes_CoreQuoteBlockDeprecatedV3Attributes {
  __typename: "CoreQuoteBlockDeprecatedV3Attributes";
  value: string;
  citation: string;
}

export type GetPostAndMorePosts_post_blocks_CoreQuoteBlock_attributes = GetPostAndMorePosts_post_blocks_CoreQuoteBlock_attributes_CoreQuoteBlockAttributes | GetPostAndMorePosts_post_blocks_CoreQuoteBlock_attributes_CoreQuoteBlockDeprecatedV1Attributes | GetPostAndMorePosts_post_blocks_CoreQuoteBlock_attributes_CoreQuoteBlockDeprecatedV2Attributes | GetPostAndMorePosts_post_blocks_CoreQuoteBlock_attributes_CoreQuoteBlockDeprecatedV3Attributes;

export interface GetPostAndMorePosts_post_blocks_CoreQuoteBlock {
  __typename: "CoreQuoteBlock";
  attributes: GetPostAndMorePosts_post_blocks_CoreQuoteBlock_attributes | null;
}

export interface GetPostAndMorePosts_post_blocks_CoreEmbedBlock_attributes_CoreEmbedBlockAttributes {
  __typename: "CoreEmbedBlockAttributes";
  url: string | null;
  providerNameSlug: string | null;
  align: string | null;
}

export interface GetPostAndMorePosts_post_blocks_CoreEmbedBlock_attributes_CoreEmbedBlockDeprecatedV1Attributes {
  __typename: "CoreEmbedBlockDeprecatedV1Attributes";
  url: string | null;
  providerNameSlug: string | null;
  align: string | null;
}

export type GetPostAndMorePosts_post_blocks_CoreEmbedBlock_attributes = GetPostAndMorePosts_post_blocks_CoreEmbedBlock_attributes_CoreEmbedBlockAttributes | GetPostAndMorePosts_post_blocks_CoreEmbedBlock_attributes_CoreEmbedBlockDeprecatedV1Attributes;

export interface GetPostAndMorePosts_post_blocks_CoreEmbedBlock {
  __typename: "CoreEmbedBlock";
  attributes: GetPostAndMorePosts_post_blocks_CoreEmbedBlock_attributes | null;
}

export interface GetPostAndMorePosts_post_blocks_LazyblockArclightBlock_attributes {
  __typename: "LazyblockArclightBlockAttributes";
  refId: string;
}

export interface GetPostAndMorePosts_post_blocks_LazyblockArclightBlock {
  __typename: "LazyblockArclightBlock";
  attributes: GetPostAndMorePosts_post_blocks_LazyblockArclightBlock_attributes | null;
}

export type GetPostAndMorePosts_post_blocks = GetPostAndMorePosts_post_blocks_LazyblockCoreFreeBlock | GetPostAndMorePosts_post_blocks_CoreParagraphBlock | GetPostAndMorePosts_post_blocks_CoreImageBlock | GetPostAndMorePosts_post_blocks_CoreListBlock | GetPostAndMorePosts_post_blocks_CoreHeadingBlock | GetPostAndMorePosts_post_blocks_CoreGalleryBlock | GetPostAndMorePosts_post_blocks_CoreQuoteBlock | GetPostAndMorePosts_post_blocks_CoreEmbedBlock | GetPostAndMorePosts_post_blocks_LazyblockArclightBlock;

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
