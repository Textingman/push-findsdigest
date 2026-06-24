import Link from 'next/link';
import Image from 'next/image';
import { Bot, BookOpen, ShieldCheck } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* Hero Section */}
      <section style={{ backgroundColor: '#FFF7ED' }} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#FFEDD5', color: '#C2410C' }}>
              <Bot className="w-4 h-4" />
              Powered by AI — 100% Scam-Free
            </div>
            <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl" style={{ color: '#1F2937' }}>
              Your Personal AI Agent
              <span className="block" style={{ color: '#EA580C' }}>for Product Finds & Savings</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl" style={{ color: '#6B7280' }}>
              Meet your AI shopping advisor. Ask anything about deals, discounts, product recommendations, and money-saving opportunities — and get honest, unbiased answers instantly. No spam. No pressure. Just savings.
            </p>
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <Link
                href="/signup"
                className="px-8 py-4 text-white text-lg font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#EA580C' }}
              >
                Talk to the AI Agent — Free
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 text-lg font-semibold rounded-lg transition-opacity hover:opacity-90 border-2"
                style={{ color: '#EA580C', borderColor: '#EA580C', backgroundColor: '#FFFFFF' }}
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What the AI Does Section */}
      <section style={{ backgroundColor: '#FFFFFF' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold" style={{ color: '#1F2937' }}>What Our AI Agent Does For You</h2>
            <p className="mt-4 text-xl" style={{ color: '#6B7280' }}>
              A knowledgeable shopping expert available 24/7 — with zero agenda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ borderColor: '#FED7AA' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFEDD5' }}>
                  <Bot className="w-8 h-8" style={{ color: '#EA580C' }} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3" style={{ color: '#1F2937' }}>
                Finds Deals & Products For You
              </h3>
              <p className="text-center" style={{ color: '#6B7280' }}>
                Ask our AI anything — "What are the best deals right now?", "How do I find the best price on this?", "What cashback programs should I use?" — and get clear, honest answers in seconds.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ borderColor: '#FED7AA' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFEDD5' }}>
                  <BookOpen className="w-8 h-8" style={{ color: '#C2410C' }} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3" style={{ color: '#1F2937' }}>
                Teaches You How to Save More
              </h3>
              <p className="text-center" style={{ color: '#6B7280' }}>
                Our AI walks you through smart shopping strategies — from stacking coupons and cashback apps to finding the best loyalty program perks — so you can save more and spend less.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ borderColor: '#FED7AA' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFEDD5' }}>
                  <ShieldCheck className="w-8 h-8" style={{ color: '#EA580C' }} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3" style={{ color: '#1F2937' }}>
                Keeps You Safe from Scams
              </h3>
              <p className="text-center" style={{ color: '#6B7280' }}>
                Our AI helps you identify legitimate deals vs. scams, explains red flags to watch for, and guides you toward trusted sources so you never get taken advantage of.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={{ backgroundColor: '#FFF7ED' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold" style={{ color: '#1F2937' }}>How the AI Agent Helps You Save</h2>
            <p className="mt-4 text-xl" style={{ color: '#6B7280' }}>
              Three simple steps to finding the best deals and keeping more of your money
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white" style={{ backgroundColor: '#EA580C' }}>
                1
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1F2937' }}>Tell the AI What You're Looking For</h3>
              <p style={{ color: '#6B7280' }}>
                Share what types of savings interest you — grocery deals, travel discounts, cashback offers, product recommendations. The AI instantly tailors its guidance to your preferences.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white" style={{ backgroundColor: '#C2410C' }}>
                2
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1F2937' }}>Get Your Personalized Savings Guide</h3>
              <p style={{ color: '#6B7280' }}>
                The AI explains where to find the best deals, how to stack discounts efficiently, which cashback programs offer the most value, and how to spot misleading offers — all in plain language.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white" style={{ backgroundColor: '#9A3412' }}>
                3
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1F2937' }}>Start Saving Today</h3>
              <p style={{ color: '#6B7280' }}>
                Armed with the right knowledge, you can confidently find legitimate deals, maximize your savings, and keep more money in your pocket every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Conversation Preview Section */}
      <section style={{ backgroundColor: '#FFFFFF' }} className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold" style={{ color: '#1F2937' }}>Ask the AI Anything About Deals & Savings</h2>
            <p className="mt-4 text-xl" style={{ color: '#6B7280' }}>
              Here's a taste of what our AI agent can help you with
            </p>
          </div>

          <div className="space-y-4">
            {[
              { q: "Where can I find the best deals and discounts right now?", a: "There are many trusted sources for legitimate deals — from retailer websites and browser extensions like Honey and Rakuten, to deal aggregator sites like Slickdeals and RetailMeNot, to brand loyalty programs and email newsletters. I can help you find the best current opportunities based on what you're shopping for..." },
              { q: "How do I know if a deal or offer is legitimate?", a: "Legitimate deals come from verified retailers, have clear terms and expiration dates, and don't require unusual personal information. Red flags include requests for payment to access a discount, vague offer details, and deals that seem too good to be true. I can walk you through a checklist to verify any offer before you use it..." },
              { q: "What cashback apps and programs give the best returns?", a: "Top cashback programs include Rakuten, Ibotta, Fetch Rewards, and credit card rewards programs. The best option depends on where you shop most. I can help you identify which programs align with your spending habits and how to stack them for maximum savings..." },
              { q: "How can I save more on groceries each week?", a: "Grocery savings come from combining store loyalty cards, digital coupons, cashback apps like Ibotta, and shopping sales cycles. I can guide you through a simple system to consistently cut your grocery bill without spending hours clipping coupons..." },
              { q: "How do I organize my savings strategy to get the most out of it?", a: "Staying organized is key to maximizing savings. I can help you set up a simple system to track your best cashback apps, identify recurring deals worth bookmarking, and build a routine that saves you money consistently without taking over your day..." },
            ].map((item, i) => (
              <div key={i} className="rounded-xl overflow-hidden border" style={{ borderColor: '#FED7AA' }}>
                <div className="p-4 flex items-start gap-3" style={{ backgroundColor: '#FFF7ED' }}>
                  <span className="text-lg">👤</span>
                  <p className="font-semibold" style={{ color: '#1F2937' }}>{item.q}</p>
                </div>
                <div className="p-4 flex items-start gap-3 bg-white">
                  <Bot className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#EA580C' }} />
                  <p style={{ color: '#6B7280' }}>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl shadow-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #9A3412 0%, #EA580C 100%)' }}>
            <div className="px-6 py-16 sm:px-12 sm:py-20 text-center">
              <Bot className="w-16 h-16 text-white mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-6">
                Your AI Savings Advisor is Ready
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>
                Get instant, unbiased answers to all your savings questions. No spam. No pressure. Just an AI that's 100% on your side.
              </p>
              <Link
                href="/signup"
                className="inline-block px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#FFFFFF', color: '#EA580C' }}
              >
                Talk to the AI Agent — Free
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
