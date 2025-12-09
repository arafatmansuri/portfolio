"use client";

// import { useForm, ValidationError } from "@formspree/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { PiPaperPlane } from "react-icons/pi";
import Thanks from "./ui/thanks";
import axios from "axios";

type Inputs = {
  message: string;
  email: string;
  fullname: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitSuccessful },
  } = useForm<Inputs>();

  const sendMessage: SubmitHandler<Inputs> = async (data) => {
    await axios.post(`/api/sendMail`, data);
  };
  if (isSubmitSuccessful) {
    return <Thanks />;
  }
  return (
    <form onSubmit={handleSubmit(sendMessage)} className="form">
      <div className="input-wrapper">
        <input
          className="form-input"
          id="fullname"
          type="text"
          {...register("fullname", { required: true })}
          placeholder="Full name"
        />
        {errors.fullname && (
          <p className="text-red-500">Fullname is required</p>
        )}
        <input
          required
          className="form-input"
          id="email"
          type="email"
          {...register("email", { required: true })}
          placeholder="Email address"
        />
        {errors.email && <p className="text-red-500">Email is required</p>}
      </div>
      <textarea
        required
        className="form-input"
        id="message"
        {...register("message", { required: true })}
        placeholder="Your Message"
      />
      {errors.message && <p className="text-red-500">Message is required</p>}
      <button className="form-btn" type="submit" disabled={!isValid}>
        <PiPaperPlane />
        <span>Send Message</span>
      </button>
    </form>
  );
};

export default ContactForm;
