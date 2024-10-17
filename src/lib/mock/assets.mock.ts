import { Asset } from '../types/ui.types';

import NGNIcon from '@/assets/icons/currencies/naira.svg';
import KESIcon from '@/assets/icons/currencies/kes.svg';

import BTCIcon from '@/assets/icons/currencies/btc.svg';
import USDCIcon from '@/assets/icons/currencies/usdc.svg';
import USDTIcon from '@/assets/icons/currencies/usdt.svg';

export const MockFiatAssets: Array<Asset> = [
  {
    name: 'Naira',
    code: 'NGN',
    balance: '5,993,993.86',
    icon: NGNIcon,
    base_fiat_balance: '5,993,993.86',
  },
  {
    name: 'Kenyan Shillings',
    code: 'KES',
    balance: '20',
    icon: KESIcon,
    base_fiat_balance: '12.56',
  },
];

export const MockCryptoAssets: Array<Asset> = [
  {
    name: 'Bitcoin',
    code: 'BTC',
    balance: '12.025',
    icon: BTCIcon,
    base_fiat_balance: '12.56',
  },
  {
    name: 'USD Coin',
    code: 'USDC',
    balance: '20',
    icon: USDCIcon,
    base_fiat_balance: '12.56',
  },
  {
    name: 'Tether',
    code: 'USDT',
    balance: '102',
    icon: USDTIcon,
    base_fiat_balance: '12.56',
  },
];
