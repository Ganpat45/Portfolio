"use client";
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, GraduationCap, Briefcase, Calendar } from 'lucide-react';

const journeyData = {
  education: [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'HNGU University,Patan, Gujarat',
      year: '2023 - 2025',
      description: 'Focused on computer programming, software development, and database management.',
    },
  ],
  experience: [
    {
      role: 'Web Developer',
      company: 'Egniol Services Pvt Ltd, Ahmedabad, Gujarat',
      year: 'Sept 2024 – Sept 2025',
      description: 'Building and maintaining many responsive web applications with Nextjs, Tailwind css and React a focus on performance and user experiencen.',
    },  ]
};

const handleContactSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  };
  alert('Thank you for your message! I\'ll get back to you soon.');
  e.target.reset();
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Get In Touch
        </h2>
        <div className="grid lg:grid-cols-2 gap-12">
         
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-100">Let's Work Together</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you're looking for a developer to join your team or need help 
                with a specific project, feel free to reach out!
              </p>
            </div>
            <div className="space-y-6">
              {[
                { icon: <Mail className="w-6 h-6" />, text: 'ganpatlmakvana2001@gmail.com', href: 'mailto:ganpatlmakvana2001@gmail.com' },
                { icon: <Phone className="w-6 h-6" />, text: '+91 9924644561', href: 'tel:+919924644561' },
                { icon: <MapPin className="w-6 h-6" />, text: 'Garambadi, Suigam, Banaskantha', href: '#' },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors group"
                >
                  <div className="p-3 bg-gray-800 rounded-full group-hover:bg-purple-600 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-lg">{item.text}</span>
                </a>
              ))}
            </div>
            <div className="flex gap-4 pt-8">
              {[
                { icon: <Github className="w-6 h-6 text-white" />, href: 'https://github.com/Ganpat45' },
                { icon: <Linkedin className="w-6 h-6 text-white" />, href: 'https://www.linkedin.com/in/Ganpat Makvana' },
                { icon: <Mail className="w-6 h-6 text-white" />, href: 'mailto:ganpatlmakvana2001@gmail.com' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-4 bg-gray-800 hover:bg-purple-600 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
         
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-100">My Journey</h3>
            
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-600 rounded-full">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-blue-400">Education</h4>
              </div>
              <div className="space-y-4 ml-8">
                {journeyData.education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-purple-500/30 pl-4 pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-purple-400" />
                      <span className="text-sm text-purple-400 font-medium">{edu.year}</span>
                    </div>
                    <h5 className="font-semibold text-gray-200 mb-1">{edu.degree}</h5>
                    <p className="text-gray-400 text-sm mb-2">{edu.institution}</p>
                    <p className="text-gray-500 text-xs">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-600 rounded-full">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-green-400">Previous Experience</h4>
              </div>
              <div className="space-y-4 ml-8">
                {journeyData.experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-purple-500/30 pl-4 pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-purple-400" />
                      <span className="text-sm text-purple-400 font-medium">{exp.year}</span>
                    </div>
                    <h5 className="font-semibold text-gray-200 mb-1">{exp.role}</h5>
                    <p className="text-gray-400 text-sm mb-2">{exp.company}</p>
                    <p className="text-gray-500 text-xs">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 