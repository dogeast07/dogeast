import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Briefcase,
  GraduationCap,
  Mail,
  Palette,
  Sparkles,
  Target,
  Wand2,
} from 'lucide-react';
import Pentagram from '@/components/Pentagram';
import SectionHeading from '@/components/SectionHeading';
import { posters } from '@/lib/portfolio';

const courses = ['广告编排设计', '创意图形表现', '广告创意', '广告策划', '广告摄影'];

const designTools = ['Photoshop', 'Illustrator', 'Premiere', 'C4D', 'Procreate'];
const aiTools = ['Midjourney', '小灵雀', 'Office 办公'];

const certificates = [
  '大学英语四级',
  '普通话国家二级乙等',
  '全国 / 上海计算机一级',
  '商业智能数据可视化分析证书',
  'C2 机动车驾驶证',
];

const internshipDuties = [
  {
    icon: Palette,
    title: '视觉延展',
    description:
      '参与《名侦探柯南 30 周年纪念企划》《名侦探柯南：百万美元的五棱星》等头部 IP 项目，基于版权方角色资产与项目主题需求，完成 IP 主题视觉延展设计，累计完成 10+ 类主题方案、输出 100+ 张高质量视觉素材，确保设计语言与 IP 世界观及品牌调性一致。',
  },
  {
    icon: Wand2,
    title: '特摄处理',
    description:
      '负责《奥特曼》《假面骑士》等特摄 IP 人物素材处理，包括复杂背景分离、发丝级精修、角色细节优化，通过优化流程与标准化操作，日均产出 15 张高精度素材，效率较同期实习生提升约 4 倍。',
  },
  {
    icon: Target,
    title: '项目支持',
    description:
      '承接团队日常视觉需求，负责团队宣传物料、招聘海报、内部汇报 PPT 等设计制作，协同设计、运营及项目团队完成视觉信息传递，维护团队品牌形象。',
  },
];

/**
 * 首页——个人介绍：Hero、关于我、教育背景、实习经历、技能证书与项目精选。
 */
function Home() {
  return (
    <div className='bg-slate-950 text-slate-100'>
      {/* Hero */}
      <section className='relative overflow-hidden'>
        <div className='pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl' />
        <div className='pointer-events-none absolute -right-16 top-40 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl' />

        <div className='relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28'>
          <div className='flex flex-col items-center gap-6 text-center'>
            <Pentagram className='animate-spin-slow h-10 w-10 text-amber-400' />
            <p className='text-xs font-semibold uppercase tracking-[0.35em] text-amber-400'>
              个人作品集 · PORTFOLIO
            </p>
            <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>胡一东</h1>
            <p className='max-w-2xl leading-relaxed text-slate-400'>
              广告学本科、视觉中国签约插画师。曾于上海新创华文化发展有限公司担任设计部实习生，参与
              《名侦探柯南 30 周年纪念企划》《名侦探柯南：百万美元的五棱星》等头部 IP 项目的视觉延展，用
              100+ 张高质量视觉素材，把荧幕里的五棱星变成可收藏的作品。
            </p>
            <div className='mt-2 flex flex-wrap items-center justify-center gap-3'>
              <Link
                to='/project/million-dollar-pentagram'
                className='inline-flex items-center gap-2 rounded-md bg-amber-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-300'
              >
                查看项目解析 <ArrowRight className='h-4 w-4' />
              </Link>
              <a
                href='mailto:1362388080@qq.com'
                className='inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:bg-white/5'
              >
                <Mail className='h-4 w-4' /> 联系我
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 个人介绍 */}
      <section className='mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20'>
        <SectionHeading
          eyebrow='About'
          title='个人介绍'
          description='沉稳、细致、有团队荣誉感的设计师，从广告理论到 IP 落地的完整链路实践者。'
        />
        <div className='grid gap-6 lg:grid-cols-2'>
          <div className='rounded-2xl border border-white/10 bg-white/5 p-8'>
            <div className='mb-4 flex items-center gap-2'>
              <Sparkles className='h-5 w-5 text-amber-400' />
              <h3 className='text-lg font-semibold text-white'>关于我</h3>
            </div>
            <p className='leading-relaxed text-slate-300'>
              广告学本科出身，具备系统的广告理论基础，对网络推广与新媒体传播抱有浓厚兴趣并拥有一定实操经验。日常关注广告营销圈动态，熟悉多种网络推广玩法，善于结合社会热点观察品牌动向，能够从案例中快速提炼传播核心。
            </p>
          </div>

          <div className='rounded-2xl border border-white/10 bg-white/5 p-8'>
            <div className='mb-4 flex items-center gap-2'>
              <Briefcase className='h-5 w-5 text-amber-400' />
              <h3 className='text-lg font-semibold text-white'>基本信息</h3>
            </div>
            <dl className='space-y-3 text-sm'>
              {[
                ['姓名', '胡一东'],
                ['求职意向', '广告设计 · 策划'],
                ['邮箱', '1362388080@qq.com'],
                ['电话', '15669797875'],
              ].map(([key, value]) => (
                <div key={key} className='flex justify-between border-b border-white/5 pb-3'>
                  <dt className='text-slate-400'>{key}</dt>
                  <dd className='text-slate-200'>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* 教育背景 */}
      <section className='border-t border-white/10 bg-white/[0.02]'>
        <div className='mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20'>
          <SectionHeading eyebrow='Education' title='教育背景' />
          <div className='grid gap-6 lg:grid-cols-3'>
            <div className='rounded-2xl border border-white/10 bg-white/5 p-6'>
              <GraduationCap className='mb-4 h-6 w-6 text-amber-400' />
              <h3 className='text-base font-semibold text-white'>上海建桥学院</h3>
              <p className='mt-1 text-sm text-slate-400'>广告学 · 本科</p>
              <p className='mt-1 text-xs text-slate-500'>2020.09 – 2024.06 · GPA 3.0 / 4.0</p>
              <div className='mt-4 flex flex-wrap gap-2'>
                {courses.map((course) => (
                  <span
                    key={course}
                    className='rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-300'
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <div className='rounded-2xl border border-white/10 bg-white/5 p-6'>
              <Award className='mb-4 h-6 w-6 text-amber-400' />
              <h3 className='text-base font-semibold text-white'>所获奖项</h3>
              <p className='mt-2 text-sm leading-relaxed text-slate-300'>
                中国大学生广告艺术节学院奖 · 可比克平面赛道学院奖优秀奖
              </p>
            </div>

            <div className='rounded-2xl border border-white/10 bg-white/5 p-6'>
              <BadgeCheck className='mb-4 h-6 w-6 text-amber-400' />
              <h3 className='text-base font-semibold text-white'>特殊成就</h3>
              <p className='mt-2 text-sm leading-relaxed text-slate-300'>
                视觉中国签约插画师，作品曾登上视觉中国首页推荐榜
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 实习经历 */}
      <section className='mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20'>
        <SectionHeading
          eyebrow='Internship'
          title='实习经历'
          description='2024.01 – 2024.07 · 上海新创华文化发展有限公司 · 设计部实习生'
        />
        <div className='grid gap-6 md:grid-cols-3'>
          {internshipDuties.map((duty) => {
            const Icon = duty.icon;
            return (
              <div
                key={duty.title}
                className='rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-amber-400/40'
              >
                <Icon className='mb-4 h-6 w-6 text-amber-400' />
                <h3 className='text-base font-semibold text-white'>{duty.title}</h3>
                <p className='mt-3 text-sm leading-relaxed text-slate-400'>{duty.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 技能 & 证书 */}
      <section className='border-t border-white/10 bg-white/[0.02]'>
        <div className='mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20'>
          <SectionHeading eyebrow='Skills' title='技能 & 证书' />
          <div className='grid gap-6 lg:grid-cols-3'>
            <div className='rounded-2xl border border-white/10 bg-white/5 p-6'>
              <h3 className='text-sm font-semibold uppercase tracking-wider text-amber-400'>设计软件</h3>
              <div className='mt-4 flex flex-wrap gap-2'>
                {designTools.map((tool) => (
                  <span
                    key={tool}
                    className='rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200'
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className='rounded-2xl border border-white/10 bg-white/5 p-6'>
              <h3 className='text-sm font-semibold uppercase tracking-wider text-amber-400'>
                AI 与办公工具
              </h3>
              <div className='mt-4 flex flex-wrap gap-2'>
                {aiTools.map((tool) => (
                  <span
                    key={tool}
                    className='rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200'
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className='rounded-2xl border border-white/10 bg-white/5 p-6'>
              <h3 className='text-sm font-semibold uppercase tracking-wider text-amber-400'>证书</h3>
              <ul className='mt-4 space-y-2'>
                {certificates.map((certificate) => (
                  <li key={certificate} className='flex items-start gap-2 text-sm text-slate-300'>
                    <span className='mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-amber-400' />
                    {certificate}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 项目精选 */}
      <section className='mx-auto max-w-6xl px-4 pb-20 sm:px-6'>
        <div className='overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950'>
          <div className='grid lg:grid-cols-2'>
            <div className='p-8 sm:p-10'>
              <p className='text-xs font-semibold uppercase tracking-[0.3em] text-amber-400'>
                Featured Project
              </p>
              <h2 className='mt-3 text-2xl font-bold text-white sm:text-3xl'>
                「百万美元的五棱星」项目解析
              </h2>
              <p className='mt-4 leading-relaxed text-slate-400'>
                名侦探柯南第 27 部剧场版的 IP 视觉延展——从五棱星符号提炼，到霓虹、宝石等主题周边的全流程延展。
              </p>
              <Link
                to='/project/million-dollar-pentagram'
                className='mt-6 inline-flex items-center gap-2 rounded-md bg-amber-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-300'
              >
                进入项目解析 <ArrowRight className='h-4 w-4' />
              </Link>
            </div>
            <div className='relative min-h-64 overflow-hidden'>
              <img
                src={posters[0].src}
                alt='百万美元的五棱星 项目主视觉'
                className='absolute inset-0 h-full w-full object-contain'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent' />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
