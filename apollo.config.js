module.exports = {
  client: {
    name: "Weave",
    includes: ["pages/**", "src/**"],
    excludes: ["**/*.test.tsx"],
    service: {
      name: "api",
      url: "http://54.204.85.23/graphql",
    },
  },
};
