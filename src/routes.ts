import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  // * matches all URLs, the ? makes it optional so it will match / as well
  route("/", "pages/home.tsx"),

  ...prefix("practice", [
    index("pages/practice.tsx"),
    route(":kana", "pages/practiceKana.tsx"),

  ]),

  ...prefix("learn", [
    index("pages/learn.tsx"),
    route(":kana", "pages/learnKana.tsx")

  ])


] satisfies RouteConfig;
