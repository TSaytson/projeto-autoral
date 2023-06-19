import { Person as PersonModel } from "@prisma/client";
import Image from "next/image";

type PersonComponentProps = Omit<PersonModel, 'createdAt' | 'updatedAt'> & {
  link: string,
  imageUrl: string
}
export default function Person(
  { name, description, imageUrl, link }: PersonComponentProps) {
  return (
    <a href={link}>
      <div className='flex flex-col gap-2 max-w-xs'>
        <div className="w-full">
          <Image
            src={imageUrl}
            alt={name}
            width={400}
            height={400}
          />
        </div>
        
        <span className='text-xl font-bold'>{name}</span>
        <p className='text-base'>
          {description}
        </p>
      </div>
    </a>
  )
}