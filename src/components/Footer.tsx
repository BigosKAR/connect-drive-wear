import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">SmartDrive</h3>
            <p className="text-muted-foreground">
              Revolutionizing the automotive experience with intelligent wearable technology.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>contact@smartdrive.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Information</h4>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold">Producer:</span> SmartDrive Technologies Inc.
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold">Connection Partner:</span> Compatible with major automotive manufacturers
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold">Technology:</span> Advanced biometric sensors & secure Bluetooth 5.2
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 SmartDrive Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
