import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Palette, 
  Type, 
  MousePointer, 
  Layout, 
  Layers,
  BookOpen,
  Target,
  Code,
  Eye,
  Lightbulb,
  Users,
  Smartphone
} from 'lucide-react';

// Import design system components
import { DesignPrinciples } from '@/components/DesignSystem/DesignPrinciples';
import { ColorPalette } from '@/components/DesignSystem/ColorPalette';
import { Typography } from '@/components/DesignSystem/Typography';
import { ButtonShowcase } from '@/components/DesignSystem/ButtonShowcase';
import { FormShowcase } from '@/components/DesignSystem/FormShowcase';
import { Navigation } from '@/components/DesignSystem/Navigation';

const Index = () => {
  const [activeTab, setActiveTab] = useState('principles');

  const tabItems = [
    {
      id: 'principles',
      label: '設計原則',
      icon: Target,
      component: DesignPrinciples
    },
    {
      id: 'colors',
      label: '色彩系統',
      icon: Palette,
      component: ColorPalette
    },
    {
      id: 'typography',
      label: '字體排版',
      icon: Type,
      component: Typography
    },
    {
      id: 'buttons',
      label: '按鈕組件',
      icon: MousePointer,
      component: ButtonShowcase
    },
    {
      id: 'forms',
      label: '表單輸入',
      icon: Layout,
      component: FormShowcase
    },
    {
      id: 'navigation',
      label: '導航組件',
      icon: Layers,
      component: Navigation
    }
  ];

  const stats = [
    { label: '設計原則', value: '7', description: '核心設計原則' },
    { label: '色彩變體', value: '12+', description: '品牌與語意色彩' },
    { label: '組件類型', value: '20+', description: '可重用UI組件' },
    { label: '響應式', value: '3', description: '支援設備類型' }
  ];

  return (
    <div className="min-h-screen bg-off-white">
      {/* Header */}
      <header className="bg-white shadow-light border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-10 h-10 bg-primary-orange rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="ml-3">
                  <h1 className="text-xl font-poppins font-bold text-text-black">
                    兒童學習平台
                  </h1>
                  <p className="text-sm text-text-gray">設計系統規範</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-success-green text-white">
                v1.0.0
              </Badge>
              <Button variant="primary" size="medium">
                <Code className="w-4 h-4 mr-2" />
                查看代碼
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-light-orange via-highlight-yellow to-accent-blue py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-text-black mb-6">
              兒童學習平台
              <span className="block text-primary-orange">設計系統規範</span>
            </h1>
            <p className="text-xl text-text-gray mb-8 leading-relaxed">
              為兒童學習體驗而設計的完整設計系統，
              包含色彩、字體、組件和交互規範，確保一致性和可用性。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="large" onClick={() => setActiveTab('principles')}>
                <Target className="w-5 h-5 mr-2" />
                開始探索
              </Button>
              <Button variant="secondary" size="large">
                <Eye className="w-5 h-5 mr-2" />
                查看範例
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-teal-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-medium text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-white/80">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Tab Navigation */}
          <div className="mb-8">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-auto p-1 bg-white shadow-light">
              {tabItems.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="flex flex-col items-center p-4 data-[state=active]:bg-primary-orange data-[state=active]:text-white"
                >
                  <tab.icon className="w-5 h-5 mb-2" />
                  <span className="text-xs font-medium">{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Tab Contents */}
          {tabItems.map((tab) => {
            const Component = tab.component;
            return (
              <TabsContent key={tab.id} value={tab.id} className="mt-0">
                <Component />
              </TabsContent>
            );
          })}
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-primary-orange rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="ml-2 text-lg font-poppins font-bold text-text-black">
                  快樂學習
                </span>
              </div>
              <p className="text-text-gray text-sm">
                專為兒童學習體驗設計的完整設計系統
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-text-black mb-3">設計原則</h4>
              <ul className="space-y-2 text-sm text-text-gray">
                <li className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-primary-orange" />
                  以兒童為中心
                </li>
                <li className="flex items-center">
                  <Lightbulb className="w-4 h-4 mr-2 text-primary-orange" />
                  趣味性與互動性
                </li>
                <li className="flex items-center">
                  <Smartphone className="w-4 h-4 mr-2 text-primary-orange" />
                  響應式設計
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-text-black mb-3">技術規範</h4>
              <div className="space-y-2 text-sm">
                <Badge variant="secondary">React + TypeScript</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">Shadcn/ui</Badge>
                <Badge variant="secondary">WCAG 2.1 AA</Badge>
              </div>
            </div>
          </div>
          
          <div className="border-t pt-6 mt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-gray text-sm">
              © 2025 Manus AI. 版權所有.
            </p>
            <p className="text-text-gray text-sm mt-2 md:mt-0">
              最後更新：2025年7月25日
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
