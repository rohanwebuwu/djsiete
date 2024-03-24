
import { useRouter } from 'next/router';

const Post = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const { slug } = params;

  // Fetch data for the specific post using slug
  const response = await fetch(`https://api.example.com/posts/${slug}`);
  const post = await response.json();

  return {
    props: { post },
  };
}

export default Post;