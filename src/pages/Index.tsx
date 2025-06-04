
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, FileText, Users, Zap, Scale, Shield, Clock, DollarSign, Phone, Mail, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Scale className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-2xl font-bold text-gray-900">ezylegal</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#process" className="text-gray-700 hover:text-blue-600 transition-colors">How It Works</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Free Consultation
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">AI-Powered Legal Solutions</Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Everybody deserves access to <span className="text-blue-600">justice</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                ezylegal combines cutting-edge AI technology with experienced Australian lawyers to deliver faster, 
                more affordable legal solutions. Get quality representation without the traditional costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                  Get Your Free Case Review
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                  Learn More
                </Button>
              </div>
              <div className="mt-8 flex items-center space-x-6 text-sm text-gray-600">
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
              <div className="bg-white rounded-2xl shadow-2xl p-8 border">
                <div className="flex items-center mb-6">
                  <Zap className="h-8 w-8 text-blue-600 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900">AI Analysis Complete</h3>
                    <p className="text-gray-600 text-sm">Document review finished in 2 minutes</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-green-800">Key Evidence Found</span>
                    <Badge className="bg-green-100 text-green-800">High Confidence</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-blue-800">Legal Strategy Created</span>
                    <Badge className="bg-blue-100 text-blue-800">Ready for Review</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span className="text-purple-800">Cost Estimate</span>
                    <Badge className="bg-purple-100 text-purple-800">70% Lower</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AI-Powered Efficiency, Human Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're revolutionizing legal services by combining advanced AI technology with experienced 
              Australian lawyers to make quality legal representation accessible and affordable.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <Zap className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>AI-Powered Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Our AI analyzes documents, identifies key evidence, and creates timelines in minutes, 
                  not hours. This efficiency translates to significant cost savings for our clients.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Expert Lawyers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Experienced Australian lawyers oversee every case, providing personalized guidance 
                  and ensuring accuracy. AI assists our lawyers, never replaces them.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <DollarSign className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Affordable Access</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Quality legal representation shouldn't break the bank. Our innovative approach 
                  makes professional legal services accessible to everyday Australians.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600">
              Specialized legal support in the areas that matter most to Australians
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <FileText className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-2xl">Debt Disputes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6">
                  Navigate debt collection issues, negotiate fair repayment plans, and protect your assets. 
                  Our AI quickly analyzes your financial situation to develop the best strategy.
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Debt collection defense
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Repayment plan negotiation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Asset protection strategies
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                  Learn More
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-2xl">Consumer Law Claims</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6">
                  Get refunds or compensation for faulty vehicles under Australian Consumer Law. 
                  Our "lemon car" expertise helps you recover your investment.
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Faulty vehicle claims
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Refund negotiations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Consumer rights protection
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                  Learn More
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Scale className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-2xl">Wills & Estates</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6">
                  Navigate will disputes and protect inheritances. Our team guides executors and 
                  beneficiaries through complex estate matters with AI-powered document analysis.
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Will dispute defense
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Estate administration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Inheritance protection
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Ezy Process</h2>
            <p className="text-xl text-gray-600">
              Four simple steps to get the legal help you need
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Upload Documents</h3>
              <p className="text-gray-600">
                Securely upload your legal documents through our encrypted platform
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Analysis</h3>
              <p className="text-gray-600">
                Our AI analyzes your case, identifies key evidence, and creates timelines
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lawyer Review</h3>
              <p className="text-gray-600">
                Experienced Australian lawyers review the AI analysis and provide expertise
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Legal Strategy</h3>
              <p className="text-gray-600">
                Receive your personalized legal strategy and next steps forward
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
              Book a Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">70%</div>
              <div className="text-blue-100">Cost Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">AI Analysis</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-blue-100">Cases Resolved</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Started Today</h2>
            <p className="text-xl text-gray-600">
              Ready to experience the future of legal services? Contact us for your free consultation.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
                <CardDescription>
                  Reach out to our team for immediate assistance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-600">1300 EZYLEGAL</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">hello@ezylegal.com.au</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-600">Serving all of Australia</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold">Hours</p>
                    <p className="text-gray-600">Monday - Friday: 9AM - 6PM AEST</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Free Case Review</CardTitle>
                <CardDescription>
                  Get started with a complimentary assessment of your legal matter
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
                    <h3 className="font-semibold text-blue-900 mb-2">What You'll Get:</h3>
                    <ul className="space-y-2 text-blue-800">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                        15-minute consultation with a qualified lawyer
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                        Initial case assessment
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                        Cost estimate for your matter
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                        No obligation to proceed
                      </li>
                    </ul>
                  </div>
                  <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                    Book Your Free Consultation
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
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Scale className="h-8 w-8 text-blue-400 mr-2" />
                <span className="text-2xl font-bold">ezylegal</span>
              </div>
              <p className="text-gray-400">
                Making quality legal services accessible and affordable for all Australians through AI innovation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Debt Disputes</li>
                <li>Consumer Law Claims</li>
                <li>Wills & Estates</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>How It Works</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>1300 EZYLEGAL</li>
                <li>hello@ezylegal.com.au</li>
                <li>Australia Wide</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ezylegal. All rights reserved. | ABN: [Number] | Australian Legal Practitioner</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
