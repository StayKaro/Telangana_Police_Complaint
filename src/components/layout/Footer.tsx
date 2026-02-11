import { AlertTriangle, Phone, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full mt-auto">
      {/* Warning Banner */}
      <div className="bg-warning py-3 px-4">
        <div className="container mx-auto flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 text-warning-text flex-shrink-0" />
          <p className="text-warning-text text-sm font-medium">
            <strong>WARNING:</strong> This is a government portal. Unauthorized access or misuse of information is punishable under IT Act 2000. All activities are monitored and logged.
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-primary text-primary-foreground py-4 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm opacity-90">
                © {new Date().getFullYear()} Telangana State Police. All Rights Reserved.
              </p>
              <p className="text-xs opacity-70 mt-1">
                Developed & Maintained by Telangana State Police IT Cell
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a 
                href="tel:100" 
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Phone className="w-4 h-4" />
                <span>Emergency: 100</span>
              </a>
              <a 
                href="https://www.tspolice.gov.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Globe className="w-4 h-4" />
                <span>www.tspolice.gov.in</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
