import Services from "@/components/services";

const Home = () => (
  <article className="about active" data-page="about">
    <header>
      <h2 className="h2 article-title title-text">About me</h2>
    </header>

    <section className="about-text">
      <p>
        I&apos;am fullstack developer based in Ahmedabad, Gujarat. With a focus
        on fullstack development, I excels at building web pages and REST
        API&apos;s along with AI Integration.
      </p>

      <p>
        My job is to build your website so that it is functional and
        user-friendly but at the same time attractive.
      </p>
    </section>

    <Services />

    {/* <section className="testimonials">
      <Testimonials />
    </section> */}
  </article>
);

export default Home;
