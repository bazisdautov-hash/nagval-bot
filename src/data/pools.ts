export type Pool = {
  id: string
  title: string
  subtitle: string
  roiRange: string
  minTicket: string
  progress: number
  status: 'Набор открыт' | 'Скоро закрытие' | 'Предзапись'
  tags: string[]
  imageUrl: string
}

export const pools: Pool[] = [
  {
    id: 'electro',
    title: 'Электроинструмент',
    subtitle: 'Парк ликвидного инструмента для стройсегмента и ремонта',
    roiRange: '18–24% годовых',
    minTicket: 'от 30 000 ₽',
    progress: 74,
    status: 'Набор открыт',
    tags: ['B2C аренда', 'Высокий оборот', 'Короткий цикл'],
    imageUrl: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'generators',
    title: 'Генераторы',
    subtitle: 'Энергорешения для выездных работ и резервного питания',
    roiRange: '16–22% годовых',
    minTicket: 'от 50 000 ₽',
    progress: 58,
    status: 'Скоро закрытие',
    tags: ['Сезонный пик', 'B2B спрос', 'Средний цикл'],
    imageUrl: 'https://images.unsplash.com/photo-1581093458791-9d15482442f8?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'special',
    title: 'Спецоборудование',
    subtitle: 'Оборудование для индустрии и подрядчиков со стабильным спросом',
    roiRange: '20–28% годовых',
    minTicket: 'от 80 000 ₽',
    progress: 41,
    status: 'Предзапись',
    tags: ['Длинный контракт', 'Премиум сегмент', 'Повторные клиенты'],
    imageUrl: 'https://images.unsplash.com/photo-1581092918367-9f6d4f6f4f1b?auto=format&fit=crop&w=1200&q=80',
  },
]
