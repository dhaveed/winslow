import { Asset } from '@/lib/types/ui.types';
import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';
import SVGIcon from './svg-icon';

export interface AssetListItemProps {
  currency: Asset;
  extraStyles?: HTMLAttributes<HTMLLIElement>['className'];
}

export default function AssetListItem({
  currency,
  extraStyles,
}: AssetListItemProps) {
  return (
    <li
      className={cn(
        'flex items-center justify-between py-2 border-b border-b-[#EFF3F0] mt-0',
        extraStyles
      )}
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-gray-200 rounded-full">
          <SVGIcon source={currency.icon} className="w-full h-auto" />
        </div>
        <div>
          <div className="font-semibold text-md text-[#001003]">
            {currency.name}
          </div>
          <div className="text-sm font-normal text-[#595E5A]">
            {currency.code}
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="font-semibold text-[#001003] text-right">
          {`${currency.balance} ${currency.code}`}
        </div>
        <div className="font-normal text-[#595E5A] text-right text-sm">
          {currency.code.toLowerCase() === 'ngn'
            ? 'Balance'
            : `${currency.base_fiat_balance} NGN`}
        </div>
      </div>
    </li>
  );
}
