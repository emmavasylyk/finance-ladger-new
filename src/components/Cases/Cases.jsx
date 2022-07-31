// import Container from '../Container/Container';
import { Picture } from '../Picture/Picture';
import css from './Cases.module.css';

import cases1jpg from '../../images/cases/cases1.jpg';
import cases1Webp from '../../images/cases/cases1.webp';
import cases1jpg2x from '../../images/cases/cases1@2x.jpg';
import cases1Webp2x from '../../images/cases/cases1@2x.webp';
import cases2jpg from '../../images/cases/cases2.jpg';
import cases2Webp from '../../images/cases/cases2.webp';
import cases2jpg2x from '../../images/cases/cases2@2x.jpg';
import cases2Webp2x from '../../images/cases/cases2@2x.webp';
import cases3jpg from '../../images/cases/cases3.jpg';
import cases3Webp from '../../images/cases/cases3.webp';
import cases3jpg2x from '../../images/cases/cases3@2x.jpg';
import cases3Webp2x from '../../images/cases/cases3@2x.webp';
import cases5jpg from '../../images/cases/cases5.jpg';
import cases5Webp from '../../images/cases/cases5.webp';
import cases5jpg2x from '../../images/cases/cases5@2x.jpg';
import cases5Webp2x from '../../images/cases/cases5@2x.webp';
import cases7jpg from '../../images/cases/cases7.jpg';
import cases7Webp from '../../images/cases/cases7.webp';
import cases7jpg2x from '../../images/cases/cases7@2x.jpg';
import cases7Webp2x from '../../images/cases/cases7@2x.webp';
import cases4jpg from '../../images/cases/cases4.jpg';
import cases4Webp from '../../images/cases/cases4.webp';
import cases4jpg2x from '../../images/cases/cases4@2x.jpg';
import cases4Webp2x from '../../images/cases/cases4@2x.webp';

export default function Cases() {
  return (
    <>
      <section id="cases" className={css.cases}>
        <div className={css.casesContainer}>
          {/* <Container> */}
          <h3 className={css.casesQuestion}>This is what we do</h3>
          <h2 className={css.casesTitle}>
            <span className={css.casesTitleCorrect}>Business</span> Cases
          </h2>
          <p className={css.casesText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!
          </p>
          <ul className={css.casesList}>
            <li className={css.casesItem}>
              <a href={cases1jpg} data-lightbox="cases" data-title="My caption">
                <Picture
                  className={css.casesImage}
                  jpg1x={cases1jpg}
                  jpg2x={cases1Webp}
                  webp1x={cases1jpg2x}
                  webp2x={cases1Webp2x}
                />
              </a>
            </li>
            <li className={css.casesItem}>
              <a href={cases3jpg} data-lightbox="cases" data-title="My caption">
                <Picture
                  className={css.casesImage}
                  jpg1x={cases3jpg}
                  jpg2x={cases3Webp}
                  webp1x={cases3jpg2x}
                  webp2x={cases3Webp2x}
                />
              </a>
            </li>
            <li className={css.casesItem}>
              <a href={cases5jpg} data-lightbox="cases" data-title="My caption">
                <Picture
                  className={css.casesImage}
                  jpg1x={cases5jpg}
                  jpg2x={cases5Webp}
                  webp1x={cases5jpg2x}
                  webp2x={cases5Webp2x}
                />
              </a>
            </li>
            <li className={css.casesItem}>
              <a href={cases7jpg} data-lightbox="cases" data-title="My caption">
                <Picture
                  className={css.casesImage}
                  jpg1x={cases7jpg}
                  jpg2x={cases7Webp}
                  webp1x={cases7jpg2x}
                  webp2x={cases7Webp2x}
                />
              </a>
            </li>
            <li className={css.casesItem}>
              <a href={cases2jpg} data-lightbox="cases" data-title="My caption">
                <Picture
                  className={css.casesImage}
                  jpg1x={cases2jpg}
                  jpg2x={cases2Webp}
                  webp1x={cases2jpg2x}
                  webp2x={cases2Webp2x}
                />
              </a>
            </li>
            <li className={css.casesItem}>
              <a href={cases4jpg} data-lightbox="cases" data-title="My caption">
                <Picture
                  className={css.casesImage}
                  jpg1x={cases4jpg}
                  jpg2x={cases4Webp}
                  webp1x={cases4jpg2x}
                  webp2x={cases4Webp2x}
                />
              </a>
            </li>
          </ul>
          {/* </Container> */}
        </div>
      </section>
    </>
  );
}
