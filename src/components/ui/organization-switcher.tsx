import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '../ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { Button } from './button';
import { useMemo, useState } from 'react';

const MOCK_ORGANIZATIONS = ['Busha', 'Acme', 'Ramoza', 'Quelle Labs'];

export default function OrganizationSwitcher() {
  const [selectedOrganization, setSelectedOrganization] =
    useState<string>('Busha');

  const organizationsList = useMemo(() => {
    return MOCK_ORGANIZATIONS.filter(
      (organization) =>
        organization.toLowerCase() !== selectedOrganization.toLowerCase()
    );
  }, [selectedOrganization]);

  const handleSwitchOrganization = (targetOrg: string) => {
    setSelectedOrganization(targetOrg);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="focus:outline-none">
        <Button
          variant="ghost"
          className="justify-between text-sm hover:bg-transparent p-0 focus:outline-none"
        >
          <div className="h-5 w-5 flex bg-[#E8EEE8] items-center content-center rounded-sm">
            <span className="text-xs text-center text-[#001003] h-fit mx-auto">
              {selectedOrganization.split('')[0]}
            </span>
          </div>
          {selectedOrganization} <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-[200px] shadow-none border-[#E5E9E6]"
      >
        {organizationsList.map((organization) => (
          <DropdownMenuItem
            onClick={() => handleSwitchOrganization(organization)}
          >
            {organization}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
