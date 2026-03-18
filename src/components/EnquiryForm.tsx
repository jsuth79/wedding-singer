"use client";

import { useState, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  eventDate: string;
  eventType: string;
  message: string;
}

const eventTypes = [
  "Wedding Ceremony",
  "Wedding Reception",
  "Corporate Event",
  "Private Party",
  "Funeral / Memorial",
  "Other",
];

export default function EnquiryForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    eventDate: "",
    eventType: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/enquire", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to send enquiry");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        eventDate: "",
        eventType: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <svg
          className="w-16 h-16 text-green-500 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="text-xl font-serif text-stone-800 mb-2">Thank You!</h3>
        <p className="text-stone-600">
          Your enquiry has been sent successfully. I&apos;ll be in touch within 24-48 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-rose-600 hover:text-rose-700 text-sm underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
          {errorMessage}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-shadow"
            placeholder="John Smith"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-shadow"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="eventDate" className="block text-sm font-medium text-stone-700 mb-2">
            Event Date *
          </label>
          <input
            type="date"
            id="eventDate"
            required
            value={formData.eventDate}
            onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
            className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-shadow"
          />
        </div>

        <div>
          <label htmlFor="eventType" className="block text-sm font-medium text-stone-700 mb-2">
            Event Type *
          </label>
          <select
            id="eventType"
            required
            value={formData.eventType}
            onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
            className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-shadow bg-white"
          >
            <option value="">Select event type...</option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
          Tell me about your event *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-shadow resize-none"
          placeholder="Please include details about your venue, approximate number of guests, and any specific songs or style you have in mind..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-rose-600 hover:bg-rose-700 disabled:bg-rose-400 text-white py-4 text-sm uppercase tracking-wider transition-colors"
      >
        {status === "loading" ? "Sending..." : "Send Enquiry"}
      </button>

      <p className="text-sm text-stone-500 text-center">
        I typically respond within 24-48 hours. For urgent enquiries, please call directly.
      </p>
    </form>
  );
}
