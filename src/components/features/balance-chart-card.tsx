import { ChevronDown, Info } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import SVGIcon from '../ui/svg-icon';
import EmptyIcon from '@/assets/icons/empty-icon.svg';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { useState } from 'react';
import { GenericSelectOption } from '@/lib/types/ui.types';

// import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

// const chartData = [
//   { date: '1 Sept', value: 1000 },
//   { date: '7 Sept', value: 1200 },
//   { date: '14 Sept', value: 1100 },
//   { date: '21 Sept', value: 1300 },
//   { date: '28 Sept', value: 1500 },
// ];

const dateRanges: Array<GenericSelectOption<string>> = [
  { label: 'Today', value: 'today' },
  { label: 'Last 7 days', value: 'last7Days' },
  { label: 'Last 30 days', value: 'last30Days' },
  { label: 'Month to date', value: 'monthToDate' },
  { label: 'Year to date', value: 'yearToDate' },
  { label: 'Last 12 months', value: 'last12Months' },
  { label: 'All time', value: 'allTime' },
  { label: 'Custom range', value: 'customRange' },
];

const separatorIndexes = [2, 5];

export default function BalanceChartCard() {
  const [selectedValue, setSelectedValue] = useState('last30Days'); // Set initial value (not label)

  const handleSelect = (value: string) => {
    setSelectedValue(value);
  };

  const getSelectedLabel = () => {
    const selectedRange = dateRanges.find(
      (range) => range.value === selectedValue
    );
    return selectedRange ? selectedRange.label : 'Select Range';
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-normal tracking-[1%] text-[#595E5A]">
          Total Balance <Info className="h-4 w-4 ml-1 inline" />
          <div className="text-2xl font-medium tracking-[-2%] text-[#001003]">
            &#8358;0.00
          </div>
        </CardTitle>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="default"
              size="sm"
              className="bg-[#EDF2ED] shadow-none text-[#001003] hover:bg-neutral-100"
            >
              {getSelectedLabel()} <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-56 shadow-popover-shadow-8 border-[#E5E9E6]"
            align="end"
          >
            {dateRanges.map((item, index) => (
              <div key={item.value}>
                {/* Add a separator where necessary */}
                {separatorIndexes.includes(index) && (
                  <DropdownMenuSeparator className="my-1 mx-3 border-t border-[#EFF3F0] rounded-lg" />
                )}

                <DropdownMenuItem
                  className={`cursor-pointer px-4 py-2 text-sm font-light tracking-wide text-[#001003] hover:bg-gray-100 rounded-md ${
                    selectedValue === item.value ? 'font-semibold' : ''
                  }`}
                  onClick={() => handleSelect(item.value)}
                >
                  {item.label}
                </DropdownMenuItem>
              </div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="w-full">
        {/* 
      We'll come back to this later
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={chartData}>
        <XAxis dataKey="date" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer> */}
        <div className="flex flex-col items-center justify-items-center min-h-56 py-8 w-full gap-4">
          <div className="h-24 w-24 opacity-70">
            <SVGIcon source={EmptyIcon} />
          </div>
          <span className="mx-auto text-sm tracking-wide text-neutral-400 font-normal">
            No data available for the selected period
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
