import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import Image from "gatsby-image";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {data.prismic.allImages.edges.map(({ node }) => (
      <div key={node._meta.id}>
        <h2>{node.title[0].text}</h2>
        <p>Uncropped image:</p>
        <ul>
          <li>Expected dimensions: 300{300 / node.image.dimensions.width * node.image.dimensions.height}</li>
          <li>Actual dimensions:  {node.raw.childImageSharp.fixed.width}x{node.raw.childImageSharp.fixed.height}</li>
        </ul>
        <p>Cropped image:</p>
        <ul>
        <li>Expected dimensions: {node.image.TestCrop.dimensions.width}x{node.image.TestCrop.dimensions.height}</li>
          <li>Actual dimensions:  {node.cropped.childImageSharp.fixed.width}x{node.cropped.childImageSharp.fixed.height}</li>
        </ul>
      </div>
    ))}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    prismic {
      allImages {
        edges {
          node {
            _meta {
              id
            }
            title
            image
            raw: imageSharp {
              childImageSharp {
                fixed(width: 300) {
                  height
                  width
                }
              }
            }
            cropped: imageSharp(crop: "TestCrop") {
              childImageSharp {
                fixed {
                  height
                  width
                }
              }
            }
          }
        }
      }
    }
  }
`;
