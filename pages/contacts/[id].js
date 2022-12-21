import Layout from "../../companents/Layout";
import ContactInfo from "../../companents/ContactInfo";

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { contact: data },
  };
};

export default function Contact({ contact }) {
  return (
    <Layout>
      <ContactInfo contact={contact}></ContactInfo>
    </Layout>
  );
}
