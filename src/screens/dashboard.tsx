import { useState } from 'react';
import { IoAdd } from 'react-icons/io5';
import { PiArrowUpRightBold } from 'react-icons/pi';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BalanceChartCard } from '@/components/features';
import { AssetCardSection, PageLayout } from '@/components/layout';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MockFiatAssets, MockCryptoAssets } from '@/lib/mock/assets.mock';

export function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <PageLayout {...{ sidebarOpen, setSidebarOpen }}>
      {/* Balance Section */}
      <>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Balance</h2>
          <div className="flex gap-2">
            <Button className="bg-[#16CB3E] shadow-none hover:bg-green-600 text-white">
              <IoAdd className="w-6 h-8" /> Deposit
            </Button>
            <Button
              variant="outline"
              className="bg-[#E8EEE8] shadow-none border-none text-[#001003]"
            >
              <PiArrowUpRightBold className="w-6 h-8" />
              Transfer
            </Button>
          </div>
        </div>

        <BalanceChartCard />
      </>

      {/* Accounts & Assets Section */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Accounts & Assets</h2>
          <Tabs defaultValue="all">
            <TabsList className="bg-[#E8EEE8]">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="fiat">Fiat</TabsTrigger>
              <TabsTrigger value="crypto">Crypto</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Bank Accounts Card */}
        <Card>
          <AssetCardSection title="Bank accounts" assets={MockFiatAssets} />
          <AssetCardSection
            title="Crypto"
            assets={MockCryptoAssets}
            listItemStyles={'last:border-b-0'}
          />
        </Card>
      </div>
    </PageLayout>
  );
}
