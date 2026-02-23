import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Hero } from '@/components/sections/Hero'
import { Product } from '@/components/sections/Product'
import { Pools } from '@/components/sections/Pools'
import { How } from '@/components/sections/How'
import { Trust } from '@/components/sections/Trust'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQSection } from '@/components/sections/FAQ'
import { Contacts } from '@/components/sections/Contacts'
import { Footer } from '@/components/sections/Footer'
import { pools, Pool } from '@/data/pools'
import { SignupModal } from '@/components/modals/SignupModal'
import { CalculatorModal } from '@/components/modals/CalculatorModal'
import { PoolDetailsModal } from '@/components/modals/PoolDetailsModal'
import { InvestModal } from '@/components/modals/InvestModal'

const links = [
  ['#product', 'Продукт'],
  ['#pools', 'Пулы'],
  ['#how', 'Как это работает'],
  ['#trust', 'Доверие'],
  ['#faq', 'FAQ'],
  ['#contacts', 'Контакты'],
]

function App() {
  const [mode, setMode] = useState<'invest' | 'business'>('invest')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [signupOpen, setSignupOpen] = useState(false)
  const [calcOpen, setCalcOpen] = useState(false)
  const [detailsPool, setDetailsPool] = useState<Pool | null>(null)
  const [investPool, setInvestPool] = useState<Pool | null>(null)

  return (
    <div className="bg-white text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur">
        <div className="section-wrap flex h-16 items-center justify-between">
          <a href="#" className="text-lg font-semibold">ToolInvest</a>
          <nav className="hidden items-center gap-6 lg:flex">
            {links.map(([href, label]) => (
              <a key={href} href={href} className="text-sm text-slate-600 transition hover:text-slate-900">{label}</a>
            ))}
          </nav>
          <div className="hidden lg:block">
            <Tabs value={mode} onValueChange={(v) => setMode(v as 'invest' | 'business')}>
              <TabsList>
                <TabsTrigger value="invest" current={mode} onClick={(v) => setMode(v as 'invest' | 'business')}>Инвестировать</TabsTrigger>
                <TabsTrigger value="business" current={mode} onClick={(v) => setMode(v as 'invest' | 'business')}>Для бизнеса</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <Button variant="outline" size="sm" className="lg:hidden" onClick={() => setMobileOpen((v) => !v)}>
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
        {mobileOpen && (
          <div className="section-wrap space-y-3 pb-4 lg:hidden">
            <div className="flex flex-wrap gap-2">
              <Button size="sm" variant={mode === 'invest' ? 'default' : 'outline'} onClick={() => setMode('invest')}>Инвестировать</Button>
              <Button size="sm" variant={mode === 'business' ? 'default' : 'outline'} onClick={() => setMode('business')}>Для бизнеса</Button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {links.map(([href, label]) => (
                <a key={href} href={href} className="text-sm text-slate-600" onClick={() => setMobileOpen(false)}>{label}</a>
              ))}
            </div>
          </div>
        )}
      </header>

      <Hero mode={mode} onPrimaryClick={() => setSignupOpen(true)} onSecondaryClick={() => setCalcOpen(true)} />
      <Product />
      <Pools pools={pools} onInvest={(pool) => setInvestPool(pool)} onDetails={(pool) => setDetailsPool(pool)} />
      <How />
      <Trust />
      <Testimonials />
      <FAQSection />
      <Contacts />
      <Footer />

      <SignupModal open={signupOpen} onOpenChange={setSignupOpen} mode={mode} />
      <CalculatorModal open={calcOpen} onOpenChange={setCalcOpen} mode={mode} />
      <PoolDetailsModal open={Boolean(detailsPool)} onOpenChange={(open) => !open && setDetailsPool(null)} pool={detailsPool} />
      <InvestModal open={Boolean(investPool)} onOpenChange={(open) => !open && setInvestPool(null)} pool={investPool} />
    </div>
  )
}

export default App
