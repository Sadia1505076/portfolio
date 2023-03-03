import { MDXProvider } from '@mdx-js/react';
import components from 'components/MDXComponents';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children, ...props }: LayoutProps) {
  return (
    <MDXProvider components={components}>
      <div className="w-[80%] mx-auto p-6 text-gray-600 dark:text-gray-400">{children}</div>
    </MDXProvider>
  );
}
