import { prisma } from '@documenso/prisma';
import type { TemplateWithDetails } from '@documenso/prisma/types/template';

export type GetTemplateDirectOptions = {
  id: number;
};

export const getTemplateDirect = async ({
  id,
}: GetTemplateDirectOptions): Promise<TemplateWithDetails> => {
  return await prisma.template.findFirstOrThrow({
    where: {
      id,
    },
    include: {
      directLink: true,
      templateDocumentData: true,
      templateMeta: true,
      Recipient: true,
      Field: true,
    },
  });
};
