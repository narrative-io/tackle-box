const path = require("path")

module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Tacklebox',
      description: 'Documentation for Narrative.inc\'s Tacklebox component library plugin'
    }
	},
	head: [
		[
			"link",
			{
				rel: "stylesheet",
				href: "https://cdnjs.cloudflare.com/ajax/libs/vuetify/2.3.10/vuetify.min.css"
			}
		]
	],
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
          { text: 'GitHub', link: 'https://github.com/narrative-io/tackle-box' }
        ],
        sidebar: {
          '/components/': [
            {
              title: 'Components',
              collapsable: false,
              children: [
								'Buttons',
								'TextField'
							]
            }
					],
					'/styles/': [
            {
              title: 'Styles',
              collapsable: false,
              children: [
								'Colors',
								'Typography',
								'Breakpoints',
								'Buttons'
							]
            }
          ]
        }
      }
    }
	}
}