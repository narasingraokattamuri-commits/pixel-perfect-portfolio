import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Message sent! (placeholder)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contacts" className="py-20 px-6 md:px-16 lg:px-24">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Contacts</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
          />
          <textarea
            placeholder="Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            rows={5}
            className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity active:scale-95"
          >
            Send
          </button>
        </form>

        <div className="flex flex-col justify-center gap-6">
          <div className="flex items-center gap-4">
            <Mail className="text-primary" size={20} />
            <a
              href="mailto:your@email.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              your@email.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="text-primary" size={20} />
            <a
              href="tel:+1234567890"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              +1 234 567 890
            </a>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-primary" size={20} />
            <span className="text-muted-foreground">Your City, Country</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
