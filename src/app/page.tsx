import Banner from "@/components/ui/Banner"
import Jobs from "@/components/ui/Jobs"
import About from "@/components/ui/About"
import Sponsors from "@/components/ui/Sponsors"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Banner />
      <Jobs/>
      <About />
      <Sponsors />
    </main>
  );
}
