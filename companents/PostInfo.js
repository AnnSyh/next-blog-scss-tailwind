import Head from "./Header";

export default function PostInfo({ post }) {
  const { title, body } = post || {};

  if (!post) {
    return <div>Empty post</div>;
  }

  return (
    <>
      <h1>{title}</h1>
      <div>body: {body}</div>
    </>
  );
}
