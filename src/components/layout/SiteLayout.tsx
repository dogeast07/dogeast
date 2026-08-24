import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';

/**
 * 全局布局——导航 + 页面内容 + 页脚；路由切换时回到顶部。
 */
function SiteLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className='flex min-h-screen flex-col bg-slate-950 text-slate-100'>
      <SiteHeader />
      <main className='flex-1'>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}

export default SiteLayout;
