import type { Route } from "./+types/post_detail";
import PageNav from "~/components/PageNav";
import posts from '../db/data.json';

export async function loader({ params }: Route.LoaderArgs) {
  const post = fetchPost(params.postId);
  return post;
  // return {
  //   title: post.title,
  //   content: post.content
  // };
}


export default function PageComponent({
  loaderData,
}: Route.ComponentProps) {

  const { title, content } = loaderData;

  return (<div>
    <h1>Detail</h1>
    <p>{title}</p>
    <p>{content}</p>
    <PageNav />
  </div>);
}

function fetchPost(postId: string | undefined) {
  if (!postId) {
    throw new Error("Post ID is required");
  }
  const post = posts.find(p => p.post_id === Number(postId));
  if (!post) {
    throw new Error(`Post with id ${postId} not found`);
  }
  return post;
}

