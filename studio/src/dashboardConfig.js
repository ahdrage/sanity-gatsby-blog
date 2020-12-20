export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fdf585874ff485e3ca5db81',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-vetfwu8d',
                  apiId: 'edb89db4-316d-4400-a01a-1c0a8851e94c'
                },
                {
                  buildHookId: '5fdf5858ab133d6efa39dd03',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-gg49nd2k',
                  apiId: '2aa6d2db-2cfb-4ed2-ac85-078285c0a211'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ahdrage/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-gg49nd2k.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
