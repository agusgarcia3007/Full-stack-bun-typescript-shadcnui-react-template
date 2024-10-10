"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Blocks,
  ChevronDown,
  Component,
  Database,
  FileJson,
  Layout,
  Palette,
  Server,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

export function LandingPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white overflow-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <Server className="h-6 w-6 text-purple-400" />
            <span className="font-bold text-xl">FullStack Template</span>
          </a>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#features"
              className="text-sm font-medium hover:text-purple-400 transition-colors"
            >
              Features
            </a>
            <a
              href="#tech-stack"
              className="text-sm font-medium hover:text-purple-400 transition-colors"
            >
              Tech Stack
            </a>
            <a
              href="#get-started"
              className="text-sm font-medium hover:text-purple-400 transition-colors"
            >
              Get Started
            </a>
          </nav>
          <Button
            variant="outline"
            className="hidden md:inline-flex border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
          >
            Download Now
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')] bg-cover bg-center"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
              opacity: 0.3,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900" />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none xl:text-8xl/none">
                  Full-Stack Template
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    {" "}
                    for the Future
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl mb-8">
                  Jumpstart your project with our cutting-edge full-stack
                  template. Powered by the latest technologies for unparalleled
                  performance and developer experience.
                </p>
              </div>
              <div className="space-x-4">
                <Button
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                >
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-purple-400 border-purple-400 hover:bg-purple-400 hover:text-white"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={40} className="text-purple-400" />
          </div>
        </section>
        <section id="features" className="py-20 bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Cutting-Edge <span className="text-purple-400">Features</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-gray-700 border-purple-500 transform transition-all hover:scale-105">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-400">
                    <Zap className="mr-2" /> Blazing Fast Backend
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-200">
                  Powered by Bun and Drizzle ORM for high-performance
                  server-side operations that scale effortlessly.
                </CardContent>
              </Card>
              <Card className="bg-gray-700 border-pink-500 transform transition-all hover:scale-105">
                <CardHeader>
                  <CardTitle className="flex items-center text-pink-400">
                    <Layout className="mr-2" /> Modern Frontend
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-200">
                  Built with Vite, React, and TypeScript for a smooth,
                  efficient, and type-safe user experience.
                </CardContent>
              </Card>
              <Card className="bg-gray-700 border-purple-500 transform transition-all hover:scale-105">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-400">
                    <Palette className="mr-2" /> Beautiful UI
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-200">
                  Styled with Tailwind CSS and shadcn/ui for a sleek,
                  customizable design that stands out.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="tech-stack" className="py-20 bg-gray-900">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Powerful{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Tech Stack
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gray-800 border-purple-500">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-400">
                    <Server className="mr-2" /> Backend Technologies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-200">
                    <li className="flex items-center">
                      <Zap className="mr-2 h-5 w-5 text-yellow-400" /> Bun -
                      Next-gen JavaScript runtime
                    </li>
                    <li className="flex items-center">
                      <Database className="mr-2 h-5 w-5 text-blue-400" />{" "}
                      Drizzle ORM - Lightweight TypeScript ORM
                    </li>
                    <li className="flex items-center">
                      <Database className="mr-2 h-5 w-5 text-green-400" />{" "}
                      SQLite - Efficient, reliable database
                    </li>
                    <li className="flex items-center">
                      <FileJson className="mr-2 h-5 w-5 text-blue-500" />{" "}
                      TypeScript - Type-safe JavaScript
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-pink-500">
                <CardHeader>
                  <CardTitle className="flex items-center text-pink-400">
                    <Layout className="mr-2" /> Frontend Technologies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-200">
                    <li className="flex items-center">
                      <Zap className="mr-2 h-5 w-5 text-yellow-400" /> Vite -
                      Lightning-fast build tool
                    </li>
                    <li className="flex items-center">
                      <Component className="mr-2 h-5 w-5 text-blue-400" /> React
                      - Powerful UI library
                    </li>
                    <li className="flex items-center">
                      <FileJson className="mr-2 h-5 w-5 text-blue-500" />{" "}
                      TypeScript - Type-safe JavaScript
                    </li>
                    <li className="flex items-center">
                      <Palette className="mr-2 h-5 w-5 text-teal-400" />{" "}
                      Tailwind CSS - Utility-first CSS framework
                    </li>
                    <li className="flex items-center">
                      <Blocks className="mr-2 h-5 w-5 text-indigo-400" />{" "}
                      shadcn/ui - Beautiful, accessible components
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="get-started" className="py-20 bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Start Building{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Today
                </span>
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl mb-8">
                Launch your next project with our full-stack template. It's easy
                to set up and comes with everything you need to create something
                extraordinary.
              </p>
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                Clone Repository
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 py-6 border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2024 FullStack Template. All rights reserved.
          </p>
          <nav className="flex gap-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
            >
              Privacy Policy
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
