// 作品集静态数据：集中管理图片资源与画廊结构，页面统一从这里取用。
import extension01 from '@/assets/extension/ext-01.png';
import extension02 from '@/assets/extension/ext-02.png';
import extension03 from '@/assets/extension/ext-03.png';
import extension04 from '@/assets/extension/ext-04.png';
import extension05 from '@/assets/extension/ext-05.png';
import extension07 from '@/assets/extension/ext-07.png';
import extensionOther01 from '@/assets/extension/ext-other-01.png';
import extensionOther02 from '@/assets/extension/ext-other-02.png';
import extensionOther03 from '@/assets/extension/ext-other-03.png';
import extensionOther04 from '@/assets/extension/ext-other-04.png';
import poster1 from '@/assets/posters/poster-1.png';
import poster2 from '@/assets/posters/poster-2.png';
import projectBackgroundImage from '@/assets/posters/p2911517422.webp';
import merch01 from '@/assets/merch/merch-01.png';
import merch02 from '@/assets/merch/merch-02.png';
import merch04 from '@/assets/merch/merch-04.webp';
import merch05 from '@/assets/merch/merch-05.webp';
import work8 from '@/assets/works/work-8.png';
import work9 from '@/assets/works/work-9.png';
import work10 from '@/assets/works/work-10.png';

/** 单个作品项：图片地址 + 图注。 */
export interface Work {
  src: string;
  caption: string;
  /** 可选：瀑布流中为该单项套用固定长宽比并裁剪填充（如 aspect-[4/3]）。 */
  aspect?: string;
}

/** 版权方原素材（横图）。 */
export const posters: Work[] = [
  { src: poster1, caption: '版权方原素材 · I' },
  { src: poster2, caption: '版权方原素材 · II' },
];

/** 项目背景配图。 */
export const projectBackground = projectBackgroundImage;

/** 主题设计总览（三大主题风格代表视觉）。 */
export const themeOverview: Work[] = [
  { src: work9, caption: '主题延展设计 · 霓虹' },
  { src: work8, caption: '主题延展设计 · 宝石' },
  { src: work10, caption: '主题延展设计 · 涂鸦' },
];

/** 实际产出的系列延展设计（原始拼图整图展示，不裁剪）。 */
export const extensionDesigns: Work[] = [
  { src: extension01, caption: '延展设计 · 宝石系列I' },
  { src: extension02, caption: '延展设计 · 宝石系列II' },
  { src: extension07, caption: '延展设计 · 霓虹系列 · I' },
  { src: extension04, caption: '延展设计 · 霓虹系列II' },
  { src: extension05, caption: '延展设计 · 霓虹系列III' },
  { src: extension03, caption: '延展设计 · 宝石系列 · III' },
];

/** 其他延展设计（延展设计 · 实际产出之外的补充作品，瀑布流展示）。 */
export const extensionOtherDesigns: Work[] = [
  { src: extensionOther01, caption: '其他延展设计 · I' },
  { src: extensionOther02, caption: '其他延展设计 · II' },
  { src: extensionOther03, caption: '其他延展设计 · III' },
  { src: extensionOther04, caption: '其他延展设计 · IV' },
];

/** 周边实物（系列延展落地的实体产品照片）。 */
export const merchProducts: Work[] = [
  { src: merch01, caption: '周边实物 · 1', aspect: 'aspect-[4/3]' },
  { src: merch02, caption: '周边实物 · 2', aspect: 'aspect-[4/3]' },
  { src: merch04, caption: '周边实物 · 4' },
  { src: merch05, caption: '周边实物 · 5' },
];
