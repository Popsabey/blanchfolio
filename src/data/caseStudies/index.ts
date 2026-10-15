import { applatchkidsCaseStudy } from './applatchkids';
import { chadaCaseStudy } from './chada';
import type { CaseStudy } from './types';

export const allCaseStudies: CaseStudy[] = [
  applatchkidsCaseStudy,
  chadaCaseStudy,
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return allCaseStudies.find((cs) => cs.slug === slug);
}

export * from './types';
export { applatchkidsCaseStudy, chadaCaseStudy };