import { graphQL_Query } from "./graphql";
import { LOGIN_FRAGMENT } from "./fragments";
import { USER_FRAGMENT } from "./fragments";
import { CHANGE_PASSWORD_FRAGMENT } from "./fragments";
import Cookies from "js-cookie";

export async function login(identifier: string, password: string) {
  try {
    const response = await graphQL_Query(LOGIN_FRAGMENT, {
      identifier,
      password,
    });

    if (!response || response.errors) {
      throw new Error(
        response?.errors?.[0]?.message || "Login failed due to an unknown error"
      );
    }
    console.log(response)
    const { jwt } = response.login;

    if (!jwt) {
      throw new Error("JWT not found in the response");
    }
    document.cookie = `jwt=${jwt}; path=/; secure; SameSite=Strict`;

    const { documentId } = response.login.user;
    if (!documentId) {
      throw new Error("documentId not found in the response");
    }
    window.location.href = "/";
    document.cookie = `document=${documentId}; path=/; secure; SameSite=Strict`;
    return documentId;
  } catch (error: any) {
    throw new Error(
      error.message || "An unexpected error occurred during login"
    );
  }
}

export async function get_current_user(id: string) {
  try {
    const response = await graphQL_Query(USER_FRAGMENT, { id });
    if (!response || response.errors) {
      throw new Error(
        response?.errors?.[0]?.message || "Login failed due to an unknown error"
      );
    }
    return response;
  } catch (error: any) {
    throw new Error(
      error.message || "An unexpected error occurred during login"
    );
  }
}

export async function change_password_query(
  old_password: string,
  new_password: string,
  confirm_password: string
) {
  try {
    const jwt = Cookies.get("jwt");
    console.log(old_password, new_password, confirm_password);
    const response = await graphQL_Query(
      CHANGE_PASSWORD_FRAGMENT,
      {
        old_password,
        new_password,
        confirm_password,
      },
      { Authorization: `Bearer ${jwt}` }
    );
    return response;
  } catch (error: any) {
    throw new Error(
      error.message || "An unexpected error occurred during login"
    );
  }
}
