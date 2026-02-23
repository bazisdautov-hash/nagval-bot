import { Separator } from '@/components/ui/separator'

export function Footer() {
  return (
    <footer className="section-wrap pb-10 pt-6 text-sm text-slate-500">
      <Separator />
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} ToolInvest</p>
        <div className="flex gap-4">
          <a href="#product" className="hover:text-slate-900">Продукт</a>
          <a href="#faq" className="hover:text-slate-900">FAQ</a>
          <a href="#contacts" className="hover:text-slate-900">Контакты</a>
        </div>
      </div>
      <p className="mt-4 max-w-4xl text-xs leading-relaxed">
        Информация на сайте не является публичной офертой и носит ознакомительный характер. Указанные диапазоны доходности являются ориентировочными, могут зависеть от рыночной конъюнктуры и операционных факторов и не являются гарантией получения дохода.
      </p>
    </footer>
  )
}
