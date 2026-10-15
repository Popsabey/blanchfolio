import { applatchkidsCaseStudy } from './applatchkids';
import { chadaCaseStudy } from './chada';
import { redactedCaseStudy } from './redacted';
import type { CaseStudy } from './types';

export const allCaseStudies: CaseStudy[] = [
  applatchkidsCaseStudy,
  chadaCaseStudy,
  redactedCaseStudy,
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return allCaseStudies.find((study) => study.slug === slug);
}

export * from './types';
export { applatchkidsCaseStudy, chadaCaseStudy, redactedCaseStudy };
