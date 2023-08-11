"use client";
import React, { useRef } from "react";
import Button from "../buttton";

const ContactForm = () => {
  const form = useRef(null);

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

    console.log("To jest response.body" + response.body);

    // if (response.status === 200) {
    //   console.log("Email sent successfully");
    // } else {
    //   console.log("Email not sent");
    // }

    e.target && e.target.reset();
  };

  return (
    <section className="container mt-28 flex flex-col gap-2">
      <h2 className="inline-block text-4xl font-bold text-center uppercase border-b-2 border-smartOrange mx-auto mb-12">
        Contact me
      </h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="relative w-1/2 mx-auto flex flex-col gap-2"
      >
        <label
          for="firstName"
          className="inline-block  mr-auto relative uppercase after:content-['*'] after:text-smartOrange after:absolute after:-right-[10px] after:-top-[2px]"
        >
          first name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          reguired
          className="relative border border-smartOrange rounded-xl leading-8 px-4"
        ></input>

        <label for="lastName" className="uppercase">
          last name
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          className="border border-smartOrange rounded-xl leading-8 px-4"
        ></input>

        <label for="email" className="uppercase">
          email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="border border-smartOrange rounded-xl leading-8 px-4"
        ></input>

        <label for="phone" className="uppercase">
          phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="border border-smartOrange rounded-xl leading-8 px-4"
        ></input>

        <label for="message" className="uppercase">
          message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="border border-smartOrange rounded-xl leading-8 px-4"
        ></textarea>

        <Button isOrange type="submit" className="ml-auto px-8">
          Wyślij
        </Button>
      </form>

      {/* <div className="w-full lg:w-1/2 px-4">
        <form ref={form} onSubmit={sendEmail}>
          <input
            id="firstName"
            name="firstName"
            type="text"
            className="border border-smartOrange rounded-xl"
          ></input>
          <div className="relative flex flex-wrap mb-6">
            <input
              className="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
              type="text"
              name="user_name"
            />
            <span className="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
              Imię i nazwisko
            </span>
          </div>
          <div className="relative flex flex-wrap mb-6">
            <input
              className="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
              type="email"
              name="user_email"
            />
            <span className="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
              Adres e-mail
            </span>
          </div>
          <div className="relative flex flex-wrap mb-6">
            <textarea
              className="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded resize-none"
              id="1"
              name="message"
              cols={30}
              rows={10}
              defaultValue={""}
            />
            <span className="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
              Wiadomość
            </span>
          </div>
          <button
            type="submit"
            className="w-full inline-block px-6 py-4 text-sm text-white bg-red-400 hover:bg-blue-400 rounded transition duration-200"
          >
            Wyślij
          </button>
        </form> */}
      {/* {showNotification && (
          <div className="text-green-500 py-2 px-4 absolute top-100 right-0 mt-2 mr-2 rounded">
            Wiadomość wysłana. Dziękujemy!
          </div>
        )} */}
      {/* </div> */}
    </section>
  );
};

export default ContactForm;
