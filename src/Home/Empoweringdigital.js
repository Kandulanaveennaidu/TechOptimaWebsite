import { Link } from "react-router-dom";
import styles from "./Empoweringdigital.module.css";
import OurServices from "./OurServices";
const Empoweringdigital = () => {
    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue) {
            window.location.href = selectedValue;
        }
    };
    return (
        <>
            <div className={styles.home}   >
                <div className={styles.homeChild} />
                <Link to="/" >
                    <img
                        className={styles.techoptimalogo2Icon}
                        alt=""
                        src="/logo.png"
                    />
                </Link>
                <div className={styles.aboutUsParent}>
                    <Link to="/about" className={styles.aboutUs}>
                        About Us
                    </Link>
                    <Link to="/service" className={styles.aboutUs}>
                        Services
                    </Link>
                    <select className={styles.select} onChange={handleSelectChange}>
                        <option disabled defaultValue>
                            Select an option
                        </option>
                        <option value="/"></option>
                        <option value="/ourservices">IT SERVICES</option>
                        <option value="/ourMicroService">OUR SERVICES</option>
                        <option value="/BPO">BPO</option>
                    </select>
                    <Link to="/bpo" className={styles.aboutUs}>
                        Careers
                    </Link>
                </div>
                <div className={styles.getInTouchWrapper}>
                    <div className={styles.getInTouch}>Get In Touch</div>
                </div>
                <div className={styles.scrollSlowlyFor}>
                    SCROLL SLOWLY FOR THE BEST EXPERIENCE
                </div>
                <div className={styles.empoweringDigitalTransformatParent}>
                    <b
                        className={styles.empoweringDigitalTransformat}
                    >{`EMPOWERING DIGITAL TRANSFORMATION  `}</b>
                    <b
                        className={styles.empoweringDigitalTransformats}
                    >{` WITH INNOVATIVE SOLUTIONS `}</b>
                    <div className={styles.letsConnectParent}>
                        <div className={styles.letsConnect}>Let’s Connect!</div>
                        <div className={styles.vectorWrapper}>
                            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                        </div>
                    </div>
                </div>
                <img className={styles.cloudIcon} alt="" src="/cloud.svg" />
                <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
                <img className={styles.homeItem} alt="" src="/vector-5.svg" />
            </div>
            <OurServices />
        </>
    );
};
export default Empoweringdigital;

