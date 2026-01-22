import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="InferiaLLM"
            width={120}
            height={50}
            style={{ height: '50px', width: 'auto' }}
            priority
          />
        </div>
      ),
    },
    githubUrl: 'https://github.com/InferiaAI/website',
  };
}
