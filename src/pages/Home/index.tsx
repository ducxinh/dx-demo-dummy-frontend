import { Seo } from '@/components/common/Seo/Seo'
import { useTranslations } from '@/hooks/useTranslation'
import { Link } from 'react-router-dom'

interface Feature {
  key: string;
  title: string;
  desc: string;
  path?: string;
  comingSoon?: boolean;
}

export function HomePage() {
  const { t } = useTranslations('home')

  const features: Feature[] = [
    {
      key: 'todo_list',
      title: t('todo_list'),
      desc: t('todo_list_desc'),
      path: '/todo',
    },
    {
      key: 'ecommerce_demo',
      title: t('ecommerce_demo'),
      desc: t('ecommerce_demo_desc'),
      path: '/ecommerce',
    },
    {
      key: 'image_dummy',
      title: 'Image Dummy',
      desc: 'Display placeholder images for avatars, products, banners, etc.',
      comingSoon: true,
    },
    {
      key: 'api_post_dummy',
      title: 'API Post Dummy',
      desc: 'Simulate posting data to a fake API for forms and comments.',
      comingSoon: true,
    },
    {
      key: 'products_api_dummy',
      title: 'Products API Dummy',
      desc: 'Fetch and display fake product data for e-commerce demos.',
      comingSoon: true,
    },
    {
      key: 'chat_app',
      title: 'Chat App',
      desc: 'A real-time chat UI for automation testing.',
      comingSoon: true,
    },
    {
      key: 'kanban_board',
      title: 'Kanban Board',
      desc: 'A drag-and-drop kanban board demo.',
      comingSoon: true,
    },
    {
      key: 'file_manager',
      title: 'File Manager',
      desc: 'A file manager UI for upload/download demo.',
      comingSoon: true,
    },
    {
      key: 'calendar',
      title: 'Calendar',
      desc: 'A calendar and event scheduling demo.',
      comingSoon: true,
    },
    {
      key: 'weather_dashboard',
      title: 'Weather Dashboard',
      desc: 'A weather forecast dashboard for UI testing.',
      comingSoon: true,
    },
    {
      key: 'music_player',
      title: 'Music Player',
      desc: 'A web music player demo with playlist.',
      comingSoon: true,
    },
    {
      key: 'video_streaming',
      title: 'Video Streaming',
      desc: 'A video streaming UI for automation.',
      comingSoon: true,
    },
    {
      key: 'notes_app',
      title: 'Notes App',
      desc: 'A simple notes taking and management demo.',
      comingSoon: true,
    },
    {
      key: 'recipe_book',
      title: 'Recipe Book',
      desc: 'A recipe management and search demo.',
      comingSoon: true,
    },
    {
      key: 'news_feed',
      title: 'News Feed',
      desc: 'A news feed and article reader UI.',
      comingSoon: true,
    },
    {
      key: 'project_tracker',
      title: 'Project Tracker',
      desc: 'A project and task tracking dashboard.',
      comingSoon: true,
    },
    {
      key: 'expense_tracker',
      title: 'Expense Tracker',
      desc: 'A personal finance and expense tracking demo.',
      comingSoon: true,
    },
    {
      key: 'survey_form',
      title: 'Survey Form',
      desc: 'A multi-step survey and form UI.',
      comingSoon: true,
    },
    {
      key: 'booking_system',
      title: 'Booking System',
      desc: 'A booking and reservation management demo.',
      comingSoon: true,
    },
    {
      key: 'portfolio',
      title: 'Portfolio',
      desc: 'A personal portfolio and resume demo.',
      comingSoon: true,
    },
    {
      key: 'blog_platform',
      title: 'Blog Platform',
      desc: 'A blogging and content management demo.',
      comingSoon: true,
    },
  ];

  return (
    <>
      <Seo title={t('title') as string} description={t('title') as string} />
      <div className="w-full bg-red-600 text-white text-center py-2 font-semibold">
        {t('dummy_alert')}
      </div>
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <h1 className="text-3xl font-bold mb-8 text-center">{t('dummy_features_title')}</h1>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) =>
            feature.path ? (
              <Link
                to={feature.path}
                key={feature.key}
                className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition border border-gray-100 hover:border-blue-400 relative"
              >
                <div className="text-xl font-semibold mb-2 flex items-center gap-2">
                  {feature.title}
                </div>
                <div className="text-gray-500">{feature.desc}</div>
              </Link>
            ) : (
              <div
                key={feature.key}
                className="block p-6 bg-gray-50 rounded-lg shadow border border-gray-100 opacity-80 relative"
              >
                <div className="text-xl font-semibold mb-2 flex items-center gap-2">
                  {feature.title}
                  <span className="ml-2 px-2 py-0.5 text-xs rounded bg-yellow-300 text-yellow-900 font-semibold">Coming Soon</span>
                </div>
                <div className="text-gray-500">{feature.desc}</div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  )
}
