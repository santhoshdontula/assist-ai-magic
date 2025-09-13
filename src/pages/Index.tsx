import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChatInterface } from "@/components/ChatInterface";
import { InfoModules } from "@/components/InfoModules";
import { 
  Sparkles, 
  MessageSquare, 
  Brain, 
  Clock, 
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";
import campusHero from "@/assets/campus-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-hero-gradient rounded-lg flex items-center justify-center">
              <Brain className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Campus AI</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-smooth">Features</a>
            <a href="#modules" className="text-muted-foreground hover:text-foreground transition-smooth">Modules</a>
            <a href="#chat" className="text-muted-foreground hover:text-foreground transition-smooth">Try Assistant</a>
            <Button variant="hero" size="sm" asChild>
              <a href="#chat">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <Badge variant="secondary" className="inline-flex items-center gap-2">
                  <Sparkles className="h-3 w-3" />
                  AI-Powered Campus Assistant
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  Intelligent Campus
                  <span className="bg-hero-gradient bg-clip-text text-transparent"> Information System</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                  Your AI-powered assistant for campus navigation, academic schedules, dining services, and student support. Get instant answers to all your campus-related questions.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="xl" asChild>
                  <a href="#chat">
                    <MessageSquare className="h-5 w-5" />
                    Start Chatting
                  </a>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <a href="#modules">
                    Explore Features
                  </a>
                </Button>
              </div>
              
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-muted-foreground">24/7 Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="text-sm text-muted-foreground">Instant Responses</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-600" />
                  <span className="text-sm text-muted-foreground">Smart & Accurate</span>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="absolute inset-0 bg-hero-gradient rounded-2xl blur-3xl opacity-20 animate-float"></div>
              <img 
                src={campusHero} 
                alt="Modern university campus with students" 
                className="relative w-full h-[500px] object-cover rounded-2xl shadow-large"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Campus AI?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the future of campus information systems with AI-powered assistance that understands your needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI-Powered Intelligence",
                description: "Advanced natural language processing understands your questions and provides accurate, contextual answers about campus services."
              },
              {
                icon: Clock,
                title: "24/7 Availability",
                description: "Get instant responses to your questions anytime, anywhere. No more waiting for office hours or searching through multiple websites."
              },
              {
                icon: MessageSquare,
                title: "Conversational Interface",
                description: "Chat naturally with our AI assistant. Ask follow-up questions and get personalized responses tailored to your needs."
              }
            ].map((feature, index) => (
              <Card key={feature.title} className="p-6 bg-card-gradient backdrop-blur-sm border-0 shadow-soft hover:shadow-medium transition-smooth hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Information Modules */}
      <section id="modules">
        <InfoModules />
      </section>

      {/* Chat Interface */}
      <section id="chat" className="py-16 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Try Our AI Assistant
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the power of our intelligent campus assistant. Ask questions about schedules, dining, library resources, and more.
            </p>
          </div>
          
          <div className="animate-scale-in">
            <ChatInterface />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-hero-gradient rounded-lg flex items-center justify-center">
                <Brain className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Campus AI</span>
            </div>
            
            <p className="text-muted-foreground text-center md:text-right">
              Intelligent Campus Information System<br />
              Built with ❤️ for students
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;