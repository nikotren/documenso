import type { HTMLAttributes } from 'react';

import Link from 'next/link';

import { cn } from '@documenso/ui/lib/utils';

export type SigningDisclosureProps = HTMLAttributes<HTMLParagraphElement>;

export const SigningDisclosure = ({ className, ...props }: SigningDisclosureProps) => {
  return (
    <p className={cn('text-muted-foreground text-xs', className)} {...props}>
      Pokračováním svého elektronického podpisu berete na vědomí a souhlasíte s tím, že bude použit
      k podpisu daného dokumentu a má stejnou právní platnost jako vlastnoruční podpis. Dokončením
      procesu elektronického podpisu potvrzujete, že rozumíte těmto podmínkám a přijímáte je.
      <span className="mt-2 block">
        Přečtěte si celou{' '}
        <Link
          className="text-documenso-700 underline"
          href="/articles/signature-disclosure"
          target="_blank"
        >
          smlouvu o poskytnutí podpisu
        </Link>
        .
      </span>
    </p>
  );
};
