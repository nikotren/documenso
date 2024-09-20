import React from 'react';

import { redirect } from 'next/navigation';

import { getTemplateDirect } from '@documenso/lib/server-only/template/get-template-direct';

import { EditTemplateForm } from './edit-template';

export type TemplatePageViewProps = {
  params: {
    id: string;
  };
};

export const TemplatePageView = async ({ params }: TemplatePageViewProps) => {
  const { id } = params;

  const templateId = Number(id);

  if (!templateId || Number.isNaN(templateId)) {
    redirect('/');
  }

  const template = await getTemplateDirect({
    id: templateId,
  }).catch(() => null);

  if (!template || !template.templateDocumentData) {
    redirect('/');
  }

  const isTemplateEnterprise = false;

  return (
    <div className="mx-auto -mt-4 max-w-screen-xl px-4 md:px-8">
      <div className="flex flex-col justify-between sm:flex-row">
        <div>
          <h1 className="mt-4 truncate text-2xl font-semibold md:text-3xl" title={template.title}>
            {template.title}
          </h1>
        </div>
      </div>

      <EditTemplateForm
        className="mt-6"
        initialTemplate={template}
        isEnterprise={isTemplateEnterprise}
      />
    </div>
  );
};
