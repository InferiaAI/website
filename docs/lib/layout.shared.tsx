import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <Image 
          src="/logo.svg" 
          alt="InferiaLLM" 
          width={100} 
          height={53}
          style={{ width: '100px', height: 'auto' }}
          priority
        />
      ),
    },
  };
}
