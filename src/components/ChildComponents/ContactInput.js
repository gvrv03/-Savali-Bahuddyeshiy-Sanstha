"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import toast from "react-hot-toast"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/SendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: `${formData.name} is trying to contact you!`,
          formData: `
          <table style="width: 100%; border: 1px solid black;">
            <tr><td style="border: 1px solid black;">Name:</td><td style="border: 1px solid black;">${formData.name}</td></tr>
            <tr><td style="border: 1px solid black;">Email:</td><td style="border: 1px solid black;">${formData.email}</td></tr>
            <tr><td style="border: 1px solid black;">Phone:</td><td style="border: 1px solid black;">${formData.phone}</td></tr>
            <tr><td style="border: 1px solid black;">Message:</td><td style="border: 1px solid black;">${formData.message}</td></tr>
          </table>`
        }),
      });

      const { data, error } = await response.json();
      setFormData({ name: "", email: "", phone: "", message: "" });
      setLoading(false);
      if (data) {
        toast.success("Message sent successfully!");
      } else {
        toast.error("Error occurred!");
      }
    } catch (error) {
      setLoading(false);
      toast.error("Error submitting form.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">Have questions or want to get involved? Reach out to us!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-800">Get In Touch</h3>
            <p className="text-gray-600">We'd love to hear from you. Please fill out the form and we'll get back to you as soon as possible.</p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Our Location</h4>
                  <p className="text-gray-600">Kalamb, Wardha District, Maharashtra, India</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Phone Number</h4>
                  <p className="text-gray-600">+91 9067050941</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Email Address</h4>
                  <p className="text-gray-600">shendes969@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Working Hours</h4>
                  <p className="text-gray-600">Monday - Saturday: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full" />
              <Input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="w-full" />
              <Input type="tel" name="phone" placeholder="Your Phone Number" value={formData.phone} onChange={handleChange} required className="w-full" />
              <Textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required className="w-full min-h-[120px]" />
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
