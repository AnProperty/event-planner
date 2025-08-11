/* eslint-disable react/no-unescaped-entities */

"use client";
import React, { useEffect } from "react";
import {
  CheckCircle,
  Headphones,
  MoveRight,
  Calendar,
  MessageSquare,
  Phone,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookingForm } from "@/components/booking/booking-form";

const Booking = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bookingSteps = [
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Fill Out Form",
      description:
        "Provide your event details, requirements, and contact information in our comprehensive form.",
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Instant Response",
      description:
        "Receive an immediate confirmation and our team will review your request within 24 hours.",
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Strategy Session",
      description:
        "We'll schedule a consultation to plan every detail and discuss timeline and requirements.",
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Event Execution",
      description:
        "Sit back and enjoy your perfectly coordinated event with full-service management.",
    },
  ];

  const faqs = [
    {
      question: "How far in advance should I book?",
      answer:
        "We recommend booking at least 4-6 weeks in advance for standard events, and 2-3 months for large events or peak season dates (May-September and December).",
    },
    {
      question: "Is a deposit required to secure a booking?",
      answer:
        "Yes, a 30% deposit is required to secure your booking. The remaining balance is due one week before your event date.",
    },
    {
      question: "What happens after I submit my booking request?",
      answer:
        "Our team will review your request and contact you within 24-48 hours to discuss details and provide a customized quote.",
    },
    {
      question: "Do you provide all necessary equipment?",
      answer:
        "Yes, we provide all sound and lighting equipment needed for your event, including setup, operation, and teardown.",
    },
    {
      question: "Can I modify my booking after confirmation?",
      answer:
        "Yes, modifications can be made up to 2 weeks before your event, subject to equipment and staff availability.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Cancellations made 30+ days before the event receive a full deposit refund. Cancellations within 14-30 days receive a 50% deposit refund. Cancellations under 14 days are non-refundable.",
    },
  ];

  return (
    <div className="bg-black min-h-screen text-white">
      {/* HERO — split layout with luxe backdrop */}
      <section className="relative overflow-hidden">
        {/* Orbs & beams */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-center">
            {/* Left: copy */}
            <div className="lg:col-span-6">
              <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold">
                Book Your Event
              </h1>
              <p className="mt-5 text-lg text-white/70">
                Ready to create an unforgettable experience? Let's plan your
                perfect event with our comprehensive management services and
                cutting-edge technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              How Booking Works
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our streamlined process ensures every detail is covered from
              initial concept to final execution
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bookingSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>

                {index < bookingSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary/50">
                    <MoveRight size={24} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form + Direct Contact Combined */}
      <section className="py-16 md:px-12 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 px-2"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Start Your Event Journey
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Fill out the form and we'll reach out with a personalized
              consultation
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Booking Form */}
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <BookingForm />
            </div>

            {/* Contact Info */}
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Need to Speak With Us <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                    Directly?
                  </span>
                </h3>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  If you have specific questions or prefer to discuss your
                  requirements over the phone, our team is here to help.
                </p>

                <div className="space-y-6">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="bg-primary/20 p-3 rounded-lg">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-white text-lg">+8801889197863</span>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="bg-primary/20 p-3 rounded-lg">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-white text-lg">booking@beng.com</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Common questions about our booking process and services
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl px-6 hover:bg-white/10 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-white font-medium hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pt-2 pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
