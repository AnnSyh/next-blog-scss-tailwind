import Head from "next/head";
import Link from "next/link";
import Date from "../companents/Date";
import Layout, { siteTitle } from "../companents/Layout";
import utilStyles from "../styles/utils.module.scss";
import { getSortedPostsData } from "../lib/postsstatic";
import Image from "next/image";
import youtubeImg from "../public/images/cat.jpg";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;1,300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/postsstatic/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
              <br />
            </li>
          ))}
        </ul>
        <Image src={youtubeImg} width={500} alt="pev" placeholder="blur" />
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const dataPostsFromJsonplaceholder = await res.json();
  // const dataPostsFromJsonplaceholder = null; //выдает 404 стр

  // if (!dataPostsFromJsonplaceholder) {
  //   return {
  //     notFound: true,
  //   };
  // }

  return {
    props: {
      allPostsData,
      // dataPostsFromJsonplaceholder,
    },
  };
}
