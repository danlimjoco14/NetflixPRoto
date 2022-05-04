import React, { useState } from 'react';
import Search from '../Search/';
import Notifications from '../Notifications';
import UserMenu from '../UserMenu';
import BillboardSettings from '../BillboardSettings';

import styles from './SecondaryNavigation.module.css';

const SecondaryNavigation = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className={styles.box}>
            <div className={styles.navItem}>
                <Search />
            </div>
            <div className={styles.navItem}>
                <Notifications />
            </div>
            <div className={styles.navItem}>
                <UserMenu />
            </div>
            <div className={styles.navItem}>
                <BillboardSettings />
            </div>
            <button type="button" onClick={() => setToggle(!toggle)}>
                <span>More Info</span>
            </button>
            <div id="myModal" className={`${styles.modal} ${toggle && styles.open}`}>
                <div className={styles.modalcontent}>
                    <span className={styles.close} onClick={() => setToggle(!toggle)}>
                        &times;
                    </span>
                    <form className={styles.form}>
                        <input id="login" type="radio" name="tab" />
                        <label className={styles.tab_label} for="login">
                            log in
                        </label>
                        <input id="signup" type="radio" name="tab" />
                        <label className={styles.tab_label} for="signup">
                            sign up
                        </label>
                        <figure className={`${styles.figure} ${styles.reveal_login}`}>
                            <p>Please log in with your account.</p>
                            <input type="text" placeholder="user" />
                            <input type="password" placeholder="password" />
                            <input id="logged_in" type="checkbox" />
                            <label className={styles.content_label} htmlFor="logged_in">
                                Keep me logged in
                            </label>
                            <input type="submit" value="Log in" />
                        </figure>
                        <figure className={`${styles.figure} ${styles.reveal_signin}`}>
                            <p>You can register a new account.</p>
                            <input type="text" placeholder="user" />
                            <input type="password" placeholder="password" />
                            <input type="submit" value="Sign up" />
                        </figure>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SecondaryNavigation;
