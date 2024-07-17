import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

const HELLO = gql`
  query HelloQuery {
    helloQuery
  }
`;

export default async function SsrPage() {
  const client = getClient();

  const { data, error, loading } = await client.query<{ helloQuery: string }>({
    query: HELLO,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <h1>Welcome to Pinecone Cloudflare wragler with Apollo federation</h1>
      <h2>App router + server component</h2>
      <h3>{data.helloQuery}</h3>
    </div>
  );
}
