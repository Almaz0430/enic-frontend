# ENIC Kazakhstan

## О проекте | About the project

### Русский

ENIC Kazakhstan - веб-портал Национального центра развития высшего образования Республики Казахстан. Платформа предоставляет информацию о Болонском процессе, реестре образовательных программ вузов, процедурах аккредитации и признания документов об образовании.

РГП на ПХВ "Национальный Центр развития высшего образования" МНВО РК – подведомственная организация Министерства науки и высшего образования Республики Казахстан. Центр создан 31 августа 2012 года для методологического, научно-методического и информационно-аналитического сопровождения реализации параметров Болонского процесса в Республике Казахстан.

### English

ENIC Kazakhstan is the web portal of the National Center for Higher Education Development of the Republic of Kazakhstan. The platform provides information about the Bologna Process, registry of higher education programs, accreditation procedures, and recognition of educational documents.

The RSE on REM "National Center for Higher Education Development" of the MSHE RK is a subordinate organization of the Ministry of Science and Higher Education of the Republic of Kazakhstan. The Center was established on August 31, 2012, to provide methodological, scientific-methodical, and information-analytical support for implementing the Bologna Process parameters in the Republic of Kazakhstan.

## Технологии | Technologies

- React 18
- TypeScript
- Vite
- Tailwind CSS
- i18next (Многоязычность | Multilingual support)
- React Router
- Framer Motion (Анимации | Animations)
- Axios

## Структура проекта | Project Structure

Проект организован по методологии Feature-Sliced Design (FSD):

```
src/
├── app/            # Инициализация приложения | App initialization
├── pages/          # Страницы | Pages
├── widgets/        # Композиционные блоки | Compositional blocks
├── features/       # Функциональные блоки | Functional blocks
├── entities/       # Бизнес-сущности | Business entities
├── shared/         # Переиспользуемые модули | Reusable modules
└── assets/         # Статические ресурсы | Static resources
```

## Установка и запуск | Installation and Running

### Требования | Requirements

- Node.js 16+
- npm или yarn

### Установка | Installation

```bash
# Клонирование репозитория | Clone the repository
git clone https://github.com/your-username/enic-react.git
cd enic-react

# Установка зависимостей | Install dependencies
npm install
# или | or
yarn install
```

### Запуск для разработки | Development

```bash
npm run dev
# или | or
yarn dev
```

Приложение будет доступно по адресу | The application will be available at: `http://localhost:5173`

### Сборка | Build

```bash
npm run build
# или | or
yarn build
```

Собранные файлы будут находиться в директории `build` | The built files will be located in the `build` directory.

## Многоязычность | Multilingual Support

Проект поддерживает три языка | The project supports three languages:
- Русский | Russian
- Английский | English
- Казахский | Kazakh

Файлы переводов находятся в директории `public/locales/` | Translation files are located in the `public/locales/` directory.
