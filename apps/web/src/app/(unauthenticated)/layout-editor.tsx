import React from 'react';

import { setupI18nSSR } from '@documenso/lib/client-only/providers/i18n.server';

type UnauthenticatedEditorLayoutProps = {
  children: React.ReactNode;
};

export default function UnauthenticatedEditorLayout({
  children,
}: UnauthenticatedEditorLayoutProps) {
  setupI18nSSR();

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <div className="w-full">
        <div className="relative w-full">{children}</div>
      </div>
    </main>
  );
}
