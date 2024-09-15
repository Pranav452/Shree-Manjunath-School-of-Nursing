'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Menu, X, Award, GraduationCap, Book, Hospital, Users, MapPin, Phone, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white text-gray-800">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className="h-6 w-6 md:h-8 md:w-8 text-gray-800" />
            <span className="text-lg md:text-xl font-bold text-gray-800">Shree Manjunath School of Nursing</span>
          </Link>
          {/* <nav className="hidden md:flex space-x-4">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#programs">Programs</NavLink>
            <NavLink href="#facilities">Facilities</NavLink>
            <NavLink href="#admissions">Admissions</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav> */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white shadow-lg rounded-b-lg"
          >
            {/* <nav className="flex flex-col items-center py-4">
              <NavLink href="#about" onClick={toggleMenu}>About</NavLink>
              <NavLink href="#programs" onClick={toggleMenu}>Programs</NavLink>
              <NavLink href="#facilities" onClick={toggleMenu}>Facilities</NavLink>
              <NavLink href="#admissions" onClick={toggleMenu}>Admissions</NavLink>
              <NavLink href="#contact" onClick={toggleMenu}>Contact</NavLink>
            </nav> */}
          </motion.div>
        )}
      </header>

      <main>
        <HeroSection />
        <RecognitionSection />
        <AboutSection />
        <ProgramsSection />
        <FacilitiesSection />
        <AdmissionsSection />
        <TestimonialsSection />
        <NewsEventsSection />
        <ContactSection />
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-2">About Us</h3>
              <p className="text-sm text-gray-400">Shree Manjunath School of Nursing, operated by Neta Subhashchandra Bose Charitable Trust, Mayani, is dedicated to providing quality nursing education to rural students.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Quick Links</h3>
              <ul className="text-sm text-gray-400">
                <li><Link href="#about">About Us</Link></li>
                <li><Link href="#programs">Programs</Link></li>
                <li><Link href="#facilities">Facilities</Link></li>
                <li><Link href="#admissions">Admissions</Link></li>
                <li><Link href="#contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Contact Us</h3>
              <ul className="text-sm text-gray-400">
                <li className="flex items-center"><MapPin className="h-4 w-4 mr-2" /> Khade Complex, Near Nigam Hospital, Dahivadi Chowk, Vaduj</li>
                <li className="flex items-center"><Phone className="h-4 w-4 mr-2" /> 7385685431, 7385425431</li>
                <li className="flex items-center"><Mail className="h-4 w-4 mr-2" /> info@shreemanjunath.edu</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-gray-300"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                <a href="#" className="text-white hover:text-gray-300"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg></a>
                <a href="#" className="text-white hover:text-gray-300"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg></a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-400">
            &copy; 2023 Shree Manjunath School of Nursing. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

// function NavLink({ href, children, onClick }) {
//   return (
//     <Link href={href} className="text-gray-800 hover:text-gray-600 py-2 px-3 rounded transition duration-300" onClick={onClick}>
//       {children}
//     </Link>
//   )
// }

function HeroSection() {
  const images = [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600"
  ]

  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-gray-900 to-gray-700 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Shape Your Future in Nursing
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Join Shree Manjunath School of Nursing for a rewarding career in healthcare. Special opportunity for rural boys and girls!
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-white text-gray-800 hover:bg-gray-200">
                Apply Now for 2024-25
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-800">
                Explore Programs
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Carousel className="w-full max-w-md mx-auto">
              <CarouselContent>
                {images.map((src, index) => (
                  <CarouselItem key={index}>
                    <Image
                      src={src}
                      alt={`Nursing students in action ${index + 1}`}
                      width={600}
                      height={400}
                      className="rounded-lg shadow-lg"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}

function RecognitionSection() {
  const recognitions = [
    "Indian Nursing Council, New Delhi",
    "Maharashtra Nursing Council, Mumbai",
    "Maharashtra State Health and Technical Board, Mumbai",
    "Maharashtra Government Approval"
  ]

  return (
    <section className="py-12 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Our Recognitions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recognitions.map((recognition, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-4 md:p-6 rounded-lg shadow-md flex items-center space-x-4"
            >
              <Award className="h-6 w-6 md:h-8 md:w-8 text-gray-600 flex-shrink-0" />
              <p className="text-sm md:text-base text-gray-800">{recognition}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  const images = [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600"
  ]

  return (
    <section id="about" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">About Our School</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-base md:text-lg text-gray-600 mb-4">
              Shree Manjunath School of Nursing, operated by Neta Subhashchandra Bose Charitable Trust, Mayani, is dedicated to providing quality nursing education to rural students.
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-4">
              Our mission is to empower the next generation of nurses with knowledge, skills, and compassion to serve in various healthcare settings.
            </p>
            <p className="text-base md:text-lg text-gray-600">
              With state-of-the-art facilities and experienced faculty, we ensure our students receive the best possible education and practical training.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Carousel className="w-full max-w-md mx-auto">
              <CarouselContent>
                {images.map((src, index) => (
                  <CarouselItem key={index}>
                    <Image
                      src={src}
                      alt={`Nursing school facility ${index + 1}`}
                      width={600}
                      height={400}
                      className="rounded-lg shadow-md"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ProgramsSection() {
  return (
    <section id="programs" className="py-12 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">Our Programs</h2>
        <Tabs defaultValue="gnm" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="gnm">G.N.M. Program</TabsTrigger>
            <TabsTrigger value="specializations">Specializations</TabsTrigger>
          </TabsList>
          <TabsContent value="gnm">
            <Card>
              <CardHeader>
                <CardTitle>G.N.M. (General Nursing and Midwifery)</CardTitle>
                <CardDescription>Diploma Course</CardDescription>
              </CardHeader>
              <CardContent>
                <p><strong>Duration:</strong> 3 years</p>
                <p><strong>Eligibility:</strong> Passed 12th Grade with minimum 45%</p>
                <p><strong>Streams:</strong> Arts / Science / Commerce</p>
                <p className="mt-4">
                  Our G.N.M. program provides comprehensive training in nursing and midwifery, preparing students for a rewarding career in healthcare. The curriculum includes both theoretical knowledge and practical skills, ensuring our graduates are well-equipped to handle various nursing responsibilities.
                </p>
              </CardContent>
              <CardFooter>
                <Button>Apply Now</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="specializations">
            <Card>
              <CardHeader>
                <CardTitle>Nursing Specializations</CardTitle>
                <CardDescription>Advanced Training Opportunities</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Critical Care Nursing</li>
                  <li>Pediatric Nursing</li>
                  <li>Oncology Nursing</li>
                  <li>Psychiatric Nursing</li>
                  <li>Community Health Nursing</li>
                </ul>
                <p className="mt-4">
                  After completing the G.N.M. program, students have the opportunity to specialize in various fields of nursing. These specializations enhance career prospects and allow nurses to provide specialized care in different healthcare settings.
                </p>
              </CardContent>
              <CardFooter>
                <Button>Learn More</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function FacilitiesSection() {
  const facilities = [
    { icon: <Hospital className="h-6 w-6 md:h-8 md:w-8" />, title: "200+ Bed Hospital", description: "Full-fledged general hospital for hands-on training" },
    { icon: <Book className="h-6 w-6 md:h-8 md:w-8" />, title: "Well-Equipped Library", description: "Extensive collection of nursing textbooks and journals" },
    { icon: <Users className="h-6 w-6 md:h-8 md:w-8" />, title: "Experienced Faculty", description: "Learn from seasoned nursing professionals" },
    { icon: <GraduationCap className="h-6 w-6 md:h-8 md:w-8" />, title: "Computer Lab", description: "Modern lab for research and skill development" },
  ]

  return (
    <section id="facilities" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">Our Facilities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-lg md:text-xl">
                    {facility.icon}
                    <span>{facility.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base">{facility.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AdmissionsSection() {
  return (
    <section id="admissions" className="py-12 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">Admissions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Admission Process</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal pl-5 space-y-2 text-sm md:text-base">
                <li>Submit application form</li>
                <li>Provide academic records</li>
                <li>Entrance examination</li>
                <li>Personal interview</li>
                <li>Merit-based selection</li>
              </ol>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Financial Aid</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                <li>100% educational loan assistance for economically weaker sections</li>
                <li>Merit-based scholarships</li>
                <li>Government schemes for rural students</li>
                <li>Flexible payment options</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="mt-8 text-center">
          <Button size="lg">Start Your Application</Button>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const testimonials = [
    { name: "Priya Sharma", role: "G.N.M. Graduate", content: "The education and training I received at Shree Manjunath School of Nursing prepared me well for my nursing career. The faculty&apos;s support was invaluable." },
    { name: "Rahul Patil", role: "Current Student", content: "The clinical training opportunities here are excellent. I feel confident about my skills and future job prospects." },
    { name: "Dr. Anjali Desai", role: "Local Hospital Director", content: "Graduates from this school consistently demonstrate high levels of skill and professionalism. They are always in demand at our hospital." },
  ]

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">{testimonial.name}</CardTitle>
                <CardDescription>{testimonial.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base">&quot;{testimonial.content}&quot;</p>
              </CardContent>
              <CardFooter>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function NewsEventsSection() {
  const newsEvents = [
    {
      title: "Annual Nursing Conference",
      date: "August 15, 2023",
      description: "Join us for our annual nursing conference featuring guest speakers from top hospitals."
    },
    {
      title: "Community Health Camp",
      date: "September 5, 2023",
      description: "Our students will be organizing a free health camp for the local community."
    },
    {
      title: "New Simulation Lab Opening",
      date: "October 1, 2023",
      description: "We're excited to announce the opening of our state-of-the-art nursing simulation lab."
    }
  ]

  return (
    <section className="py-12 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">News & Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsEvents.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl">{item.title}</CardTitle>
                  <CardDescription>{item.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base">{item.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Learn More</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="py-12 md:py-16 bg-gradient-to-r from-gray-900 to-gray-700 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="mb-4">Have questions about our programs or admissions? Reach out to us!</p>
            <ul className="space-y-2 text-sm md:text-base">
              <li className="flex items-center"><MapPin className="h-5 w-5 mr-2" /> Khade Complex, Near Nigam Hospital, Dahivadi Chowk, Vaduj</li>
              <li className="flex items-center"><Phone className="h-5 w-5 mr-2" /> 7385685431, 7385425431</li>
              <li className="flex items-center"><Mail className="h-5 w-5 mr-2" /> info@shreemanjunath.edu</li>
            </ul>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Input id="name" placeholder="Your Name" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Input id="email" placeholder="Your Email" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Textarea id="message" placeholder="Your Message" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button>Send Message</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}