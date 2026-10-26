import { useMemo, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import projects from '../data/projects'
import ProjectCard from './ProjectCard'
import { DemoNote, FilterChips, SectionTitle } from './ui'

const STATUSES = ['completed', 'in-progress', 'planned']

export default function DevelopmentWork() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState('all')

  const options = useMemo(
    () => [
      { value: 'all', label: t('work.all'), count: projects.length },
      ...STATUSES.map((s) => ({
        value: s,
        label: t(`work.status.${s}`),
        count: projects.filter((p) => p.status === s).length,
      })),
    ],
    [t]
  )

  const visible = filter === 'all' ? projects : projects.filter((p) => p.status === filter)

  return (
    <section id="work" className="section section-tint" aria-labelledby="work-title">
      <div className="container">
        <SectionTitle id="work-title" eyebrow={t('work.eyebrow')} title={t('work.title')} subtitle={t('work.subtitle')} />
        {projects.some((p) => p.demo) && <DemoNote />}
        <FilterChips options={options} value={filter} onChange={setFilter} label={t('work.filterLabel')} />

        {visible.length ? (
          <div className="card-grid">
            {visible.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="empty">{t('work.empty')}</p>
        )}
      </div>
    </section>
  )
}
