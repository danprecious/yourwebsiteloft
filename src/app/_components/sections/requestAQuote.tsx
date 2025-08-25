"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Toast, useToast } from "./toasters";

const servicesHighlights = [
  {
    id: 0,
    title: "Document Translation",
    description:
      "Certified, accurate translations across legal, medical, and business documents.",
    icon: "📝",
  },
  {
    id: 1,
    title: "Media Localization",
    description:
      "Subtitling, dubbing, and cultural adaptation for film, TV, and digital media.",
    icon: "🎬",
  },
  {
    id: 2,
    title: "Translation",
    description:
      "Website, marketing, and corporate communication tailored for global markets.",
    icon: "🌍",
  },
  {
    id: 3,
    title: "AI & Data Services",
    description:
      "Training data annotation, linguistic validation, and scalable multilingual datasets.",
    icon: "🤖",
  },
];

const RequestQuote = () => {
  const { toast, setError, setSuccess, removeToast } = useToast();
  const [loading, setLoading] = useState(false);

  const quoteSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    sourceLang: z.string().min(1, { message: "Source language required" }),
    targetLang: z.string().min(1, { message: "Target language required" }),
    serviceType: z.string().min(1, { message: "Service type required" }),
    deadline: z.string().optional(),
    message: z.string().min(1, { message: "Please describe your project" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(quoteSchema),
  });

  const handleQuoteSubmit = async (data: any) => {
    try {
      setLoading(true);
      const res = await axios.post("/api/request-quote", data, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("Quote response:", res.data);

      setSuccess("Quote request sent successfully!");
      setTimeout(() => removeToast(), 4000);
    } catch (err) {
      console.error(err);
      setError("Failed to send request");
      setTimeout(() => removeToast(), 4000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full lg:flex lg:gap-12 px-6 lg:px-16 py-20">
      {/* LEFT CONTENT */}
      <div className="lg:w-2/3">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Request a Quote</h1>
        <p className="text-lg opacity-70  mb-10">
          Tell us about your project and get a tailored price estimate. Whether
          it’s business, media, or data services, we’ve got you covered.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {servicesHighlights.map((service) => (
            <div
              key={service.id}
              className="border rounded-xl p-6 flex flex-col gap-2"
            >
              <div className="text-3xl">{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-sm opacity-70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="lg:w-1/3 lg:sticky lg:top-10 mt-12 lg:mt-0 relative">
        <form
          onSubmit={handleSubmit(handleQuoteSubmit)}
          className="border rounded-xl p-6 flex flex-col gap-4 relative"
        >
          <Toast />
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
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}

          <input
            {...register("sourceLang")}
            placeholder="Source Language (e.g. English)"
            className="border px-3 py-2 rounded-md"
          />
          <input
            {...register("targetLang")}
            placeholder="Target Language (e.g. French)"
            className="border px-3 py-2 rounded-md"
          />

          <select
            {...register("serviceType")}
            className="border px-3 py-2 rounded-md bg-background"
          >
            <option value="">Select Service</option>
            <option value="document">Document Translation</option>
            <option value="media">Media Localization</option>
            <option value="business">Business Translation</option>
            <option value="ai">AI & Data Services</option>
          </select>

          <input
            {...register("deadline")}
            type="date"
            className="border px-3 py-2 rounded-md"
          />

          <textarea
            {...register("message")}
            placeholder="Project details"
            className="border px-3 py-2 rounded-md h-[120px]"
          />
          {errors.message && (
            <p className="text-red-500">{errors.message.message}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-foreground cursor-pointer text-background py-2 rounded-md hover:bg-foreground/80 transition"
          >
            {loading ? "Sending..." : "Request Quote"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestQuote;
