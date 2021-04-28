module.exports = {
  // distDir: '_next',
  // generateBuildId: async () => {
  //   if (process.env.BUILD_ID) {
  //     return process.env.BUILD_ID;
  //   } else {
  //     return `${new Date().getTime()}`;
  //   }
  // },
  // exportPathMap: async function () {
  //   const { projects } = getAllProjects();
  //   const paths = {
  //     '/': { page: '/' },
  //   };

  //   projects.forEach((project) => {
  //     paths[`/works/${project.projectName}`] = {
  //       page: '/works/[work]',
  //       query: { path: project.projectName },
  //     };
  //   });

  //   return paths;
  // },
  transpileModules: ['my-component', 'redux/src'],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty',
        net: 'empty',
        child_process: 'empty',
        tls: 'empty',
      };
    }

    return config;
  },
  node: {
    // Some libraries import Node modules but don't use them in the browser.
    // Tell Webpack to provide empty mocks for them so importing them works.
    // ...config.node,
    fs: 'empty',
    child_process: 'empty',
    net: 'empty',
    tls: 'empty',
  },
};
