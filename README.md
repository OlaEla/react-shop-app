# React Shop App — интернет-магазин на React

Демонстрационное SPA-приложение интернет-магазина, разработанное на базе React.
Проект включает полноценную навигацию, каталог товаров, корзину, сортировку, UI страницу регистрации и адаптивную вёрстку.
Поддерживает деплой на GitHub Pages через HashRouter и отдельные конфигурации .env.

### Демо (GitHub Pages):

https://olaela.github.io/react-shop-app/#/

### Используемые технологии:

- _React 18, React Hooks_

- _React Router v6 (BrowserRouter + HashRouter)_

- _Redux Toolkit (store, slices, actions)_

- _React Context_

- _Sass (SCSS)_

- _GitHub Pages (деплой через gh-pages)_

- _Create React App_

- _Environment variables (.env, .env.production)_

### Функциональность:

#### Cтраницы

- Главная страница

- Каталог товаров

- Страница товара

- Корзина

- Регистрация (UI)

#### Каталог

- Все товары — отдельные компоненты

- Сортировка по размерам (XS / S / M / L)

- Переход на страницу каталога из меню и других страниц

- Адаптивная сетка товаров

#### Корзина

- Добавление товара

- Удаление товара

- Изменение количества

- Автоматический пересчёт:
  GRAND TOTAL = Σ(price × quantity)

#### Навигация (React Router)

- Полноценная SPA-навигация

- HashRouter для GitHub Pages

- Переключатель BrowserRouter / HashRouter через .env

#### UI/UX

- Выполнена адаптация под 320px–1440px

- Увеличена интерактивность меню

- hover-эффекты, иконки, корректные маршруты

- улучшенное мобильное меню

### Структура проекта

```
ReactJS_HW8/
├── public/
│   ├── img/                        # product & UI images (contents hidden)
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
│
└── src/
    ├── components/                 # React components (pages & UI blocks)
    │   ├── CartPage.js
    │   ├── CatalogPage.js
    │   ├── Footer.js
    │   ├── Header.js
    │   ├── MainPage.js
    │   ├── ProductItem.js
    │   ├── productsData.js
    │   └── RegistrationPage.js
    │
    ├── contexts/                   # React Context providers & logic
    │   └── CartContext.js
    │
    ├── img/                        # local icons & graphics (contents hidden)
    │
    │   # SCSS partials (loaded via style.scss)
    ├── _cart.scss
    ├── _catalog.scss
    ├── _footer.scss
    ├── _header.scss
    ├── _mainPage.scss
    ├── _mixins.scss
    ├── _product.scss
    ├── _registration.scss
    ├── _vars.scss
    │
    │   # Application styles
    ├── style.scss
    │
    │   # Root React files
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    │
    ├── logo.svg
    ├── reportWebVitals.js
    └── setupTests.js
│
├── .env                            # local dev settings (BrowserRouter)
├── .env.production                 # production settings (HashRouter)
├── package.json
├── package-lock.json
└── README.md

```

### Сборка и запуск

1. Установка зависимостей
   `npm install`

2. Старт dev-сервера:
   `npm start`

Откроется:
http://localhost:3000/

3. Router-переключатель

Для GitHub Pages использован HashRouter.
Создан файл `.env.production`

```
REACT_APP_ROUTER=hash
```

Для локального запуска создан файл `.env`

```
REACT_APP_ROUTER=browser
```

4. Сборка production-версии:

```
npm run build
```

5. Деплой на GitHub Pages

```
npm run deploy
```

### Дополнительные улучшения:

1. Исправление ошибки dev-сервера с homepage

Проблема: CRA подставлял /react-shop-app → белый экран
Решение: homepage="."

2. Автоматическое переключение маршрутизатора через переменные окружения (BrowserRouter / HashRouter)

Реализовано через .env

3. Оптимизация адаптивного меню в Header.js

- переработаны SVG

- улучшена адаптивность

- улучшена работа мобильного меню

4. Улучшенная структура компонентов и стилей

Файлы упорядочены в папки, улучшена читаемость

5. Адаптация интерфейса до ширины 300px

Скрытие иконок, оптимизация сетки

6. Полноценный GitHub Pages билд

- исправлены MIME ошибки
- исправлены пути статических файлов
- корректная работа SPA с хэштег-маршрутизацией

### Ключевые улучшения и профессиональный рост:

- Оптимизировал проект под продакшн-деплой: устранены MIME-ошибки, корректно настроена статическая сборка для GitHub Pages, решён конфликт CRA со свойством homepage.

- Реализовал гибкую систему маршрутизации с поддержкой переключения между BrowserRouter и HashRouter.

- Улучшил архитектуру приложения: переработана структура компонентов, оптимизирован Header (иконки, мобильное меню), внедрена масштабируемая схема SCSS partials и глобальных стилей.

- Усилил работу со state-management: интеграция Redux Toolkit совместно с Context API.

- Доработал адаптивность интерфейса, включая корректную работу на разрешениях до 300px.

- Применил переменные окружения .env и .env.production для разделения конфигураций.
