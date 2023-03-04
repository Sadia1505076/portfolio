import Container from 'components/Container';

export default function About() {
  return (
    <Container title="About – Sadia Tasnim">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Links</h2>
          <ul>
            <li>
              GitHub: <a href="https://github.com/Sadia1505076">Sadia1505076</a>
            </li>
            <li>
              LinkedIn:{' '}
              <a href="https://www.linkedin.com/in/sadia-tasnim-285433130/">
                https://www.linkedin.com/in/sadia-tasnim-285433130/
              </a>
            </li>
            <li>
              <a
                href="/Sadia_Tasnim_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
          <h2>Experience</h2>
          <h3>Software Engineer</h3>
          <h4>
            <a href="https://chaldal.com">Chaldal</a>
          </h4>
          <h5>Backed by {' '}<a href='https://www.ycombinator.com/companies/chaldal'>[YC 15]</a></h5>
          <p>
            Chaldal is a leading online grocery startup in Bangladesh promising
            quality groceries at the best price. As a Software Engineer I:
            <ul>
              <li>
                Rebuilt Chaldal's payment system with Chaldal's very own F\# and
                .NET based <a href="https://eggshell.dev/">framework</a> which
                aims to eliminate the hassle of building the UI and the backend
                on separate tech stacks.
              </li>
              <li>
                Improved Chaldal's user-facing interfaces Chaldal web and{' '}
                <a href="https://play.google.com/store/apps/details?id=com.chaldal.poached&hl=en&gl=US">
                  Chaldal app
                </a>{' '}
                built on React and React Native supported by the Express and
                .NET based servers
              </li>
              <li>
                Built the UI for both web and app for a program called
                `Referral' reaching over 7.6k users with 7.9k+ referral usages
                within a month of the release.
              </li>
              <li>
                Built the `prescription' module of a recently introduced store
                called the pharmacy for both web and app along with designing
                and implementing the API specifications for it.
              </li>
            </ul>
          </p>
          <h3>Software Developer</h3>
          <h4>
            <a href="https://www.openrefactory.com/">Open Refactory</a>
          </h4>
          <p>
            Analyzed Java libraries to build a dataset for training automated
            code correction models.
          </p>
          <h3>Education</h3>
          <p>
            I graduated from Bangladesh University of Engineering and Technology
            with a B.S. in Computer Science and Engineering.
          </p>
        </div>
      </div>
    </Container>
  );
}
