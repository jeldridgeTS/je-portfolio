/* eslint-disable react/no-unescaped-entities */
import { Rubik } from "next/font/google";

const rubik400 = Rubik({ weight: "400", variable: true, subsets: ["latin"] });
const rubik = Rubik({ weight: "900", subsets: ["latin"] });
const classes = `py-16 text-accent text-6xl self-center no-animation ${rubik.className}`;

export default function AboutMe() {
  return (
    <div className="w-full">
      <h1 className={classes}>About Me</h1>
      <div className="aboutMeContainer">
        <article
          className={`${rubik400.className} text-neutral text-left text-xl aboutMeArticle px-8 lg:pl-0`}
        >
          <p className="mb-8">
            I'm a software developer based in New Orleans, on the lookout for my
            next adventure and open to relocation. I kicked off my career in
            game development before shifting gears into an SDET role at
            TurboSquid. One of the highlights was revamping their automated
            testing project, transitioning it from Java to Ruby and tackling the
            challenges that came my way. Working at TurboSquid was a blast; I
            loved the startup vibe and the tight-knit community of a small to
            mid-sized company. Plus, I made some great friends among my
            colleagues. My tech toolkit includes Ruby, RSpec, CI/CD, Selenium,
            and full-stack development.
          </p>
          <p className="mb-8">
            When Shutterstock acquired TurboSquid in 2020, I got bumped up to a
            software engineer gig, diving into their flagship app. Though there
            was a bit of a culture shift moving to a smaller, close-knit setup,
            I quickly got pumped about joining the utilization and retention
            crew. It was a chance to dive into a fresh tech stack and soak up
            all the growth opportunities it offered. My toolbox included
            Node.js, Next.js, JavaScript, Jest, Playwright, React, and Jenkins.
          </p>
          <p className="mb-8">
            Acquisitions often mean not everyone from the acquired company
            sticks around. So, with the layoffs, I'm gearing up for the next
            chapter in my career. I'm excited to enhance my skills, diving
            deeper into JavaScript, React, and backend tech.
          </p>
          <p className="mb-8">
            When I'm not at work, you'll often find me at the local Nola Hack
            nights and meetups, immersing myself in the vibrant tech community.
            I love spending time training my Rat Terrier/Australian Shepherd mix
            (recent DNA tests debunked her supposed Beagle heritage) to learn
            new tricks. Additionally, I've recently taken up running with a
            local Hash House group, specifically the Voodoo Hash House Harriers.
          </p>
          <p className="mb-8">
            As I look to the future, I remain committed to continuous learning
            and professional development, eager to tackle new projects and
            contribute positively to any team or organization I join.
          </p>
        </article>
      </div>
    </div>
  );
}
