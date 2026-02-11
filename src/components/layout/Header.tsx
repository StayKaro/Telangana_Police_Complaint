import { Shield } from 'lucide-react';
import { NavLink } from '@/components/NavLink';
import TPLogo from '@/components/layout/TPLogo.png';

const navItems = [
  { label: 'Dashboard', path: '/' },
  { label: 'FIR Management', path: '/fir-management' },
  { label: 'Complaints', path: '/complaints' },
  { label: 'Officers', path: '/officers' },
  { label: 'Settings', path: '/settings' },
];

export function Header() {
  return (
    <header className="w-full">
      {/* Main Header */}
      <div className="bg-gradient-to-r from-primary to-secondary px-6 py-4">
  <div className="container mx-auto flex flex-col items-center justify-center gap-3 text-center">
    
    <div className="flex items-center justify-center w-16 h-16 bg-primary-foreground/10 rounded-full">
      <img
        src={TPLogo}
        alt="Telangana Police Logo"
        className="w-10 h-10"
      />
    </div>

    <div className="text-primary-foreground">
      <h1 className="text-3xl font-bold tracking-wide text-shadow-police">
        Telangana Police
      </h1>
      <p className="text-sm opacity-90">
        Integrated FIR Management System
      </p>
    </div>

  </div>
</div>


      {/* Navigation Bar */}
      <nav className="bg-accent/30 border-b border-border">
        <div className="container mx-auto">
          <ul className="flex flex-wrap gap-1 py-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary hover:bg-accent/50 rounded-md transition-colors"
                  activeClassName="text-primary bg-card shadow-sm"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
