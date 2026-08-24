import { cn } from '@/lib/utils';

interface PentagramProps {
  className?: string;
  strokeWidth?: number;
}

/**
 * 五棱星（五角星）装饰图形——呼应「百万美元的五棱星」项目主题。
 * 通过正弦/余弦按角度生成五角星轮廓，无外部图片依赖。
 */
function Pentagram({ className, strokeWidth = 1.5 }: PentagramProps) {
  const points = Array.from({ length: 10 }, (_, i) => {
    const radius = i % 2 === 0 ? 48 : 19;
    const angle = (Math.PI / 5) * i - Math.PI / 2;
    const x = 50 + radius * Math.cos(angle);
    const y = 50 + radius * Math.sin(angle);
    return `${x.toFixed(2)},${y.toFixed(2)}`;
  }).join(' ');

  return (
    <svg viewBox='0 0 100 100' className={cn('h-6 w-6', className)} aria-hidden='true'>
      <polygon
        points={points}
        fill='none'
        stroke='currentColor'
        strokeWidth={strokeWidth}
        strokeLinejoin='round'
      />
    </svg>
  );
}

export default Pentagram;
