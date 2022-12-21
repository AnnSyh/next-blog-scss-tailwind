import Head from "./Header";

export default function ContactInfo({ contact }) {
  const { name, email, address } = contact || {};
  const { street, suite, city, zipcode } = address || {};

  if (!contact) {
    return <div>Empty contact</div>;
  }

  return (
    <>
      <h1>{name}</h1>
      <div>Email: {email}</div>
      <div>Address: {`${street}, ${suite}, ${city}, ${zipcode}`}</div>
    </>
  );
}
