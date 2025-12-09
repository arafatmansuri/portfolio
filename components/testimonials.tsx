const Testimonials = () => {
  const testimonialsData:{name:string,avatar:string,text:string}[] = [
    
  ];

  return (
    <>
      <h3 className="h3 testimonials-title">Testimonials</h3>
      <ul className="testimonials-list has-scrollbar">
        {testimonialsData.map(({ name, avatar, text }) => (
          <li className="testimonials-item" key={name}>
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img
                  src={avatar}
                  alt={name}
                  width="60"
                  data-testimonials-avatar
                />
              </figure>
              <h4
                className="h4 testimonials-item-title"
                data-testimonials-title
              >
                {name}
              </h4>
              <div className="testimonials-text" data-testimonials-text>
                <p>{text}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Testimonials;
