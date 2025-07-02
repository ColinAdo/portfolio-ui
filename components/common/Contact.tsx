import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Mail,
  PhoneCall,
  MapPin,
  Facebook,
} from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's create something amazing
            together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-morphism border-gray-800 bg-gray-950 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="font-display text-2xl font-bold text-white">
                  Get In Touch
                </h3>

                <div className="space-y-4 text-gray-300">
                  <p className="leading-relaxed">
                    I&apos;m always interested in hearing about new
                    opportunities and exciting projects. Whether you have a
                    specific idea in mind or just want to chat about
                    possibilities, I&apos;d love to hear from you.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-emerald-300">
                        <Mail />
                      </span>
                      <span>inbox@mail.colinadore.tech</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-emerald-300">
                        <PhoneCall />
                      </span>
                      <span>+245701893733</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-emerald-300">
                        <MapPin />
                      </span>
                      <span>Nairobi, Kenya</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <a href="mailto:inbox@email.colinadore.tech?subject=Hello&body=I%20want%20to%20get%20in%20touch">
                    <Button
                      className="w-full bg-emerald-300 mb-4 hover:bg-emerald-400 hover:cursor-pointer text-black font-semibold py-3 emerald-glow animate-glow"
                      size="lg"
                    >
                      Send Email
                    </Button>
                  </a>

                  <div className="flex gap-12 sm:ml-12">
                    <Link
                      href="https://www.linkedin.com/in/colinado"
                      target="_blank"
                      className="text-emerald-500 hover:text-emerald-300 border-none hover:text-black"
                    >
                      <Linkedin />
                    </Link>
                    <Link
                      href="https://github.com/ColinAdo"
                      target="_blank"
                      className="text-emerald-500 hover:text-emerald-300 border-none hover:text-black"
                    >
                      <Github />
                    </Link>
                    <Link
                      href="https://www.instagram.com/colinadore30"
                      target="_blank"
                      className="text-emerald-500 hover:text-emerald-300 border-none hover:text-black"
                    >
                      <Instagram />
                    </Link>
                    <Link
                      href="https://www.facebook.com/colinadore30"
                      target="_blank"
                      className="text-emerald-500 hover:text-emerald-300 border-none hover:text-black"
                    >
                      <Facebook />
                    </Link>
                    <Link
                      href="https://x.com/Colin_Ado"
                      target="_blank"
                      className="text-emerald-500 hover:text-emerald-300 border-none hover:text-black"
                    >
                      <Twitter />
                    </Link>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-800">
                  <p className="text-sm text-gray-400 text-center">
                    Typically respond ASAP
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400">&copy; 2025 All rights reserved Colin</p>
        </div>
      </div>
    </section>
  );
}
