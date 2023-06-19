import Head from 'next/head'
import Logo from '@/components/Logo'
import Image from 'next/image'
import CategoryLink from '@/components/Category';
import { prisma } from '@/config/database';
import ResourcesGrid from '@/components/PeopleGrid';
import { Person } from '@prisma/client';
import Header from '../../layouts/Header';
import Layout from '../../layouts/Layout';

export async function getServerSideProps() {
  const people = await prisma.person.findMany();
  return {
    props: {
      people: JSON.parse(JSON.stringify(people))
    }
  };
}

type Props = {
  people: Person[]
}

export default function Home({people = []}:Props) {
  return (
    <Layout>

      <main className='max-w-screen-2xl mx-auto flex justify-between items-start gap-20 px-20'>
        <aside className='flex flex-col gap-4'>
          <CategoryLink link='' active>
            All categories
          </CategoryLink>
          <CategoryLink link=''>
            Most honest
          </CategoryLink>
          <CategoryLink link=''>
            Most sexy
          </CategoryLink>
          <CategoryLink link=''>
            Most cool
          </CategoryLink>
          <CategoryLink link=''>
            Most intelligents
          </CategoryLink>
          <CategoryLink link=''>
            Most clubbers
          </CategoryLink>
          <CategoryLink link=''>
            Most hardworkers
          </CategoryLink>
        </aside>
        <div className='flex-1'>
          <h1 className='text-2xl font-bold mb-7'>
            All users
          </h1>

          <ResourcesGrid people={people}/>
          
        </div>

      </main>
    </Layout>
  )
}
