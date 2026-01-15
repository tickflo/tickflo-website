import { getDocs } from './docs';

async function getDocsPage(slug: string) {
  return await getDocs(slug);
}

export { getDocsPage };
