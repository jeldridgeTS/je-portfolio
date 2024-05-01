import { Rubik } from "next/font/google";
import Link from "next/link";

const rubik400 = Rubik({ weight: "400", variable: true, subsets: ["latin"] });
const rubik = Rubik({ weight: "900", subsets: ["latin"] });
const classes = `py-16 text-accent text-6xl self-center no-animation ${rubik.className}`;

export default function AboutMe() {
  return (
    <div className="w-full">
      <h1 className={classes}>About Me</h1>
      <div className="aboutMeContainer">
        <aside className="hidden lg:block aboutMeAside">
          <nav>
            <ul>
              <li>
                <h2>Table of Contents</h2>
              </li>
              <li>
                <Link href="/">Something 1</Link>
              </li>
              <li>
                <Link href="/">Something 2</Link>
              </li>
              <li>
                <Link href="/">Something 3</Link>
              </li>
              <li>
                <Link href="/">Something 4</Link>
              </li>
            </ul>
          </nav>
        </aside>
        <article
          className={`${rubik400.className} text-neutral text-left text-xl aboutMeArticle px-8 lg:pl-0`}
        >
          <p className="mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae
            tortor condimentum lacinia quis vel. Sem nulla pharetra diam sit.
            Donec enim diam vulputate ut. Praesent semper feugiat nibh sed.
            Donec ac odio tempor orci. Morbi quis commodo odio aenean sed
            adipiscing diam donec adipiscing. Amet tellus cras adipiscing enim
            eu turpis egestas pretium aenean. Augue neque gravida in fermentum
            et sollicitudin. Dolor sed viverra ipsum nunc aliquet. Nec nam
            aliquam sem et tortor consequat id. Feugiat scelerisque varius morbi
            enim nunc.
          </p>
          <p className="mb-8">
            Congue mauris rhoncus aenean vel elit scelerisque mauris. Id leo in
            vitae turpis massa sed. Turpis egestas pretium aenean pharetra magna
            ac placerat. Varius duis at consectetur lorem. Purus faucibus ornare
            suspendisse sed nisi lacus sed viverra. Ipsum faucibus vitae aliquet
            nec ullamcorper sit. Mauris commodo quis imperdiet massa. Sed
            elementum tempus egestas sed. Vulputate sapien nec sagittis aliquam
            malesuada bibendum arcu. Consectetur lorem donec massa sapien
            faucibus et molestie. Netus et malesuada fames ac turpis egestas.
            Vitae et leo duis ut. Ac turpis egestas maecenas pharetra convallis
            posuere morbi. Quis auctor elit sed vulputate mi sit amet. Eget sit
            amet tellus cras adipiscing enim eu. Vivamus arcu felis bibendum ut
            tristique. Dignissim enim sit amet venenatis urna. Nulla at volutpat
            diam ut. Rhoncus urna neque viverra justo nec ultrices dui. Ut morbi
            tincidunt augue interdum velit.
          </p>
          <p className="mb-8">
            A pellentesque sit amet porttitor. Vestibulum morbi blandit cursus
            risus at ultrices mi tempus. Gravida arcu ac tortor dignissim
            convallis aenean et. Dignissim diam quis enim lobortis scelerisque
            fermentum dui faucibus. Sed cras ornare arcu dui vivamus arcu. Justo
            nec ultrices dui sapien. Non tellus orci ac auctor augue mauris.
            Eros donec ac odio tempor orci dapibus. Ac tortor vitae purus
            faucibus ornare suspendisse sed nisi lacus. Quis ipsum suspendisse
            ultrices gravida dictum fusce ut. Amet consectetur adipiscing elit
            pellentesque habitant.
          </p>
          <p className="mb-8">
            Placerat orci nulla pellentesque dignissim enim sit. Laoreet non
            curabitur gravida arcu ac tortor dignissim. Sit amet porttitor eget
            dolor morbi. Blandit massa enim nec dui nunc. In metus vulputate eu
            scelerisque. Urna nec tincidunt praesent semper feugiat nibh sed
            pulvinar proin. Porttitor eget dolor morbi non arcu. Ut diam quam
            nulla porttitor massa id neque. Tempus quam pellentesque nec nam
            aliquam sem et tortor. Sapien pellentesque habitant morbi tristique
            senectus et. Eget egestas purus viverra accumsan in nisl nisi
            scelerisque eu.
          </p>
          <p className="mb-8">
            Venenatis urna cursus eget nunc scelerisque viverra. Enim diam
            vulputate ut pharetra. Vitae purus faucibus ornare suspendisse sed.
            Auctor elit sed vulputate mi sit amet mauris. Semper feugiat nibh
            sed pulvinar proin gravida hendrerit lectus a. Suspendisse ultrices
            gravida dictum fusce ut placerat orci. Aliquet enim tortor at
            auctor. Porttitor massa id neque aliquam vestibulum morbi blandit
            cursus risus. Tortor at risus viverra adipiscing at in. Auctor eu
            augue ut lectus arcu bibendum at. Ipsum faucibus vitae aliquet nec
            ullamcorper sit. Aliquam sem et tortor consequat id. Lacus
            vestibulum sed arcu non odio euismod lacinia at. Dictum sit amet
            justo donec.
          </p>
        </article>
      </div>
    </div>
  );
}
