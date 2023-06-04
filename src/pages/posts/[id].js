import axios from "axios";

export default function Posts({ titulo, conteudo }) {
  return (
    <div>
      <h1>{titulo}</h1>
      <h1>{conteudo}</h1>
    </div>
  );
}

export async function getStaticPaths() {
  const posts = await axios
    .get("http://127.0.0.1:1337/api/posts")
    .then((res) => res.data);
  const ids = posts.data.map((post) => post.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await axios
    .get(`http://127.0.0.1:1337/api/posts/${params.id}`)
    .then((res) => res.data);
  return {
    props: {
      ...post.data.attributes,
    },
  };
}
