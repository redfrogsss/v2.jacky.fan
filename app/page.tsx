import { Alert, Footer, Navbar } from '@/components'
import { Page } from '@/components/basic'
import { AboutMeSection, ContactMeSection, HeroSection, BottomSection, WorkSection } from '@/components/home/sections'
import { getContents } from '@/helpers/strapi'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

async function getData() {
  const res = await fetch(`${process.env.STRAPI_URL}/api/pages?populate=*&filters[url][$eqi]=/`);

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

  console.log(data[0].attributes.Contents);
  

  return (
    <Page reserveNavbarHeight={false}>
      {/* <HeroSection title="Jacky FAN" desc="I build websites and eat computer bugs 😉" />
      <AboutMeSection />
      <WorkSection /> */}
      {/* <ContactMeSection /> */}
      {/* <BottomSection />
      <Alert /> */}

      {getContents(data[0].attributes.Contents)}
    </Page>
  )
}