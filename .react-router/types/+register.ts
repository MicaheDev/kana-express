import "react-router";

declare module "react-router" {
  interface Register {
    params: Params;
  }
}

type Params = {
  "/": {};
  "/": {};
  "/practice": {};
  "/practice/:kana": {
    "kana": string;
  };
  "/learn": {};
  "/learn/:kana": {
    "kana": string;
  };
};