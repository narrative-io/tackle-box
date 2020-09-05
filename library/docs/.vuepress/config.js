module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Component Library 🥂',
      description: 'Documentation site for the Vue component library plugin'
    }
  },

  themeConfig: {
    repoLabel: 'Contribute!',
    // git repo here... gitlab, github
    repo: '',
    docsDir: 'docs',
    editLinks: true,
    docsBranch: 'dev',
    editLinkText: 'Help us improve this page!',
    search: false,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        lastUpdated: 'Last Updated',
        // service worker is configured but will only register in production
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        nav: [
          { text: 'Getting Started', link: '/guide' },
					{ text: 'Components', link: '/components/' },
					{ text: 'Styles', link: '/styles/' },
          { text: 'GitHub', link: 'https://github.com/narrative-io/narrative-ui-library' }
        ],
        sidebar: {
          '/components/': [
            {
              title: 'Components',
              collapsable: false,
              children: [
								'nio-button'
							]
            }
					],
					'/styles/': [
            {
              title: 'Styles',
              collapsable: false,
              children: [
								'variables',
								'colors',
								'typography',
								'button'
							]
            }
          ]
        }
      }
    }
  }
}