import { DUMMY_DEMO_FEATURES } from '@/features/dummy-demo/data'
import { FeatureFilter } from '@/features/dummy-demo/types'
import { useTranslations } from '@/hooks/useTranslation'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export function DummyFeaturesList() {
  const { t } = useTranslations('home')
  const [filter, setFilter] = useState<FeatureFilter>('all');
  const [search, setSearch] = useState('');

  const features = DUMMY_DEMO_FEATURES

  const filteredFeatures = features.filter((feature) => {
    if (filter === 'implemented' && feature.comingSoon) return false;
    if (filter === 'comingSoon' && !feature.comingSoon) return false;
    if (search && !feature.title.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <section data-testid="dummy-features-section" className="container mx-auto px-4 py-12 max-w-7xl">
      <h1 data-testid="dummy-features-title" className="text-3xl font-bold mb-8 text-center">{t('dummy_features_title')}</h1>
      
      <div data-testid="search-container" className="flex justify-center mb-6">
        <div className="relative w-full max-w-md">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </span>
          <input
            data-testid="feature-search-input"
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search features..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div data-testid="filter-buttons" className="flex justify-center gap-3 mb-8">
        <button
          data-testid="filter-all"
          className={`px-4 py-1 rounded-full border text-sm font-medium transition ${filter === 'all' ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-blue-50'}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          data-testid="filter-implemented"
          className={`px-4 py-1 rounded-full border text-sm font-medium transition ${filter === 'implemented' ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-blue-50'}`}
          onClick={() => setFilter('implemented')}
        >
          Implemented
        </button>
        <button
          data-testid="filter-coming-soon"
          className={`px-4 py-1 rounded-full border text-sm font-medium transition ${filter === 'comingSoon' ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-blue-50'}`}
          onClick={() => setFilter('comingSoon')}
        >
          Coming Soon
        </button>
      </div>

      <div data-testid="features-grid" className="grid gap-6 md:grid-cols-3">
        {filteredFeatures.length === 0 ? (
          <div data-testid="no-features-message" className="col-span-3 text-center text-gray-400 py-12 text-lg">
            <MagnifyingGlassIcon className="mx-auto mb-2 h-10 w-10 text-gray-300" />
            No features found.
          </div>
        ) : (
          filteredFeatures.map((feature) =>
            feature.path ? (
              <Link
                data-testid={`feature-link-${feature.key}`}
                aria-label={`Navigate to ${feature.title} feature`}
                role="link"
                to={feature.path}
                key={feature.key}
                className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition border border-gray-100 hover:border-blue-400 relative"
              >
                <article data-testid={`feature-article-${feature.key}`}>
                  <h2 data-testid={`feature-title-${feature.key}`} className="text-xl font-semibold mb-2 flex items-center gap-2">
                    {feature.title}
                  </h2>
                  <p data-testid={`feature-description-${feature.key}`} className="text-gray-500">{feature.desc}</p>
                </article>
              </Link>
            ) : (
              <div
                data-testid={`feature-card-${feature.key}`}
                role="article"
                aria-label={`${feature.title} feature (Coming Soon)`}
                key={feature.key}
                className="block p-6 bg-gray-50 rounded-lg shadow border border-gray-100 opacity-80 relative"
              >
                <article data-testid={`feature-article-${feature.key}`}>
                  <h2 data-testid={`feature-title-${feature.key}`} className="text-xl font-semibold mb-2 flex items-center gap-2">
                    {feature.title}
                    <span 
                      data-testid={`coming-soon-badge-${feature.key}`}
                      role="status"
                      aria-label="Coming Soon"
                      className="ml-2 px-2 py-0.5 text-xs rounded bg-yellow-300 text-yellow-900 font-semibold"
                    >
                      Coming Soon
                    </span>
                  </h2>
                  <p data-testid={`feature-description-${feature.key}`} className="text-gray-500">{feature.desc}</p>
                </article>
              </div>
            )
          )
        )}
      </div>
    </section>
  )
}
