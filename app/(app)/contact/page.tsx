import ContactForm from "@/components/contact-form";

const Contact = () => (
  <article className="contact" data-page="contact">
    <header>
      <h2 className="h2 article-title title-text">Contact</h2>
    </header>
    <section className="mapbox" data-mapbox>
      <figure>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d274492.35595132865!2d72.33827685620653!3d23.0086034721185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1761240806023!5m2!1sen!2sin"
          width="600"
          height="450"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </figure>
    </section>

    <ContactForm />
  </article>
);

export default Contact;
