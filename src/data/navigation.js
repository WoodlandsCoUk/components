module.exports = [
  {
    main: true,
    text: 'Buy',
    link: 'page-buy',
    navigation: [
      {
        main: false,
        text: 'Woodlands for sale',
        link: 'page-buy',
        navigation: [
          'Search for woods',
          'South East England',
          'Northern England',
          'Cumbria',
          'Central England',
          'East Anglia',
          'Devon'
        ]
      },
      {
        main: true,
        text: 'Buying a wood',
        link: 'page-buy',
        navigation: [
          'Why buy a wood?',
          'How to buy a woodland',
          'How we support owners',
          'Legal guide',
          'Finance guide',
          'Our covenant',
          'Recommended solicitors'
        ]
      },
      {
        main: false,
        text: 'Other land for sale',
        link: false,
        navigation: [
          'Tree planting land',
          'Lakes and rivers'
        ]
      },
      {
        main: true,
        text: 'Sell your wood',
        link: 'page-sell',
        navigation: [
          'Sell your wood to us',
          'Selling your wood through us'
        ]
      }
    ]
  },
  {
    main: true,
    text: 'Owning a wood',
    link: 'page-owning',
    navigation: [
      'Planning legislation',
      'Trees & regulations',
      'Access & tracks',
      'Management insurance'
    ]
  },
  {
    main: true,
    text: 'Videos & guides',
    link: 'page-videos-guides',
    navigation: [
      'Woodlands TV',
      'Woodland activities',
      'Practical guides',
      'What do people do?',
      'Looking after your wood',
      'Tree identification',
      'Wildlife identification'
    ]
  },
  {
    main: true,
    text: 'About us',
    link: 'page-about',
    navigation: [
      'Our team',
      'Press room',
      'Our research',
      'Contact us',
      'Meet us at woodfairs',
      'Community woodlands',
      'Woodland awards'
    ]
  }
]
