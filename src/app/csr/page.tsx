"use client";

import { gql, useQuery } from "@apollo/client";

const HELLO = gql`
  query HelloQuery {
    helloQuery
  }
`;

export default function CsrPage() {
  const { loading, error, data } = useQuery<{ helloQuery: string }>(HELLO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <h1>Welcome to Pinecone Cloudflare wragler with Apollo federation</h1>
      <p>App router + client components</p>
      <h3>{data?.helloQuery}</h3>
    </div>
  );
}
