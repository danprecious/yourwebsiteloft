"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useToast } from "./toasters";

const ContactPage = () => {
  const { setError, setSuccess, removeToast } = useToast();
  const [loading, setLoading] = useState(false);

  const contactSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    subject: z.string().min(1, { message: "Subject is required" }),
    message: z.string().min(1, { message: "Message cannot be empty" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const handleContactSubmit = async (data: any) => {
    try {
      setLoading(true);
      await axios.post("/api/contact", data, {
        headers: { "Content-Type": "application/json" },
      });
      setSuccess("Message sent successfully!");
      setTimeout(() => removeToast(), 4000);
    } catch (err) {
      console.error(err);
      setError("Failed to send message");
      setTimeout(() => removeToast(), 4000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full py-20 px-6 lg:px-16 max-w-3xl mx-auto">
      {/* HEADER */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
        Reach Out to Us
      </h1>
      <p className="text-lg opacity-70 mb-12 text-center">
        Have questions or want to discuss your project? Fill out the form below
        and we’ll get back to you promptly.
      </p>

      {/* FORM */}
      <form
        onSubmit={handleSubmit(handleContactSubmit)}
        className="border rounded-xl p-6 flex flex-col gap-4"
      >
        <input
          {...register("name")}
          placeholder="Your Name"
          className="border px-3 py-2 rounded-md"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        <input
          {...register("email")}
          type="email"
          placeholder="your@email.com"
          className="border px-3 py-2 rounded-md"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input
          {...register("subject")}
          placeholder="Subject"
          className="border px-3 py-2 rounded-md"
        />
        {errors.subject && (
          <p className="text-red-500">{errors.subject.message}</p>
        )}

        <textarea
          {...register("message")}
          placeholder="Your message..."
          className="border px-3 py-2 rounded-md h-[150px]"
        />
        {errors.message && (
          <p className="text-red-500">{errors.message.message}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="bg-foreground cursor-pointer text-background py-2 rounded-md hover:bg-foreground/80 transition"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
