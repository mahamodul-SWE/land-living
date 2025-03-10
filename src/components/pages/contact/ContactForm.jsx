
"use client"
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ContactForm() {

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    setLoading(true)
    const toastId = toast.loading("Sending...")
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    const subject = e.target.subject.value;
    const messageData = {
      name,
      email,
      message,
      subject,
    }
    // Send form data to server
    try {
      const res = await fetch('/api/sendMessage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(messageData),
      })
      const data = await res.json()
      if (data.status === 200) {
        toast.success("Message sent successfully!")
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again later.")
    }

    // Reset form fields
    e.target.reset();
    // Display success message
    toast.dismiss(toastId)
    setLoading(false)
  }

  return (
    <>
      <Toaster />
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Email Address"
            id="email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">
            Subject
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Subject"
            id="subject"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="3"
            placeholder="Your Message Here"
            required
          ></textarea>
        </div>
        <button
          disabled={loading}
          type="submit" className="ll-btn-primary">
          Submit
        </button>
      </form>
    </>

  )
}