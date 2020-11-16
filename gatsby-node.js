/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
    query GetPosts{
        wpgraph2eas{
            posts{
                nodes{
                   
                    slug
                }
            }
        }
    }
    `)

    result.data.wpgraph2eas.posts.nodes.forEach(item => {
        createPage(
            {
                path: `/News/posts/${item.slug}`,
                component: path.resolve(`./src/template/Posts.js`),
                context: {
                    slug: item.slug

                }
            }
        )

    })
}