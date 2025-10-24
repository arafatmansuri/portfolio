import Image from "next/image";

const Services = () => {
  const servicesData = [
    {
      icon: "/icons/dev.png",
      alt: "Web development icon",
      title: "Frotend Development",
      text: "High-quality development of sites at the professional level.",
    },
    {
      icon: "/icons/mobile.png",
      alt: "mobile app icon",
      title: "Backend Development",
      text: "Professional development of REST API's",
    },
    {
      icon: "/icons/design.png",
      alt: "design icon",
      title: "Generative AI",
      text: "Integrating AI into modern softwares.",
    },
  ];
  return (
    <section className="service">
      <h3 className="h3 service-title">What I&apos;m doing</h3>
      <ul className="service-list">
        {servicesData.map(({ icon, alt, title, text }) => (
          <li className="service-item" key={title}>
            <div className="service-icon-box">
              <Image src={icon} alt={alt} width={30} height={30} />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">{title}</h4>
              <p className="service-item-text">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;
