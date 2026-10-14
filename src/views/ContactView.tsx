import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Send, CheckCircle2, AlertCircle, ArrowUpRight, Clock, Sparkles } from 'lucide-react';
import { ContactFormData } from '../types';
import { BUSINESS_INFO } from '../data/floristData';

interface ContactViewProps {
  initialService?: string;
}

export const ContactView: React.FC<ContactViewProps> = ({ initialService }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    email: '',
    serviceType: initialService || 'Seasonal Bouquets',
    occasion: '',
    message: '',
  });

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceType: initialService }));
    }
  }, [initialService]);

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email format (e.g. name@domain.com).';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a contact phone number.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your floral enquiry.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable client-side submission with clear state
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      serviceType: 'Seasonal Bouquets',
      occasion: '',
      message: '',
    });
    setSubmitted(false);
    setErrors({});
  };

  return (
    <div id="contact-view" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE5DC] text-[#475C4B] text-xs uppercase tracking-widest font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-[#C88D7B]" />
          <span>Fleurs de Saison • Enquiries</span>
        </span>
        <h1 className="font-editorial text-4xl sm:text-6xl text-[#1F2E20] font-normal tracking-tight">
          Contact the Florist
        </h1>
        <p className="text-base sm:text-lg text-[#556958] leading-relaxed">
          Reach out for seasonal bouquets, wedding arrangements, or custom floral decorations in Strasbourg.
        </p>
      </div>

      {/* Main Grid: Details Column & Contact Form Column */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Official Contact & Location Card */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-[#FAF8F5] border border-[#E5DFD4] rounded-3xl p-8 sm:p-10 shadow-xs space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#637765] font-semibold block mb-1">
                Shop Information
              </span>
              <h2 className="font-editorial text-3xl text-[#1F2E20]">
                {BUSINESS_INFO.name}
              </h2>
              <p className="text-xs sm:text-sm text-[#506454] mt-1">
                Independent Flower Shop in Strasbourg
              </p>
            </div>

            {/* Address Block */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#EAE5DC] flex items-center justify-center text-[#2C3E2D] shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1 text-sm">
                <span className="text-xs uppercase tracking-wider text-[#637765] font-semibold block">
                  Shop Address
                </span>
                <p className="text-[#1F2E20] font-medium text-base">
                  {BUSINESS_INFO.address}
                </p>
                <a
                  id="contact-map-directions-link"
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#2C3E2D] hover:text-[#182319] font-medium underline underline-offset-4 pt-1"
                >
                  <span>Open Directions in Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Phone Block with Clickable tel link */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#EAE5DC] flex items-center justify-center text-[#2C3E2D] shrink-0 mt-0.5">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1 text-sm">
                <span className="text-xs uppercase tracking-wider text-[#637765] font-semibold block">
                  Telephone Contact
                </span>
                <a
                  id="contact-tel-link"
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="font-editorial text-2xl text-[#1F2E20] hover:text-[#2C3E2D] font-medium block transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
                <p className="text-xs text-[#6B806E]">
                  Direct line to our flower shop in Strasbourg
                </p>
              </div>
            </div>

            {/* Trust Signal */}
            <div className="pt-6 border-t border-[#EFEBE3] flex items-center justify-between text-xs text-[#4F6452]">
              <span>Verified Google Rating:</span>
              <span className="font-semibold text-[#1F2E20]">
                {BUSINESS_INFO.rating} ({BUSINESS_INFO.reviewsCount} Reviews)
              </span>
            </div>
          </div>

          {/* Location Map Simulation & Context */}
          <div className="bg-[#F4F0E8] border border-[#E2DBD0] rounded-3xl p-6 space-y-4">
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#647967]">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                Strasbourg City Center
              </span>
              <span>14 Rue des Bouchers</span>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden border border-[#D5CDC0] bg-[#E8E2D5] p-6 text-center space-y-3">
              <p className="font-editorial text-xl text-[#1F2E20]">
                Located in the historic district of Strasbourg
              </p>
              <p className="text-xs text-[#506454] max-w-sm mx-auto">
                Discover seasonal blooms, hand-tied bouquets, and botanical craftsmanship in our welcoming shop.
              </p>
              <a
                id="view-on-google-maps-btn"
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#FAF8F5] hover:bg-white text-[#1F2E20] border border-[#C9C0B0] text-xs uppercase tracking-wider font-semibold px-4 py-2 rounded-full transition-colors"
              >
                <span>View on Map</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Professional Enquiry Form */}
        <div className="lg:col-span-7">
          <div className="bg-[#FAF8F5] border border-[#E5DFD4] rounded-3xl p-8 sm:p-12 shadow-xs">
            {submitted ? (
              /* Success State */
              <div id="enquiry-success-message" className="py-8 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-[#E5ECE5] text-[#2C3E2D] flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h2 className="font-editorial text-3xl sm:text-4xl text-[#1F2E20]">
                  Enquiry Received
                </h2>
                <div className="max-w-md mx-auto space-y-3 text-sm text-[#465B4A]">
                  <p>
                    Thank you, <strong className="text-[#1F2E20]">{formData.fullName}</strong>. Your enquiry regarding <strong className="text-[#1F2E20]">{formData.serviceType}</strong> has been logged.
                  </p>
                  <p className="text-xs text-[#637766] bg-[#F2EEE7] p-3.5 rounded-xl border border-[#E5DFD4]">
                    For urgent or time-sensitive enquiries, you may also contact the florist directly by telephone at{' '}
                    <a
                      href={`tel:${BUSINESS_INFO.phoneClean}`}
                      className="font-semibold text-[#1F2E20] underline"
                    >
                      {BUSINESS_INFO.phone}
                    </a>.
                  </p>
                </div>
                <div className="pt-4">
                  <button
                    id="submit-another-enquiry-btn"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 bg-[#2C3E2D] text-white text-xs uppercase tracking-widest font-semibold px-6 py-3 rounded-full hover:bg-[#1C281D] transition-colors"
                  >
                    <span>Submit Another Enquiry</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Actual Form */
              <form id="floral-enquiry-form" onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <h2 className="font-editorial text-3xl text-[#1F2E20]">
                    Floral Enquiry Form
                  </h2>
                  <p className="text-xs sm:text-sm text-[#5C705E] mt-1">
                    Please provide your contact details and event or floral requirements below.
                  </p>
                </div>

                {/* Name & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs uppercase tracking-wider font-semibold text-[#3D5240] mb-1.5"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      placeholder="e.g. Marie Laurent"
                      className={`w-full px-4 py-3 rounded-xl border bg-white text-[#1F2E20] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#2C3E2D] transition-colors ${
                        errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-[#D9D2C5]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs uppercase tracking-wider font-semibold text-[#3D5240] mb-1.5"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      placeholder="e.g. +33 6 12 34 56 78"
                      className={`w-full px-4 py-3 rounded-xl border bg-white text-[#1F2E20] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#2C3E2D] transition-colors ${
                        errors.phone ? 'border-red-500 bg-red-50/20' : 'border-[#D9D2C5]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-wider font-semibold text-[#3D5240] mb-1.5"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="e.g. contact@example.com"
                    className={`w-full px-4 py-3 rounded-xl border bg-white text-[#1F2E20] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#2C3E2D] transition-colors ${
                      errors.email ? 'border-red-500 bg-red-50/20' : 'border-[#D9D2C5]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Service Selection & Occasion Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="serviceType"
                      className="block text-xs uppercase tracking-wider font-semibold text-[#3D5240] mb-1.5"
                    >
                      Floral Service Needed
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#D9D2C5] bg-white text-[#1F2E20] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#2C3E2D]"
                    >
                      <option value="Seasonal Bouquets">Seasonal Bouquets</option>
                      <option value="Wedding Arrangements">Wedding Arrangements</option>
                      <option value="Custom Floral Decorations">Custom Floral Decorations</option>
                      <option value="General Floral Enquiry">General Floral Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="occasion"
                      className="block text-xs uppercase tracking-wider font-semibold text-[#3D5240] mb-1.5"
                    >
                      Event / Occasion
                    </label>
                    <input
                      type="text"
                      id="occasion"
                      name="occasion"
                      value={formData.occasion}
                      onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                      placeholder="e.g. Wedding, Birthday, Dinner"
                      className="w-full px-4 py-3 rounded-xl border border-[#D9D2C5] bg-white text-[#1F2E20] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#2C3E2D]"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-wider font-semibold text-[#3D5240] mb-1.5"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Tell us about the floral arrangements or seasonal flowers you would like to discuss..."
                    className={`w-full px-4 py-3 rounded-xl border bg-white text-[#1F2E20] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#2C3E2D] transition-colors ${
                      errors.message ? 'border-red-500 bg-red-50/20' : 'border-[#D9D2C5]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    id="contact-form-submit-btn"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#2C3E2D] hover:bg-[#1A261B] text-white text-xs uppercase tracking-widest font-semibold py-4 px-6 rounded-xl shadow-md transition-all duration-200 disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span>Sending Enquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Floral Enquiry</span>
                      </>
                    )}
                  </button>
                  <p className="text-center text-[11px] text-[#7A8E7D] mt-3">
                    You can also contact the florist directly by phone at {BUSINESS_INFO.phone}.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
