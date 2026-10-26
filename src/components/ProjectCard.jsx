import { CalendarDays, CheckCircle2, CircleDot, Hourglass, MapPin } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { DemoBadge, SmartImage, Val } from './ui'

const STATUS_ICON = {
  planned: CircleDot,
  'in-progress': Hourglass,
  completed: CheckCircle2,
}

export default function ProjectCard({ project }) {
  const { t, pick } = useLanguage()
  const StatusIcon = STATUS_ICON[project.status] || CircleDot
  const { before = null, after = null } = project.images || {}
  // Show before/after panels for completed work (or whenever a "before" photo exists)
  const showPair = Boolean(before) || project.status === 'completed'
  const title = pick(project.title)

  return (
    <article className="project-card reveal">
      <div className={`project-media ${showPair ? 'is-pair' : ''}`}>
        {showPair ? (
          <>
            <figure>
              <SmartImage src={before} alt={`${title} — ${t('work.before')}`} />
              <figcaption>{t('work.before')}</figcaption>
            </figure>
            <figure>
              <SmartImage src={after} alt={`${title} — ${t('work.after')}`} />
              <figcaption>{t('work.after')}</figcaption>
            </figure>
          </>
        ) : (
          <SmartImage src={after} alt={title} />
        )}
        <span className={`status status-${project.status}`}>
          <StatusIcon size={14} aria-hidden="true" />
          {t(`work.status.${project.status}`)}
        </span>
      </div>

      <div className="project-body">
        <DemoBadge show={project.demo} />
        <h3>{title}</h3>
        <ul className="meta">
          <li>
            <MapPin size={15} aria-hidden="true" />
            <Val>{pick(project.location)}</Val>
          </li>
          <li>
            <CalendarDays size={15} aria-hidden="true" />
            <Val>{pick(project.period)}</Val>
          </li>
        </ul>
        <p>{pick(project.description)}</p>
      </div>
    </article>
  )
}
