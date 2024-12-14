
import { redirect } from "next/navigation";

import Pagination from "@/components/shared/Pagination";
import { getPosts } from "@/graphql";
import FeaturedPosts from "@/components/shared/FeaturedPost";
import PostCard from "@/components/cards/PostCard";
import { getThreads } from "@/lib/actions/actions";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import PostWidget from "@/components/shared/PostWidget";

// type Repo = {
//   post: string;
// }


export default  async function Blogpage() {
  const result:any = await getThreads()
  const posts = result.postsConnection.edges
  //console.log(posts)
  return (
    <>
      <section className=' flex flex-col gap-10'>
        <div className=" mx-auto px-2 mb-8 container ">
          <div className='max-sm:max-w-[390px]   max-w-[540px]  max-xs:max-w-[315px] max-xs:ml-[13px]'>
          <FeaturedPosts/>
          </div>
         <div>
           <div>
           {posts.map((post:any, index: any)=> (
            <PostCard key={index} post={post.node} />
            ))}
           </div>
         </div>
         <div className="lg:hidden">
          <div>
            <PostWidget />
          </div>
        </div>
        </div>
      </section>

      {/* <Pagination
        path='/'
        pageNumber={searchParams?.page ? +searchParams.page : 1}
        isNext={result.isNext} */}
    </>
  );
}


// export async function getStaticProps() {
//   const posts = (await getThreads()) || [];
//   console.log(posts)
//   return {
//     props: { posts },
//   };
// }

// export const getStaticProps: GetStaticProps  = async () => {
  
//   const posts:any = (await getThreads() as string) || [];
//   console.log(posts, 'hy tech bro')
//     return {
//       props: {posts},
//     };
// };
