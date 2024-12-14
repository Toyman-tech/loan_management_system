import { fliersQuery } from '@/graphql';
//import {  GraphQLClient} from 'graphql-request'


import About from "@/components/landing/About";
import Faq from "@/components/landing/Faq";
import Hero from "@/components/landing/Hero";
import { getFliers } from "@/lib/actions/actions";
import Searchbar from '@/components/landing/Searchbar';
import Container from '@/components/landing/Container';
import Location from '@/components/landing/Location';
import Volunteers from '@/components/landing/Volunteers';
import Testimonies from '@/components/landing/Testimonies';



// export const getStaticProps = async ()=> {
  
//   const isProduction = process.env.NODE_ENV === 'production';
  
//   const url = isProduction? process.env.GRAPHQL_URL || '' : 'https://api-eu-west-2.hygraph.com/v2/clnubt9f60sfj01t550srfiuv/master';
  
//   const token = process.env.GRAPHQL_TOKEN;
  
//   const client = new GraphQLClient (url)
  
  
//   const makeGraphQLRequest = async ( query : string, variables={})=>{
//     try {
//         //client.request....
//      return await client.request(query, variables);
//      console.log('done here')
//     } catch (error) {
//         throw error;
//     }
//   } 
//    const getFliers = async()=>{
//     client.setHeader("Authorization", `Bearer ${token}`);
      
//     return makeGraphQLRequest(fliersQuery, {}) 
    
//   }
//   const result = await getFliers();
//   //console.log(result);
//   console.log('hyttt');
  
  
//   //const results = data
//   return{
//     props: {
//       result,
//     }
//   }
  
// }

const Home = async () => {
  const data = await getFliers()
  
  return (
    <section className="flex w-[100vw] flex-col ">
       <Searchbar/>
       <Container/>
       <About data={data} />
       <Location/>
        {/* <Hero/> */}
        <Testimonies/>
        <Volunteers/>
        <Faq />
   </section>
    )
}

export default Home;
