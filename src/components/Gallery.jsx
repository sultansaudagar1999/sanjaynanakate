import { useCallback, useEffect, useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import gallery from '../data/gallery'
import Modal from './Modal'
import { DemoBadge, DemoNote, FilterChips, SectionTitle, SmartImage } from './ui'

const CATEGORIES = ['development', 'events', 'meetings']

function Lightbox({ items, index, onClose, onNavigate }) {
  const { t, pick } = useLanguage()
  const item = items[index]
  const total = items.length

  const go = useCallback((step) => onNavigate((index + step + total) % total), [index, total, onNavigate])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go])

  return (
    <div className="lightbox">
      <button type="button" className="lb-close" onClick={onClose} aria-label={t('common.close')}>
        <X size={24} aria-hidden="true" />
      </button>
      <figure className="lb-figure">
        <SmartImage key={item.id} src={item.src} alt={pick(item.caption)} className="lb-img" eager />
        <figcaption>
          <span className="lb-cat">{t(`gallery.categories.${item.category}`)}</span>
          <span id="lb-caption">{pick(item.caption)}</span>
          <span className="lb-count">{t('gallery.counter', { current: index + 1, total })}</span>
        </figcaption>
      </figure>
      {total > 1 && (
        <>
          <button type="button" className="lb-nav lb-prev" onClick={() => go(-1)} aria-label={t('gallery.prev')}>
            <ChevronLeft size={28} aria-hidden="true" />
          </button>
          <button type="button" className="lb-nav lb-next" onClick={() => go(1)} aria-label={t('gallery.next')}>
            <ChevronRight size={28} aria-hidden="true" />
          </button>
        </>
      )}
    </div>
  )
}

export default function Gallery() {
  const { t, pick } = useLanguage()
  const [filter, setFilter] = useState('all')
  const [openIndex, setOpenIndex] = useState(null)

  const options = useMemo(
    () => [
      { value: 'all', label: t('gallery.all') },
      ...CATEGORIES.map((c) => ({ value: c, label: t(`gallery.categories.${c}`) })),
    ],
    [t]
  )

  const items = filter === 'all' ? gallery : gallery.filter((g) => g.category === filter)

  return (
    <section id="gallery" className="section section-tint" aria-labelledby="gallery-title">
      <div className="container">
        <SectionTitle id="gallery-title" eyebrow={t('gallery.eyebrow')} title={t('gallery.title')} subtitle={t('gallery.subtitle')} />
        {gallery.some((g) => g.demo) && <DemoNote />}
        <FilterChips options={options} value={filter} onChange={setFilter} label={t('gallery.filterLabel')} />

        <ul className="gallery-grid">
          {items.map((item, i) => {
            const caption = pick(item.caption)
            return (
              <li key={item.id} className="reveal">
                <button
                  type="button"
                  className="gallery-item"
                  onClick={() => setOpenIndex(i)}
                  aria-label={t('gallery.open', { caption })}
                >
                  <SmartImage src={item.src} alt="" className="gallery-img" />
                  <span className="gallery-zoom" aria-hidden="true"><Expand size={18} /></span>
                  <span className="gallery-caption">
                    <small>{t(`gallery.categories.${item.category}`)}</small>
                    {caption}
                  </span>
                </button>
                <DemoBadge show={item.demo} />
              </li>
            )
          })}
        </ul>
      </div>

      <Modal open={openIndex !== null} onClose={() => setOpenIndex(null)} ariaLabel={t('gallery.dialogLabel')} className="modal-lightbox">
        {openIndex !== null && items[openIndex] && (
          <Lightbox items={items} index={openIndex} onClose={() => setOpenIndex(null)} onNavigate={setOpenIndex} />
        )}
      </Modal>
    </section>
  )
}
