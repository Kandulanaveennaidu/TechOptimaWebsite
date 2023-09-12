import { FunctionComponent } from 'react';
import styles from './Ourtechnologyofferings.module.css';
import BankandFinance from './BankandFinance';
const Home5 = () => {

    return (
        <>
            <div className={styles.home5}>
                <img className={styles.frameIcon1} alt="" src="Frame.svg" />
                <b className={styles.ourTechnologyOfferings}>OUR TECHNOLOGY OFFERINGS</b>
                <div className={styles.frameParent3}>
                    <div className={styles.frameWrapper4}>
                        <div className={styles.enterprisesParent}>
                            <b className={styles.enterprises}>Enterprises</b>
                            <div className={styles.javaNetOracleContainer}>
                                <p className={styles.blankLine}>Java,.NET</p>
                                <p className={styles.blankLine}> Oracle, Sybase,SQL Server</p>
                                <p className={styles.blankLine}>Customer Experience and UI Solutions: Angular, React, jQuery, Bootstrap</p>
                            </div>
                            <img className={styles.frameChild2} alt="" src="Vector 84kk.svg" />
                        </div>
                    </div>
                    <div className={styles.frameParent4}>
                        <div className={styles.enterprisesParent}>
                            <b className={styles.aiml}>AI/ML</b>
                            <div className={styles.pythonRBigContainer}>
                                <p className={styles.blankLine}>{` Python, `}</p>
                                <p className={styles.blankLine}>R,</p>
                                <p className={styles.blankLine}>{` Big Data, `}</p>
                                <p className={styles.blankLine}>Data Sciences.</p>
                            </div>
                        </div>
                        <img className={styles.frameChild2} alt="" src="Vector 84kk.svg" />
                    </div>
                    <div className={styles.frameParent4}>
                        <div className={styles.enterprisesParent}>
                            <b className={styles.integration}>Integration</b>
                            <div className={styles.webServicesMqContainer}>
                                <p className={styles.blankLine}>Web Services,</p>
                                <p className={styles.blankLine}>MQ,</p>
                                <p className={styles.blankLine}>API,</p>
                                <p className={styles.blankLine}>File based integration.</p>
                            </div>
                        </div>
                        <img className={styles.frameChild2} alt="" src="Vector 84kk.svg" />
                    </div>
                </div>
                <div className={styles.frameParent6}>
                    <div className={styles.frameParent4}>
                        <div className={styles.enterprisesParent}>
                            <b className={styles.devopsServices}>DevOps Services</b>
                            <div className={styles.jenkinsJiraMavenant}>Jenkins, JIRA, Maven/Ant, GIT/SVN, RPA (BluePrism, Automation Anywhere, UIPath).</div>
                        </div>
                        <img className={styles.frameChild2} alt="" src="Vector 84kk.svg" />
                    </div>
                    <div className={styles.frameParent4}>
                        <div className={styles.enterprisesParent}>
                            <b className={styles.dataAnalytics}>Data Analytics</b>
                            <div className={styles.jaspersoftPowerBiContainer}>
                                <p className={styles.blankLine}>{`JasperSoft, `}</p>
                                <p className={styles.blankLine}>{`Power BI, `}</p>
                                <p className={styles.blankLine}>Tableau,</p>
                                <p className={styles.blankLine}> ClickView.</p>
                            </div>
                        </div>
                        <img className={styles.frameChild2} alt="" src="Vector 84kk.svg" />
                    </div>
                    <div className={styles.frameParent4}>
                        <div className={styles.enterprisesParent}>
                            <b className={styles.testingServices}>Testing Services</b>
                            <div className={styles.seleniumJunitNunit1}>Selenium, Junit, Nunit, Burp, Fortify, Load Runner (Automation/Manual Testing Services).</div>
                        </div>
                        <img className={styles.frameChild2} alt="" src="Vector 84kk.svg" />
                    </div>
                </div>
            </div>
            <BankandFinance />
        </>

    );
};

export default Home5;
