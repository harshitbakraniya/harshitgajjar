"use client";

import { useState } from "react";
import Title from "@/components/Title";
import Arrow from "@/svg/arrow";

function TalkToMe() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setError(err.message);
    }
  };

  return (
    <section
      id="contact"
      className="bg-background flex flex-col items-center justify-center px-6 sm:px-10 lg:px-16 overflow-x-hidden"
    >
      <Title text1="Talk to Me" text2="Talk to Me" />
      <form
        onSubmit={handleSubmit}
        className="mx-auto w-full max-w-6xl pb-10 text-left xl:pb-32"
      >
        <div className="flex w-full flex-col gap-6 sm:gap-8 lg:flex-row lg:gap-10">
          <div className="flex flex-1 flex-col">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full border border-white/80 bg-transparent p-4 text-base text-white outline-none focus:border-white sm:text-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={handleChange}
              className="mt-6 w-full border border-white/80 bg-transparent p-4 text-base text-white outline-none focus:border-white sm:mt-8 sm:text-lg lg:mt-10"
            />
          </div>
          <div className="flex flex-1 flex-col">
            <textarea
              name="message"
              placeholder="Message"
              required
              value={form.message}
              onChange={handleChange}
              className="w-full border border-white/80 bg-transparent p-4 text-base text-white outline-none focus:border-white sm:text-lg lg:h-full"
            />
          </div>
        </div>

        {status === "success" && (
          <p className="mt-6 text-base text-green-400 sm:text-lg">
            Message sent! I'll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="mt-6 text-base text-red-400 sm:text-lg">{error}</p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="mt-8 flex w-full items-center justify-center gap-2 bg-white px-4 py-4 text-base font-semibold disabled:cursor-not-allowed disabled:opacity-60 sm:mt-10 sm:text-lg"
        >
          {status === "loading" ? "Sending..." : "Submit"}
          <span className="-rotate-90">
            <Arrow color="#111" height={20} width={20} />
          </span>
        </button>
      </form>
    </section>
  );
}

export default TalkToMe;
