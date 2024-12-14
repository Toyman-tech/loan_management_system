"use server"
import {  fliersQuery, getCommentsQuery, getFeaturedPostQuery, getPostDetails, getPosts, getRecentPostsQuery, getSimilarPostsQuery } from '@/graphql';
import { gql,  GraphQLClient} from 'graphql-request'




const url =  process.env.GRAPHQL_URL || '' ;

const token = process.env.GRAPHQL_TOKEN;

const client = new GraphQLClient (url)


const makeGraphQLRequest = async ( query : string, variables={})=>{
  try {
      //client.request....
   return await client.request(query, variables);
   
  } catch (error) {
      throw error;
  }
}

export const getThreads = async()=>{
  client.setHeader("Authorization",  `Bearer ${token}`);
    
  return makeGraphQLRequest(getPosts, {}) 
  
}

export const getFliers = async()=>{
  client.setHeader("Authorization",  `Bearer ${token}`);
    
  return makeGraphQLRequest(fliersQuery, {}) 
  
}
// const result = await request(graphqlAPI, query, { slug });

// return result.post;
export const getPostDet = async(slug : string)=>{
  client.setHeader("Authorization",  `Bearer ${token}`);
  
  return makeGraphQLRequest(getPostDetails, {slug}) 
}

export const getRecentPosts = async()=>{
  client.setHeader("Authorization",  `Bearer ${token}`);
  
  return makeGraphQLRequest(getRecentPostsQuery, {}) 
}

export const getSimilarPosts : any = async(slug : string)=>{
  client.setHeader("Authorization",  `Bearer ${token}`);
  
  return makeGraphQLRequest(getSimilarPostsQuery, {slug}) 
}

export const getFeaturedPosts = async()=>{
  client.setHeader("Authorization",  `Bearer ${token}`);
  
  return makeGraphQLRequest(getFeaturedPostQuery, {}) 
}

export const getComments : any = async(slug : string)=>{
  client.setHeader("Authorization",  `Bearer ${token}`);
  
  return makeGraphQLRequest(getCommentsQuery, {slug}) 
}





























// export async function submitComment (obj: any) {
//       const headers = new Headers({
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${token}` || '', // Make sure 'token' is defined or provide a default value
//     });
//     const mutation = gql`
//       mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
//         createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}) { id }
//       }
//     `;
//     const graphQLClient = new GraphQLClient(url, {
//       headers: headers
//     });
//     const { name, email, comment, slug } = obj
//     const result = await graphQLClient.request(mutation, { name, email, comment, slug });

//     console.log('Comment created successfully:', result);

// }
// export async function submitComment (obj: any) {
//   console.log(obj)
//   try {
//     const headers = new Headers({
//       'Content-Type': 'application/json',
//       'Authorization': token || '', // Make sure 'token' is defined or provide a default value
//     });
//     const response = await fetch(`http://localhost:3000/api/comment/route`, {
//       method: 'POST',
//       headers: headers,
//       body: JSON.stringify(obj),
//     });

//     if (!response.ok) {
//       console.error('Failed to submit comment - Response status:', response.status);
//       const errorText = await response.text();
//       console.error('Error response:', errorText);
//       throw new Error('Failed to submit comment. Please try again later.');
//     }

//     const data = await response.json();
//     return data;
//   } catch (error :any) {
//     console.error('Error submitting comment:', error.message);
//     throw new Error('Failed to submit comment. Please try again later.');
//   }
// };
