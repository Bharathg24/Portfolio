import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
} from 'lucide-react';
import { socialLinks } from '../utils/data';

const Contact = ({ id }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '', // This will be used for mobile number
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Updated Public Key
    const publicKey = 'pjZINLDJidXJFx3zT';

    // Updated Template IDs
    const adminTemplateId = 'template_1tescpa'; // Admin notification template
    const userTemplateId = 'template_jz2h3yb'; // User confirmation template

    // Updated Service ID
    const serviceId = 'service_uj1xnlx';

    try {
      // Send notification to admin (bharathguna144@gmail.com)
      await emailjs.send(
        serviceId,
        adminTemplateId,
        {
          name: formData.name,
          email: formData.email,
          mobile: formData.subject, // Using 'subject' field as mobile
          message: formData.message,
          from_email: 'bharathguna144@gmail.com', // Admin email as sender
          time: new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }) // Dynamic timestamp for admin template
        },
        publicKey
      );

      // Send confirmation to user
      await emailjs.send(
        serviceId, // Same service ID
        userTemplateId,
        {
          name: formData.name,
          email: formData.email,
          mobile: formData.subject,
          message: formData.message,
          from_email: 'bharathguna144@gmail.com' // Admin email as sender
        },
        publicKey
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

    } catch (error) {
      console.error('Full EmailJS Error:', error);
      console.error('Status:', error.status);
      console.error('Text:', error.text);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Timeout only on success
      if (submitStatus === 'success') {
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Sanjay N | Contact</title>
        <meta
          name="description"
          content="Get in touch with Sanjay N for collaboration, freelance projects, or inquiries. Connect via email, LinkedIn, or the contact form."
        />
        <meta property="og:title" content="Contact Sanjay N | Get In Touch" />
        <meta property="og:description" content="Get in touch with Sanjay N for collaboration, freelance projects, or inquiries." />
        <meta property="og:url" content="https://sanjayn.me/#contact" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <section id={id} ref={sectionRef} className="section py-20">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="h2">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-6 text-lg">
            Let's discuss your next project
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Email */}
            <div className="card p-6 group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Email</h3>
                  <p className="text-gray-400">{socialLinks.email}</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="card p-6 group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Phone</h3>
                  <p className="text-gray-400">{socialLinks.phone}</p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="card p-6 group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Location</h3>
                  <p className="text-gray-400">Vellore, Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 flex-wrap">
              <SocialIcon Icon={MessageCircle} href={socialLinks.whatsapp} />
              <SocialIcon Icon={Github} href={socialLinks.github} />
              <SocialIcon Icon={Linkedin} href={socialLinks.linkedin} />
              <SocialIcon Icon={Instagram} href={socialLinks.instagram} />
              <LeetCodeSocialIcon href={socialLinks.leetcode} />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="card p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <InputField
                label="Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
              />

              <InputField
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
              />

              <InputField
                label="Mobile Number"
                type="tel"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="+91 1234567890"
              />

              <div>
                <label className="block text-gray-300 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none text-white resize-none"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-semibold rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-center">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-center">
                  Failed to send message. Please try again.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

/* LeetCode Icon Component */
const LeetCodeSocialIcon = ({ href = "#" }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/20 transition-all"
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
  >
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.3 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.101-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.522 2.545 2.545 0 0 1 .619-1.164L9.13 8.114l1.588-1.6 7.689-7.699a1.374 1.374 0 0 0 0-1.943L13.483.439A1.374 1.374 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0 1.951 0l5.911-5.922a1.38 1.38 0 0 0 0-1.951 1.38 1.38 0 0 0-1.951 0l-5.911 5.922a1.38 1.38 0 0 0 0 1.951z"/>
    </svg>
  </motion.a>
);

/* Reusable Components */
const SocialIcon = ({ Icon, href = "#" }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/20 transition-all"
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
  >
    <Icon className="w-6 h-6" />
  </motion.a>
);

const InputField = ({ label, ...props }) => (
  <div>
    <label className="block text-gray-300 mb-2 font-medium">{label}</label>
    <input
      {...props}
      required
      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none text-white"
    />
  </div>
);

export default Contact;
