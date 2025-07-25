import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const Typography: React.FC = () => {
  const typeScale = [
    {
      name: 'H1 主標題',
      desktop: '56px',
      tablet: '48px',
      mobile: '40px',
      weight: 'Bold (700)',
      lineHeight: '1.2',
      className: 'text-4xl md:text-5xl lg:text-6xl font-bold font-poppins'
    },
    {
      name: 'H2 次標題',
      desktop: '40px',
      tablet: '36px',
      mobile: '32px',
      weight: 'Bold (700)',
      lineHeight: '1.25',
      className: 'text-2xl md:text-3xl lg:text-4xl font-bold font-poppins'
    },
    {
      name: 'H3 三級標題',
      desktop: '28px',
      tablet: '24px',
      mobile: '24px',
      weight: 'Semi-bold (600)',
      lineHeight: '1.3',
      className: 'text-xl md:text-2xl lg:text-3xl font-semibold font-poppins'
    },
    {
      name: 'H4 四級標題',
      desktop: '24px',
      tablet: '20px',
      mobile: '20px',
      weight: 'Semi-bold (600)',
      lineHeight: '1.35',
      className: 'text-lg md:text-xl lg:text-2xl font-semibold font-poppins'
    },
    {
      name: 'H5 五級標題',
      desktop: '20px',
      tablet: '18px',
      mobile: '18px',
      weight: 'Medium (500)',
      lineHeight: '1.4',
      className: 'text-base md:text-lg lg:text-xl font-medium font-poppins'
    },
    {
      name: 'H6 六級標題',
      desktop: '18px',
      tablet: '16px',
      mobile: '16px',
      weight: 'Medium (500)',
      lineHeight: '1.45',
      className: 'text-sm md:text-base lg:text-lg font-medium font-poppins'
    },
    {
      name: 'Body Text 內文',
      desktop: '16px',
      tablet: '16px',
      mobile: '14px',
      weight: 'Normal (400)',
      lineHeight: '1.5',
      className: 'text-sm md:text-base font-normal font-poppins'
    },
    {
      name: 'Labels/Subtext 標籤',
      desktop: '14px',
      tablet: '14px',
      mobile: '12px',
      weight: 'Normal (400)',
      lineHeight: '1.5',
      className: 'text-xs md:text-sm font-normal font-poppins'
    },
    {
      name: 'Caption 說明文字',
      desktop: '12px',
      tablet: '12px',
      mobile: '10px',
      weight: 'Normal (400)',
      lineHeight: '1.6',
      className: 'text-xs font-normal font-poppins'
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-poppins font-bold text-text-black mb-6">字體層級系統 Typography Scale</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-poppins">字體家族 Font Family</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-text-gray mb-2">主要字體 Primary Font</p>
                  <p className="font-poppins text-lg">Poppins - 用於標題和重要內容</p>
                  <p className="font-mono text-sm text-text-gray">font-family: 'Poppins', sans-serif</p>
                </div>
                <div>
                  <p className="text-sm text-text-gray mb-2">輔助字體 Secondary Font</p>
                  <p className="font-montserrat text-lg">Montserrat - 用於特殊標題</p>
                  <p className="font-mono text-sm text-text-gray">font-family: 'Montserrat', sans-serif</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-poppins">對比度要求 Contrast Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-light-orange rounded-lg">
                  <span className="text-text-black font-medium">小型文字 &lt;18pt</span>
                  <span className="text-text-gray">4.5:1</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-accent-blue rounded-lg">
                  <span className="text-text-black font-medium">大型文字 ≥18pt</span>
                  <span className="text-text-gray">3:1</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-highlight-yellow rounded-lg">
                  <span className="text-text-black font-medium">圖形元件</span>
                  <span className="text-text-gray">3:1</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-poppins font-bold text-text-black mb-6">響應式字體大小 Responsive Typography</h3>
        <div className="space-y-6">
          {typeScale.map((type, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                  <div className="lg:col-span-2">
                    <div className={type.className}>
                      {type.name} - 快樂學習，成就未來
                    </div>
                    <div className="mt-2 text-sm text-text-gray">
                      字重: {type.weight} | 行高: {type.lineHeight}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="text-center">
                        <div className="font-medium text-text-gray">桌面</div>
                        <div className="font-mono">{type.desktop}</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium text-text-gray">平板</div>
                        <div className="font-mono">{type.tablet}</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium text-text-gray">手機</div>
                        <div className="font-mono">{type.mobile}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-poppins font-bold text-text-black mb-6">文字色彩範例 Text Color Examples</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold text-text-black mb-4">主要文字 Primary Text</h4>
              <p className="text-text-black mb-2">
                這是主要文字內容，使用 Text Black (#333333) 顏色，確保高可讀性和清晰度。
              </p>
              <p className="text-text-gray">
                這是次要文字內容，使用 Text Gray (#7a7a7a) 顏色，適用於說明文字或非重要資訊。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold text-text-black mb-4">彩色文字 Colored Text</h4>
              <p className="text-primary-orange mb-2">
                品牌色文字，用於重要連結或強調內容
              </p>
              <p className="text-success-green mb-2">
                成功狀態文字
              </p>
              <p className="text-error-red mb-2">
                錯誤狀態文字
              </p>
              <p className="text-info-blue">
                資訊提示文字
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};