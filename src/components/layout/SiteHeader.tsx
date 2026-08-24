import { NavLink } from 'react-router-dom';
import { Mail } from 'lucide-react';
import Pentagram from '@/components/Pentagram';
import { cn } from '@/lib/utils';

const navItems = [
  { to: '/', label: '个人介绍', end: true },
  { to: '/project/million-dollar-pentagram', label: '百万美元的五棱星' },
];

/**
 * 顶部导航——作品集全局头部，随路由高亮当前栏目。
 */
function SiteHeader() {
  return (
    <header className='sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur'>
      <div className='mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6'>
        <NavLink to='/' className='flex items-center gap-2.5 text-white'>
          <Pentagram className='h-6 w-6 text-amber-400' />
          <span className='text-sm font-semibold tracking-widest'>胡一东 · 作品集</span>
        </NavLink>

        <nav className='flex items-center gap-1 sm:gap-2'>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                cn(
                  'rounded-md px-3 py-2 text-sm transition-colors',
                  isActive
                    ? 'bg-white/10 text-amber-300'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href='mailto:1362388080@qq.com'
            className='ml-2 hidden items-center gap-1.5 rounded-md border border-amber-400/40 px-3 py-2 text-sm text-amber-300 transition-colors hover:bg-amber-400/10 sm:inline-flex'
          >
            <Mail className='h-4 w-4' />
            联系我
          </a>
        </nav>
      </div>
    </header>
  );
}

export default SiteHeader;
