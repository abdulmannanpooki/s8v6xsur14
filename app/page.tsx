'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Check, Code, Cpu, Feather, GitHub, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold leading-tight max-w-4xl mb-6">
          Build Stunning Web Experiences with Next.js & shadcn/ui
        </h1>
        <p className="text-lg max-w-3xl mb-10 text-slate-700 dark:text-slate-300">
          A modern, beautiful, and fully responsive landing page template built with Next.js, Tailwind CSS, and shadcn/ui components.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900">
            Learn More
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white dark:bg-slate-900 py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-600">
                <Code className="w-6 h-6" />
                Developer Friendly
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 dark:text-slate-300">
              Build with modern React and Next.js features, fully typed with TypeScript and easy to customize.
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-600">
                <Cpu className="w-6 h-6" />
                Performance Optimized
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 dark:text-slate-300">
              Fast loading times and optimized for SEO with server-side rendering and static generation.
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-600">
                <Feather className="w-6 h-6" />
                Beautiful UI
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 dark:text-slate-300">
              A clean, modern design system powered by shadcn/ui and Tailwind CSS for pixel-perfect UI.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-4 max-w-3xl mx-auto">
          Ready to build your next project with confidence?
        </h2>
        <p className="mb-8 max-w-2xl mx-auto text-lg opacity-90">
          Start using this landing page template today and accelerate your development workflow.
        </p>
        <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
          Get Started Now
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-slate-100 dark:bg-slate-900 py-10 mt-auto">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100 font-semibold text-lg">
            <Check className="w-6 h-6 text-green-600" />
            Next.js Landing
          </div>
          <div className="flex gap-6 text-slate-600 dark:text-slate-400">
            <a href="https://github.com/shadcn" target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitHub className="w-6 h-6 hover:text-slate-900 dark:hover:text-white transition-colors" />
            </a>
            <a href="https://linkedin.com/in/shadcn" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6 hover:text-slate-900 dark:hover:text-white transition-colors" />
            </a>
            <a href="mailto:hello@example.com" aria-label="Email">
              <Mail className="w-6 h-6 hover:text-slate-900 dark:hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
