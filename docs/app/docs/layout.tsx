import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  // @ts-ignore React 19 types compatibility
  const layout = <DocsLayout tree={source.getPageTree()} {...baseOptions()}>{children}</DocsLayout>;
  return layout;
}
