import type { Route } from "./+types/about";
import PageNav from "~/components/PageNav";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "about" },
    { name: "description", content: "This is about!" },
  ];
}

export default function ABOUT() {
  return <div>
    <h1>About</h1>
    <PageNav />
  </div>;
}
