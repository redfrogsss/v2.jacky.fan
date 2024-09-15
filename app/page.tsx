import { Page } from '@/components/basic'
import { getContents } from '@/helpers/strapi'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const endpoint = `${process.env.STRAPI_URL}/api/pages?populate=*&filters[url][$eqi]=/`;
  const { data } = await fetch(endpoint).then((res) => res.json())

  if (!data || !data[0] || !data[0].attributes?.pageTitle || !data[0].attributes?.metaDesc) return {
      title: "Jacky FAN - Frontend Developer in Hong Kong",
      description: "I build websites and eat computer bugs 😉",
  };

  return {
      title: `Jacky FAN - Frontend Developer in Hong Kong`,
      description: data[0].attributes.metaDesc,
  }
}

async function getData() {
  const res = await fetch(`${process.env.STRAPI_URL}/api/pages?populate[0]=Contents&populate[1]=Contents.techs&populate[2]=Contents.techs.icon&filters[url][$eqi]=/`);

  if (!res.ok) {
      throw new Error("Failed to fetch data");
  }

  return res.json();
}


async function checkPageExist() {
  const { data } = await getData();

  if (data.length == 0) {
      revalidatePath(`/`);
      redirect("/404?from=/");
  }
}

export default async function Home() {

  const { data } = await getData();


  return (
    <Page reserveNavbarHeight={false}>
      {getContents(data[0].attributes.Contents)}
    </Page>
  )
}