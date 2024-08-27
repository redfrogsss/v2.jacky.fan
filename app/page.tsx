import { Page } from '@/components/basic'
import { getContents } from '@/helpers/strapi'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

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