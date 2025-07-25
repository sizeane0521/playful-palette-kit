import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Menu, 
  X, 
  Home, 
  BookOpen, 
  Users, 
  Settings, 
  Search,
  Bell,
  User,
  ChevronDown,
  Star,
  Heart,
  Download,
  Play
} from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('courses');

  const navItems = [
    { id: 'home', label: '首頁', icon: Home },
    { id: 'courses', label: '課程', icon: BookOpen },
    { id: 'teachers', label: '師資', icon: Users },
    { id: 'about', label: '關於我們', icon: Star },
    { id: 'contact', label: '聯絡我們', icon: Heart }
  ];

  const breadcrumbItems = [
    { label: '首頁', href: '/' },
    { label: '課程', href: '/courses' },
    { label: '英語課程', href: '/courses/english' },
    { label: '基礎英語', href: null }
  ];

  return (
    <div className="space-y-8">
      {/* Top Navigation Bar */}
      <div>
        <h3 className="text-2xl font-poppins font-bold text-text-black mb-6">頂部導航欄 Top Navigation</h3>
        
        <Card>
          <CardContent className="p-0">
            <nav className="bg-white shadow-light">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                  {/* Logo */}
                  <div className="flex items-center">
                    <div className="flex-shrink-0 flex items-center">
                      <div className="w-8 h-8 bg-primary-orange rounded-lg flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-white" />
                      </div>
                      <span className="ml-2 text-xl font-poppins font-bold text-text-black">
                        快樂學習
                      </span>
                    </div>
                  </div>

                  {/* Desktop Navigation */}
                  <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                      <a 
                        key={item.id}
                        href="#" 
                        className="text-text-gray hover:text-primary-orange transition-colors duration-200 font-medium"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>

                  {/* Right side */}
                  <div className="hidden md:flex items-center space-x-4">
                    <Button variant="ghost" size="icon">
                      <Search className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="relative">
                      <Bell className="w-4 h-4" />
                      <Badge className="absolute -top-1 -right-1 w-4 h-4 p-0 flex items-center justify-center bg-error-red text-white text-xs">
                        3
                      </Badge>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <User className="w-4 h-4" />
                    </Button>
                    <Button variant="primary" size="medium">
                      開始學習
                    </Button>
                  </div>

                  {/* Mobile menu button */}
                  <div className="md:hidden flex items-center">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                      {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Mobile Navigation */}
              {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t">
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navItems.map((item) => (
                      <a
                        key={item.id}
                        href="#"
                        className="flex items-center px-3 py-2 text-text-gray hover:text-primary-orange hover:bg-light-orange rounded-md transition-colors"
                      >
                        <item.icon className="w-4 h-4 mr-3" />
                        {item.label}
                      </a>
                    ))}
                    <div className="border-t pt-2 mt-2">
                      <Button variant="primary" size="medium" className="w-full">
                        開始學習
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </nav>
          </CardContent>
        </Card>
      </div>

      {/* Breadcrumbs */}
      <div>
        <h3 className="text-2xl font-poppins font-bold text-text-black mb-6">麵包屑導航 Breadcrumbs</h3>
        
        <Card>
          <CardContent className="p-6">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm">
                {breadcrumbItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    {index > 0 && (
                      <ChevronDown className="w-4 h-4 text-text-gray mx-2 rotate-[-90deg]" />
                    )}
                    {item.href ? (
                      <a 
                        href={item.href} 
                        className="text-primary-orange hover:text-primary-orange/80 transition-colors"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span className="text-text-gray font-medium">{item.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </CardContent>
        </Card>
      </div>

      {/* Tab Navigation */}
      <div>
        <h3 className="text-2xl font-poppins font-bold text-text-black mb-6">分頁導航 Tab Navigation</h3>
        
        <Card>
          <CardContent className="p-6">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                {[
                  { id: 'courses', label: '全部課程', count: 24 },
                  { id: 'english', label: '英語', count: 8 },
                  { id: 'math', label: '數學', count: 6 },
                  { id: 'art', label: '美術', count: 10 }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-primary-orange text-primary-orange'
                        : 'border-transparent text-text-gray hover:text-text-black hover:border-gray-300'
                    }`}
                  >
                    {tab.label}
                    <Badge variant="secondary" className="ml-2">
                      {tab.count}
                    </Badge>
                  </button>
                ))}
              </nav>
            </div>
            
            <div className="mt-6">
              <p className="text-text-gray">
                當前選擇：<span className="font-medium text-text-black">{
                  [
                    { id: 'courses', label: '全部課程' },
                    { id: 'english', label: '英語課程' },
                    { id: 'math', label: '數學課程' },
                    { id: 'art', label: '美術課程' }
                  ].find(tab => tab.id === activeTab)?.label
                }</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pagination */}
      <div>
        <h3 className="text-2xl font-poppins font-bold text-text-black mb-6">分頁導航 Pagination</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-poppins">標準分頁</CardTitle>
            </CardHeader>
            <CardContent>
              <nav className="flex items-center justify-center space-x-2">
                <Button variant="ghost" size="small" disabled>
                  上一頁
                </Button>
                
                {[1, 2, 3, 4, 5].map((page) => (
                  <Button
                    key={page}
                    variant={page === 2 ? "primary" : "ghost"}
                    size="small"
                    className="w-8 h-8 p-0"
                  >
                    {page}
                  </Button>
                ))}
                
                <span className="text-text-gray">...</span>
                
                <Button variant="ghost" size="small" className="w-8 h-8 p-0">
                  10
                </Button>
                
                <Button variant="secondary" size="small">
                  下一頁
                </Button>
              </nav>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-poppins">簡化分頁 (行動裝置)</CardTitle>
            </CardHeader>
            <CardContent>
              <nav className="flex items-center justify-between">
                <Button variant="ghost" size="small" disabled>
                  上一頁
                </Button>
                
                <span className="text-sm text-text-gray">
                  第 2 頁，共 10 頁
                </span>
                
                <Button variant="secondary" size="small">
                  下一頁
                </Button>
              </nav>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer Navigation */}
      <div>
        <h3 className="text-2xl font-poppins font-bold text-text-black mb-6">頁腳導航 Footer Navigation</h3>
        
        <Card>
          <CardContent className="p-0">
            <footer className="bg-teal-section text-white">
              <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-teal-section" />
                      </div>
                      <span className="ml-2 text-xl font-poppins font-bold">
                        快樂學習
                      </span>
                    </div>
                    <p className="text-white/80 text-sm">
                      為兒童提供專業、有趣的學習體驗
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4">課程</h4>
                    <ul className="space-y-2 text-sm text-white/80">
                      <li><a href="#" className="hover:text-white transition-colors">英語課程</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">數學課程</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">美術課程</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">音樂課程</a></li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4">關於我們</h4>
                    <ul className="space-y-2 text-sm text-white/80">
                      <li><a href="#" className="hover:text-white transition-colors">師資介紹</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">教學理念</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">學習成果</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">聯絡我們</a></li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4">支援</h4>
                    <ul className="space-y-2 text-sm text-white/80">
                      <li><a href="#" className="hover:text-white transition-colors">常見問題</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">隱私政策</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">服務條款</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">技術支援</a></li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
                  <p className="text-white/60 text-sm">
                    © 2025 快樂學習平台. 版權所有.
                  </p>
                  <div className="flex space-x-4 mt-4 md:mt-0">
                    <Button variant="ghost" size="small" className="text-white hover:text-white hover:bg-white/10">
                      <Download className="w-4 h-4 mr-2" />
                      下載APP
                    </Button>
                  </div>
                </div>
              </div>
            </footer>
          </CardContent>
        </Card>
      </div>

      {/* Navigation States */}
      <div>
        <h3 className="text-2xl font-poppins font-bold text-text-black mb-6">導航狀態 Navigation States</h3>
        
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-text-black mb-3">預設狀態</h4>
                <div className="space-y-2">
                  <a href="#" className="block p-2 text-text-gray hover:text-primary-orange transition-colors">
                    課程列表
                  </a>
                  <a href="#" className="block p-2 text-text-gray hover:text-primary-orange transition-colors">
                    師資介紹
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-text-black mb-3">啟用狀態</h4>
                <div className="space-y-2">
                  <a href="#" className="block p-2 text-primary-orange font-medium bg-light-orange rounded">
                    當前頁面
                  </a>
                  <a href="#" className="block p-2 text-text-gray hover:text-primary-orange transition-colors">
                    其他頁面
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-text-black mb-3">禁用狀態</h4>
                <div className="space-y-2">
                  <span className="block p-2 text-text-gray/50 cursor-not-allowed">
                    即將開放
                  </span>
                  <a href="#" className="block p-2 text-text-gray hover:text-primary-orange transition-colors">
                    可用連結
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};