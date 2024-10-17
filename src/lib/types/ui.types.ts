export type Asset = {
  name: string;
  code: string;
  balance: string;
  icon: string;
  base_fiat_balance?: string;
};

export type ChartDateFilterValue = 'today' | '7';

export type GenericSelectOption<V> = {
  label: string;
  value: V;
};
