import Pentagram from '@/components/Pentagram';

/**
 * 底部页脚——作品集全局尾部。
 */
function SiteFooter() {
  return (
    <footer className='border-t border-white/10 bg-slate-950 py-10'>
      <div className='mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 text-center sm:px-6'>
        <Pentagram className='h-5 w-5 text-amber-400/70' />
        <p className='text-sm text-slate-300'>胡一东 · IP 视觉延展</p>
        <p className='text-xs text-slate-500'>邮箱：1362388080@qq.com · 电话：15669797875</p>
      </div>
    </footer>
  );
}

export default SiteFooter;
