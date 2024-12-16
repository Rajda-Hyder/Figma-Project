import Asgaard from "./component/[homesection]/asgaardSofa";
import FollowUs from "./component/[homesection]/followUs";
import Group19 from "./component/[homesection]/group19";
import Group54 from "./component/[homesection]/group54";
import Section1 from "./component/[homesection]/section1&2";

export default function Home() {
  return (
    <main className="flex flex-col gap-12 px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Section 1 */}
      <section>
        <Section1 />
      </section>

      {/* Group 19 */}
      <section>
        <Group19 />
      </section>

      {/* Asgaard Section */}
      <section className="bg-[#FFF9E5]">
        <Asgaard />
      </section>

      {/* Group 54 */}
      <section>
        <Group54 />
      </section>

      {/* Follow Us Section */}
      <section className="pb-8">
        <FollowUs />
      </section>
    </main>
  );
}

