import Navbar from "@/components/navbar";
import { data } from "autoprefixer";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

const ContactServices = [
  "Lawn Maintenance",
  "Leaf Removal",
  "Mulch Maintenance",
  "Property Cleanup",
];

function Contact() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (formData) => {
    window.location.href = `mailto:atlaslawnservicesnb@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
  };

  /* handleSubmit = async (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      address,
      city,
      state,
      postalCode,
      email,
      phone,
      services,
    } = formData;
    const body = {
      firstName,
      lastName,
      address,
      city,
      state,
      postalCode,
      email,
      phone,
      services,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (res.status === 200) {
      alert("Message sent Successfully!");
    } else {
      alert("Error sending message.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }; */

  return (
    <>
      <div className=" bg-black ">
        <Navbar />
        <div className="flex relative flex-col h-screen text-center md:text-center md:flex-col justify-center items-center">
          <h3 className=" absolute top-2 text-white text-3xl">Contact Us</h3>
          <p className=" absolute top-14 text-white text-base">
            Get a free estimate now
          </p>

          <div className="absolute top-24 mt-4 border-2 bg-slate-600 rounded-md flex flex-col space-y-6 space-x-10 py-2 md:p-6 md:max-w-lg">
            <div className="flex items-center space-x-5 justify-center">
              <PhoneIcon className="text-[#63e5ff] h-7 w-7 animate-pulse" />
              <p className="text-xl text-white">(830)-837-3949</p>
            </div>
            <div className="flex items-center space-x-5 justify-center">
              <EnvelopeIcon className="text-[#63e5ff] h-7 w-7 animate-pulse" />
              <p className="text-xl text-white">
                atlaslawnservicesnb@gmail.com
              </p>
            </div>
            <div className="flex items-center space-x-5 justify-center pr-5">
              <MapPinIcon className="text-[#63e5ff] h-7 w-7 animate-pulse" />
              <p className="text-xl text-white">New Braunfels, TX</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 w-fit mx-auto mt-4"
          >
            <div className="flex space-x-2">
              <input
                {...register("name")}
                className="contactInput"
                placeholder="Name"
                type="text"
              />
              <input
                {...register("email")}
                className="contactInput"
                placeholder="Email"
                type="email"
              />
            </div>

            <input
              {...register("subject")}
              className="contactInput"
              placeholder="Subject"
              type="text"
            />

            <textarea
              {...register("message")}
              className="contactInput"
              placeholder="Message"
            />
            <button
              type="submit"
              className="bg-[#63e5ff] py-5 px-10 rounded-md text-black font-bold text- uppercase"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
