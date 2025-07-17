import React from "react";

const AboutUsPage = () => (
  <div className="min-h-screen bg-primary text-white py-16 px-4 max-w-4xl mx-auto">
    <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-2">What is Rotaract?</h2>
      <p className="text-secondary">Rotaract is a global organization that brings together young adults to take action in their communities, develop leadership and professional skills, and have fun through service. [Edit this text for your club]</p>
    </section>
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-2">About KDUSC Chapter</h2>
      <p className="text-secondary">The Rotaract Club of KDUSC is dedicated to making a positive impact at the university and beyond. [Edit this text for your chapter]</p>
    </section>
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-2">Mission, Vision & Values</h2>
      <ul className="list-disc ml-6 text-secondary">
        <li><b>Mission:</b> [Your club mission statement]</li>
        <li><b>Vision:</b> [Your club vision statement]</li>
        <li><b>Values:</b> [List your club values]</li>
      </ul>
    </section>
    <section>
      <h2 className="text-2xl font-semibold mb-2">Past Achievements</h2>
      <ul className="list-disc ml-6 text-secondary">
        <li>[Achievement 1]</li>
        <li>[Achievement 2]</li>
        <li>[Achievement 3]</li>
      </ul>
    </section>
  </div>
);

export default AboutUsPage; 