import { Dispatch, PropsWithChildren, SetStateAction, useState } from 'react';

import { Sidebar } from './sidebar';
import { Header } from './header';
import { TestModeAlertBox } from '../ui/app-alert-box';

interface PageLayoutProps extends PropsWithChildren {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

export function PageLayout({
  children,
  sidebarOpen,
  setSidebarOpen,
}: PageLayoutProps) {
  const [isTestModeActive, setIsTestModeActive] = useState<boolean>(true);

  return (
    <div className="flex h-screen bg-white">
      {/* Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        {isTestModeActive && <TestModeAlertBox />}

        <Header
          {...{
            sidebarOpen,
            setSidebarOpen,
            isTestModeActive,
            setIsTestModeActive,
          }}
        />
        {/* Header */}

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4">
          <div className="max-w-8xl mx-auto space-y-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
