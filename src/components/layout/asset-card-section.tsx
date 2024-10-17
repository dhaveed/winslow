import { CardContent, CardHeader, CardTitle } from '../ui/card';
import AssetListItem, { AssetListItemProps } from '../ui/asset-list-item';
import { Asset } from '@/lib/types/ui.types';

interface AssetCardSectionProps {
  title: string;
  assets: Array<Asset>;
  listItemStyles?: AssetListItemProps['extraStyles'];
}

export default function AssetCardSection({
  title,
  assets,
  listItemStyles,
}: AssetCardSectionProps) {
  return (
    <>
      <CardHeader className="border-b mx-3 mt-0 mb-0 px-0 border-b-[#EFF3F0]">
        <CardTitle className="text-[#595E5A] text-sm font-normal">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          {assets.map((currency) => (
            <AssetListItem
              key={currency.code}
              currency={currency}
              extraStyles={listItemStyles}
            />
          ))}
        </ul>
      </CardContent>
    </>
  );
}
