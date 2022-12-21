import Layout from "../companents/Layout";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function ErrorPage() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <Layout title={"404"}>
      <h1>Error 404</h1>
    </Layout>
  );
}
