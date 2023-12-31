"use client";
import React, { useEffect, useRef, useState } from "react";
import Button from "../buttton";
import SectionTitle from "../section-title";

const ContactForm = ({ contact }) => {
  const form = useRef(null);

  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  const sendEmail = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        phone: e.target.phone.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });

    if (response.status === 200) {
      setShowNotification(true);
    } else {
      console.log("Email not sent");
    }

    e.target && e.target.reset();
  };

  return (
    <section
      className="container pt-[112px] flex flex-col gap-2 relative"
      id="contactSection"
    >
      <SectionTitle>{contact.title}</SectionTitle>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="relative w-4/5 md:w-3/4 lg:w-1/2 mx-auto flex flex-col gap-2"
      >
        <label
          htmlFor="firstName"
          className="inline-block  mr-auto relative uppercase after:content-['*'] after:text-smartOrange after:absolute after:-right-[10px] after:-top-[2px]"
        >
          {contact.firstName}
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          required
          className="relative border border-smartOrange rounded-xl leading-8 px-4"
        ></input>

        <label
          htmlFor="lastName"
          className="inline-block  mr-auto relative uppercase after:content-['*'] after:text-smartOrange after:absolute after:-right-[10px] after:-top-[2px]"
        >
          {contact.lastName}
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          required
          className="border border-smartOrange rounded-xl leading-8 px-4"
        ></input>

        <label
          htmlFor="email"
          className="inline-block  mr-auto relative uppercase after:content-['*'] after:text-smartOrange after:absolute after:-right-[10px] after:-top-[2px]"
        >
          {contact.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+"
          className="border border-smartOrange rounded-xl leading-8 px-4"
        ></input>

        <label htmlFor="phone" className="uppercase">
          {contact.phone}
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="border border-smartOrange rounded-xl leading-8 px-4"
        ></input>

        <label
          htmlFor="message"
          className="inline-block  mr-auto relative uppercase after:content-['*'] after:text-smartOrange after:absolute after:-right-[10px] after:-top-[2px]"
        >
          {contact.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="border border-smartOrange rounded-xl leading-8 px-4"
        ></textarea>
        <div className="flex justify-start items-start mt-6 mb-2">
          <input
            type="checkbox"
            id="privacyTermsCheckbox"
            required
            className="mr-2"
          />
          <label
            htmlFor="privacyTermsCheckbox"
            className="-translate-y-2 relative before:content-['*'] before:text-smartOrange before:mr-2"
          >
            {contact.checkbox}
          </label>
        </div>
        <Button isOrange type="submit" className="ml-auto px-8">
          {contact.button}
        </Button>
        {showNotification && (
          <div className="text-smartOrange text-2xl p-2 rounded absolute bottom-0 left-0">
            {contact.notification}
          </div>
        )}
      </form>
    </section>
  );
};

export default ContactForm;
