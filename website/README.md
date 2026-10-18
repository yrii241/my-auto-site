# Сайт My Auto

Статический сайт и блог на Astro. После каждого push в `main` или `master` GitHub Actions публикует сайт на GitHub Pages.

## Локальный запуск

```bash
cd website
npm install
npm run dev
```

Сайт откроется по адресу `http://localhost:4321`.

## Новая статья

Создайте Markdown-файл в `src/content/blog`, например `zamena-masla.md`:

```md
---
title: "Как выбрать интервал замены масла"
description: "Краткое описание для страницы блога и поисковых систем."
publishedAt: 2026-10-18
readingTime: "4 мин"
---

Текст статьи...
```

Имя файла становится адресом статьи: `/blog/zamena-masla/`.

## Публикация

1. В GitHub откройте **Settings → Pages**.
2. В разделе **Build and deployment → Source** выберите **GitHub Actions**.
3. Отправьте изменения в `main` или запустите workflow `Deploy website to GitHub Pages` вручную.

Политика конфиденциальности копируется из `docs/privacy_policy.html` во время сборки и публикуется по адресу `/privacy_policy.html`.
