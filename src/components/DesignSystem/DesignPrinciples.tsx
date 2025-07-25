import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Gamepad2, 
  Shield, 
  Users, 
  Layers, 
  Smartphone,
  Eye,
  Zap,
  Target,
  Smile
} from 'lucide-react';

export const DesignPrinciples: React.FC = () => {
  const principles = [
    {
      title: '以兒童為中心',
      subtitle: 'Child-Centric',
      description: '所有設計都應考慮兒童的認知發展、學習方式和興趣，創造引人入勝且易於理解的體驗。',
      icon: Heart,
      color: 'bg-soft-pink',
      iconColor: 'text-error-red',
      details: [
        '適齡的內容和語言',
        '符合兒童認知發展的互動方式',
        '考慮不同年齡層的需求差異',
        '促進主動學習和探索'
      ]
    },
    {
      title: '趣味性與互動性',
      subtitle: 'Playful & Interactive',
      description: '透過生動的視覺元素、動畫和互動，激發兒童的學習興趣，讓學習過程充滿樂趣。',
      icon: Gamepad2,
      color: 'bg-highlight-yellow',
      iconColor: 'text-warning-yellow',
      details: [
        '豐富的動畫效果',
        '互動式學習元素',
        '遊戲化的學習體驗',
        '即時反饋機制'
      ]
    },
    {
      title: '信任與安全',
      subtitle: 'Trustworthy & Safe',
      description: '建立清晰、簡潔的介面，確保內容的適齡性與安全性，讓家長放心。',
      icon: Shield,
      color: 'bg-accent-blue',
      iconColor: 'text-info-blue',
      details: [
        '內容安全性保障',
        '隱私保護措施',
        '清晰的操作指引',
        '家長監控功能'
      ]
    },
    {
      title: '易於理解與操作',
      subtitle: 'Approachable & Usable',
      description: '介面設計直觀，操作流程簡單，降低兒童和家長的使用門檻。',
      icon: Users,
      color: 'bg-light-orange',
      iconColor: 'text-primary-orange',
      details: [
        '直觀的使用者介面',
        '簡化的操作流程',
        '清楚的視覺層次',
        '容錯性設計'
      ]
    },
    {
      title: '一致性與可預測性',
      subtitle: 'Consistent & Predictable',
      description: '在視覺風格、互動模式和元件使用上保持高度一致，提升用戶的學習效率和使用體驗。',
      icon: Layers,
      color: 'bg-soft-pink',
      iconColor: 'text-error-red',
      details: [
        '統一的設計語言',
        '標準化的元件庫',
        '一致的互動模式',
        '可預測的系統回應'
      ]
    },
    {
      title: '響應式與適應性',
      subtitle: 'Responsive & Adaptive',
      description: '設計應能適應不同設備和螢幕尺寸，提供流暢的跨平台體驗。',
      icon: Smartphone,
      color: 'bg-accent-blue',
      iconColor: 'text-info-blue',
      details: [
        '跨設備一致體驗',
        '靈活的佈局系統',
        '適應性內容顯示',
        '效能優化'
      ]
    },
    {
      title: '無障礙性',
      subtitle: 'Accessible',
      description: '考慮不同能力用戶的需求，確保設計符合無障礙標準，提供包容性的學習環境。',
      icon: Eye,
      color: 'bg-highlight-yellow',
      iconColor: 'text-warning-yellow',
      details: [
        '符合WCAG標準',
        '鍵盤導航支援',
        '螢幕閱讀器相容',
        '高對比度支援'
      ]
    }
  ];

  const designGoals = [
    {
      title: '學習效果最大化',
      description: '透過科學的教學設計和互動機制，提升學習成效',
      icon: Target,
      metrics: ['完課率 >85%', '學習滿意度 >4.5分', '知識掌握度 >80%']
    },
    {
      title: '用戶體驗優化',
      description: '創造直觀、愉悅的使用體驗，提高用戶黏著度',
      icon: Smile,
      metrics: ['用戶留存率 >70%', '操作成功率 >95%', 'NPS分數 >50']
    },
    {
      title: '技術創新應用',
      description: '運用最新技術提升學習體驗和平台效能',
      icon: Zap,
      metrics: ['頁面載入時間 <2秒', '互動響應時間 <100ms', '系統穩定性 >99.9%']
    }
  ];

  return (
    <div className="space-y-8">
      {/* Design Principles Overview */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-poppins font-bold text-text-black mb-4">
          設計原則 Design Principles
        </h2>
        <p className="text-lg text-text-gray leading-relaxed">
          為確保設計系統的一致性和有效性，我們遵循以下核心原則，
          致力於創造以兒童為中心的優質學習體驗。
        </p>
      </div>

      {/* Core Principles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {principles.map((principle, index) => (
          <Card key={index} className="hover:shadow-medium transition-all duration-300 group">
            <CardHeader className="text-center">
              <div className={`w-16 h-16 rounded-full ${principle.color} mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <principle.icon className={`w-8 h-8 ${principle.iconColor}`} />
              </div>
              <CardTitle className="font-poppins text-lg text-text-black">
                {principle.title}
              </CardTitle>
              <Badge variant="secondary" className="text-xs">
                {principle.subtitle}
              </Badge>
            </CardHeader>
            <CardContent>
              <p className="text-text-gray text-sm mb-4 leading-relaxed">
                {principle.description}
              </p>
              <div className="space-y-2">
                <h4 className="font-medium text-text-black text-sm">關鍵特點：</h4>
                <ul className="space-y-1">
                  {principle.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-xs text-text-gray flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary-orange rounded-full mr-2 flex-shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Design Goals */}
      <div>
        <h3 className="text-2xl font-poppins font-bold text-text-black mb-6">設計目標 Design Goals</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {designGoals.map((goal, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary-orange rounded-full mx-auto mb-4 flex items-center justify-center">
                  <goal.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-poppins font-semibold text-text-black mb-2">
                  {goal.title}
                </h4>
                <p className="text-sm text-text-gray mb-4">
                  {goal.description}
                </p>
                <div className="space-y-2">
                  {goal.metrics.map((metric, metricIndex) => (
                    <Badge key={metricIndex} variant="secondary" className="text-xs mr-2">
                      {metric}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Implementation Guidelines */}
      <div>
        <h3 className="text-2xl font-poppins font-bold text-text-black mb-6">實施指導原則 Implementation Guidelines</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-poppins">設計決策流程</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-orange text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                  <div>
                    <h4 className="font-medium text-text-black">用戶需求分析</h4>
                    <p className="text-sm text-text-gray">深入了解目標用戶的需求和痛點</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-orange text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                  <div>
                    <h4 className="font-medium text-text-black">原則對照檢查</h4>
                    <p className="text-sm text-text-gray">確保設計方案符合核心設計原則</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-orange text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                  <div>
                    <h4 className="font-medium text-text-black">原型測試</h4>
                    <p className="text-sm text-text-gray">與實際用戶進行測試驗證</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-orange text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
                  <div>
                    <h4 className="font-medium text-text-black">迭代優化</h4>
                    <p className="text-sm text-text-gray">基於反饋持續改進設計</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-poppins">品質檢核清單</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  '是否考慮了兒童的認知發展階段？',
                  '互動設計是否有趣且易於理解？',
                  '內容是否安全且適合年齡？',
                  '操作流程是否簡單直觀？',
                  '視覺設計是否保持一致性？',
                  '是否適應不同設備和螢幕？',
                  '是否符合無障礙設計標準？',
                  '是否提供適當的回饋機制？'
                ].map((question, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-4 h-4 border-2 border-primary-orange rounded mt-0.5 flex-shrink-0"></div>
                    <span className="text-sm text-text-gray">{question}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Success Metrics */}
      <div>
        <h3 className="text-2xl font-poppins font-bold text-text-black mb-6">成功指標 Success Metrics</h3>
        
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-orange mb-2">85%</div>
                <div className="text-sm font-medium text-text-black">用戶滿意度</div>
                <div className="text-xs text-text-gray">基於用戶調研和回饋</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success-green mb-2">95%</div>
                <div className="text-sm font-medium text-text-black">可用性測試通過率</div>
                <div className="text-xs text-text-gray">核心任務完成率</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-info-blue mb-2">AA</div>
                <div className="text-sm font-medium text-text-black">無障礙等級</div>
                <div className="text-xs text-text-gray">WCAG 2.1標準</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};