/* eslint-disable @typescript-eslint/no-var-requires */
const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const CONST = require('./config/constant')
const navbar = require('./config/navbar')

const config = {
    title: CONST.TITLE,
    tagline: CONST.TAG_LINE,
    url: CONST.URL,
    baseUrl: CONST.BASE_URL,
    organizationName: CONST.NAME, // Usually your GitHub org/user name.
    projectName: CONST.GIT_NAME, // Usually your repo name.
    favicon: 'img/logo.png',
    onBrokenMarkdownLinks: 'warn',
    onBrokenLinks: 'throw',
    baseUrlIssueBanner: true,
    i18n: {
        defaultLocale: CONST.LANGS[0],
        locales: CONST.LANGS
    },
    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: require.resolve('./config/sidebars.js'),
                    editUrl: CONST.EDIT_URL
                },
                blog: {
                    showReadingTime: true,
                    editUrl: CONST.EDIT_URL
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.scss')
                }
            }
        ]
    ],

    themeConfig: {
        navbar: {
            title: CONST.TITLE,
            // hideOnScroll: true,
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.png'
            },
            items: navbar
        },
        footer: {
            style: 'dark',
            copyright: 'mkimq版权所有 © 2022'
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
            magicComments: [
                // 要记得复制默认的高亮类！
                {
                    className: 'theme-code-block-highlighted-line',
                    line: 'highlight-next-line',
                    block: {
                        start: 'highlight-start',
                        end: 'highlight-end'
                    }
                },
                {
                    className: 'code-block-error-line',
                    line: 'This will error'
                }
            ]
        }
    },
    plugins: [
        'docusaurus-plugin-sass',
        [
            require.resolve('@cmfcmf/docusaurus-search-local'),
            {
                language: 'zh'
            }
        ]
    ]
}

module.exports = config
