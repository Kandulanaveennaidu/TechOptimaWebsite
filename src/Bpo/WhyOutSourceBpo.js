import { Link } from "react-router-dom";
import styles from "./WhyOutSourceBpo.module.css";
import HowDoestItWork from "./HowDoestItWork";
const WhyOutSourceBpo = () => {
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      // Navigate to the selected page using the Link component
      window.location.href = selectedValue; // This will redirect to the selected URL
    }
  };
  return (
    <>
      <div className={styles.bpo}>
        <Link to="/">
          <img
            className={styles.techoptimalogo2Icon}
            alt=""
            // src="/techoptimalogo-2@2x.png"
            src="/logo.png"
          />
        </Link>
        <div className={styles.aboutUsParent}>
          <Link to="/about" className={styles.aboutUs}>
            About Us
          </Link>
          <Link to="/Service" className={styles.aboutUs}>
            Services
          </Link>
          <select className={styles.select} onChange={handleSelectChange}>
            <option disabled defaultValue>
              Select an option
            </option>
            <option value="/"></option>
            {/* <option value="/services">OUR SERVICES</option>
                        <option value="/services">MICRO SERVICES</option> */}
            <option value="/ourservices">IT SERVICES</option>
            <option value="/ourMicroService">OUR SERVICES</option>
            <option value="/BPO">BPO</option>
          </select>
          <Link to="/" className={styles.aboutUs}>
            Careers
          </Link>
        </div>
        <div className={styles.getInTouchWrapper}>
          <div className={styles.getInTouch}>Get In Touch</div>
        </div>
        <div className={styles.whyOutsourceBpoWrapper}>
          <b className={styles.whyOutsourceBpo}>WHY OUTSOURCE BPO?</b>
        </div>
        <div className={styles.embraceOutsourcingUnlockContainer}>
          <p className={styles.embraceOutsourcingUnlock}>
            {" "}
            Embrace Outsourcing: Unlock the power of BPO - where specialised teams
            handle transactional tasks, empowering you to focus on your Business
            Strategy
          </p>
          <p className={styles.embraceOutsourcingUnlock}>&nbsp;</p>
          <p className={styles.embraceOutsourcingUnlock}>
            {" "}
            Delegate with Confidence: Trust our expertise as we streamline your
            business processes, ensuring efficient and effective operations.
          </p>
        </div>
      </div>
      <HowDoestItWork />
    </>
  );
};

export default WhyOutSourceBpo;
