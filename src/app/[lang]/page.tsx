import { LandingPage } from "@/components/landing-page";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (

    <LandingPage dictionary={dictionary} />


  );
}
