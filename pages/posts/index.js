import Head from "next/head";
import Layout from "../../companents/Layout";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts: data },
  };
};

export default function Posts({ posts }) {
  return (
    <Layout>
      <Head>
        <title>Posts</title>
      </Head>
      <ul>
        {posts &&
          posts.map(({ id, title, body }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <strong>{title}</strong>({body})
              </Link>
            </li>
          ))}
      </ul>
    </Layout>
  );
}
