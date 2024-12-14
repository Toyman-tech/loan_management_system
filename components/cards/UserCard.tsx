'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

interface Props {
    id: string;
    name: string;
    username: string;
    imgUrl: string;
    personType: string;
    style? : string;
}


const UserCard = ({
    id, 
    name, 
    username,
    imgUrl,
    personType,
    style
}: Props) => {
    const router = useRouter()
  return (
    <article className='user-card'>
        <div className="user-card_avatar">
            <Image
             src={imgUrl}
             alt='logo'
             width={48}
             height={48}
             className='rounded-full'
            />
            <div className='flex-1 text-ellipsis'>
                <h4 className={`text-base-semibold ${style? 'text-dark-1': 'text-light-1'} `}>
                    {name}
                </h4>
                <p className={`text-small-medium  ${style? 'text-[#0000009c]' : 'text-[#c7d643]'} `}>
                    @{username}
                </p>
            </div>
        </div>
        <Button className={`user-card_btn  ${style? 'bg-[#339c33a6]' : 'bg-[#ffff00a3]'} `} onClick={() => router.push(`/blog/profile/${id}`)} >
            View
        </Button>
    </article>
  )
}

export default UserCard