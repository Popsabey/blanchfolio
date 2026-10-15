import { applatchkidsCaseStudy } from './applatchkids';
import type { CaseStudy } from './types';

export const allCaseStudies: CaseStudy[] = [
  applatchkidsCaseStudy,
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return allCaseStudies.find((cs) => cs.slug === slug);
}

export * from './types';
export { applatchkidsCaseStudy };