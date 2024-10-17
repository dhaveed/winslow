import { ArrowUpRight, LucideArrowRight } from 'lucide-react';
import { Button } from './button';

export function TestModeAlertBox() {
  const handleCompleteVerificationClick = () => {
    window.open('https://busha.co', '_blank');
  };

  return (
    <div className="bg-[#F04438] pl-10 pr-4 py-1.5 flex items-center justify-between text-neutral-50 font-semibold">
      <span className="font-medium text-sm">Test Mode</span>

      <span className="text-sm hidden md:inline text-center font-normal tracking-wide">
        You're using test data. No real transactions will be processed.{' '}
        <span className="underline inline-flex align-center cursor-pointer">
          Learn more about test mode <ArrowUpRight className="w-5 h-5" />
        </span>
      </span>

      <Button
        size="sm"
        variant={'ghost'}
        className="hover:bg-neutral-300 hover:bg-opacity-20 hover:text-neutral-50 text-sm font-semibold"
        onClick={handleCompleteVerificationClick}
      >
        Complete verification
        <LucideArrowRight />
      </Button>
    </div>
  );
}
