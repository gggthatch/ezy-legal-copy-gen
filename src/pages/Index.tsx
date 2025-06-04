
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, FileText, Users, Zap, Scale, Shield, Clock, DollarSign, Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Scale className="h-8 w-8 text-[#31c48d] mr-2" />
              <span className="text-2xl font-bold text-gray-900">ezylegal</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-[#31c48d] transition-colors font-medium">About</a>
              <a href="#services" className="text-gray-600 hover:text-[#31c48d] transition-colors font-medium">Services</a>
              <a href="#process" className="text-gray-600 hover:text-[#31c48d] transition-colors font-medium">How It Works</a>
              <a href="#contact" className="text-gray-600 hover:text-[#31c48d] transition-colors font-medium">Contact</a>
            </div>
            <Button className="bg-[#31c48d] hover:bg-[#2ab478] text-white font-semibold px-6 py-2 rounded-lg">
              My Account
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Lemonade Style */}
      <section className="bg-white py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Forget everything you<br />
            know about <span className="text-[#31c48d]">legal fees</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Instant analysis. Incredible prices. Big heart.
          </p>
          <Button size="lg" className="bg-[#31c48d] hover:bg-[#2ab478] text-white text-lg px-12 py-4 rounded-lg font-semibold">
            CHECK OUR PRICES
          </Button>
          
          {/* Trusted by logos section */}
          <div className="mt-20 pt-12 border-t border-gray-100">
            <p className="text-sm text-gray-500 mb-8 uppercase tracking-wider">Trusted by clients across Australia</p>
            <div className="flex justify-center items-center space-x-8 opacity-40">
              <div className="text-lg font-bold text-gray-400">ABC News</div>
              <div className="text-lg font-bold text-gray-400">The Age</div>
              <div className="text-lg font-bold text-gray-400">SMH</div>
              <div className="text-lg font-bold text-gray-400">Financial Review</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Clean & Minimal */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Built by lawyers,<br />powered by AI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're making legal help accessible by combining smart technology with experienced Australian lawyers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full">
                <div className="bg-[#31c48d]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-[#31c48d]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Analysis</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our AI reviews documents and identifies key evidence in minutes, not hours.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full">
                <div className="bg-[#31c48d]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-[#31c48d]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Real Lawyers</h3>
                <p className="text-gray-600 leading-relaxed">
                  Experienced Australian lawyers guide every case with personal attention.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full">
                <div className="bg-[#31c48d]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="h-8 w-8 text-[#31c48d]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Fair Pricing</h3>
                <p className="text-gray-600 leading-relaxed">
                  Quality legal help without the traditional price tag.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">We specialize in what matters</h2>
            <p className="text-xl text-gray-600">
              Three core areas where Australians need the most legal support
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="p-8">
                <div className="bg-[#31c48d]/10 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-[#31c48d]" />
                </div>
                <CardTitle className="text-2xl text-gray-900 mb-3">Debt Disputes</CardTitle>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  Protect yourself from unfair debt collection and negotiate better payment terms.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#31c48d] mr-3" />
                    Debt collection defense
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#31c48d] mr-3" />
                    Payment plan negotiation
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#31c48d] mr-3" />
                    Asset protection
                  </li>
                </ul>
                <Button className="w-full bg-[#31c48d] hover:bg-[#2ab478] text-white rounded-lg">
                  Learn More
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="p-8">
                <div className="bg-[#31c48d]/10 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-[#31c48d]" />
                </div>
                <CardTitle className="text-2xl text-gray-900 mb-3">Consumer Claims</CardTitle>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  Get compensation for faulty vehicles and defective products under Australian Consumer Law.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#31c48d] mr-3" />
                    Lemon car claims
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#31c48d] mr-3" />
                    Refund negotiations
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#31c48d] mr-3" />
                    Consumer rights
                  </li>
                </ul>
                <Button className="w-full bg-[#31c48d] hover:bg-[#2ab478] text-white rounded-lg">
                  Learn More
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="p-8">
                <div className="bg-[#31c48d]/10 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                  <Scale className="h-6 w-6 text-[#31c48d]" />
                </div>
                <CardTitle className="text-2xl text-gray-900 mb-3">Wills & Estates</CardTitle>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  Navigate contested wills and protect your inheritance with expert guidance.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#31c48d] mr-3" />
                    Will disputes
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#31c48d] mr-3" />
                    Estate administration
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#31c48d] mr-3" />
                    Inheritance protection
                  </li>
                </ul>
                <Button className="w-full bg-[#31c48d] hover:bg-[#2ab478] text-white rounded-lg">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works - Simplified */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">How it works</h2>
            <p className="text-xl text-gray-600">
              Getting legal help shouldn't be complicated
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#31c48d] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Upload</h3>
              <p className="text-gray-600">
                Share your documents securely through our platform
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#31c48d] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Analyze</h3>
              <p className="text-gray-600">
                AI reviews your case and identifies key evidence
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#31c48d] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Review</h3>
              <p className="text-gray-600">
                Our lawyers verify the analysis and provide guidance
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#31c48d] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Resolve</h3>
              <p className="text-gray-600">
                Get your personalized strategy and next steps
              </p>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Button size="lg" className="bg-[#31c48d] hover:bg-[#2ab478] text-white text-lg px-8 py-4 rounded-lg font-semibold">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#31c48d] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">70%</div>
              <div className="text-green-100">Cost Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-green-100">AI Analysis</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-green-100">Cases Resolved</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-green-100">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Ready to get started?</h2>
          <p className="text-xl text-gray-600 mb-12">
            Book a free consultation and see how we can help with your legal matter.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-white border border-gray-200 rounded-2xl p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-[#31c48d] mr-3" />
                  <span className="text-gray-600">1300 EZYLEGAL</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-[#31c48d] mr-3" />
                  <span className="text-gray-600">hello@ezylegal.com.au</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-[#31c48d] mr-3" />
                  <span className="text-gray-600">Australia Wide</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-[#31c48d] mr-3" />
                  <span className="text-gray-600">Mon - Fri: 9AM - 6PM AEST</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-xl">Free Consultation</CardTitle>
                <CardDescription>What you'll get:</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#31c48d] mr-3" />
                    15-minute consultation
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#31c48d] mr-3" />
                    Case assessment
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#31c48d] mr-3" />
                    Cost estimate
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#31c48d] mr-3" />
                    No obligation
                  </li>
                </ul>
                <Button size="lg" className="w-full bg-[#31c48d] hover:bg-[#2ab478] text-white rounded-lg">
                  Book Free Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <Scale className="h-8 w-8 text-[#31c48d] mr-2" />
                <span className="text-2xl font-bold">ezylegal</span>
              </div>
              <p className="text-gray-400">
                Making quality legal services accessible for all Australians.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Debt Disputes</li>
                <li>Consumer Claims</li>
                <li>Wills & Estates</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>About Us</li>
                <li>How It Works</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>1300 EZYLEGAL</li>
                <li>hello@ezylegal.com.au</li>
                <li>Australia Wide</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 ezylegal. All rights reserved. ABN: [Number] | Australian Legal Practitioner</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
