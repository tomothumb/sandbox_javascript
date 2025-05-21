import {type RouteConfig, index, route} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("post", "routes/post_index.tsx"),
  route("post/:postId", "routes/post_detail.tsx"),
  // route("users", "routes/users.tsx"),
  // route("users/:id", "routes/user.tsx"),
] satisfies RouteConfig;
