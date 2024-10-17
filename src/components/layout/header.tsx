import { Dispatch, SetStateAction } from 'react';
import { Menu } from 'lucide-react';
import { PiArrowUpRightBold } from 'react-icons/pi';
import { IoMdHelpCircle } from 'react-icons/io';
import { GoBellFill } from 'react-icons/go';

import { Button } from '../ui/button';
import { Switch } from '../ui/switch';
import { Label } from '../ui/label';

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
  isTestModeActive: boolean;
  setIsTestModeActive: Dispatch<SetStateAction<boolean>>;
}

export function Header({
  setSidebarOpen,
  sidebarOpen,
  isTestModeActive,
  setIsTestModeActive,
}: HeaderProps) {
  const handleToggleTestMode = () => {
    setIsTestModeActive((current) => !current);
  };

  const sharedActionClass = 'gap-0.5 text-sm px-0 hover:bg-transparent';

  return (
    <header className="bg-white border-b border-b-[#E5E9E6] pl-4 pr-4 py-1.5 flex items-center justify-between">
      <Button
        variant="outline"
        size="sm"
        className="lg:hidden border-[#E5E9E6] rounded-lg shadow-none"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <Menu className="h-6 w-6" />
      </Button>
      <div className="flex items-center gap-4 ml-auto">
        <div className="flex items-center space-x-2">
          <Label htmlFor="test-mode-toggle">Test Mode</Label>
          <Switch
            checked={isTestModeActive}
            id={'test-mode-toggle'}
            onCheckedChange={handleToggleTestMode}
          />
        </div>
        {/* Docs Link */}
        <Button variant="ghost" size="sm" className={sharedActionClass}>
          Docs
          <PiArrowUpRightBold className="w-6 h-8" />
        </Button>

        {/* Help Link */}
        <Button variant="ghost" size="sm" className={sharedActionClass}>
          Help
          <IoMdHelpCircle className="h-8 w-8" />
        </Button>

        {/* Notifications Link */}
        <Button variant="ghost" size="sm" className={sharedActionClass}>
          <GoBellFill />
        </Button>
      </div>
    </header>
  );
}
