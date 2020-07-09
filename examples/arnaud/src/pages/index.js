import React from 'react';
import { RichText } from 'prismic-reactjs';
import { graphql, Link } from 'gatsby';
import { linkResolver } from '../prismic/linkResolver';
import Layout from '../components/layout';
import Image from '../components/image';

export const query = graphql`
  query {
    prismic {
      allHomepages {
        edges {
          node {
            title
          }
        }
      }
      allBlogposs(sortBy: meta_firstPublicationDate_ASC) {
        edges {
          node {
            body
            title
            _meta {
              uid
              type
              id
            }
          }
        }
      }
    }
  }
`;

const Homepage = props => {
  const data = props.data.prismic.allHomepages.edges[0].node;

  return (
    <Layout>
      <div id="homepage">
        <h1>{RichText.asText(data.title)}</h1>
        <Image />
        <ul>
          {props.data.prismic.allBlogposs.edges.map(({ node }) => {
            const page = linkResolver(node._meta);
            const id = node._meta.id;
            const title = RichText.asText(node.title);
            return (
              <li key={id}>
                <Link to={page}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
};

export default Homepage;
