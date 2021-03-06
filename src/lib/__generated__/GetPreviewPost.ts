/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PostIdType } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: GetPreviewPost
// ====================================================

export interface GetPreviewPost_post {
  __typename: "Post";
  /**
   * The unique resource identifier path
   */
  databaseId: number;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name
   * field and the post_name column in the database for the
   * &quot;post_objects&quot; table.
   */
  slug: string | null;
  /**
   * The current status of the object
   */
  status: string | null;
}

export interface GetPreviewPost {
  /**
   * An object of the post Type. 
   */
  post: GetPreviewPost_post | null;
}

export interface GetPreviewPostVariables {
  id: string;
  idType: PostIdType;
}
