export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5ddbcedf94a944f768f07aaa',
                  title: 'Sanity Studio',
                  name: 'gatsby-portfolio-preview-poc-studio',
                  apiId: '5722cd8a-62a4-42e0-8d57-678a32c869af'
                },
                {
                  buildHookId: '5ddbcedf687d60f4bcf19588',
                  title: 'Portfolio Website',
                  name: 'gatsby-portfolio-preview-poc',
                  apiId: '1a46456e-9fc9-44f7-82a1-34db923ec9bc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sanity-io/gatsby-portfolio-preview-poc',
            category: 'Code'
          },
          {
            title: 'Netlify Frontend',
            value: 'https://gatsby-portfolio-preview-poc.netlify.com',
            category: 'apps'
          },
          {
            title: 'Gatsby Preview Frontend',
            value: 'https://gatsby-portfolio-preview-poc-1812761745.gtsb.io',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
