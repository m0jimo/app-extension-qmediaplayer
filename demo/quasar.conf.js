// Configuration for your app

module.exports = function (ctx) {
  return {
    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    boot: [
    ],
    css: [
      'app.styl'
    ],
    extras: [
      'roboto-font',
      'material-icons', // optional, you are not bound to it
      'ionicons-v4',
      'mdi-v3',
      'fontawesome-v5',
      'eva-icons',
      'themify'
    ],
    supportIE: true,
    build: {
      scopeHoisting: true,
      vueRouterMode: 'history',
      publicPath: 'app-extension-qmediaplayer',
      // vueCompiler: true,
      // gzip: true,
      // analyze: true,
      // extractCSS: false,
      extendWebpack (cfg) {
        cfg.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
          options: {
            formatter: require('eslint').CLIEngine.getFormatter('stylish')
          }
        })
      }
    },
    devServer: {
      // https: true,
      // port: 8080,
      open: true, // opens browser window automatically
      watchOptions: {
        ignored: [
          'node_modules',
          '!node_modules/@quasar/quasar-app-extension-qmediaplayer'
        ]
      }
    },
    // framework: 'all' --- includes everything; for dev only!
    framework: {
      components: [
        'QAvatar',
        'QBadge',
        'QBanner',
        'QBtn',
        'QCard',
        'QCardActions',
        'QCardSection',
        'QCheckbox',
        'QColor',
        'QDate',
        'QDialog',
        'QDrawer',
        'QExpansionItem',
        'QForm',
        'QHeader',
        'QIcon',
        'QInput',
        'QItem',
        'QItemLabel',
        'QItemSection',
        'QLayout',
        'QList',
        'QMenu',
        'QPage',
        'QPageContainer',
        'QPageScroller',
        'QPopupProxy',
        'QRadio',
        'QRange',
        'QResizeObserver',
        'QRouteTab',
        'QScrollArea',
        'QSelect',
        'QSeparator',
        'QSlider',
        'QSpace',
        'QTab',
        'QTabPanel',
        'QTabPanels',
        'QTabs',
        'QToggle',
        'QToolbar',
        'QToolbarTitle',
        'QTooltip'
      ],
      directives: [
        'ClosePopup',
        'Ripple',
        'Scroll',
        'TouchSwipe'
      ],
      // iconSet: 'fontawesome-v5', // requires icon library to be specified in "extras" section too,
      // lang: 'de', // Tell Quasar which language pack to use for its own components
      // Quasar plugins
      plugins: [
        'AppFullscreen',
        'Dialog',
        'Loading',
        'Meta',
        'Notify',
        'Platform',
        'Screen'
      ]
      // iconSet: ctx.theme.mat ? 'material-icons' : 'ionicons'
      // i18n: 'de' // Quasar language
    },
    // animations: 'all' --- includes all animations
    animations: [],
    ssr: {
      pwa: false
    },
    pwa: {
      // workboxPluginMode: 'InjectManifest',
      // workboxOptions: {},
      manifest: {
        // name: 'Quasar App',
        // short_name: 'Quasar-PWA',
        // description: 'Best PWA App in town!',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            'src': 'statics/icons/icon-128x128.png',
            'sizes': '128x128',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-256x256.png',
            'sizes': '256x256',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-384x384.png',
            'sizes': '384x384',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ]
      }
    },
    cordova: {
      // id: 'org.cordova.quasar.app'
    },
    electron: {
      // bundler: 'builder', // or 'packager'
      extendWebpack (cfg) {
        // do something with Electron process Webpack cfg
      },
      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Window only
        // win32metadata: { ... }
      },
      builder: {
        // https://www.electron.build/configuration/configuration

        // appId: 'quasar-app'
      }
    }
  }
}
