import Head from "next/head";
import Layout from "../../companents/Layout";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { contacts: data },
  };
};

export default function Contacts({ contacts }) {
  return (
    <Layout>
      <Head>
        <title>Contacts</title>
      </Head>
      <ul>
        {contacts &&
          contacts.map(({ id, name, email }) => (
            <li key={id}>
              <Link href={`/contacts/${id}`}>
                <strong>{name}</strong>({email})
              </Link>
            </li>
          ))}
      </ul>
    </Layout>
  );
}
