import React from 'react';
import { Phone, Star, Mail, Linkedin, Github, ExternalLink, Facebook, Instagram, Youtube } from 'lucide-react';
import { SiKaggle } from 'react-icons/si';
import { SiLeetcode, SiHackerrank } from "react-icons/si";

export const ContactSection = ({ id = 'contact' }) => {
  const primaryContacts = [
    {
      label: 'Email',
      value: 'monirrul.cse@gmail.com',
      href: 'mailto:monirrul.cse@gmail.com',
      icon: Mail,
    },
    {
      label: 'Phone',
      value: '+880 1742 958 888',
      href: 'tel:+8801742958888',
      icon: Phone,
    },
    {
      label: 'Preferred Channel',
      value: 'Email / LinkedIn',
      icon: Star,
    },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      handle: 'linkedin.com/monirul154',
      href: 'https://linkedin.com/in/monirul154',
      icon: Linkedin,
    },
     {
      name: 'LeetCode',
      handle: 'leetcode.com/u/monirul8888',
      href: 'https://leetcode.com/u/monirul8888',
      icon: SiLeetcode,
      
    },
       {
      name: 'HackerRank',
      handle: 'hackerrank.com/monirul429588',
      href: 'https://www.hackerrank.com/monirul429588',
      icon: SiHackerrank,
      
    },
    {
      name: 'GitHub',
      handle: 'github.com/monirul8888',
      href: 'https://github.com/monirul8888',
      icon: Github,
    },
    {
      name: 'Kaggle',
      handle: 'kaggle.com/monirul',
      href: 'https://kaggle.com/monirul',
      icon: SiKaggle,
    },
    {
      name: 'Facebook',
      handle: 'facebook.com/moniirrul',
      href: 'https://www.facebook.com/moniirrul',
      icon: Facebook,
    },
     {
      name: 'Youtube',
      handle: 'youtube.com/studyWithMoniRuL',
      href: 'https://www.youtube.com/@StudyWithMoniRuL',
      icon: Youtube,
    },
    {
      name: 'Instagram',
      handle: '@monirul154',
      href: 'https://www.instagram.com/monirul154',
      icon: Instagram,
    },
  ];

  return (
    <section
      id={id}
      className="border-b border-gray-200 bg-white py-20"
    >

      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-600">
              Contact
            </p>
            <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Let’s build meaningful AI systems together
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-[15px]">
              Open to AI engineering roles, research collaborations, and impactful
              projects in Medical AI, NLP, RAG systems, and Computer Vision.
            </p>
          </div>

          {/* Main Card */}
          <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 via-white to-gray-100 p-6 shadow-sm sm:p-8">
            <div className="mb-8 space-y-3 text-center">
              <p className="text-sm font-medium uppercase tracking-wide text-gray-600">
                Best way to reach me
              </p>
              <a
                href="mailto:monirrul.cse@gmail.com"
                className="mx-auto inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-base font-semibold text-gray-900 shadow-sm transition hover:border-gray-400 hover:shadow sm:text-lg"
              >
                <Mail className="h-5 w-5 text-gray-700" />
                monirrul.cse@gmail.com
              </a>
              <p className="text-xs text-gray-500">
                I usually reply within 24 hours
              </p>
            </div>

            {/* Contact Details */}
            <div className="mb-8 grid gap-3 text-sm text-gray-600 sm:grid-cols-2 lg:grid-cols-3">
              {primaryContacts.map((item) => (
                <ContactItem
                  key={item.label}
                  label={item.label}
                  value={item.value}
                  href={item.href}
                  icon={item.icon}
                />
              ))}
            </div>

            {/* Social Links */}
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {socialLinks.map((item) => (
                <SocialLink
                  key={item.name}
                  name={item.name}
                  handle={item.handle}
                  href={item.href}
                  icon={item.icon}
                />
              ))}
            </div>
          </div>

          {/* Closing line */}
          <p
            className="text-center text-xs text-gray-600"
          >
            Always open to thoughtful conversations, ambitious ideas, and real-world impact.
          </p>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ label, value, href, icon: Icon }) => (
  <div className="flex items-center gap-3 rounded-xl border border-gray-300 bg-white px-4 py-3 shadow-sm transition hover:border-gray-400 hover:shadow">
    <div className="rounded-full bg-gray-100 p-2">
      <Icon className="h-4 w-4 text-gray-700" />
    </div>
    <div className="min-w-0">
      <p className="text-xs uppercase tracking-wide text-gray-600">
        {label}
      </p>
      {href ? (
        <a href={href} className="truncate text-sm font-medium text-gray-900 hover:text-gray-700 hover:underline">
          {value}
        </a>
      ) : (
        <p className="text-sm font-medium text-gray-900">{value}</p>
      )}
    </div>
  </div>
);

const SocialLink = ({ name, handle, href, icon: Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="group rounded-xl border border-gray-300 bg-white px-4 py-3 transition hover:border-gray-400 hover:shadow-md"
  >
    <div className="mb-1 flex items-center justify-between gap-3">
      <div className="flex min-w-0 items-center gap-2.5">
        <Icon className="h-5 w-5 flex-shrink-0 text-gray-600 transition-colors group-hover:text-gray-800" />
        <span className="truncate text-base font-semibold text-gray-900">{name}</span>
      </div>
      <ExternalLink className="h-3.5 w-3.5 flex-shrink-0 text-gray-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </div>
    <p className="break-all text-xs text-gray-600">{handle}</p>
  </a>
);

export default ContactSection;
