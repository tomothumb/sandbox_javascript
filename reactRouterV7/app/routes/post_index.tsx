import type { Route } from "./+types/post_index";
import PageNav from "~/components/PageNav";
import posts from '../db/data.json';
import { Link } from "react-router";

// export async function loader() {
//   const posts = fetchPosts();
//   return posts;
//   // return {
//   //   title: post.title,
//   //   content: post.content
//   // };
// }

export async function clientLoader({
     // serverLoader,
     params,
   }: Route.ClientLoaderArgs) {
  const res = await fetch(`/data/data.json`);
  const posts = res.json();
  console.log(posts);
  return posts;
  // const serverData = await serverLoader();
  // return { ...serverData, ...res.json() };
}


export default function PageComponent({
  loaderData,
}: Route.ComponentProps) {

  const posts = loaderData;

  return (<>
    {posts.map((p) => {
      return (<div>
        <Link to={`/post/${p.post_id}`}>
        <p>{p.post_id}</p>
        <p>{p.title}</p>
        <p>{p.content}</p>
        </Link>
      </div>)
    })}
    <hr/>
    <PageNav/>
  </>);
}

function fetchPosts() {
  return posts;
}

