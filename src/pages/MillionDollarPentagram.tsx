import { Link } from 'react-router-dom';
import { ArrowLeft, Eye, Layers, Palette, PenTool, Star } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { cn } from '@/lib/utils';
import {
  merchProducts,
  extensionDesigns,
  extensionOtherDesigns,
  themeOverview,
  posters,
  projectBackground,
  type Work,
} from '@/lib/portfolio';

const keywordGroups = [
  { theme: '神秘', keywords: ['推理', '谜题', '线索追踪', '未知探索'] },
  { theme: '怪盗', keywords: ['优雅', '预告函', '戏剧性', '巧妙对决'] },
  { theme: '宝石', keywords: ['珍藏', '华丽', '稀有感', '光泽质感'] },
  { theme: '都市', keywords: ['夜幕', '霓虹', '城市空间', '现代感'] },
  { theme: '冒险', keywords: ['探索', '追寻', '旅程', '突破'] },
];

const roleCards = [
  {
    icon: Layers,
    title: '主题企划参与',
    description:
      '参与《名侦探柯南 30 周年纪念企划》与《名侦探柯南：百万美元的五棱星》等头部 IP 项目，基于版权方角色资产理解 IP 调性与传播目标。',
  },
  {
    icon: PenTool,
    title: '视觉延展设计',
    description: '完成 10+ 类主题方案设计，输出 100+ 张高质量视觉素材，覆盖角色组合与画面构成探索。',
  },
  {
    icon: Eye,
    title: '视觉一致性把控',
    description: '全程把控视觉风格，确保设计语言与 IP 世界观及品牌调性保持一致。',
  },
];

const analysis = [
  {
    icon: Star,
    title: '核心符号 · 五棱星',
    description:
      '提炼电影标题中的「五棱星」为核心视觉符号，贯穿海报、周边与包装，形成强记忆点与系列辨识度。',
  },
  {
    icon: Palette,
    title: '色彩体系 · 推理蓝 × 宝石金',
    description:
      '以柯南标志性的「推理蓝」为基底，叠加怪盗基德的「月光白」与宝石的「鎏金」，冷峻推理感与华丽珠宝感并存。',
  },
  {
    icon: Layers,
    title: '系列延展 · 产品矩阵',
    description:
      '将主视觉延展为「霓虹」「宝石」等主题周边系列，让单一 IP 视觉转化为可消费的收藏型产品。',
  },
];

interface GalleryCardProps {
  item: Work;
  aspect?: string;
  className?: string;
  /** 图片适配方式：cover 裁剪填充（默认）/ contain 完整缩放留白。 */
  fit?: 'cover' | 'contain';
}

/** 画廊单卡：固定比例时裁剪填充，无比例（瀑布流）时保留原图高度。 */
function GalleryCard({ item, aspect, className, fit = 'cover' }: GalleryCardProps) {
  const contain = fit === 'contain' && Boolean(aspect);
  return (
    <figure
      className={cn(
        'group relative overflow-hidden rounded-xl border border-white/10 bg-slate-900',
        aspect,
        contain && 'p-3',
        className
      )}
    >
      <img
        src={item.src}
        alt={item.caption}
        loading='lazy'
        className={cn(
          'w-full transition-transform duration-500 group-hover:scale-105',
          aspect ? 'h-full' : 'h-auto',
          aspect ? (contain ? 'object-contain' : 'object-cover') : undefined
        )}
      />
      <figcaption className='absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-slate-950/90 to-transparent px-4 pb-3 pt-12 text-sm text-slate-200 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
        {item.caption}
      </figcaption>
    </figure>
  );
}

interface GalleryBlockProps {
  title: string;
  subtitle: string;
  items: Work[];
  variant: 'video' | 'portrait' | 'square' | 'uniform' | 'masonry';
  /** 可选：瀑布流列布局类名（默认 2 列 / sm 3 列）。 */
  columns?: string;
  /** 图片适配方式：cover 裁剪填充（默认）/ contain 完整缩放留白。 */
  fit?: 'cover' | 'contain';
}

/** 固定比例网格的列布局类名（按 variant 区分）。 */
const GRID_COLUMNS: Record<Exclude<GalleryBlockProps['variant'], 'masonry'>, string> = {
  video: 'sm:grid-cols-2',
  portrait: 'sm:grid-cols-3',
  square: 'grid-cols-2 sm:grid-cols-4',
  uniform: 'grid-cols-2 lg:grid-cols-3',
};

/** 固定比例网格的卡片长宽比（按 variant 区分）。 */
const GRID_ASPECT: Record<Exclude<GalleryBlockProps['variant'], 'masonry'>, string> = {
  video: 'aspect-video',
  portrait: 'aspect-[4/5]',
  square: 'aspect-square',
  uniform: 'aspect-[4/3]',
};

/** 画廊分组：标题 + 说明 + 对应版式（横图/竖图/方图/统一比例/瀑布流）。 */
function GalleryBlock({ title, subtitle, items, variant, columns, fit }: GalleryBlockProps) {
  return (
    <div className='mt-14'>
      <div className='mb-6'>
        <h3 className='text-xl font-semibold text-white'>{title}</h3>
        <p className='mt-1 text-sm text-slate-400'>{subtitle}</p>
      </div>

      {variant === 'masonry' ? (
        <div className={cn('gap-4 [&>*]:mb-4', columns ?? 'columns-2 sm:columns-3')}>
          {items.map((item) => (
            <GalleryCard
              key={item.src}
              item={item}
              aspect={item.aspect}
              className='break-inside-avoid'
            />
          ))}
        </div>
      ) : (
        <div className={cn('grid gap-4', GRID_COLUMNS[variant])}>
          {items.map((item) => (
            <GalleryCard
              key={item.src}
              item={item}
              aspect={GRID_ASPECT[variant]}
              fit={fit ?? (variant === 'uniform' ? 'contain' : 'cover')}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * 「百万美元的五棱星」项目解析页——背景、角色职责、设计解析与作品画廊。
 */
function MillionDollarPentagram() {
  return (
    <div className='bg-slate-950 text-slate-100'>
      {/* Hero */}
      <section className='relative overflow-hidden'>
        <div className='pointer-events-none absolute -right-24 top-8 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl' />
        <div className='pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl' />

        <div className='relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24'>
          <Link
            to='/'
            className='inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-amber-300'
          >
            <ArrowLeft className='h-4 w-4' /> 返回个人介绍
          </Link>

          <div className='mt-8 max-w-3xl'>
            <p className='text-xs font-semibold uppercase tracking-[0.3em] text-amber-400'>
              名侦探柯南 · 第 27 部剧场版
            </p>
            <h1 className='mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl'>
              「百万美元的五棱星」
            </h1>
            <p className='mt-2 text-lg text-slate-300'>IP 视觉延展 · 项目解析</p>
            <p className='mt-5 max-w-2xl leading-relaxed text-slate-400'>
              围绕 2024 年柯南剧场版《百万美元的五棱星》，基于版权方提供的角色资产，从核心符号提炼到主题周边落地的 IP 视觉延展设计——把一颗荧幕里的五棱星，延展成可触摸、可收藏的作品。
            </p>
            <div className='mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5'>
              {keywordGroups.map((group) => (
                <div key={group.theme}>
                  <div className='mb-3 text-sm font-semibold text-amber-300'>{group.theme}</div>
                  <ul className='space-y-2'>
                    {group.keywords.map((keyword) => (
                      <li key={keyword} className='flex items-center gap-2 text-sm text-slate-300'>
                        <span className='h-1 w-1 flex-none rounded-full bg-amber-400' />
                        {keyword}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 项目背景 */}
      <section className='mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20'>
        <SectionHeading eyebrow='Background' title='项目背景' />
        <div className='grid gap-8 lg:grid-cols-2 lg:items-center'>
          <div className='space-y-4 leading-relaxed text-slate-300'>
            <p>
              《名侦探柯南：百万美元的五棱星》是《名侦探柯南》系列第 27
              部剧场版，于 2024 年上映。故事以北海道函馆为舞台，怪盗基德、服部平次与柯南围绕一颗
              「五棱星」形状的传说宝藏展开推理对决。
            </p>
            <p>
              影片上映恰逢「柯南 30 周年纪念」，是当年最具话题度的头部 IP
              企划之一。作为 IP 授权与衍生开发的重要节点，围绕影片的周边与主题延展设计需求密集、调性要求极高。
            </p>
            <p>实习期间，我以设计部实习生身份参与该项目，基于版权方提供的角色资产，承担 IP 主题视觉延展设计工作。</p>
          </div>
          <div className='overflow-hidden rounded-2xl border border-white/10'>
            <img
              src={projectBackground}
              alt='百万美元的五棱星 项目背景'
              className='h-full w-full object-cover'
            />
          </div>
        </div>
      </section>

      {/* 我的角色与职责 */}
      <section className='border-t border-white/10 bg-white/[0.02]'>
        <div className='mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20'>
          <SectionHeading
            eyebrow='My Role'
            title='我的角色与职责'
            description='设计部实习生 · 视觉延展方向'
          />
          <div className='grid gap-6 md:grid-cols-3'>
            {roleCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className='rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-amber-400/40'
                >
                  <Icon className='mb-4 h-6 w-6 text-amber-400' />
                  <h3 className='text-base font-semibold text-white'>{card.title}</h3>
                  <p className='mt-3 text-sm leading-relaxed text-slate-400'>{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 设计解析 */}
      <section className='mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20'>
        <SectionHeading
          eyebrow='Design'
          title='设计解析'
          description='从视觉设计角度，拆解五棱星主题延展的底层逻辑。'
        />
        <div className='grid gap-6 md:grid-cols-3'>
          {analysis.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className='rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-amber-400/40'
              >
                <Icon className='mb-4 h-6 w-6 text-amber-400' />
                <h3 className='text-base font-semibold text-white'>{item.title}</h3>
                <p className='mt-3 text-sm leading-relaxed text-slate-400'>{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 作品展示 */}
      <section className='border-t border-white/10 bg-white/[0.02]'>
        <div className='mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20'>
          <SectionHeading
            eyebrow='Gallery'
            title='作品展示'
            description='五棱星主题下的系列延展设计合集。'
          />

          <GalleryBlock
            title='版权方原素材'
            subtitle='版权方提供的影片官方素材，作为系列延展设计的视觉基底。'
            items={posters}
            variant='video'
          />
          <GalleryBlock
            title='主题设计总览'
            subtitle='霓虹、宝石、涂鸦三大主题风格，呈现系列延展的视觉总览。'
            items={themeOverview}
            variant='portrait'
          />
          <GalleryBlock
            title='延展设计 · 实际产出'
            subtitle='围绕五棱星主题实际完成的系列延展设计，涵盖徽章、卡片、图形等多元形态，自由排列呈现。'
            items={extensionDesigns}
            variant='masonry'
            columns='columns-2 gap-3 sm:columns-3 [&>*]:mb-3'
          />
          <GalleryBlock
            title='其他延展设计'
            subtitle='延展设计 · 实际产出之外的补充延展作品，瀑布式自由排列呈现。'
            items={extensionOtherDesigns}
            variant='masonry'
            columns='columns-2 gap-3 sm:columns-3 [&>*]:mb-3'
          />
          <GalleryBlock
            title='周边实物'
            subtitle='系列延展落地的实体周边产品，涵盖徽章、卡片、相框、冰箱贴等多元形态。'
            items={merchProducts}
            variant='masonry'
            columns='columns-1 gap-3 sm:columns-2 [&>*]:mb-3'
          />
        </div>
      </section>
    </div>
  );
}

export default MillionDollarPentagram;
