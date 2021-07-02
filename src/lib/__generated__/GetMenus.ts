/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MenuLocationEnum } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: GetMenus
// ====================================================

export interface GetMenus_menus_nodes_menuItems_nodes {
  __typename: "MenuItem";
  /**
   * The globally unique identifier of the nav menu item object.
   */
  id: string;
  /**
   * The globally unique identifier of the parent nav menu item object.
   */
  parentId: string | null;
  /**
   * Label or title of the menu item.
   */
  label: string | null;
  /**
   * Target attribute for the menu item link.
   */
  target: string | null;
  /**
   * Title attribute for the menu item link
   */
  title: string | null;
  /**
   * URL or destination of the menu item.
   */
  url: string | null;
}

export interface GetMenus_menus_nodes_menuItems {
  __typename: "MenuToMenuItemConnection";
  /**
   * The nodes of the connection, without the edges
   */
  nodes: (GetMenus_menus_nodes_menuItems_nodes | null)[] | null;
}

export interface GetMenus_menus_nodes {
  __typename: "Menu";
  /**
   * The globally unique identifier of the nav menu object.
   */
  id: string;
  /**
   * Display name of the menu. Equivalent to WP_Term-&gt;name.
   */
  name: string | null;
  /**
   * The locations a menu is assigned to
   */
  locations: (MenuLocationEnum | null)[] | null;
  /**
   * Connection between the Menu type and the MenuItem type
   */
  menuItems: GetMenus_menus_nodes_menuItems | null;
}

export interface GetMenus_menus {
  __typename: "RootQueryToMenuConnection";
  /**
   * The nodes of the connection, without the edges
   */
  nodes: (GetMenus_menus_nodes | null)[] | null;
}

export interface GetMenus {
  /**
   * Connection between the RootQuery type and the Menu type
   */
  menus: GetMenus_menus | null;
}
