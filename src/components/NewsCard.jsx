import { Bell, CalendarDays, Megaphone, Stethoscope, Users, Wrench } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { formatDate } from '../utils/format'
import { DemoBadge, SmartImage } from './ui'

const TYPE_ICON = {
  meeting: Users,
  event: Megaphone,
  notice: Bell,
  health: Stethoscope,
  service: Wrench,
}

export default function NewsCard({ item }) {
  const { t, pick, lang } = useLanguage()
  const Icon = TYPE_ICON[item.type] || Bell
  const title = pick(item.title)

  return (
    <article className={`news-card type-${item.type} reveal`}>
      {item.image && (
        <div className="news-media">
          <SmartImage src={item.image} alt={title} />
        </div>
      )}
      <div className="news-body">
        <div className="news-top">
          <span className="news-type">
            <Icon size={15} aria-hidden="true" />
            {t(`news.types.${item.type}`)}
          </span>
          <DemoBadge show={item.demo} />
        </div>
        <h3>{title}</h3>
        <p>{pick(item.summary)}</p>
        <p className="news-date">
          <CalendarDays size={15} aria-hidden="true" />
          <time dateTime={item.date}>{formatDate(item.date, lang)}</time>
        </p>
      </div>
    </article>
  )
}
