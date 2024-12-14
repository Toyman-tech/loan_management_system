import { GraphQLClient, gql } from 'graphql-request';
import {  NextResponse } from 'next/server';

const graphqlAPI = process.env.GRAPHQL_URL || '';

type CommentData ={
  name: string;
  email: string;
  comment: string;
  slug: string;
  error:string;
  success:boolean;
  message:string
}


export async function  POST(req: Request) {
  try {
    console.log('API endpoint hit');
    // console.log('this is the', req.body);
    const body = await new Request(req).text()
    console.log('this is the body', body);
    
    const { name, email, slug, comment }:CommentData  = JSON.parse(body);
    

    
     if (!name || !email || !slug || !comment) {
      console.log('name', name);
      

       return NextResponse.json({ error: 'Missing required fields' } );
    }


    const graphQLClient = new GraphQLClient(graphqlAPI, {
      headers: {
        'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.GRAPHQL_TOKEN}`,
      },
    });
     
    const mutationQuery = gql`
      mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
        createComment(data: { name: $name, email: $email, comment: $comment, post: { connect: { slug: $slug } } }) {
          id
        }
      }
    `;
    console.log('new body 33',body);
       
    const result = await graphQLClient.request(mutationQuery, {
      name,
      email,
      comment,
      slug,
    });

    return NextResponse.json({ success: true, message: 'Comment created successfully' });
  } catch (error) {
    console.error('Error in API handler:', error);
   return  NextResponse.json({ error: 'Internal Server Error' } );
  }
}
