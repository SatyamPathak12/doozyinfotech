import { apple, rest, google, hero } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={hero} alt="business solutions" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Streamline your <br className="sm:block hidden" /> business
        operations
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        From accounting solutions to HR management, we provide integrated 
        digital tools that simplify your business processes. Our comprehensive 
        approach ensures efficiency and growth across all departments.
      </p>

   
    </div>
  </section>
);

export default Billing;
