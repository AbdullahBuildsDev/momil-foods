import { ShieldCheck, BadgeCheck, Globe, Award } from 'lucide-react'

const badges = [
  { Icon: ShieldCheck, title: '100% Halal', sub: 'Certified products' },
  { Icon: BadgeCheck, title: 'USA-FDA Registered', sub: 'Export compliant' },
  { Icon: Award, title: 'Export Quality', sub: 'Consistent standards' },
  { Icon: Globe, title: 'Worldwide Shipping', sub: 'USA · UK · Gulf & more' },
]

export default function TrustBadges() {
  return (
    <section style={{ background: '#0d1308', padding: '40px 0', borderTop: '1px solid rgba(232,180,0,0.15)', borderBottom: '1px solid rgba(232,180,0,0.15)' }}>
      <div className="site-container">
        <div className="trust-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '24px' }}>
          {badges.map(({ Icon, title, sub }) => (
            <div key={title} style={{ display: 'flex', alignItems: 'center', gap: '14px', justifyContent: 'center' }}>
              <span style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '52px', height: '52px', borderRadius: '50%', flexShrink: 0,
                background: 'rgba(232,180,0,0.12)', border: '1px solid rgba(232,180,0,0.35)',
              }}>
                <Icon size={26} color="#E8B400" strokeWidth={2} />
              </span>
              <div style={{ textAlign: 'left' }}>
                <p style={{ color: '#fff', fontSize: '15px', fontWeight: 800, lineHeight: 1.2 }}>{title}</p>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', marginTop: '3px' }}>{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(min-width:900px){.trust-grid{grid-template-columns:repeat(4,1fr)!important}}`}</style>
    </section>
  )
}
