import { FaFacebook, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
// import Container from '../Container/Container';
import { Picture } from '../Picture/Picture';
import css from './Team.module.css';

import person1jpg from '../../images/team/person1.jpg';
import person1Webp from '../../images/team/person1.webp';
import person1jpg2x from '../../images/team/person1@2x.jpg';
import person1Webp2x from '../../images/team/person1@2x.webp';
import person2jpg from '../../images/team/person2.jpg';
import person2Webp from '../../images/team/person2.webp';
import person2jpg2x from '../../images/team/person2@2x.jpg';
import person2Webp2x from '../../images/team/person2@2x.webp';
import person3jpg from '../../images/team/person3.jpg';
import person3Webp from '../../images/team/person3.webp';
import person3jpg2x from '../../images/team/person3@2x.jpg';
import person3Webp2x from '../../images/team/person3@2x.webp';

export default function Team() {
  return (
    <section id="team" className={css.team}>
      <div className={css.teamContainer}>
        {/* <Container> */}
        <h3 className={css.teamQuestion}>Who we are</h3>
        <h2 className={css.teamTitle}>Our Professional Team</h2>
        <p className={css.teamText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </p>
        <ul className={css.teamList}>
          <li className={css.teamItem}>
            <div className={css.teamThumb}>
              <Picture
                className={css.teamImage}
                jpg1x={person1jpg}
                jpg2x={person1Webp}
                webp1x={person1jpg2x}
                webp2x={person1Webp2x}
              />
              <div className={css.teamThumbOverlay}>
                <ul className={css.socialList}>
                  <li className={css.socialItem}>
                    <a
                      href="https://www.facebook.com/"
                      target="blank"
                      aria-label="facebook"
                    >
                      <FaFacebook className={css.socialIcon} />
                    </a>
                  </li>
                  <li className={css.socialItem}>
                    <a
                      href="https://www.twitter.com/"
                      target="blank"
                      aria-label="twitter"
                    >
                      <FaTwitter className={css.socialIcon} />
                    </a>
                  </li>
                  <li className={css.socialItem}>
                    <a
                      href="https://www.youtube.com/"
                      target="blank"
                      aria-label="youtube"
                    >
                      <FaYoutube className={css.socialIcon} />
                    </a>
                  </li>
                  <li className={css.socialItem}>
                    <a
                      href="https://www.linkedin.com/"
                      target="blank"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn className={css.socialIcon} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={css.teamBox}>
              <h3 className={css.teamBoxName}>John Doe</h3>
              <p className={css.teamBoxProfession}>President</p>
            </div>
          </li>
          <li className={css.teamItem}>
            <div className={css.teamThumb}>
              <Picture
                className={css.teamImage}
                jpg1x={person2jpg}
                jpg2x={person2Webp}
                webp1x={person2jpg2x}
                webp2x={person2Webp2x}
              />
              <div className={css.teamThumbOverlay}>
                <ul className={css.socialList}>
                  <li className={css.socialItem}>
                    <a
                      href="https://www.facebook.com/"
                      target="blank"
                      aria-label="facebook"
                    >
                      <FaFacebook className={css.socialIcon} />
                    </a>
                  </li>
                  <li className={css.socialItem}>
                    <a
                      href="https://www.twitter.com/"
                      target="blank"
                      aria-label="twitter"
                    >
                      <FaTwitter className={css.socialIcon} />
                    </a>
                  </li>
                  <li className={css.socialItem}>
                    <a
                      href="https://www.youtube.com/"
                      target="blank"
                      aria-label="youtube"
                    >
                      <FaYoutube className={css.socialIcon} />
                    </a>
                  </li>
                  <li className={css.socialItem}>
                    <a
                      href="https://www.linkedin.com/"
                      target="blank"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn className={css.socialIcon} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={css.teamBox}>
              <h3 className={css.teamBoxName}>Jane Doe</h3>
              <p className={css.teamBoxProfession}>Vice President</p>
            </div>
          </li>
          <li className={css.teamItem}>
            <div className={css.teamThumb}>
              <Picture
                className={css.teamImage}
                jpg1x={person3jpg}
                jpg2x={person3Webp}
                webp1x={person3jpg2x}
                webp2x={person3Webp2x}
              />
              <div className={css.teamThumbOverlay}>
                <ul className={css.socialList}>
                  <li className={css.socialItem}>
                    <a
                      href="https://www.facebook.com/"
                      target="blank"
                      aria-label="facebook"
                    >
                      <FaFacebook className={css.socialIcon} />
                    </a>
                  </li>
                  <li className={css.socialItem}>
                    <a
                      href="https://www.twitter.com/"
                      target="blank"
                      aria-label="twitter"
                    >
                      <FaTwitter className={css.socialIcon} />
                    </a>
                  </li>
                  <li className={css.socialItem}>
                    <a
                      href="https://www.youtube.com/"
                      target="blank"
                      aria-label="youtube"
                    >
                      <FaYoutube className={css.socialIcon} />
                    </a>
                  </li>
                  <li className={css.socialItem}>
                    <a
                      href="https://www.linkedin.com/"
                      target="blank"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn className={css.socialIcon} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={css.teamBox}>
              <h3 className={css.teamBoxName}>Steve Smith</h3>
              <p className={css.teamBoxProfession}>Marketing Head</p>
            </div>
          </li>
        </ul>
        {/* </Container> */}
      </div>
    </section>
  );
}
