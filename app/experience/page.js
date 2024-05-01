import { Rubik } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const rubik400 = Rubik({ weight: "400", variable: true, subsets: ["latin"] });
const rubikHeading = Rubik({ weight: "900", subsets: ["latin"] });
const titleClasses = `pt-16 pb-24 text-accent text-6xl self-center no-animation ${rubikHeading.className}`;
const h1Classes = `leading-none pb-6 text-info text-3xl self-center ${rubikHeading.className}`;

export default function Experience() {
  return (
    <div className="w-full">
      <h1 className={titleClasses}>Experience</h1>
      <div className="aboutMeContainer xpText">
        <aside className="hidden lg:block aboutMeAside">
          <nav>
            <ul className="gap-4 grid grid-cols-1">
              <Link className="text-info" href="#summary">
                Summary of Qualifications
              </Link>
              <Link className="text-info" href="#profExp">
                Professional Experience
              </Link>
              <Link
                className="pl-4"
                href="#shutterstock"
                style={{ color: "peru" }}
              >
                ShutterStock
              </Link>
              <Link
                className="pl-4"
                href="#turbosquid"
                style={{ color: "peru" }}
              >
                TurboSquid
              </Link>
              <Link className="text-info" href="#education">
                Education
              </Link>
              <Link className="text-info" href="#skills">
                Additional Skill
              </Link>
            </ul>
          </nav>
        </aside>
        <article
          className={`${rubik400.className} text-neutral text-left text-xl aboutMeArticle px-8 lg:pl-0`}
        >
          <h1 id="summary" className={`${h1Classes}`}>
            Summary of Qualifications
          </h1>
          <p className="tracking-wide">
            Experienced Software and Automation Engineer with more than 10 years
            experience in software development and automated testing.
            <div className="py-4">
              Proficient in both front-end and back-end development, including
              Ruby, CI/CD pipelines, JavaScript, Typescript, and Node.js.
            </div>
            Actively seeking roles to contribute as a software engineer,
            focusing on building robust and maintainable solutions while
            ensuring thorough testing practices across all layers of the
            application.
          </p>
          <h1 id="profExp" className={h1Classes}>
            Professional Experience
          </h1>
          <div className="workExp mb-32">
            <h2 id="shutterstock">ShutterStock, Inc.</h2>
            <h3>Software Engineer I - January 2023 – January 2024</h3>
            <p>
              <ul>
                <li>
                  <span>●</span> Built new features using Next.js, React,
                  Typescript, and Material UI working closely with design and
                  product teams.
                </li>
                <li>
                  <span>●</span> Maintained tests using Jest, Cyprus, and
                  Playwright ensuring new features met code coverage standards
                  and ensuring a smooth CI/CD pipeline.
                </li>
                <li>
                  <span>●</span> Implemented experiments for User Savings flows
                  with the goal of increasing user engagement with alternate
                  revenue paths. This resulted in winning experiments which
                  increased sales for our On-Demand Credit Packs.
                </li>
              </ul>
            </p>
            <h2 id="turbosquid">TurboSquid</h2>
            <h3>June 2013 – January 2023</h3>
            <p>
              <ul>
                <li>
                  <span>●</span> Implemented CI/CD pipelines for our projects’
                  unit and integration tests that resulted in a more consistent
                  release schedule as well as boosting confidence of releases.
                </li>
                <li>
                  <span>●</span> Rebuilt and modernized TurboSquid’s end-to-end
                  testing project using Ruby, Selenium (Watir), and RSpec
                  allowing for a distributable testing suite for QA analysts and
                  developers resulting in increased trust and confidence in
                  releases as well as velocity.
                </li>
                <li>
                  <span>●</span> Created and maintained tooling software using
                  Python, Flask, 3DS Max, and MAXScript allowing QA analysts to
                  generate test assets with an easy to use UI/UX increasing the
                  speed at which manual testing could be executed.
                </li>
                <li>
                  <span>●</span> Created and maintained automated tests
                  including unit, integration, and end-to-end.
                </li>
              </ul>
            </p>
          </div>
          <h1 id="education" className={h1Classes}>
            Education
          </h1>
          <h2>Collins College - Phoenix, AZ</h2>
          <h3>Bachelor of Arts in Game Development</h3>
          <p>
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
          <h1 id="skills" className={h1Classes}>
            Additional Skills
          </h1>
          <div className="overflow-x-auto pt-6">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th></th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <Image
                            src="/tailwind-css-component-profile-2@56w.png"
                            alt="Avatar Tailwind CSS Component"
                            height={48}
                            width={48}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Zemlak, Daniel and Leannon
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Desktop Support Technician
                    </span>
                  </td>
                  <td>Purple</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
                {/* row 2 */}
                <tr>
                  <th></th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <Image
                            src="/tailwind-css-component-profile-3@56w.png"
                            alt="Avatar Tailwind CSS Component"
                            height={48}
                            width={48}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Brice Swyre</div>
                        <div className="text-sm opacity-50">China</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Carroll Group
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Tax Accountant
                    </span>
                  </td>
                  <td>Red</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
                {/* row 3 */}
                <tr>
                  <th></th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <Image
                            src="/tailwind-css-component-profile-4@56w.png"
                            alt="Avatar Tailwind CSS Component"
                            height={48}
                            width={48}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Marjy Ferencz</div>
                        <div className="text-sm opacity-50">Russia</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Rowe-Schoen
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Office Assistant I
                    </span>
                  </td>
                  <td>Crimson</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
                {/* row 4 */}
                <tr>
                  <th></th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <Image
                            src="/tailwind-css-component-profile-5@56w.png"
                            alt="Avatar Tailwind CSS Component"
                            height={48}
                            width={48}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Yancy Tear</div>
                        <div className="text-sm opacity-50">Brazil</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Wyman-Ledner
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Community Outreach Specialist
                    </span>
                  </td>
                  <td>Indigo</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
      </div>
    </div>
  );
}
