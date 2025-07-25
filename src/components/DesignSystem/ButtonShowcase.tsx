import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Download, Play, Settings, ShoppingCart, Star } from 'lucide-react';

export const ButtonShowcase: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleAsyncAction = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-poppins font-bold text-text-black mb-6">按鈕變體 Button Variants</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Primary Buttons */}
          <Card>
            <CardHeader>
              <CardTitle className="font-poppins">主要按鈕 Primary Button</CardTitle>
              <p className="text-sm text-text-gray">用於最重要、最優先的行動呼籲</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <Button variant="primary" size="small">小型按鈕</Button>
                <Button variant="primary" size="medium">中型按鈕</Button>
                <Button variant="primary" size="large">大型按鈕</Button>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary" size="medium" disabled>禁用狀態</Button>
                <Button variant="primary" size="medium" onClick={handleAsyncAction} disabled={isLoading}>
                  {isLoading ? '載入中...' : '立即學習'}
                </Button>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary" size="medium">
                  <Play className="w-4 h-4" />
                  開始課程
                </Button>
                <Button variant="primary" size="medium">
                  <Download className="w-4 h-4" />
                  下載教材
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Secondary Buttons */}
          <Card>
            <CardHeader>
              <CardTitle className="font-poppins">次要按鈕 Secondary Button</CardTitle>
              <p className="text-sm text-text-gray">用於次要行動或補充主要行動</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <Button variant="secondary" size="small">小型按鈕</Button>
                <Button variant="secondary" size="medium">中型按鈕</Button>
                <Button variant="secondary" size="large">大型按鈕</Button>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="secondary" size="medium" disabled>禁用狀態</Button>
                <Button variant="secondary" size="medium">了解更多</Button>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="secondary" size="medium">
                  <Settings className="w-4 h-4" />
                  設定
                </Button>
                <Button variant="secondary" size="medium">
                  <Heart className="w-4 h-4" />
                  收藏
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Ghost Buttons */}
          <Card>
            <CardHeader>
              <CardTitle className="font-poppins">幽靈按鈕 Ghost Button</CardTitle>
              <p className="text-sm text-text-gray">用於不希望過於突出的行動</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <Button variant="ghost" size="small">小型按鈕</Button>
                <Button variant="ghost" size="medium">中型按鈕</Button>
                <Button variant="ghost" size="large">大型按鈕</Button>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="ghost" size="medium" disabled>禁用狀態</Button>
                <Button variant="ghost" size="medium">跳過</Button>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="ghost" size="medium">
                  <Star className="w-4 h-4" />
                  評分
                </Button>
                <Button variant="ghost" size="medium">
                  取消
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Semantic Buttons */}
          <Card>
            <CardHeader>
              <CardTitle className="font-poppins">語意按鈕 Semantic Buttons</CardTitle>
              <p className="text-sm text-text-gray">用於特定狀態和操作回饋</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <Button variant="success" size="medium">成功操作</Button>
                <Button variant="warning" size="medium">注意事項</Button>
                <Button variant="error" size="medium">刪除項目</Button>
                <Button variant="info" size="medium">了解詳情</Button>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="success" size="medium" disabled>成功（禁用）</Button>
                <Button variant="warning" size="medium" disabled>警告（禁用）</Button>
                <Button variant="error" size="medium" disabled>錯誤（禁用）</Button>
                <Button variant="info" size="medium" disabled>資訊（禁用）</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Button States */}
      <div>
        <h3 className="text-2xl font-poppins font-bold text-text-black mb-6">按鈕狀態 Button States</h3>
        
        <Card>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-text-black mb-3">互動狀態說明</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  <div className="p-3 bg-light-orange rounded-lg">
                    <div className="font-medium text-text-black">預設 Default</div>
                    <div className="text-text-gray">按鈕的初始視覺狀態</div>
                  </div>
                  <div className="p-3 bg-accent-blue rounded-lg">
                    <div className="font-medium text-text-black">懸停 Hover</div>
                    <div className="text-text-gray">滑鼠懸停時的狀態</div>
                  </div>
                  <div className="p-3 bg-highlight-yellow rounded-lg">
                    <div className="font-medium text-text-black">聚焦 Focus</div>
                    <div className="text-text-gray">鍵盤導航聚焦狀態</div>
                  </div>
                  <div className="p-3 bg-soft-pink rounded-lg">
                    <div className="font-medium text-text-black">禁用 Disabled</div>
                    <div className="text-text-gray">按鈕不可用時的狀態</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-text-black mb-3">實際範例</h4>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" size="medium">
                    <ShoppingCart className="w-4 h-4" />
                    加入購物車
                  </Button>
                  <Button variant="secondary" size="medium">
                    <Heart className="w-4 h-4" />
                    加入收藏
                  </Button>
                  <Button variant="ghost" size="medium">
                    查看更多
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Accessibility */}
      <div>
        <h3 className="text-2xl font-poppins font-bold text-text-black mb-6">無障礙性 Accessibility</h3>
        
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-text-black mb-3">鍵盤導航</h4>
                <ul className="space-y-2 text-sm text-text-gray">
                  <li>• 使用 Tab 鍵在按鈕間導航</li>
                  <li>• 使用 Enter 或 Space 鍵觸發按鈕</li>
                  <li>• 清晰的焦點指示器</li>
                  <li>• 合理的 Tab 順序</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-text-black mb-3">ARIA 屬性</h4>
                <ul className="space-y-2 text-sm text-text-gray">
                  <li>• aria-label 提供按鈕描述</li>
                  <li>• aria-disabled 標識禁用狀態</li>
                  <li>• role="button" 確保語義正確</li>
                  <li>• 適當的色彩對比度</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};