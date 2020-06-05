module.exports = {
  order: 2,
  title: 'Footer',
  handle: 'layout-footer',
  status: 'ready',
  default: 'default',
  context: {
    footer: {
      org: 'Woodlands.co.uk',
      text: 'Woodland Investment Management Ltd',
      year: new Date().getFullYear()
    },
    navigation: {
      'Buying a wood': [
        'Why buy a wood?',
        'How to buy a woodland',
        'How we support owners',
        'Legal guide',
        'Finance guide',
        'Our covenant',
        'Recommended solicitors'
      ],
      'Sell your wood': [
        'Sell your wood to us',
        'Selling your wood through us'
      ],
      'Owning a wood': [
        'Planning legislation',
        'Trees & regulations',
        'Access & tracks',
        'Management insurance'
      ],
      'Blogs & videos': [
        'Woodlands TV',
        'Woodland activities',
        'Practical guides',
        'What do people do?',
        'Looking after your wood',
        'Tree identification',
        'Wildlife identification'
      ],
      'About us': [
        'Our team',
        'Press room',
        'Our research',
        'Contact us',
        'Meet us at woodfairs',
        'Community woodlands',
        'Woodland awards'
      ]
    },
    social: {
      modifiers: ['medium']
    }
  }
}
