var mongoose = require('mongoose')

module.exports = mongoose.model(
  'セルフ類家サービスステーション',
  {
    address: '八戸市類家5丁目10-2',
    mobile: '0178-44-7740',
  },
  mongoose.model('セルフ旭ヶ丘サービスステーション', {
    address: '八戸市大字妙字西平8-1',
    mobile: '0178-34-1774',
  }),
)
