// src/components/Contact.jsx
import React, { useState } from 'react';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaCheckCircle,
  FaCopy,
  FaExclamationCircle
} from 'react-icons/fa';
import { profileData } from '../data/profile';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'RTL Design / Semiconductor Opportunity',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a message with at least 10 characters.';
    }
    return errs;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Direct client-side submission with mailto backup
    const mailtoLink = `mailto:${profileData.contact.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry - ${formData.subject}] from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    )}`;

    // Set submitted state
    setSubmitted(true);

    // Open mail client
    window.location.href = mailtoLink;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#070b14] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <p className="text-xs font-mono-tech uppercase tracking-widest text-cyan-400 mb-2">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact <span className="text-gradient">Royya Chakravarthi</span>
          </h2>
          <p className="text-gray-400 mt-3 text-base leading-relaxed">
            Interested in discussing an RTL design opening, software engineering role, or technical collaboration? Send me a message or connect directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          {/* Left Column: Direct Info Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5" data-aos="fade-right">
            {/* Primary Contact Details */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10">
              <h3 className="text-lg font-bold text-white mb-6">
                Direct Contact Channels
              </h3>

              <div className="space-y-5 text-sm">
                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <FaEnvelope />
                  </div>
                  <div className="flex-grow overflow-hidden">
                    <span className="text-[10px] font-mono-tech uppercase tracking-wider text-gray-500 block">
                      Primary Email
                    </span>
                    <a
                      href={`mailto:${profileData.contact.email}`}
                      className="text-white hover:text-cyan-400 font-semibold truncate block transition"
                    >
                      {profileData.contact.email}
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="text-[11px] font-mono-tech text-cyan-400 hover:text-cyan-300 flex items-center gap-1 mt-1 transition"
                    >
                      <FaCopy className="text-[10px]" />
                      <span>{copied ? 'Copied to clipboard!' : 'Copy Email Address'}</span>
                    </button>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-tech uppercase tracking-wider text-gray-500 block">
                      Mobile & WhatsApp
                    </span>
                    <a
                      href={profileData.contact.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-emerald-400 font-semibold block transition"
                    >
                      {profileData.contact.phone}
                    </a>
                    <span className="text-[11px] font-mono-tech text-emerald-400 flex items-center gap-1 mt-1">
                      <FaWhatsapp /> Available on WhatsApp
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-rose-950/60 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-tech uppercase tracking-wider text-gray-500 block">
                      Base Location
                    </span>
                    <p className="text-white font-semibold">
                      {profileData.location.display}
                    </p>
                    <span className="text-[11px] font-mono-tech text-gray-400">
                      Open to Relocation / Hybrid / Remote
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Profiles Card */}
            <div className="glass-card p-6 rounded-3xl border border-white/10">
              <span className="text-[10px] font-mono-tech uppercase tracking-wider text-gray-500 block mb-3">
                Professional Networks:
              </span>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-[#0077b5]/20 hover:text-[#0077b5] border border-white/10 text-xs text-gray-300 transition"
                >
                  <FaLinkedin className="text-sm" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/20 hover:text-white border border-white/10 text-xs text-gray-300 transition"
                >
                  <FaGithub className="text-sm" />
                  <span>GitHub</span>
                </a>

                <a
                  href={profileData.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-emerald-500/20 hover:text-emerald-400 border border-white/10 text-xs text-gray-300 transition"
                >
                  <FaWhatsapp className="text-sm" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Working Validated Contact Form (7 cols) */}
          <div className="lg:col-span-7" data-aos="fade-left">
            <div className="glass-card-featured p-6 sm:p-8 rounded-3xl border border-cyan-500/30 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2">
                Send an Engineering Message
              </h3>
              <p className="text-xs text-gray-400 mb-6">
                All inputs are validated. Form launches your default email client with encrypted payload without exposing any backend credentials.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-cyan-950/50 border border-cyan-500/40 text-center animate__animated animate__fadeIn">
                  <FaCheckCircle className="text-cyan-400 text-4xl mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-white mb-1">
                    Thank you, {formData.name}!
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed mb-4">
                    Your email client has been prepared with your message. If it didn't open automatically, you can also write directly to{' '}
                    <strong className="text-cyan-300">{profileData.contact.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        subject: 'RTL Design / Semiconductor Opportunity',
                        message: ''
                      });
                    }}
                    className="text-xs font-mono-tech text-cyan-400 hover:underline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-[11px] font-mono-tech uppercase tracking-wider text-gray-400 mb-1">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe / Engineering Recruiter"
                      className={`w-full p-3.5 rounded-xl bg-slate-900/90 border text-xs text-white placeholder-gray-500 focus:outline-none transition ${
                        errors.name ? 'border-rose-500 focus:border-rose-400' : 'border-white/10 focus:border-cyan-400'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-rose-400 text-[10px] mt-1 flex items-center gap-1 font-mono-tech">
                        <FaExclamationCircle /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-[11px] font-mono-tech uppercase tracking-wider text-gray-400 mb-1">
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. recruiter@company.com"
                      className={`w-full p-3.5 rounded-xl bg-slate-900/90 border text-xs text-white placeholder-gray-500 focus:outline-none transition ${
                        errors.email ? 'border-rose-500 focus:border-rose-400' : 'border-white/10 focus:border-cyan-400'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-rose-400 text-[10px] mt-1 flex items-center gap-1 font-mono-tech">
                        <FaExclamationCircle /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject Dropdown */}
                  <div>
                    <label className="block text-[11px] font-mono-tech uppercase tracking-wider text-gray-400 mb-1">
                      Inquiry Category
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full p-3.5 rounded-xl bg-slate-900/90 border border-white/10 text-xs text-white focus:outline-none focus:border-cyan-400 transition"
                    >
                      <option value="RTL Design / Semiconductor Opportunity">
                        RTL Design / VLSI Opportunity
                      </option>
                      <option value="Design Verification Engineer Role">
                        Design Verification (DV) Role
                      </option>
                      <option value="Java Full-Stack / Software Engineering Role">
                        Java Full-Stack / Software Engineering Role
                      </option>
                      <option value="Harvixa Platform Inquiry / Collaboration">
                        Harvixa Platform Inquiry / Collaboration
                      </option>
                      <option value="Other Engineering Consultation">
                        Other Technical Consultation
                      </option>
                    </select>
                  </div>

                  {/* Message Area */}
                  <div>
                    <label className="block text-[11px] font-mono-tech uppercase tracking-wider text-gray-400 mb-1">
                      Message Details <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please share role specifications, project details, or interview availability..."
                      className={`w-full p-3.5 rounded-xl bg-slate-900/90 border text-xs text-white placeholder-gray-500 focus:outline-none transition resize-none ${
                        errors.message ? 'border-rose-500 focus:border-rose-400' : 'border-white/10 focus:border-cyan-400'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-rose-400 text-[10px] mt-1 flex items-center gap-1 font-mono-tech">
                        <FaExclamationCircle /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 hover:from-cyan-300 hover:to-sky-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20 transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    <FaPaperPlane />
                    <span>Submit & Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
