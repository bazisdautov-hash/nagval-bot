import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Pool } from '@/data/pools'
import { fadeInUp } from '@/lib/utils'

type Props = {
  pools: Pool[]
  onInvest: (pool: Pool) => void
  onDetails: (pool: Pool) => void
}

export function Pools({ pools, onInvest, onDetails }: Props) {
  return (
    <section id="pools" className="section-wrap py-14 lg:py-20">
      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-3xl font-semibold sm:text-4xl">
        Доступные пулы
      </motion.h2>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {pools.map((pool, idx) => (
          <motion.div key={pool.id} whileHover={{ y: -4 }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: idx * 0.05 }}>
            <Card className="overflow-hidden">
              <img src={pool.imageUrl} alt={pool.title} className="h-44 w-full object-cover" />
              <div className="p-5">
                <div className="mb-3 flex flex-wrap gap-2">
                  {pool.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{pool.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{pool.subtitle}</p>
                <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                  <p>
                    ROI: <span className="font-medium">{pool.roiRange}</span>
                  </p>
                  <p>
                    Вход: <span className="font-medium">{pool.minTicket}</span>
                  </p>
                </div>
                <p className="mt-3 text-xs text-slate-500">Статус: {pool.status}</p>
                <div className="mt-2">
                  <Progress value={pool.progress} />
                </div>
                <div className="mt-5 flex gap-2">
                  <Button className="flex-1" onClick={() => onInvest(pool)}>
                    Участвовать
                  </Button>
                  <Button variant="outline" className="flex-1" onClick={() => onDetails(pool)}>
                    Детали
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
