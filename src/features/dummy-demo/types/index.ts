export type FeatureFilter = 'all' | 'implemented' | 'comingSoon';

export interface DummyDemoFeature {
  key: string;
  title: string;
  desc: string;
  path?: string;
  comingSoon?: boolean;
}