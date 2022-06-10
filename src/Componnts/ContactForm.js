import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j7ohl3t", //serviceID
        "template_do4b7jy", //templateID
        form.current,
        "Vfp9F_hOyfNKWh1nV" //publicID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="py-12">
      <h2 className="text-4xl text-center">Get in touch</h2>
      <form
        className="grid grid-cols-1 w-1/2 mx-auto"
        ref={form}
        onSubmit={sendEmail}
      >
        <label className="py-3">Name</label>
        <input
          required
          class="input input-bordered input-primary w-full "
          type="text"
          name="user_name"
          placeholder="Name"
        />
        <label className="py-3">Email</label>
        <input
          required
          class="input input-bordered input-primary w-full "
          placeholder="Email"
          type="email"
          name="user_email"
        />
        <label className="py-3">Message</label>
        <textarea
          required
          name="message"
          class="input input-bordered input-primary w-full "
          placeholder="your massage"
        />
        <input className="btn" type="submit" value="Send" />
      </form>
    </div>
  );
};
