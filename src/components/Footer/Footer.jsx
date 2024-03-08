// Footer.jsx

import { Grid } from "@mui/material";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Grid container spacing={2} className={styles.upper}>
        <Grid item xs={12} sm={5} className={styles.text}>
          <h1>MOTORENT</h1>
          <p>
            Our Vision is to provide convenience and help increase your sales
            business
          </p>
        </Grid>
        <Grid item xs={6} sm={2}>
          <ul className={styles.about}>
            <h3>About</h3>
            <li>How it works</li>
            <li>Featured</li>
            <li>Partnership</li>
            <li>Business Relation</li>
          </ul>
        </Grid>
        <Grid item xs={6} sm={2}>
          <ul className={styles.community}>
            <h3>Community</h3>
            <li>Events</li>
            <li>Blog</li>
            <li>Podcast</li>
            <li>Invite a friend</li>
          </ul>
        </Grid>
        <Grid item xs={6} sm={2}>
          <ul className={styles.socials}>
            <h3>Socials</h3>
            <li>Discord</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Facebook</li>
          </ul>
        </Grid>
      </Grid>
      <Grid container className={styles.lower} spacing={2}>
        <Grid item xs={12} sm={6}>
          &copy;2024 MotoRent. All Rights Reserved to Team El 3atawla
        </Grid>
        <Grid item xs={6} sm={2} className={styles.policy}>
          <h4>Privacy&Policy</h4>
        </Grid>
        <Grid item xs={6} sm={2}>
          <h4>Terms&Conditions</h4>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
