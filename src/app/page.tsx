"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Building2, Crown, Gem, HelpCircle, Linkedin, Mail, MapPin, MessageCircle, Sparkles, Star, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "reviews" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grand Vista Hotel"
          button={{
            text: "Book Now",
            href: "https://booking.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Experience Luxury Hospitality"
          description="Indulge in world-class accommodations with breathtaking views, exceptional service, and unparalleled comfort at Grand Vista Hotel"
          tag="5-Star Experience"
          tagIcon={Star}
          buttons={[
            { text: "Book Your Stay", href: "https://booking.com" },
            { text: "View Rooms", href: "rooms" }
          ]}
          imageSrc="https://images.pexels.com/photos/7168582/pexels-photo-7168582.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Grand Vista Hotel luxury exterior"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="About Grand Vista Hotel"
          description="For over three decades, Grand Vista Hotel has been synonymous with luxury, elegance, and exceptional hospitality, setting the standard for premium accommodations"
          tag="Our Heritage"
          tagIcon={Crown}
          buttons={[
            { text: "Learn More", href: "about" },
            { text: "Contact Us", href: "contact" }
          ]}
          bulletPoints={[
            {
              title: "Award-Winning Service",
              description: "Recognized globally for outstanding hospitality and guest satisfaction",
              icon: Award
            },
            {
              title: "Prime Location",
              description: "Strategically located in the heart of the city with stunning panoramic views",
              icon: MapPin
            },
            {
              title: "Luxury Amenities",
              description: "World-class spa, fine dining, and recreational facilities",
              icon: Gem
            }
          ]}
          imageSrc="https://images.pexels.com/photos/7168582/pexels-photo-7168582.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Hotel lobby interior"
          imagePosition="left"
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardTwo
          title="Luxury Accommodations"
          description="Choose from our collection of elegantly appointed rooms and suites, each designed to provide the ultimate in comfort and sophistication"
          tag="Premium Rooms"
          products={[
            {
              id: "1",
              brand: "Grand Vista",
              name: "Deluxe King Suite",
              price: "$450/night",
              rating: 5,
              reviewCount: "2.1k",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Deluxe King Suite interior"
            },
            {
              id: "2",
              brand: "Grand Vista",
              name: "Ocean View Suite",
              price: "$650/night",
              rating: 5,
              reviewCount: "1.8k",
              imageSrc: "https://images.pexels.com/photos/3225561/pexels-photo-3225561.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Ocean View Suite with balcony"
            },
            {
              id: "3",
              brand: "Grand Vista",
              name: "Presidential Suite",
              price: "$1200/night",
              rating: 5,
              reviewCount: "892",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Presidential Suite living area"
            }
          ]}
          buttons={[
            { text: "View All Rooms", href: "rooms" }
          ]}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardThree
          title="World-Class Amenities"
          description="Discover exceptional facilities and services designed to enhance every moment of your stay"
          tag="Luxury Facilities"
          tagIcon={Sparkles}
          features={[
            {
              id: "01",
              title: "Spa & Wellness Center",
              description: "Rejuvenate your mind and body in our award-winning spa featuring therapeutic treatments and wellness programs",
              imageSrc: "https://images.pexels.com/photos/3902730/pexels-photo-3902730.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury spa treatment room"
            },
            {
              id: "02",
              title: "Fine Dining Restaurant",
              description: "Experience culinary excellence with our world-renowned chefs serving innovative cuisine in an elegant atmosphere",
              imageSrc: "https://images.pexels.com/photos/2291636/pexels-photo-2291636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elegant hotel restaurant dining room"
            },
            {
              id: "03",
              title: "Fitness & Recreation",
              description: "Stay active in our state-of-the-art fitness center with premium equipment and personal training services",
              imageSrc: "https://images.pexels.com/photos/3902730/pexels-photo-3902730.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Modern hotel fitness center"
            }
          ]}
          buttons={[
            { text: "Explore All Amenities", href: "amenities" }
          ]}
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardOne
          title="Guest Experiences"
          description="Hear from our valued guests who have experienced the exceptional hospitality at Grand Vista Hotel"
          tag="5-Star Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "CEO, TechCorp",
              company: "Fortune 500 Executive",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Mitchell"
            },
            {
              id: "2",
              name: "James Rodriguez",
              role: "Travel Blogger",
              company: "Luxury Travel Magazine",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/8829191/pexels-photo-8829191.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of James Rodriguez"
            },
            {
              id: "3",
              name: "Emily Chen",
              role: "Wedding Coordinator",
              company: "Premier Events",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3777565/pexels-photo-3777565.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emily Chen"
            },
            {
              id: "4",
              name: "Michael Thompson",
              role: "Business Traveler",
              company: "Global Consulting",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/8249281/pexels-photo-8249281.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Thompson"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Team"
          description="Our dedicated professionals are committed to ensuring every guest enjoys an unforgettable experience"
          tag="Hospitality Excellence"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Alexandra Morgan",
              role: "General Manager",
              description: "With over 15 years in luxury hospitality, Alexandra ensures every detail exceeds expectations",
              imageSrc: "https://images.pexels.com/photos/3770093/pexels-photo-3770093.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Alexandra Morgan",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/alexandra" },
                { icon: Mail, url: "mailto:alexandra@grandvista.com" }
              ]
            },
            {
              id: "2",
              name: "Michael Rodriguez",
              role: "Executive Chef",
              description: "Award-winning chef bringing culinary excellence to our fine dining experiences",
              imageSrc: "https://images.pexels.com/photos/3770093/pexels-photo-3770093.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Rodriguez",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/michael" },
                { icon: Mail, url: "mailto:michael@grandvista.com" }
              ]
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Leading Hospitality Brands"
          description="Join the network of premier hotels and resorts that set the standard for luxury hospitality worldwide"
          tag="Industry Leaders"
          tagIcon={Building2}
          logos={[
            "https://images.pexels.com/photos/1008208/pexels-photo-1008208.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/16640208/pexels-photo-16640208.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1112680/pexels-photo-1112680.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/12720659/pexels-photo-12720659.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Find answers to common questions about your stay at Grand Vista Hotel"
          tag="Guest Support"
          tagIcon={HelpCircle}
          imageSrc="https://images.pexels.com/photos/7820689/pexels-photo-7820689.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Hotel concierge assisting guests"
          mediaPosition="left"
          faqs={[
            {
              id: "1",
              title: "What time is check-in and check-out?",
              content: "Check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out may be available upon request and subject to availability."
            },
            {
              id: "2",
              title: "Do you offer airport transportation?",
              content: "Yes, we provide complimentary airport shuttle service for our guests. Please contact our concierge 24 hours in advance to arrange transportation."
            },
            {
              id: "3",
              title: "Are pets allowed at the hotel?",
              content: "We welcome well-behaved pets with advance notice. A pet fee of $75 per night applies, and pets must be registered at check-in."
            },
            {
              id: "4",
              title: "What dining options are available?",
              content: "Our hotel features a fine dining restaurant, casual café, rooftop bar, and 24-hour room service to satisfy all your culinary preferences."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Stay Connected"
          title="Subscribe for Exclusive Offers"
          description="Be the first to know about special promotions, seasonal packages, and exclusive events at Grand Vista Hotel"
          tagIcon={Mail}
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe Now"
          termsText="By subscribing, you agree to receive promotional emails from Grand Vista Hotel. You can unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Hotel",
              items: [
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Dining", href: "dining" },
                { label: "Spa & Wellness", href: "spa" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Concierge", href: "concierge" },
                { label: "Business Center", href: "business" },
                { label: "Event Planning", href: "events" },
                { label: "Wedding Services", href: "weddings" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Careers", href: "careers" },
                { label: "Press", href: "press" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "FAQ", href: "faq" },
                { label: "Guest Services", href: "support" },
                { label: "Accessibility", href: "accessibility" },
                { label: "Feedback", href: "feedback" }
              ]
            }
          ]}
          copyrightText="© 2025 Grand Vista Hotel. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}