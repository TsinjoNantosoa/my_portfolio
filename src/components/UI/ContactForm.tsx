import React, { useState } from "react";
import { Send } from "lucide-react";
import Button from "./Button";
import { toast } from "sonner";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log("Sending form data:", formData);
      const response = await fetch('http://localhost:8081/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      console.log("Response status:", response.status);
      const responseData = await response.json();
      console.log("Response data:", responseData);

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Error details:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          type="text"
          name="firstName"
          placeholder="Firstname"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="w-full rounded-md border border-white/10 bg-darkcard/50 px-4 py-3 text-white placeholder-white/50 focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Lastname"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="w-full rounded-md border border-white/10 bg-darkcard/50 px-4 py-3 text-white placeholder-white/50 focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon"
        />
      </div>
      
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full rounded-md border border-white/10 bg-darkcard/50 px-4 py-3 text-white placeholder-white/50 focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full rounded-md border border-white/10 bg-darkcard/50 px-4 py-3 text-white placeholder-white/50 focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon"
        />
      </div>
      
      <select
        name="service"
        value={formData.service}
        onChange={handleChange}
        required
        className="w-full appearance-none rounded-md border border-white/10 bg-darkcard/50 px-4 py-3 text-white placeholder-white/50 focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon"
      >
        <option value="" disabled>
          Select a service
        </option>
        <option value="web-development">Web Development</option>
        <option value="backend-development">Backend Development</option>
        <option value="data-science">Data Science</option>
        <option value="machine-learning">Machine Learning</option>
        <option value="other">Other</option>
      </select>
      
      <textarea
        name="message"
        placeholder="Type your message here..."
        value={formData.message}
        onChange={handleChange}
        required
        rows={5}
        className="w-full rounded-md border border-white/10 bg-darkcard/50 px-4 py-3 text-white placeholder-white/50 focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon"
      />
      
      <Button
        type="submit"
        className="flex items-center gap-2 rounded-full bg-neon px-6 py-3 text-black transition-all hover:shadow-[0_0_15px_rgba(13,255,163,0.6)]"
        disabled={isSubmitting}
        isLoading={isSubmitting}
      >
        <Send size={16} />
        Send message
      </Button>
    </form>
  );
};

export default ContactForm;
