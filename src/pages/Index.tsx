import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const HERO_IMG =
  "https://cdn.poehali.dev/projects/65d05d8e-11b0-4b9f-b956-df29c2b9e386/files/e9507cf5-41b8-42dd-a335-0e5c5403f712.jpg";
const SHOP_IMG =
  "https://cdn.poehali.dev/projects/65d05d8e-11b0-4b9f-b956-df29c2b9e386/files/17d65d96-e1fc-40db-8341-a2f1ae70a911.jpg";
const ABOUT_IMG =
  "https://cdn.poehali.dev/projects/65d05d8e-11b0-4b9f-b956-df29c2b9e386/files/200ca7a0-ce10-47e9-851c-8e8bff0e553e.jpg";

const news = [
  {
    id: 1,
    date: "20 февр. 2026",
    category: "Релиз",
    title: "Вышла визуальная новелла «Эхо Пустоты» — мрачный киберпанк в вашем браузере",
    excerpt:
      "Более 8 часов нарративного геймплея, 5 концовок и уникальный саундтрек. Уже доступна в нашем магазине.",
    icon: "Sparkles",
  },
  {
    id: 2,
    date: "14 февр. 2026",
    category: "Обновление",
    title: "Telegram-игра «Город Теней» получила крупное обновление с новыми главами",
    excerpt:
      "Добавлены 3 новые главы, система репутации и мультиплеерные события. Играй прямо в Telegram.",
    icon: "Gamepad2",
  },
  {
    id: 3,
    date: "5 февр. 2026",
    category: "Анонс",
    title: "Анонс приложения «Дневник детектива» — интерактивные расследования на мобильных",
    excerpt:
      "Новый жанр: веди расследование, собирай улики и принимай решения, влияющие на финал истории.",
    icon: "BookOpen",
  },
];

const products = [
  {
    id: 1,
    name: "Эхо Пустоты",
    category: "Визуальная новелла",
    price: "299 ₽",
    oldPrice: "499 ₽",
    description: "Мрачный киберпанк-триллер с нелинейным сюжетом и 5 уникальными концовками",
    features: ["8+ часов геймплея", "5 концовок", "Оригинальный саундтрек", "Русский язык"],
    badge: "Хит",
    color: "from-blue-600 to-cyan-500",
    icon: "BookOpen",
  },
  {
    id: 2,
    name: "Город Теней",
    category: "Telegram-новелла",
    price: "Бесплатно",
    oldPrice: null,
    description: "Интерактивная детективная история прямо в Telegram с выборами и репутацией",
    features: ["Играть в Telegram", "Мультиплеер-события", "Еженедельные главы", "Система репутации"],
    badge: "Новинка",
    color: "from-indigo-600 to-blue-500",
    icon: "MessageSquare",
  },
  {
    id: 3,
    name: "Алые Паруса: Код",
    category: "Визуальная новелла",
    price: "199 ₽",
    oldPrice: null,
    description: "Романтическая новелла в жанре sci-fi с системой отношений и множеством персонажей",
    features: ["12 персонажей", "Система отношений", "Арт ручной работы", "Музыкальное сопровождение"],
    badge: null,
    color: "from-blue-700 to-indigo-600",
    icon: "Heart",
  },
  {
    id: 4,
    name: "Дневник Детектива",
    category: "Приложение",
    price: "149 ₽/мес",
    oldPrice: "249 ₽/мес",
    description: "Интерактивные расследования: собирай улики, допрашивай свидетелей, раскрывай дела",
    features: ["20+ дел в базе", "Новые дела ежемесячно", "Рейтинг детективов", "Офлайн-режим"],
    badge: "Скидка",
    color: "from-cyan-600 to-blue-500",
    icon: "Search",
  },
  {
    id: 5,
    name: "Звёздный Странник",
    category: "Telegram-игра",
    price: "Бесплатно",
    oldPrice: null,
    description: "Космическая стратегия-новелла: исследуй галактику, заключай союзы, принимай решения",
    features: ["PvP турниры", "Гильдии игроков", "Ежедневные миссии", "В Telegram"],
    badge: null,
    color: "from-blue-500 to-sky-400",
    icon: "Rocket",
  },
  {
    id: 6,
    name: "Лабиринт Разума",
    category: "Приложение",
    price: "99 ₽",
    oldPrice: null,
    description: "Психологический квест с головоломками и нарративом в жанре хоррор",
    features: ["Атмосферный хоррор", "50+ головоломок", "Без рекламы", "iOS и Android"],
    badge: null,
    color: "from-indigo-500 to-blue-600",
    icon: "Brain",
  },
];

const stats = [
  { value: "15+", label: "Игр и новелл" },
  { value: "1M+", label: "Загрузок" },
  { value: "4.8★", label: "Средний рейтинг" },
  { value: "2026", label: "Год основания" },
];

const navLinks = ["Продукты", "Новости", "О компании", "Контакты"];

export default function Index() {
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const [cartProduct, setCartProduct] = useState<(typeof products)[0] | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* ── HEADER ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 gradient-blue rounded-lg flex items-center justify-center">
              <Icon name="Hexagon" size={18} className="text-white" />
            </div>
            <span className="font-montserrat font-bold text-xl text-gray-900">
              Нова <span className="text-gradient">ИТ</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="hidden md:flex text-gray-600 hover:text-blue-600"
              onClick={() => { setAuthMode("login"); setAuthOpen(true); }}
            >
              Войти
            </Button>
            <Button
              size="sm"
              className="gradient-blue text-white hover:opacity-90 transition-opacity shadow-md shadow-blue-200"
              onClick={() => { setAuthMode("register"); setAuthOpen(true); }}
            >
              Регистрация
            </Button>
            <button
              className="md:hidden text-gray-600"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              <Icon name={mobileMenu ? "X" : "Menu"} size={22} />
            </button>
          </div>
        </div>

        {mobileMenu && (
          <div className="md:hidden bg-white border-t border-blue-100 px-6 py-4 flex flex-col gap-4 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-gray-700 hover:text-blue-600"
                onClick={() => setMobileMenu(false)}
              >
                {link}
              </a>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="border-blue-200 text-blue-600 w-full"
              onClick={() => { setAuthMode("login"); setAuthOpen(true); setMobileMenu(false); }}
            >
              Войти
            </Button>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section className="relative pt-16 min-h-screen flex items-center overflow-hidden gradient-dark">
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(222,47%,8%)] via-[hsl(222,47%,8%)]/80 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs font-medium px-3 py-1">
              🎮 Игры · Новеллы · Приложения
            </Badge>
            <h1 className="font-montserrat text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Истории,{" "}
              <span className="text-gradient">в которые хочется</span>{" "}
              вернуться
            </h1>
            <p className="text-blue-100/80 text-lg leading-relaxed mb-8 max-w-lg">
              Нова ИТ создаёт визуальные новеллы, Telegram-игры и интерактивные приложения.
              Захватывающие нарративы с выбором, которые меняются в зависимости от ваших решений.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="gradient-blue text-white hover:opacity-90 shadow-xl shadow-blue-900/40 font-semibold px-8"
                onClick={() => document.getElementById("продукты")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Icon name="Gamepad2" size={18} className="mr-2" />
                Смотреть игры
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 font-semibold px-8"
                onClick={() => { setAuthMode("register"); setAuthOpen(true); }}
              >
                Начать бесплатно
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-6 text-center animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="font-montserrat text-3xl font-extrabold text-gradient mb-1">
                  {s.value}
                </div>
                <div className="text-blue-200/70 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-2 animate-bounce">
          <Icon name="ChevronDown" size={20} />
        </div>
      </section>

      {/* ── NEWS ── */}
      <section id="новости" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-blue-600 font-semibold text-sm mb-2 uppercase tracking-widest">
                Последние события
              </p>
              <h2 className="font-montserrat text-4xl font-bold text-gray-900">Новости</h2>
            </div>
            <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hidden md:flex gap-2">
              Все новости <Icon name="ArrowRight" size={16} />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {news.map((item, i) => (
              <Card
                key={item.id}
                className="border border-blue-50 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-blue-50 text-blue-600 border-0 text-xs">
                      {item.category}
                    </Badge>
                    <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <Icon name={item.icon} size={16} className="text-blue-600" />
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mb-3">{item.date}</p>
                  <h3 className="font-montserrat font-bold text-gray-900 text-base leading-snug mb-3 group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.excerpt}</p>
                  <div className="mt-4 flex items-center gap-1 text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Читать далее <Icon name="ArrowRight" size={14} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── SHOP ── */}
      <section id="продукты" className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold text-sm mb-2 uppercase tracking-widest">
              Цифровой магазин
            </p>
            <h2 className="font-montserrat text-4xl font-bold text-gray-900 mb-4">
              Игры и приложения
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Визуальные новеллы, Telegram-игры и интерактивные приложения.
              Каждый выбор меняет историю — попробуй бесплатно.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <Card
                key={product.id}
                className="border border-blue-50 overflow-hidden hover:shadow-xl hover:shadow-blue-100/60 transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${product.color}`} />
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center shadow-md`}>
                      <Icon name={product.icon} size={20} className="text-white" />
                    </div>
                    {product.badge && (
                      <Badge className="bg-blue-600 text-white border-0 text-xs">
                        {product.badge}
                      </Badge>
                    )}
                  </div>

                  <p className="text-xs text-blue-500 font-medium mb-1">{product.category}</p>
                  <h3 className="font-montserrat font-bold text-gray-900 text-lg mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>

                  <ul className="space-y-1.5 mb-5">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-gray-600">
                        <Icon name="Check" size={13} className="text-blue-500 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-end justify-between">
                    <div>
                      {product.oldPrice && (
                        <p className="text-xs text-gray-400 line-through">{product.oldPrice}</p>
                      )}
                      <p className="font-montserrat font-bold text-gray-900 text-lg">
                        {product.price}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      className={`bg-gradient-to-r ${product.color} text-white hover:opacity-90 transition-opacity shadow-md`}
                      onClick={() => setCartProduct(product)}
                    >
                      Подключить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 rounded-3xl overflow-hidden relative gradient-dark p-10 flex flex-col md:flex-row items-center gap-8">
            <div
              className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 bg-cover bg-center hidden md:block"
              style={{ backgroundImage: `url(${SHOP_IMG})` }}
            />
            <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-[hsl(222,47%,8%)] to-transparent hidden md:block" />
            <div className="relative">
              <h3 className="font-montserrat text-2xl font-bold text-white mb-3">
                Хотите свою игру или новеллу?
              </h3>
              <p className="text-blue-200/70 max-w-md">
                Разработаем визуальную новеллу или Telegram-игру под ваш сценарий. Обсудим проект бесплатно.
              </p>
            </div>
            <Button
              size="lg"
              className="relative gradient-blue text-white hover:opacity-90 font-semibold whitespace-nowrap shadow-xl shadow-blue-900/40"
              onClick={() => { setAuthMode("register"); setAuthOpen(true); }}
            >
              <Icon name="MessageSquare" size={18} className="mr-2" />
              Обсудить проект
            </Button>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="о компании" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative animate-fade-in">
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-blue-100">
              <img src={ABOUT_IMG} alt="Команда Нова ИТ" className="w-full h-80 object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-blue-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 gradient-blue rounded-xl flex items-center justify-center">
                  <Icon name="Award" size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-montserrat font-bold text-gray-900 text-sm">4.8 ★</p>
                  <p className="text-xs text-gray-500">Средний рейтинг игр</p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in">
            <p className="text-blue-600 font-semibold text-sm mb-2 uppercase tracking-widest">
              О компании
            </p>
            <h2 className="font-montserrat text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Создаём истории, которые не забывают
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Нова ИТ — команда сценаристов, художников и разработчиков.
              Мы создаём визуальные новеллы, Telegram-игры и интерактивные приложения,
              в которых каждый выбор имеет значение.
            </p>
            <div className="space-y-4 mb-8">
              {[
                { icon: "Pen", text: "Авторские сценарии с нелинейным повествованием" },
                { icon: "Palette", text: "Оригинальный арт и уникальный саундтрек" },
                { icon: "Globe", text: "Игры доступны на всех платформах" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} size={16} className="text-blue-600" />
                  </div>
                  <span className="text-gray-700 text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
            <Button
              className="gradient-blue text-white hover:opacity-90 shadow-md shadow-blue-200"
              onClick={() => document.getElementById("контакты")?.scrollIntoView({ behavior: "smooth" })}
            >
              Связаться с нами
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-blue-600 font-semibold text-sm mb-2 uppercase tracking-widest">Направления</p>
            <h2 className="font-montserrat text-4xl font-bold text-gray-900">Что мы делаем</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "BookOpen", title: "Визуальные новеллы", desc: "Нарративные игры с выбором, уникальным артом и оригинальным саундтреком" },
              { icon: "MessageSquare", title: "Telegram-игры", desc: "Интерактивные истории и игры прямо в мессенджере — без установки" },
              { icon: "Smartphone", title: "Мобильные приложения", desc: "iOS и Android приложения: квесты, детективы, интерактивные книги" },
              { icon: "Gamepad2", title: "Инди-игры", desc: "Небольшие авторские игры с сильным нарративом и атмосферным дизайном" },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-blue-50 hover:shadow-lg hover:shadow-blue-50 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 gradient-blue rounded-xl flex items-center justify-center mb-4 shadow-md shadow-blue-200">
                  <Icon name={s.icon} size={22} className="text-white" />
                </div>
                <h3 className="font-montserrat font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="контакты" className="py-24 gradient-dark">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-blue-400 font-semibold text-sm mb-3 uppercase tracking-widest">Контакты</p>
          <h2 className="font-montserrat text-4xl font-bold text-white mb-4">
            Готовы начать работу?
          </h2>
          <p className="text-blue-200/70 max-w-lg mx-auto mb-10">
            Оставьте заявку — наш менеджер свяжется с вами в течение 15 минут в рабочее время.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-14">
            <Input
              placeholder="Ваш email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-blue-400"
            />
            <Button className="gradient-blue text-white hover:opacity-90 shadow-lg shadow-blue-900/40 font-semibold whitespace-nowrap">
              Отправить заявку
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-10 text-sm text-blue-200/60">
            {[
              { icon: "Phone", text: "+7 (495) 000-00-00" },
              { icon: "Mail", text: "hello@nova-it.ru" },
              { icon: "MapPin", text: "Москва, Пресненская наб., 8с1" },
            ].map((c) => (
              <div key={c.text} className="flex items-center gap-2">
                <Icon name={c.icon} size={15} className="text-blue-400" />
                {c.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[hsl(222,47%,5%)] py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 gradient-blue rounded-lg flex items-center justify-center">
              <Icon name="Hexagon" size={14} className="text-white" />
            </div>
            <span className="font-montserrat font-bold text-white">Нова ИТ</span>
          </div>
          <p className="text-gray-500 text-sm">© 2026 Нова ИТ. Все права защищены.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-blue-400 transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Оферта</a>
          </div>
        </div>
      </footer>

      {/* ── AUTH DIALOG ── */}
      <Dialog open={authOpen} onOpenChange={setAuthOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <div className="w-12 h-12 gradient-blue rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-200">
              <Icon name={authMode === "login" ? "LogIn" : "UserPlus"} size={22} className="text-white" />
            </div>
            <DialogTitle className="font-montserrat text-center text-xl">
              {authMode === "login" ? "Вход в аккаунт" : "Регистрация"}
            </DialogTitle>
            <DialogDescription className="text-center">
              {authMode === "login"
                ? "Войдите, чтобы управлять подписками и продуктами"
                : "Создайте аккаунт и получите 14 дней бесплатного доступа"}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3 mt-2">
            {authMode === "register" && (
              <Input placeholder="Ваше имя" className="border-blue-100 focus:border-blue-400" />
            )}
            <Input placeholder="Email" type="email" className="border-blue-100 focus:border-blue-400" />
            <Input placeholder="Пароль" type="password" className="border-blue-100 focus:border-blue-400" />
            <Button className="w-full gradient-blue text-white hover:opacity-90 font-semibold shadow-md shadow-blue-200 mt-2">
              {authMode === "login" ? "Войти" : "Создать аккаунт"}
            </Button>
            <p className="text-center text-sm text-gray-500">
              {authMode === "login" ? "Ещё нет аккаунта?" : "Уже есть аккаунт?"}{" "}
              <button
                className="text-blue-600 font-medium hover:underline"
                onClick={() => setAuthMode(authMode === "login" ? "register" : "login")}
              >
                {authMode === "login" ? "Зарегистрироваться" : "Войти"}
              </button>
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* ── PRODUCT DIALOG ── */}
      <Dialog open={!!cartProduct} onOpenChange={() => setCartProduct(null)}>
        <DialogContent className="max-w-md">
          {cartProduct && (
            <>
              <DialogHeader>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cartProduct.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <Icon name={cartProduct.icon} size={26} className="text-white" />
                </div>
                <DialogTitle className="font-montserrat text-center text-xl">
                  {cartProduct.name}
                </DialogTitle>
                <DialogDescription className="text-center">{cartProduct.description}</DialogDescription>
              </DialogHeader>
              <div className="bg-blue-50 rounded-xl p-4 my-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600 text-sm">Стоимость</span>
                  <span className="font-montserrat font-bold text-gray-900">{cartProduct.price}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Пробный период</span>
                  <Badge className="bg-green-100 text-green-700 border-0">14 дней бесплатно</Badge>
                </div>
              </div>
              <Button
                className={`w-full bg-gradient-to-r ${cartProduct.color} text-white hover:opacity-90 font-semibold shadow-md`}
                onClick={() => { setCartProduct(null); setAuthMode("register"); setAuthOpen(true); }}
              >
                Начать пробный период
              </Button>
              <p className="text-center text-xs text-gray-400">
                После подключения с вами свяжется менеджер
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}