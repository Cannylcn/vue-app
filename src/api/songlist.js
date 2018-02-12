/**
 *Created by admin on 2018/2/1
 */
const _songlist = [
  {'id': 1, 'description': '沈以诚 焦迈奇 徐秉龙', 'listUrl': './static/images/cover.jpg', 'listener': '208万'},
  {'id': 2, 'description': '沈以诚 焦迈奇 徐秉龙', 'listUrl': './static/images/cover.jpg', 'listener': '208万'},
  {'id': 3, 'description': '沈以诚 焦迈奇 徐秉龙', 'listUrl': './static/images/cover.jpg', 'listener': '208万'},
  {'id': 4, 'description': '沈以诚 焦迈奇 徐秉龙', 'listUrl': './static/images/cover.jpg', 'listener': '208万'},
  {'id': 5, 'description': '沈以诚 焦迈奇 徐秉龙', 'listUrl': './static/images/cover.jpg', 'listener': '208万'},
  {'id': 6, 'description': '沈以诚 焦迈奇 徐秉龙', 'listUrl': './static/images/cover.jpg', 'listener': '208万'}
]

export default {
  getSongList (cb) {
    setTimeout(() => cb(_songlist), 100)
  },
  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  }
}
