import React from 'react';
import Segment from '../Segment';
import styles from './Titles.module.css';

import ave from './assets/ave.jpg';
import inc from './assets/inc.jpg';
import int from './assets/int.jpg';
import obl from './assets/obl.jpg';
import sta from './assets/sta.jpg';

import bla from './assets/bla.jpg';
import sq from './assets/sq.jpg';
import par from './assets/par.jpg';
import lal from './assets/lal.jpg';
import ww19 from './assets/ww19.jpg';

import rev from './assets/rev.jpg';
import don from './assets/don.jpg';
import ao from './assets/ao.jpg';
import fg from './assets/fg.jpg';
import rev2 from './assets/rev2.jpg';

import al from './assets/al.jpg';
import htgawm from './assets/htgawm.jpg';
import b99 from './assets/b99.jpg';
import rm from './assets/rm.jpg';
import twi from './assets/twi.jpg';

const Titles = () => {
    return (
        <div className={styles.titles}>
            <Segment title="New Releases on Netflix" pics={[ave, inc, int, obl, sta]} />
            <Segment title="Continue watching for Home" pics={[bla, sq, par, lal, ww19]} />
            <Segment title="Trending Now" pics={[rev, don, ao, fg, rev2]} />
            <Segment title="Watch It Again" pics={[al, htgawm, b99, rm, twi]} />
        </div>
    );
};

export default Titles;
