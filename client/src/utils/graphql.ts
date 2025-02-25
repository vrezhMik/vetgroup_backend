import client from "@/app/client";
import { DocumentNode, OperationVariables } from "@apollo/client";

export async function graphQL_Query(
  query: DocumentNode,
  variables: OperationVariables,
  headers?: Record<string, string>
) {
  try {
    const { data, loading, error } = await client.query({
      query: query,
      fetchPolicy: "no-cache",
      variables: variables || null,
      context: {
        headers: headers || {}, 
      },
    });
    if (loading) {
      console.log("Loading data...");
      return null;
    }
    if (error) {
      console.error("Error fetching data:", error);
      throw new Error("Failed to fetch data");
    }
    if (!data) {
      throw new Error("No data found");
    }
    return data;
  } catch (error: any) {
    console.error("An error occurred:", error.message);
    return null;
  }
}
