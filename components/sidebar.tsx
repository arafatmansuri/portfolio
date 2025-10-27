"use client";

import { useState } from "react";
import {
  FaChevronDown as ChevronDown,
  FaGithub as Github,
  FaLinkedin as Linkedin,
  FaEnvelope as Mail,
  FaMapMarkerAlt as MapPin,
  FaCloudDownloadAlt as ResumeDownload,
  FaPhone as Smartphone,
} from "react-icons/fa";

const contacts = [
  {
    icon: Smartphone,
    title: "Phone",
    content: (
      <a href="tel:+919374470037" className="contact-link">
        +91 9374470037
      </a>
    ),
  },
  {
    icon: ResumeDownload,
    title: "Details",
    content: (
      <a href={"/Resume.pdf"} target="_blank" className="contact-link">
        Resume
      </a>
    ),
  },
  {
    icon: Mail,
    title: "Email",
    content: (
      <a href="mailto:mansuriarafat302@gmail.com" className="contact-link">
        mansuriarafat302@gmail.com
      </a>
    ),
  },
  {
    icon: MapPin,
    title: "Location",
    content: <address>Ahmedabad, Gujarat, India</address>,
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/mohammed-arafat-354924273/",
  },
  // {
  //   icon: Youtube,
  //   href: "https://www.youtube.com/@codingcollection",
  // },
  {
    icon: Github,
    href: "https://github.com/arafatmansuri",
  },
  // {
  //   icon: Lightbulb,
  //   href: "https://axisbuddy.com",
  // },
];

const Sidebar = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(true);

  const toggleSidebar = () => setIsSidebarActive((prev) => !prev);

  return (
    <>
      <aside className={`sidebar ${isSidebarActive ? "active" : ""}`}>
        <div className="sidebar-info">
          <figure className="avatar-box">
            {/* <img src={"/profile.png"} alt="Mohammed Arafat" width="80" /> */}
          </figure>
          <div className="info-content">
            <h1 className="name title-text-1" title="NSxVillan">
              Mohammed Arafat
            </h1>
            <p className="title">Fullstack developer</p>
          </div>
          <button className="info_more-btn" onClick={toggleSidebar}>
            <span>Show Details</span>
            <ChevronDown />
          </button>
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>
          <ul className="contacts-list">
            {contacts.map(({ icon: Icon, title, content }, index) => (
              <li className="contact-item" key={index}>
                <div className="icon-box">
                  <Icon />
                </div>
                <div className="contact-info">
                  <p className="contact-title">{title}</p>
                  {content}
                </div>
              </li>
            ))}
          </ul>
          <div className="separator"></div>
          <ul className="social-list">
            {socialLinks.map(({ icon: Icon, href }, index) => (
              <li className="social-item" key={index}>
                <a href={href} target="_blank" className="social-link">
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
