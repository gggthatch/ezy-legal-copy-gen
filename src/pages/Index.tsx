
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, FileText, Users, Zap, Scale, Shield, Clock, DollarSign, Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Scale className="h-8 w-8 text-teal-600 mr-2" />
              <span className="text-2xl font-bold text-gray-900">ezylegal</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-teal-600 transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-teal-600 transition-colors">Services</a>
              <a href="#process" className="text-gray-700 hover:text-teal-600 transition-colors">How It Works</a>
              <a href="#contact" className="text-gray-700 hover:text-teal-600 transition-colors">Contact</a>
            </div>
            <Button className="bg-teal-600 hover:bg-teal-700 rounded-full px-6">
              Free Consultation
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-green-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-teal-100 text-teal-800 rounded-full px-4 py-2">AI-Powered Legal Solutions</Badge>
              <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Everybody deserves access to <span className="text-teal-600">justice</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                ezylegal combines cutting-edge AI technology with experienced Australian lawyers to deliver faster, 
                more affordable legal solutions. Get quality representation without the traditional costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all">
                  Get Your Free Case Review
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 rounded-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50">
                  Learn More
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Free Consultation
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  No Win, No Fee Options
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Australian Lawyers
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-teal-100 rounded-full p-3 mr-4">
                    <Zap className="h-8 w-8 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">AI Analysis Complete</h3>
                    <p className="text-gray-600">Document review finished in 2 minutes</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-2xl border border-green-200">
                    <span className="text-green-800 font-medium">Key Evidence Found</span>
                    <Badge className="bg-green-500 text-white rounded-full">High Confidence</Badge>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-teal-50 rounded-2xl border border-teal-200">
                    <span className="text-teal-800 font-medium">Legal Strategy Created</span>
                    <Badge className="bg-teal-500 text-white rounded-full">Ready for Review</Badge>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-purple-50 rounded-2xl border border-purple-200">
                    <span className="text-purple-800 font-medium">Cost Estimate</span>
                    <Badge className="bg-purple-500 text-white rounded-full">70% Lower</Badge>
                  </div>
                </div>
              </div>
              {/* Floating elements for visual interest */}
              <div className="absolute -top-4 -right-4 bg-teal-500 rounded-full w-8 h-8 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 bg-green-500 rounded-full w-6 h-6 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              AI-Powered Efficiency, Human Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're revolutionizing legal services by combining advanced AI technology with experienced 
              Australian lawyers to make quality legal representation accessible and affordable.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl bg-gradient-to-b from-white to-teal-50">
              <CardHeader className="text-center pb-4">
                <div className="bg-teal-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-10 w-10 text-teal-600" />
                </div>
                <CardTitle className="text-2xl">AI-Powered Analysis</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base text-gray-600 leading-relaxed">
                  Our AI analyzes documents, identifies key evidence, and creates timelines in minutes, 
                  not hours. This efficiency translates to significant cost savings for our clients.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl bg-gradient-to-b from-white to-green-50">
              <CardHeader className="text-center pb-4">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Users className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Expert Lawyers</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base text-gray-600 leading-relaxed">
                  Experienced Australian lawyers oversee every case, providing personalized guidance 
                  and ensuring accuracy. AI assists our lawyers, never replaces them.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl bg-gradient-to-b from-white to-blue-50">
              <CardHeader className="text-center pb-4">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="h-10 w-10 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Affordable Access</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base text-gray-600 leading-relaxed">
                  Quality legal representation shouldn't break the bank. Our innovative approach 
                  makes professional legal services accessible to everyday Australians.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Core Services</h2>
            <p className="text-xl text-gray-600">
              Specialized legal support in the areas that matter most to Australians
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl border-0">
              <CardHeader className="pb-4">
                <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <FileText className="h-8 w-8 text-teal-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Debt Disputes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6 text-gray-600 leading-relaxed">
                  Navigate debt collection issues, negotiate fair repayment plans, and protect your assets. 
                  Our AI quickly analyzes your financial situation to develop the best strategy.
                </CardDescription>
                <ul className="space-y-3 text-sm text-gray-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    Debt collection defense
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    Repayment plan negotiation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    Asset protection strategies
                  </li>
                </ul>
                <Button className="w-full bg-teal-600 hover:bg-teal-700 rounded-full py-3">
                  Learn More
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl border-0">
              <CardHeader className="pb-4">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Consumer Law Claims</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6 text-gray-600 leading-relaxed">
                  Get refunds or compensation for faulty vehicles under Australian Consumer Law. 
                  Our "lemon car" expertise helps you recover your investment.
                </CardDescription>
                <ul className="space-y-3 text-sm text-gray-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    Faulty vehicle claims
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    Refund negotiations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    Consumer rights protection
                  </li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700 rounded-full py-3">
                  Learn More
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl border-0">
              <CardHeader className="pb-4">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Scale className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Wills & Estates</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6 text-gray-600 leading-relaxed">
                  Navigate will disputes and protect inheritances. Our team guides executors and 
                  beneficiaries through complex estate matters with AI-powered document analysis.
                </CardDescription>
                <ul className="space-y-3 text-sm text-gray-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    Will dispute defense
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    Estate administration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    Inheritance protection
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-full py-3">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="process" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">The Ezy Process</h2>
            <p className="text-xl text-gray-600">
              Four simple steps to get the legal help you need
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Upload Documents</h3>
              <p className="text-gray-600 leading-relaxed">
                Securely upload your legal documents through our encrypted platform
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Analysis</h3>
              <p className="text-gray-600 leading-relaxed">
                Our AI analyzes your case, identifies key evidence, and creates timelines
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Lawyer Review</h3>
              <p className="text-gray-600 leading-relaxed">
                Experienced Australian lawyers review the AI analysis and provide expertise
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all">
                <span className="text-3xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Legal Strategy</h3>
              <p className="text-gray-600 leading-relaxed">
                Receive your personalized legal strategy and next steps forward
              </p>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all">
              Book a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-5xl font-bold mb-3 group-hover:scale-110 transition-transform">70%</div>
              <div className="text-teal-100 text-lg">Cost Reduction</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold mb-3 group-hover:scale-110 transition-transform">24/7</div>
              <div className="text-teal-100 text-lg">AI Analysis</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold mb-3 group-hover:scale-110 transition-transform">1000+</div>
              <div className="text-teal-100 text-lg">Cases Resolved</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold mb-3 group-hover:scale-110 transition-transform">98%</div>
              <div className="text-teal-100 text-lg">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Get Started Today</h2>
            <p className="text-xl text-gray-600">
              Ready to experience the future of legal services? Contact us for your free consultation.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-white shadow-xl rounded-3xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
                <CardDescription className="text-base">
                  Reach out to our team for immediate assistance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center p-4 bg-teal-50 rounded-2xl">
                  <div className="bg-teal-100 rounded-full p-3 mr-4">
                    <Phone className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">1300 EZYLEGAL</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-green-50 rounded-2xl">
                  <div className="bg-green-100 rounded-full p-3 mr-4">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">hello@ezylegal.com.au</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-blue-50 rounded-2xl">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-600">Serving all of Australia</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-purple-50 rounded-2xl">
                  <div className="bg-purple-100 rounded-full p-3 mr-4">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Hours</p>
                    <p className="text-gray-600">Monday - Friday: 9AM - 6PM AEST</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-xl rounded-3xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Free Case Review</CardTitle>
                <CardDescription className="text-base">
                  Get started with a complimentary assessment of your legal matter
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl border-2 border-teal-200">
                    <h3 className="font-semibold text-teal-900 mb-4 text-lg">What You'll Get:</h3>
                    <ul className="space-y-3 text-teal-800">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-teal-600 mr-3 flex-shrink-0" />
                        15-minute consultation with a qualified lawyer
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-teal-600 mr-3 flex-shrink-0" />
                        Initial case assessment
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-teal-600 mr-3 flex-shrink-0" />
                        Cost estimate for your matter
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-teal-600 mr-3 flex-shrink-0" />
                        No obligation to proceed
                      </li>
                    </ul>
                  </div>
                  <Button size="lg" className="w-full bg-teal-600 hover:bg-teal-700 text-lg py-4 rounded-full shadow-lg hover:shadow-xl transition-all">
                    Book Your Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="text-sm text-gray-600 text-center">
                    Available 7 days a week • No hidden fees • Flexible payment options
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <Scale className="h-8 w-8 text-teal-400 mr-2" />
                <span className="text-2xl font-bold">ezylegal</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Making quality legal services accessible and affordable for all Australians through AI innovation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-6 text-lg">Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-teal-400 transition-colors cursor-pointer">Debt Disputes</li>
                <li className="hover:text-teal-400 transition-colors cursor-pointer">Consumer Law Claims</li>
                <li className="hover:text-teal-400 transition-colors cursor-pointer">Wills & Estates</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-6 text-lg">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-teal-400 transition-colors cursor-pointer">About Us</li>
                <li className="hover:text-teal-400 transition-colors cursor-pointer">How It Works</li>
                <li className="hover:text-teal-400 transition-colors cursor-pointer">Privacy Policy</li>
                <li className="hover:text-teal-400 transition-colors cursor-pointer">Terms of Service</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-6 text-lg">Contact</h3>
              <ul className="space-y-3 text-gray-400">
                <li>1300 EZYLEGAL</li>
                <li>hello@ezylegal.com.au</li>
                <li>Australia Wide</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ezylegal. All rights reserved. | ABN: [Number] | Australian Legal Practitioner</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
