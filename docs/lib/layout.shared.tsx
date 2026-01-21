import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2">
          <Image 
            src="/logo.svg" 
            alt="InferiaLLM" 
            width={35} 
            height={35}
            style={{ width: '35px', height: 'auto' }}
            priority
          />
          <span className="font-bold text-xl tracking-tighter">
            InferiaLLM
          </span>
        </div>
      ),
    },
    githubUrl: 'https://github.com/InferiaAI/website',
  };
}
