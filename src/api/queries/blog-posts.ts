import { gql } from "graphql-request";

export const FETCH_BLOG_POSTS = gql`
  query FetchBlogPosts {
    blogPosts {
      id
      title
      slug
    }
  }
`;

export const FETCH_BLOG_POST_AND_RESTAURANTS = gql`
  query FetchBlogPostsAndRestaurants($slug: String!) {
    blogPost(where: { slug: $slug }) {
      title
      body {
        html
      }
      restaurants {
        total
        business {
          name
          alias
          display_phone
          photos
          rating
          is_closed
          location {
            city
            address1
          }
        }
      }
    }
  }
`;
