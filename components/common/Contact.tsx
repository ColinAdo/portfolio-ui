import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
          <Card className="glass-morphism border-gray-800 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="font-display text-2xl font-bold text-white">
                  Get In Touch
                </h3>

                <div className="space-y-4 text-gray-300">
                  <p className="leading-relaxed">
                    I'm always interested in hearing about new opportunities and
                    exciting projects. Whether you have a specific idea in mind
                    or just want to chat about possibilities, I'd love to hear
                    from you.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-emerald-300">📧</span>
                      <span>hello@yourportfolio.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-emerald-300">📱</span>
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-emerald-300">📍</span>
                      <span>San Francisco, CA</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <Button
                    className="w-full bg-emerald-300 hover:bg-emerald-400 text-black font-semibold py-3 emerald-glow animate-glow"
                    size="lg"
                  >
                    Send Email
                  </Button>

                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant="outline"
                      className="border-emerald-300 text-emerald-300 hover:bg-emerald-300 hover:text-black"
                    >
                      LinkedIn
                    </Button>
                    <Button
                      variant="outline"
                      className="border-emerald-300 text-emerald-300 hover:bg-emerald-300 hover:text-black"
                    >
                      GitHub
                    </Button>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-800">
                  <p className="text-sm text-gray-400 text-center">
                    Typically respond within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400">
            © 2025 Portfolio. Crafted with ❤️ and lots of ☕
          </p>
        </div>
      </div>
    </section>
  );
}
