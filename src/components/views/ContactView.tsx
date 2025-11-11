"use client";
import React, { useEffect, useState } from "react";

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

const ContactView = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState("");

  useEffect(() => {
    if (status === "Submitted!") {
      const timer = setTimeout(() => {
        setStatus("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");

    const formData = {
      access_key: WEB3FORMS_ACCESS_KEY,
      name: name,
      email: email,
      message: message,
      subject: `New Contact from ${name} (Portfolio)`,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        setStatus("Submitted!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Error: " + result.message);
      }
    } catch (error) {
      setStatus("Error: Something went wrong.");
    }
  };
  return (
    <div className="flex h-full w-full flex-col p-6 md:p-12 lg:p-24 items-center">
      <h1 className="mb-10 font-heading text-4xl font-bold">Get in Touch</h1>
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex w-full max-w-lg flex-col gap-6"
      >
        <div>
          <label htmlFor="name" className="mb-2 block text-lg text-gray-300">
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-glass-border bg-nav-glass-bg px-4 py-3 text-lg text-white placeholder-gray-500 focus:border-primary-accent focus:outline-none focus:ring-1 focus:ring-primary-accent"
            placeholder="Enter your name..."
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-lg text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-glass-border bg-nav-glass-bg px-4 py-3 text-lg text-white placeholder-gray-500 focus:border-primary-accent focus:outline-none focus:ring-1 focus:ring-primary-accent"
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-lg text-gray-300s"
          ></label>
          <textarea
            id="message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-lg border border-glass-border 
              bg-nav-glass-bg px-4 py-3 
              text-lg text-white placeholder-gray-500
              focus:border-primary-accent focus:outline-none focus:ring-1 focus:ring-primary-accent"
            placeholder="Let's build something great together..."
          ></textarea>
        </div>
        <button
          type="submit"
          className={`mt-4 rounded-full py-3 px-6 text-lg font-semibold transition-all ${
            status === "Submitted!"
              ? "bg-green-500 text-white"
              : "bg-primary-accent text-black hover:brightness-110"
          } disabled:opacity-50`}
          disabled={status === "Submitting..."}
        >
          {status === "Submitted!"
            ? "Submitted!"
            : status === "Submitting..."
            ? "Sending..."
            : "Send Message"}
        </button>
        {status && status !== "Submitted!" && status !== "Submitting..." && (
          <p className="mt-4 text-center text-lg text-red-400">{status}</p>
        )}
      </form>
    </div>
  );
};

export default ContactView;
