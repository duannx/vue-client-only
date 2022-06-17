module.exports = {
  title: 'vue-client-only',
  description: '',
  base: '/{% project name }/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/Guide.md'},
    ],
    sidebar: 'auto',
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'duannx/vue-client-only',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help us improve this page!'
  }
}