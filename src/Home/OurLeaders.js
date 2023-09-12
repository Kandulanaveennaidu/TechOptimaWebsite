import { Link } from "react-router-dom";
import styles from "./OurLeaders.module.css";
import OurClients from "./OurClients";
const Home22 = () => {
    return (
        <>

            <div className={styles.home22}>
                <b className={styles.ourLeaders}>OUR LEADERS</b>
                <div className={styles.knowTheTeamWrapper}>
                    <div className={styles.knowTheTeam}>Know the Team</div>
                </div>
                <div className={styles.ceoCfoParent}>
                    <div className={styles.ceoCfo}>{`CEO & CFO`}</div>
                    <div className={styles.pramod}>Pramod</div>
                </div>
                <div className={styles.parent}>
                    <div className={styles.div}>“</div>
                    <div className={styles.div1}>“</div>
                    <div className={styles.atTechoptimaWe}>
                        At TechOptima, we lead with innovation, empowering businesses through
                        cutting-edge technology solutions. As CEO, I foster a culture of
                        excellence, driving digital transformation for our clients' remarkable
                        success. We are your trusted partner, inspiring positive change in the
                        industry, with a focus on customer satisfaction and strategic growth.
                    </div>
                </div>
                <div className={styles.home22Child11} />
                <div className={styles.ctoParent}>
                    <div className={styles.cto}>CTO</div>
                    <div className={styles.bhaskar}>Bhaskar</div>
                </div>
                <div className={styles.asCtoILeadATeamOfInnovParent}>
                    <div className={styles.atTechoptimaWe}>
                        As CTO, I lead a team of innovators committed to delivering
                        cutting-edge solutions that revolutionize industries and enhance user
                        experiences. At TechOptima, we constantly explore emerging
                        technologies to stay ahead of the curve, offering our clients the most
                        advanced solutions.
                    </div>
                    <div className={styles.div}>“</div>
                    <div className={styles.div1}>“</div>
                </div>
                <div className={styles.groupPresidentParent}>
                    <div className={styles.cto}>Group President</div>
                    <div className={styles.raghavacharyulu}>Raghavacharyulu</div>
                </div>
                <div className={styles.container}>
                    <div className={styles.div}>“</div>
                    <div className={styles.div1}>“</div>
                    <div className={styles.atTechoptimaWe}>
                        As the Chief Strategy Officer, my focus is on driving TechOptima's
                        growth through strategic planning, innovation, and client-centric
                        solutions. We position ourselves as a leading technology solutions
                        provider. Our commitment to excellence ensures high-impact results for
                        our clients, solidifying our position in the IT industry.
                    </div>
                </div>
                <div className={styles.image69Wrapper}>
                    <img className={styles.image69Icon} alt="" src="/image-69@2x.png" />
                </div>
                <div className={styles.image54Wrapper}>
                    <img className={styles.image54Icon} alt="" src="/image-54@2x.png" />
                </div>
                <div className={styles.image71Wrapper}>
                    <img className={styles.image71Icon} alt="" src="/image-71@2x.png" />
                </div>
            </div>

            <OurClients />
        </>
    );
};


export default Home22;

