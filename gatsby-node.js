exports.createPages = ({ graphql, actions }) => {
  /* const { createPage } = actions */
  const { createRedirect } = actions;

  createRedirect({
    fromPath: `/service/`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/`,
  });
};
