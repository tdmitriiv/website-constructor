import { Page } from '@/types/entities';
import Pages from '@/resources/pages.json';

const getList = (): Promise<Page[]> => {
  return new Promise<Page[]>((resolve) => {
    resolve(Pages);
  });
};

export {
  getList,
};
