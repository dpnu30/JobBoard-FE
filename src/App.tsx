import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Search,
  Star,
  Twitter,
} from "lucide-react";
import React from "react";

export default function JobHunt() {
  // Stats data
  const statsData = [
    { count: "175,324", label: "Jobs" },
    { count: "97,354", label: "Companies" },
    { count: "3K-57K", label: "Salary" },
    { count: "7523", label: "Freelancers" },
  ];

  // Popular vacancies data
  const popularVacancies = [
    "Frontend Developer",
    "Designer",
    "Operations Manager/Analyst",
    "UI Designer",
    "Android Developer",
    "Full Stack Developer",
    "IT Project",
    "Marketing Manager Product",
  ];

  // How JobHunt works data
  const howItWorks = [
    {
      title: "Create Account",
      description: "First you need to create an account here",
    },
    {
      title: "Upload Resume",
      description: "Upload your resume to let employers know about you",
    },
    {
      title: "Find suitable job",
      description: "Search for suitable jobs that match your skills",
    },
    {
      title: "Apply Job",
      description: "Apply for the job that suits your skills and experience",
    },
  ];

  // Popular categories data
  const popularCategories = [
    { icon: "🎨", title: "Design & Creative", count: "235 Jobs" },
    { icon: "💻", title: "Web & Programming", count: "167 Jobs" },
    { icon: "📱", title: "Digital Marketing", count: "145 Jobs" },
    { icon: "📊", title: "Sales & Business", count: "134 Jobs" },
    { icon: "🎵", title: "Music & Audio", count: "167 Jobs" },
    { icon: "💼", title: "Business & Finance", count: "125 Jobs" },
    { icon: "📝", title: "Writing & Trans", count: "168 Jobs" },
    { icon: "🔍", title: "SEO & Digital Marketing", count: "124 Jobs" },
  ];

  // Featured jobs data
  const featuredJobs = [
    {
      title: "Senior UX/UI Designer",
      company: "Stripe Inc",
      location: "London, UK",
      type: "Full Time",
      salary: "$45k - $78k",
      time: "2 days ago",
      logo: "🟢",
    },
    {
      title: "Product UI Designer",
      company: "Twitter Inc",
      location: "New York, USA",
      type: "Full Time",
      salary: "$55k - $86k",
      time: "3 days ago",
      logo: "🔵",
    },
    {
      title: "Marketing Officer",
      company: "Facebook",
      location: "London, UK",
      type: "Full Time",
      salary: "$45k - $78k",
      time: "4 days ago",
      logo: "🟣",
    },
    {
      title: "Software Engineer",
      company: "Invision",
      location: "London, UK",
      type: "Full Time",
      salary: "$45k - $78k",
      time: "2 days ago",
      logo: "🟠",
    },
    {
      title: "Java Developer",
      company: "Spotify",
      location: "Berlin, Germany",
      type: "Full Time",
      salary: "$45k - $78k",
      time: "3 days ago",
      logo: "🟢",
    },
    {
      title: "Product Manager",
      company: "Figma",
      location: "New York, USA",
      type: "Full Time",
      salary: "$45k - $78k",
      time: "4 days ago",
      logo: "🔴",
    },
    {
      title: "Frontend Developer",
      company: "Google",
      location: "London, UK",
      type: "Full Time",
      salary: "$45k - $78k",
      time: "2 days ago",
      logo: "🟡",
    },
    {
      title: "Senior UI Designer",
      company: "Airbnb",
      location: "Paris, France",
      type: "Full Time",
      salary: "$45k - $78k",
      time: "3 days ago",
      logo: "🔵",
    },
    {
      title: "Full Stack Developer",
      company: "Microsoft",
      location: "London, UK",
      type: "Full Time",
      salary: "$45k - $78k",
      time: "4 days ago",
      logo: "🟣",
    },
  ];

  // Top companies data
  const topCompanies = [
    { name: "Google", location: "London, UK", logo: "🔴" },
    { name: "Facebook", location: "New York, USA", logo: "🔵" },
    { name: "Airbnb", location: "Paris, France", logo: "🟣" },
    { name: "Twitter", location: "Berlin, Germany", logo: "🟢" },
    { name: "Stripe", location: "London, UK", logo: "🟠" },
    { name: "Dribbble", location: "New York, USA", logo: "🔴" },
  ];

  // Testimonials data
  const testimonials = [
    {
      content:
        "I got my dream job through JobHunt. The platform is easy to use and has a wide range of job opportunities.",
      author: "Robert Fox",
      role: "UI Designer",
      avatar: "👨",
      rating: 5,
    },
    {
      content:
        "JobHunt helped me find the perfect job that matches my skills and experience. Highly recommended!",
      author: "Jenny Wilson",
      role: "Frontend Developer",
      avatar: "👩",
      rating: 5,
    },
    {
      content:
        "As an employer, JobHunt made it easy to find qualified candidates for our open positions. Great service!",
      author: "Jacob Jones",
      role: "CEO at Airbnb",
      avatar: "👨",
      rating: 5,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto py-4 px-4 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="font-bold text-xl">
              <span className="text-blue-600">Job</span>Hunt
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-sm font-medium">
                Home
              </a>
              <a href="#" className="text-sm font-medium">
                Find Jobs
              </a>
              <a href="#" className="text-sm font-medium">
                Employers
              </a>
              <a href="#" className="text-sm font-medium">
                Candidates
              </a>
              <a href="#" className="text-sm font-medium">
                Blog
              </a>
              <a href="#" className="text-sm font-medium">
                Pages
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-sm">
              Sign In
            </Button>
            <Button className="text-sm">Post a Job</Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Find a job that suits
                <br />
                your interest & skills.
              </h1>
              <div className="bg-white p-4 rounded-lg shadow-sm mt-8">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
                    <Input
                      className="pl-10"
                      placeholder="Job title, keywords"
                    />
                  </div>
                  <div className="flex-1 relative">
                    <MapPin className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
                    <Input className="pl-10" placeholder="City or location" />
                  </div>
                  <Button className="md:w-auto w-full">Search</Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-3 text-sm text-gray-500">
                  <span>Popular Searches:</span>
                  <a href="#" className="text-blue-600">
                    Designer
                  </a>
                  <a href="#" className="text-blue-600">
                    Developer
                  </a>
                  <a href="#" className="text-blue-600">
                    Web
                  </a>
                  <a href="#" className="text-blue-600">
                    IOS
                  </a>
                  <a href="#" className="text-blue-600">
                    PHP
                  </a>
                  <a href="#" className="text-blue-600">
                    Senior
                  </a>
                  <a href="#" className="text-blue-600">
                    Engineer
                  </a>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
              {statsData.map((stat, index) => (
                <div key={index} className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      {index === 0 && (
                        <Briefcase className="text-blue-600 h-6 w-6 mr-2" />
                      )}
                      {index === 1 && (
                        <div className="bg-blue-600 h-6 w-6 rounded-md mr-2"></div>
                      )}
                      {index === 2 && (
                        <div className="bg-blue-600 h-6 w-6 rounded-md mr-2"></div>
                      )}
                      {index === 3 && (
                        <div className="bg-blue-600 h-6 w-6 rounded-md mr-2"></div>
                      )}
                      <span className="font-bold text-xl">{stat.count}</span>
                    </div>
                    <p className="text-gray-500 text-sm">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Vacancies */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Most Popular Vacancies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {popularVacancies.map((vacancy, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-3 border rounded-md hover:border-blue-600 transition-colors"
                >
                  {vacancy}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-12 text-center">
              How JobHunt work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {howItWorks.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="font-medium mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Popular category</h2>
              <a href="#" className="text-blue-600 flex items-center">
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularCategories.map((category, index) => (
                <Card
                  key={index}
                  className="hover:border-blue-600 transition-colors"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="text-3xl mr-4">{category.icon}</div>
                      <div>
                        <h3 className="font-medium">{category.title}</h3>
                        <p className="text-gray-500 text-sm">
                          {category.count}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Jobs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Featured job</h2>
              <a href="#" className="text-blue-600 flex items-center">
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredJobs.map((job, index) => (
                <Card
                  key={index}
                  className="hover:border-blue-600 transition-colors"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start mb-4">
                      <div className="w-10 h-10 rounded-md flex items-center justify-center mr-3">
                        {job.logo}
                      </div>
                      <div>
                        <h3 className="font-medium">{job.title}</h3>
                        <p className="text-gray-500 text-sm">{job.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="rounded-full">
                        {job.type}
                      </Badge>
                      <Badge variant="outline" className="rounded-full">
                        {job.salary}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <Button variant="outline" size="sm">
                        Apply Now
                      </Button>
                      <span className="text-xs text-gray-500 flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {job.time}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Top Companies */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Top companies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topCompanies.map((company, index) => (
                <Card
                  key={index}
                  className="hover:border-blue-600 transition-colors"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-md flex items-center justify-center mr-4">
                        {company.logo}
                      </div>
                      <div>
                        <h3 className="font-medium">{company.name}</h3>
                        <p className="text-gray-500 text-sm">
                          {company.location}
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      View Open Jobs
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-12 text-center">
              Clients Testimonial
            </h2>
            <div className="relative">
              <div className="flex overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                  {testimonials.map((testimonial, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                        <p className="text-gray-600 mb-6">
                          "{testimonial.content}"
                        </p>
                        <div className="flex items-center">
                          <Avatar className="h-10 w-10 mr-3">
                            <div className="bg-blue-100 h-full w-full flex items-center justify-center">
                              {testimonial.avatar}
                            </div>
                          </Avatar>
                          <div>
                            <h4 className="font-medium">
                              {testimonial.author}
                            </h4>
                            <p className="text-gray-500 text-sm">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <Button
                variant="outline"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full w-10 h-10 p-0"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full w-10 h-10 p-0"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex justify-center mt-8">
              <div className="flex space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${i === 1 ? "bg-blue-600" : "bg-gray-300"}`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gray-100">
                <CardContent className="p-8 flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0">
                    <h3 className="text-xl font-bold mb-2">
                      Become a Candidate
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Create an account and start applying for jobs
                    </p>
                    <Button>Register Now</Button>
                  </div>
                  <div className="md:w-1/2 flex justify-center">
                    <img src="" alt="Candidate" className="max-h-40" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-blue-600 text-white">
                <CardContent className="p-8 flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0">
                    <h3 className="text-xl font-bold mb-2">
                      Become a Employer
                    </h3>
                    <p className="text-blue-100 mb-4">
                      Post jobs and find the right candidates
                    </p>
                    <Button variant="secondary">Post a Job</Button>
                  </div>
                  <div className="md:w-1/2 flex justify-center">
                    <img src="" alt="Employer" className="max-h-40" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="font-bold text-xl mb-4">
                <span className="text-blue-400">Job</span>Hunt
              </div>
              <p className="text-gray-400 mb-4">
                JobHunt is a job portal where you can find your dream job and
                employers can find the right candidates.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Link</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Candidate</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Browse Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Browse Categories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Candidate Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    My Bookmarks
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Employers</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Post a Job
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Browse Candidates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Employer Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Applications
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2023 JobHunt. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
