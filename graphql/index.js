import { gql } from "graphql-request";


export const fliersQuery = gql `
  query  {
    fliers {
      eventImage {
        id
        url
      }
    }
  }
`
export const getPosts =   gql`
query MyQuery {
  postsConnection {
    edges {
      cursor
      node {
        author {
          bio
          name
          id
          image {
            url
          }
        }
        createdAt
        slug
        title
        excerpt
        featuredImage {
          url
        }
      }
    }
  }
}
  `;

//   const result= await client.request(query);
//  console.log(result, 'finalll')
//   return result.postsConnection.edges;


export const getPostDetails =  gql`
query GetPostDetails($slug : String!) {
  post(where: {slug: $slug}) {
    title
    excerpt
    featuredImage {
      url
    }
    author {
      name
      bio
      image {
        url
      }
    }
    createdAt
    slug
    content {
      raw
    }
  }
}

  `;

 

export const getSimilarPostsQuery = gql`
    query GetPostDetails($slug: String!) {
      posts(
        where: {slug_not: $slug},
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
`;

// export const getAdjacentPosts = async (createdAt, slug) => {
//   const query = gql`
//     query GetAdjacentPosts($createdAt: DateTime!,$slug:String!) {
//       next:posts(
//         first: 1
//         orderBy: createdAt_ASC
//         where: {slug_not: $slug, AND: {createdAt_gte: $createdAt}}
//       ) {
//         title
//         featuredImage {
//           url
//         }
//         createdAt
//         slug
//       }
//       previous:posts(
//         first: 1
//         orderBy: createdAt_DESC
//         where: {slug_not: $slug, AND: {createdAt_lte: $createdAt}}
//       ) {
//         title
//         featuredImage {
//           url
//         }
//         createdAt
//         slug
//       }
//     }
//   `;

//   const result = await request(graphqlAPI, query, { slug, createdAt });

//   return { next: result.next[0], previous: result.previous[0] };
// };


export const getFeaturedPostQuery= gql`
    query  {
      posts(where: {featuredPost: true}) {
        author {
          name
          image {
            url
          }
        }
        featuredImage {
          url
        }
        title
        slug
        createdAt
      }
    }   
  `;

//export const submitComment = async (obj) => {
//   const result = await fetch('/api/comments', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(obj),
//   });

//   return result.json();
// };

export const getCommentsQuery =  gql`
    query GetComments($slug:String!) {
      comments(where: {post: {slug:$slug}}){
        name
        createdAt
        comment
      }
    }
`;
//   const result = await request(graphqlAPI, query, { slug });

//   return result.comments;
// };

export const getRecentPostsQuery = gql`
    query {
      posts(
        orderBy: createdAt_ASC
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
