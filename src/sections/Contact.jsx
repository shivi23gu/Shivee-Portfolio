import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

import { Button } from "@/components/Button";
import { useState } from "react";
import axios from "axios";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "guptashivee23@gmail.com",
    href: "mailto:guptashivee23@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 90241 08607",
    href: "tel:+919024108607",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kanpur, India",
    href: "https://www.google.com/maps/place/Kanpur,+Uttar+Pradesh",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({
      type: null,
      message: "",
    });

    try {
      const response = await axios.post(
        "/api/contact",
        formData
      );

      if (response.data.success) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully!",
        });

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message",
      });

      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium tracking-wider uppercase">
            Get In Touch
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Let's build{" "}
            <span className="font-serif italic font-normal text-white">
              something great.
            </span>
          </h2>

          <p className="text-muted-foreground">
            Have a project in mind? Send me a message and let's talk.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

          <div className="glass p-8 rounded-3xl border border-primary/30">

            <form className="space-y-6" onSubmit={handleSubmit}>

              <div>
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name..."
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}

                <Send className="w-5 h-5" />
              </Button>

              {submitStatus.type && (
                <div
                  className={`p-4 rounded-xl flex gap-3 items-center ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 text-green-400"
                      : "bg-red-500/10 text-red-400"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <AlertCircle className="w-5 h-5" />
                  )}

                  <p>{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          <div className="space-y-6">

            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>

              {contactInfo.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface"
                >
                  <item.icon className="w-5 h-5 text-primary" />

                  <div>
                    <div className="text-sm text-muted-foreground">
                      {item.label}
                    </div>

                    <div className="font-medium">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="glass rounded-3xl p-8 border border-primary/30">

              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />

                <span className="font-medium">
                  Available for work
                </span>
              </div>

              <p className="text-muted-foreground text-sm">
                Open to internships, full-time roles, and freelance projects.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};