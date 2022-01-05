// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://106.75.34.21:1337',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['post', 'fan', 'follower', 'project'],
        singleTypes: ['general'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '',
        //   password: ''
        // }
      }
    }
  ],
  templates: {
    StrapiFan: [
      {
        path: '/fan/:id',
        component: './src/templates/fanDetail.vue'
      }
    ],
    StrapiFollower: [
      {
        path: '/follower/:id',
        component: './src/templates/followerDetail.vue'
      }
    ],
    StrapiPost: [
      {
        path: '/blog/:id',
        component: './src/templates/postDetail.vue'
      }
    ],
    StrapiProject: [
      {
        path: '/project/:id',
        component: './src/templates/projectDetail.vue'
      }
    ]
  }
}
