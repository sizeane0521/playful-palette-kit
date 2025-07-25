import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ColorCardProps {
  name: string;
  hex: string;
  rgb: string;
  usage: string;
  className?: string;
}

const ColorCard: React.FC<ColorCardProps> = ({ name, hex, rgb, usage, className = '' }) => (
  <Card className="overflow-hidden">
    <div className={`h-24 w-full ${className}`} />
    <CardContent className="p-4">
      <h4 className="font-poppins font-semibold text-text-black mb-2">{name}</h4>
      <div className="space-y-1 text-sm">
        <p className="font-mono">{hex}</p>
        <p className="font-mono text-text-gray">{rgb}</p>
        <p className="text-text-gray text-xs mt-2">{usage}</p>
      </div>
    </CardContent>
  </Card>
);

export const ColorPalette: React.FC = () => {
  const primaryColors = [
    {
      name: '主要橙色 Primary Orange',
      hex: '#f7941e',
      rgb: 'RGB(247, 148, 30)',
      usage: '主要行動呼籲、品牌元素、重要連結',
      className: 'bg-primary-orange'
    },
    {
      name: '淺橙色 Light Orange',
      hex: '#fde9da',
      rgb: 'RGB(253, 233, 218)',
      usage: '背景、次要按鈕、裝飾性元素',
      className: 'bg-light-orange'
    },
    {
      name: '亮黃色 Highlight Yellow',
      hex: '#fff3c4',
      rgb: 'RGB(255, 243, 196)',
      usage: '突出顯示、警告提示、互動反饋',
      className: 'bg-highlight-yellow'
    }
  ];

  const secondaryColors = [
    {
      name: '藍色強調 Accent Blue',
      hex: '#cce6f9',
      rgb: 'RGB(204, 230, 249)',
      usage: '圖示、圖表、次要區塊背景',
      className: 'bg-accent-blue'
    },
    {
      name: '青色區塊 Teal Section',
      hex: '#3e7b94',
      rgb: 'RGB(62, 123, 148)',
      usage: '區塊背景、沉穩學習氛圍',
      className: 'bg-teal-section'
    },
    {
      name: '柔和粉色 Soft Pink',
      hex: '#ffe2e2',
      rgb: 'RGB(255, 226, 226)',
      usage: '裝飾性元素、插圖、特定主題背景',
      className: 'bg-soft-pink'
    }
  ];

  const semanticColors = [
    {
      name: '成功綠 Success Green',
      hex: '#4CAF50',
      rgb: 'RGB(76, 175, 80)',
      usage: '操作成功、完成、正面回饋',
      className: 'bg-success-green'
    },
    {
      name: '警告黃 Warning Yellow',
      hex: '#FFC107',
      rgb: 'RGB(255, 193, 7)',
      usage: '需要注意、潛在問題、輕微錯誤',
      className: 'bg-warning-yellow'
    },
    {
      name: '錯誤紅 Error Red',
      hex: '#F44336',
      rgb: 'RGB(244, 67, 54)',
      usage: '操作失敗、嚴重錯誤、立即處理',
      className: 'bg-error-red'
    },
    {
      name: '資訊藍 Info Blue',
      hex: '#2196F3',
      rgb: 'RGB(33, 150, 243)',
      usage: '提供一般資訊、提示、說明',
      className: 'bg-info-blue'
    }
  ];

  const neutralColors = [
    {
      name: '純白 White',
      hex: '#ffffff',
      rgb: 'RGB(255, 255, 255)',
      usage: '主要內容區域背景',
      className: 'bg-white border border-gray-200'
    },
    {
      name: '米白 Off-white',
      hex: '#fffaf7',
      rgb: 'RGB(255, 250, 247)',
      usage: '次要內容區域背景',
      className: 'bg-off-white'
    },
    {
      name: '文字黑 Text Black',
      hex: '#333333',
      rgb: 'RGB(51, 51, 51)',
      usage: '主要文字內容，高可讀性',
      className: 'bg-text-black'
    },
    {
      name: '文字灰 Text Gray',
      hex: '#7a7a7a',
      rgb: 'RGB(122, 122, 122)',
      usage: '次要文字、說明文字、非重要資訊',
      className: 'bg-text-gray'
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-poppins font-bold text-text-black mb-4">主要品牌色 Primary Brand Colors</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {primaryColors.map((color, index) => (
            <ColorCard key={index} {...color} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-poppins font-bold text-text-black mb-4">輔助色 Secondary Colors</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondaryColors.map((color, index) => (
            <ColorCard key={index} {...color} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-poppins font-bold text-text-black mb-4">語意色 Semantic Colors</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {semanticColors.map((color, index) => (
            <ColorCard key={index} {...color} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-poppins font-bold text-text-black mb-4">中性色 Neutral Colors</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {neutralColors.map((color, index) => (
            <ColorCard key={index} {...color} />
          ))}
        </div>
      </div>
    </div>
  );
};