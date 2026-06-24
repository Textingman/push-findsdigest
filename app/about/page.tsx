import Link from 'next/link';
import Image from 'next/image';
import { Bot, ShieldCheck, BookOpen } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* Hero Section */}
      <section style={{ backgroundColor: '#F5F7FA' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#DBEAFE', color: '#1F4E79' }}>
              <Bot className="w-4 h-4" />
              AI-Powered — 100% Independent
            </div>
            <h1 className="text-5xl font-extrabold mb-6" style={{ color: '#1F2937' }}>
              An AI Agent Built to Help You Save,<br />Not to Spam You
            </h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#6B7280' }}>
              The Finds Digest is an AI-powered platform that helps individuals discover legitimate deals, discounts, and money-saving opportunities with honest, unbiased guidance. We're not a spam site. We're your independent savings advisor.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#1F2937' }}>Why We Built This</h2>
            <p className="text-lg mb-4" style={{ color: '#6B7280' }}>
              The savings world is full of misleading offers, spam, and confusing fine print. Most people don't know how to find legitimate deals or how to maximize their savings without wasting hours of their time.
            </p>
            <p className="text-lg mb-4" style={{ color: '#6B7280' }}>
              We built an AI agent that acts as your personal savings advisor — one that helps you find real opportunities, teaches you money-saving strategies, and protects you from misleading offers. No spam. No fake deals. Just honest guidance.
            </p>
            <p className="text-lg" style={{ color: '#6B7280' }}>
              Think of it as having a knowledgeable friend who knows all the best ways to save — available 24/7, completely free, and always on your side.
            </p>
          </div>
          <div className="rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DBEAFE' }}>
                  <Bot className="w-5 h-5" style={{ color: '#1F4E79' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#1F2937' }}>AI-Powered, Always Available</h3>
                  <p style={{ color: '#6B7280' }}>
                    Our AI agent is available 24/7 to help you find deals and answer your savings questions instantly — no waiting, no appointments.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DBEAFE' }}>
                  <ShieldCheck className="w-5 h-5" style={{ color: '#2F6FA3' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#1F2937' }}>Scam Protection</h3>
                  <p style={{ color: '#6B7280' }}>
                    We help you identify legitimate offers and avoid misleading deals. Your safety is our top priority.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#dcfce7' }}>
                  <BookOpen className="w-5 h-5" style={{ color: '#5E8F5E' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#1F2937' }}>Strategy First</h3>
                  <p style={{ color: '#6B7280' }}>
                    We teach you how to save smarter, not just more. Better strategy means more money in your pocket.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What the AI Covers Section */}
      <section style={{ backgroundColor: '#F5F7FA' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1F2937' }}>What Our AI Agent Covers</h2>
            <p className="text-xl" style={{ color: '#6B7280' }}>
              Comprehensive savings guidance tailored to your lifestyle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl border bg-white" style={{ borderColor: '#E5E7EB' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#DBEAFE' }}>
                <span className="text-xl">🏷️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#1F2937' }}>Deals & Discounts</h3>
              <p style={{ color: '#6B7280' }}>
                Discover legitimate deals and discounts from trusted retailers — from everyday essentials to big-ticket purchases.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl border bg-white" style={{ borderColor: '#E5E7EB' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#dcfce7' }}>
                <span className="text-xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#1F2937' }}>Cashback & Rewards</h3>
              <p style={{ color: '#6B7280' }}>
                Find the best cashback programs, loyalty rewards, and credit card perks to maximize what you earn on every purchase.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl border bg-white" style={{ borderColor: '#E5E7EB' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#DBEAFE' }}>
                <span className="text-xl">📱</span>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#1F2937' }}>Brand Offers & Promotions</h3>
              <p style={{ color: '#6B7280' }}>
                Learn how to find and use brand promotions on Instagram, Facebook, TikTok, and brand websites efficiently and safely.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl border bg-white" style={{ borderColor: '#E5E7EB' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#FEF3C7' }}>
                <span className="text-xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#1F2937' }}>Scam Detection</h3>
              <p style={{ color: '#6B7280' }}>
                Learn to identify fake offers, phishing attempts, and misleading deals so you can protect yourself and your information.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl border bg-white" style={{ borderColor: '#E5E7EB' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#dcfce7' }}>
                <span className="text-xl">🏆</span>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#1F2937' }}>Smart Shopping Strategies</h3>
              <p style={{ color: '#6B7280' }}>
                Discover proven strategies to maximize your savings — from timing purchases to stacking discounts and using price tracking tools.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl border bg-white" style={{ borderColor: '#E5E7EB' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#DBEAFE' }}>
                <span className="text-xl">📋</span>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#1F2937' }}>Savings Organization</h3>
              <p style={{ color: '#6B7280' }}>
                Get help organizing your savings strategy, tracking the best deals, and building a consistent routine that maximizes your savings potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #1F4E79 0%, #2F6FA3 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Bot className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Talk to Your AI Savings Advisor?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Get instant, unbiased answers to all your savings questions — completely free, with zero spam.
          </p>
          <Link
            href="/signup"
            className="inline-block px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#5E8F5E', color: '#FFFFFF' }}
          >
            Talk to the AI Agent — Free
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
