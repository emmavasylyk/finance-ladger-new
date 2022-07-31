import Container from '../Container/Container';
import css from './Blog.module.css';

export default function Blog() {
  return (
    <section id="blog" className={css.blog}>
      <Container>
        <div className={css.blogContainer}>
          <p className={css.blogData}>April 16 2020</p>
          <h2 className={css.blogTitle}>Blog Post One</h2>
          <p className={css.blogText}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?
          </p>
          <button type="button" className={css.blogButton}>
            Read Our Blog
          </button>
        </div>
      </Container>
    </section>
  );
}
