import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <header>
        <h1>Welcome to investoCalsi!</h1>
        <p>Your go-to destination for precision-driven investment planning.</p>
      </header>

      <section>
        <h2>Why investoCalsi?</h2>
        <p>
          <strong>Precise Returns Calculation:</strong> Our advanced algorithms
          ensure accurate calculations for your investment returns, whether it's
          SIP or lumpsum.
        </p>
        <p>
          <strong>User-Friendly Interface:</strong> Simplifying financial
          planning with a user-friendly interface, investoCalsi eliminates
          jargon and confusion.
        </p>
        <p>
          <strong>Optimal Investment Decisions:</strong> Tailor your investment
          decisions to your financial goals, guided by investoCalsi whether
          you're a seasoned investor or just starting.
        </p>
      </section>

      <section>
        <h2>Key Features:</h2>
        <ul>
          <li>
            <strong>SIP Calculator:</strong> Effortlessly plan your Systematic
            Investment Plan.
          </li>
          <li>
            <strong>Lumpsum Calculator:</strong> Gain insights into potential
            returns for one-time or periodic investments.
          </li>
          <li>
            <strong>Accurate Projections:</strong> Trust investoCalsi for
            precise calculations based on robust financial models.
          </li>
          <li>
            <strong>Financial Future Planning:</strong> Visualize and plan your
            financial future confidently.
          </li>
        </ul>
      </section>

      <section>
        <h2>How to Use investoCalsi:</h2>
        <ol>
          <li>
            <strong>Select Investment Type:</strong> Choose between SIP or
            Lumpsum based on your preference.
          </li>
          <li>
            <strong>Enter Details:</strong> Input essential details like
            investment amount, duration, and expected rate of return.
          </li>
          <li>
            <strong>Get Results:</strong> Sit back and let investoCalsi provide
            a comprehensive breakdown of your potential returns.
          </li>
        </ol>
      </section>

      <section>
        <h2>Start Your Financial Journey with investoCalsi:</h2>
        <p>
          No more guesswork, no more uncertainty – investoCalsi is your reliable
          companion on the path to financial success. Your financial future
          awaits – calculate, plan, and thrive with investoCalsi!
        </p>
      </section>
    </div>
  );
};

export default About;
