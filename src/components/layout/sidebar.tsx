import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

import HomeFilledIcon from '@/assets/icons/home-filled.svg';
import GearIcon from '@/assets/icons/gear.svg';
import WalletIcon from '@/assets/icons/wallet.svg';
import CodeIcon from '@/assets/icons/code-rec.svg';
import ArrowSwapIcon from '@/assets/icons/arrow-swap-rec.svg';
import FileCheckIcon from '@/assets/icons/file-check.svg';
import UsersIcon from '@/assets/icons/users.svg';

import SVGIcon from '../ui/svg-icon';
import OrganizationSwitcher from '../ui/organization-switcher';

interface SidebarProps {
  isOpen: boolean;
}

type SidebarItem = {
  icon: string;
  label: string;
  active?: boolean;
};

const SIDEBAR_ITEMS: Array<SidebarItem> = [
  { icon: HomeFilledIcon, label: 'Home' },
  { icon: WalletIcon, label: 'Balances', active: true },
  { icon: ArrowSwapIcon, label: 'Payouts' },
  { icon: UsersIcon, label: 'Recipients' },
  { icon: FileCheckIcon, label: 'Compliance' },
  { icon: CodeIcon, label: 'Developers' },
  { icon: GearIcon, label: 'Settings' },
];

export function Sidebar({ isOpen }: SidebarProps) {
  return (
    <aside
      className={`bg-white w-64 min-h-screen flex flex-col transition-all duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } fixed inset-y-0 left-0 z-50 lg:relative lg:translate-x-0 border-r`}
    >
      <div className="p-4 px-6">
        <OrganizationSwitcher />
      </div>

      <nav className="flex-1 overflow-y-auto">
        <ul className="p-2 px-4 space-y-1">
          {SIDEBAR_ITEMS.map((item, index) => (
            <li key={index}>
              <Button
                variant={item.active ? 'secondary' : 'ghost'}
                className={cn(
                  'pl-2 w-full justify-start text-sm text-[#595E5A] font-light tracking-wide',
                  `${
                    item.active
                      ? 'font-semibold text-[#001003] bg-[#EDF2ED] shadow-none'
                      : ''
                  }`
                )}
              >
                <div className="inline w-4 h-4">
                  <SVGIcon source={item.icon} />
                </div>
                {item.label}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
