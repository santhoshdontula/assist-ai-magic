import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  UtensilsCrossed, 
  BookOpen, 
  Calendar, 
  MapPin, 
  Users, 
  GraduationCap,
  HelpCircle 
} from "lucide-react";

const modules = [
  {
    icon: Clock,
    title: "Academic Schedules",
    description: "View class timetables, exam schedules, and academic calendar",
    features: ["Course schedules", "Exam dates", "Academic deadlines", "Registration periods"],
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
  },
  {
    icon: UtensilsCrossed,
    title: "Dining Services",
    description: "Campus dining hours, menus, and nutritional information",
    features: ["Dining hall hours", "Daily menus", "Dietary options", "Meal plan info"],
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-950/20",
  },
  {
    icon: BookOpen,
    title: "Library Resources",
    description: "Library hours, book availability, and study spaces",
    features: ["Operating hours", "Book catalog", "Study rooms", "Research assistance"],
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
  },
  {
    icon: Calendar,
    title: "Campus Events",
    description: "Upcoming events, workshops, and social activities",
    features: ["Event calendar", "Club meetings", "Workshops", "Social events"],
    color: "text-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
  },
  {
    icon: MapPin,
    title: "Campus Navigation",
    description: "Building locations, shuttle routes, and parking information",
    features: ["Building directory", "Shuttle schedules", "Parking maps", "Walking routes"],
    color: "text-red-600",
    bgColor: "bg-red-50 dark:bg-red-950/20",
  },
  {
    icon: Users,
    title: "Student Services",
    description: "Academic advising, counseling, and support services",
    features: ["Academic advising", "Counseling services", "Career center", "Health services"],
    color: "text-indigo-600",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/20",
  },
];

export const InfoModules = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-accent px-4 py-2 rounded-full text-sm font-medium text-accent-foreground mb-6">
            <GraduationCap className="h-4 w-4" />
            Information Modules
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Campus Information
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access all campus services and information through our intelligent modules designed to help students navigate campus life efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <Card 
              key={module.title}
              className="group p-6 bg-card-gradient backdrop-blur-sm border-0 shadow-soft hover:shadow-medium transition-smooth hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 ${module.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-bounce`}>
                <module.icon className={`h-6 w-6 ${module.color}`} />
              </div>
              
              <h3 className="text-xl font-semibold text-card-foreground mb-2">
                {module.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {module.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {module.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                <HelpCircle className="h-4 w-4 mr-2" />
                Ask Questions
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};