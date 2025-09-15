import { rest } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Transform your business <br className="sm:block hidden" /> with our
        expertise.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Led by visionary entrepreneur Mufaddal Sura, our team of experts 
        delivers award-winning digital solutions. We combine innovation with 
        proven strategies to help your business thrive in the digital age.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={rest} alt="business transformation" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
