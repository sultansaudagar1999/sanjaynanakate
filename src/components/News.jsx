import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import announcements from '../data/announcements'
import NewsCard from './NewsCard'
import { DemoNote, SectionTitle } from './ui'

const INITIAL_COUNT = 4
const sorted = [...announcements].sort((a, b) => b.date.localeCompare(a.date))

export default function News() {
  const { t } = useLanguage()
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? sorted : sorted.slice(0, INITIAL_COUNT)

  return (
    <section id="news" className="section" aria-labelledby="news-title">
      <div className="container">
        <SectionTitle id="news-title" eyebrow={t('news.eyebrow')} title={t('news.title')} subtitle={t('news.subtitle')} />
        {sorted.some((n) => n.demo) && <DemoNote />}

        <div className="news-grid" id="news-list">
          {visible.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>

        {sorted.length > INITIAL_COUNT && (
          <div className="center">
            <button
              type="button"
              className="btn btn-outline"
              aria-expanded={expanded}
              aria-controls="news-list"
              onClick={() => setExpanded((v) => !v)}
            >
              {expanded ? t('news.showLess') : t('news.showMore')}
              {expanded ? <ChevronUp size={18} aria-hidden="true" /> : <ChevronDown size={18} aria-hidden="true" />}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
