import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Mail, User, Lock, Search, Phone } from 'lucide-react';

export const FormShowcase: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    bio: '',
    newsletter: false,
    grade: '',
    notifications: true
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = '請輸入您的姓名';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = '請輸入電子郵件';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '請輸入有效的電子郵件格式';
    }
    
    if (formData.password.length < 6) {
      newErrors.password = '密碼至少需要6個字符';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert('表單提交成功！');
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-poppins font-bold text-text-black mb-6">表單輸入元件 Form Input Components</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Text Inputs */}
          <Card>
            <CardHeader>
              <CardTitle className="font-poppins">文字輸入框 Text Inputs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">姓名 *</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-gray w-4 h-4" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="請輸入您的姓名"
                    className={`pl-10 ${errors.name ? 'border-error-red focus:border-error-red' : ''}`}
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                {errors.name && <p className="text-error-red text-sm">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">電子郵件 *</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-gray w-4 h-4" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    className={`pl-10 ${errors.email ? 'border-error-red focus:border-error-red' : ''}`}
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                {errors.email && <p className="text-error-red text-sm">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">密碼 *</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-gray w-4 h-4" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="至少6個字符"
                    className={`pl-10 ${errors.password ? 'border-error-red focus:border-error-red' : ''}`}
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                  />
                </div>
                {errors.password && <p className="text-error-red text-sm">{errors.password}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">手機號碼</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-gray w-4 h-4" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="0912-345-678"
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="search">搜尋</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-gray w-4 h-4" />
                  <Input
                    id="search"
                    type="search"
                    placeholder="搜尋課程..."
                    className="pl-10"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Textarea and Select */}
          <Card>
            <CardHeader>
              <CardTitle className="font-poppins">文字區域與選擇器</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="bio">自我介紹</Label>
                <Textarea
                  id="bio"
                  placeholder="請簡單介紹您自己..."
                  className="min-h-[100px] resize-none"
                  value={formData.bio}
                  onChange={(e) => setFormData({...formData, bio: e.target.value})}
                />
                <p className="text-text-gray text-xs">最多200字</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="age">年齡層</Label>
                <Select onValueChange={(value) => setFormData({...formData, age: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="請選擇年齡層" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3-5">3-5歲</SelectItem>
                    <SelectItem value="6-8">6-8歲</SelectItem>
                    <SelectItem value="9-12">9-12歲</SelectItem>
                    <SelectItem value="13-15">13-15歲</SelectItem>
                    <SelectItem value="adult">成人</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>年級</Label>
                <RadioGroup 
                  value={formData.grade} 
                  onValueChange={(value) => setFormData({...formData, grade: value})}
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="kindergarten" id="kindergarten" />
                    <Label htmlFor="kindergarten">幼稚園</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="elementary" id="elementary" />
                    <Label htmlFor="elementary">小學</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="middle" id="middle" />
                    <Label htmlFor="middle">國中</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="high" id="high" />
                    <Label htmlFor="high">高中</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="newsletter" 
                    checked={formData.newsletter}
                    onCheckedChange={(checked) => setFormData({...formData, newsletter: !!checked})}
                  />
                  <Label htmlFor="newsletter" className="text-sm">
                    訂閱電子報，獲取最新課程資訊
                  </Label>
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="notifications" className="text-sm">
                    接收推播通知
                  </Label>
                  <Switch 
                    id="notifications"
                    checked={formData.notifications}
                    onCheckedChange={(checked) => setFormData({...formData, notifications: checked})}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Form States */}
      <div>
        <h3 className="text-2xl font-poppins font-bold text-text-black mb-6">表單狀態 Form States</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-poppins">預設狀態</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Input placeholder="預設輸入框" />
                <p className="text-xs text-text-gray">邊框色彩：#7a7a7a</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-poppins">聚焦狀態</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Input placeholder="聚焦輸入框" className="ring-2 ring-primary-orange border-primary-orange" />
                <p className="text-xs text-text-gray">邊框變為品牌橙色</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-poppins">錯誤狀態</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Input 
                  placeholder="錯誤輸入框" 
                  className="border-error-red focus:border-error-red ring-error-red" 
                />
                <p className="text-error-red text-xs">請輸入有效內容</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-poppins">禁用狀態</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Input placeholder="禁用輸入框" disabled />
                <p className="text-xs text-text-gray">不可編輯狀態</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Complete Form Example */}
      <div>
        <h3 className="text-2xl font-poppins font-bold text-text-black mb-6">完整表單範例 Complete Form Example</h3>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-poppins">學員註冊表單</CardTitle>
            <p className="text-text-gray">請填寫以下資訊完成註冊</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="form-name">姓名 *</Label>
                  <Input
                    id="form-name"
                    type="text"
                    placeholder="請輸入您的姓名"
                    className={errors.name ? 'border-error-red' : ''}
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                  {errors.name && <p className="text-error-red text-sm">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="form-email">電子郵件 *</Label>
                  <Input
                    id="form-email"
                    type="email"
                    placeholder="example@email.com"
                    className={errors.email ? 'border-error-red' : ''}
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                  {errors.email && <p className="text-error-red text-sm">{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="form-password">密碼 *</Label>
                <Input
                  id="form-password"
                  type="password"
                  placeholder="至少6個字符"
                  className={errors.password ? 'border-error-red' : ''}
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
                {errors.password && <p className="text-error-red text-sm">{errors.password}</p>}
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-sm">
                  我同意 <span className="text-primary-orange underline cursor-pointer">服務條款</span> 和 
                  <span className="text-primary-orange underline cursor-pointer ml-1">隱私政策</span>
                </Label>
              </div>

              <div className="flex gap-4">
                <Button type="submit" variant="primary" size="medium" className="flex-1">
                  完成註冊
                </Button>
                <Button type="button" variant="secondary" size="medium">
                  取消
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};