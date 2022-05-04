import React, { useState } from 'react';
import PlayIcon from './PlayIcon';
import InfoIcon from './InfoIcon';
import billboardHeroImg from './assets/billboard.webp';
import billboardHeroTitle from './assets/billboard-title.png';
import styles from './Billboard.module.css';

const Billboard = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className={styles.billboard}>
            <div className={styles.innerBillboard}>
                <img src={billboardHeroImg} alt="" />
                <div className={styles.fadeOut}></div>
                <div className={styles.info}>
                    <img src={billboardHeroTitle} alt="Abstract: The Art of Design" />
                    <div className={styles.description}>
                        When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced
                        to investigate the city's hidden corruption and question his family's involvement.
                    </div>
                    <div className={styles.links}>
                        <a href="/">
                            <PlayIcon />
                            <span>Play</span>
                        </a>
                        <button type="button" onClick={() => setToggle(!toggle)}>
                            <InfoIcon />
                            <span>More Info</span>
                        </button>
                        <div id="myModal" className={`${styles.modal} ${toggle && styles.open}`}>
                            <div className={styles.modalcontent}>
                                <span className={styles.close} onClick={() => setToggle(!toggle)}>
                                    &times;
                                </span>
                                <p>Directed by Matt Reeves </p>
                                <p>Robert Pattinson as Bruce Wayne / The Batman </p>
                                <p>Zoë Kravitz as Selina Kyle / Catwoman </p>
                                <p>Jeffrey Wright as Lt. James Gordon </p>
                                <p>Colin Farrell as Oz / The Penguin </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Billboard;
