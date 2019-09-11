const { merge } = require('lodash/fp')

let custom
try {
  custom = require('./gatsby-config.custom')
} catch (err) {
  custom = {}
}

const config = {
  siteMetadata: {
    title: 'Unikit',
    description: 'universal component library for web and native',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: '/Users/kations/Projekte/unikit/.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Unikit',
        description: 'universal component library for web and native',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/kations/Projekte/unikit',
          templates:
            '/Users/kations/Projekte/unikit/node_modules/docz-core/dist/templates',
          packageJson: '/Users/kations/Projekte/unikit/package.json',
          docz: '/Users/kations/Projekte/unikit/.docz',
          cache: '/Users/kations/Projekte/unikit/.docz/.cache',
          app: '/Users/kations/Projekte/unikit/.docz/app',
          appPublic: '/Users/kations/Projekte/unikit/.docz/public',
          appNodeModules: '/Users/kations/Projekte/unikit/node_modules',
          appPackageJson: '/Users/kations/Projekte/unikit/package.json',
          appYarnLock:
            '/Users/kations/Projekte/unikit/node_modules/docz-core/yarn.lock',
          ownNodeModules:
            '/Users/kations/Projekte/unikit/node_modules/docz-core/node_modules',
          gatsbyConfig: '/Users/kations/Projekte/unikit/gatsby-config.js',
          gatsbyBrowser: '/Users/kations/Projekte/unikit/gatsby-browser.js',
          gatsbyNode: '/Users/kations/Projekte/unikit/gatsby-node.js',
          gatsbySSR: '/Users/kations/Projekte/unikit/gatsby-ssr.js',
          importsJs: '/Users/kations/Projekte/unikit/.docz/app/imports.js',
          rootJs: '/Users/kations/Projekte/unikit/.docz/app/root.jsx',
          indexJs: '/Users/kations/Projekte/unikit/.docz/app/index.jsx',
          indexHtml: '/Users/kations/Projekte/unikit/.docz/app/index.html',
          db: '/Users/kations/Projekte/unikit/.docz/app/db.json',
        },
      },
    },
  ],
}

module.exports = merge(config, custom)
