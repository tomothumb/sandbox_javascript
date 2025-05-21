import { NavLink } from "react-router";


export default function PageNav() {
  return <nav>
    <NavLink to="/"
             className={({ isActive, isPending, isTransitioning }) =>
               [
                 isPending ? "pending" : "",
                 isActive ? "active" : "",
                 isTransitioning ? "transitioning" : "",
               ].join(" ")
             }
             style={({ isActive, isPending, isTransitioning }) => {
               return {
                 fontWeight: isActive ? "bold" : "",
                 color: isPending ? "red" : "black",
                 viewTransitionName: isTransitioning ? "slide" : "",
               };
             }}
    >
      Home
    </NavLink>
    <NavLink to="/about"
             className={({ isActive, isPending, isTransitioning }) =>
               [
                 isPending ? "pending" : "",
                 isActive ? "active" : "",
                 isTransitioning ? "transitioning" : "",
               ].join(" ")
             }
             style={({ isActive, isPending, isTransitioning }) => {
               return {
                 fontWeight: isActive ? "bold" : "",
                 color: isPending ? "red" : "black",
                 viewTransitionName: isTransitioning ? "slide" : "",
               };
             }}
    >About</NavLink>
  </nav>;
}
