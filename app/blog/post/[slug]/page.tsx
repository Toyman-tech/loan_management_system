import Author from "@/components/shared/Author";
import Comments from "@/components/shared/Comments";
import CommentsForm from "@/components/shared/CommentsForm";
import Loader from "@/components/shared/Loader";
import PostDetail from "@/components/shared/PostDetail";
import PostWidget from "@/components/shared/PostWidget";
import { getPostDet } from "@/lib/actions/actions";
import { getThreads } from "@/lib/actions/actions";


async function PostDetails({ params }: { params: { slug: string } }) {
 // const router = useRouter();

//   if (router.isFallback) {
//     return <Loader />;
//   }
const result:any = await getPostDet(params.slug as string);
const post = result.post
// console.log(post.content.raw.children)
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <section className='mt-9 flex flex-col gap-10'>
      <div className=" mx-auto px-2 mb-8">
        <div>
          <div className="">
            <PostDetail post={post} />
            <Author author={post.author} />
            <CommentsForm slug={post.slug}  />
            <Comments slug={post.slug} />
            <PostWidget slug={post.slug}/>
          </div>
          {/* <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <PostWidget slug={post.slug} />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default PostDetails;
