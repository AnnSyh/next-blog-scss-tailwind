import Head from "next/head";
import Link from "next/link";
import Date from "../companents/date";
import Layout, { siteTitle } from "../companents/layout";
import utilStyles from "../styles/utils.module.scss";
import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPostsData, dataPostsFromJsonplaceholder }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
              <br />
            </li>
          ))}
        </ul>
        <h2 className={utilStyles.headingLg}>
          Blog from jsonplaceholder.typicode.com/posts
        </h2>
        <ul className={utilStyles.list}>
          {dataPostsFromJsonplaceholder.map(({ id, title, body }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/postsfromresurse/${id}`}>{title}</Link>
              <br />
              <strong>{body}</strong>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const dataPostsFromJsonplaceholder = await res.json();
  // const dataPostsFromJsonplaceholder = null; //выдает 404 стр

  if (!dataPostsFromJsonplaceholder) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      allPostsData,
      dataPostsFromJsonplaceholder,
    },
  };
}
