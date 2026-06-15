# CLAUDE.md — webOlhaDriveClient (Client PWA)

## Workflow

Зміни спочатку в `webID4client`, потім портуються сюди.
GitHub акаунт: `sash5385`

## Стек

- React + Vite + JSX
- Firebase Realtime Database
- Firebase Hosting (проєкт: `olhadrive-booking`)
- PWA (Service Worker, useAppUpdate hook)

## Хост

olhadrive-app.web.app

## Деплой

SA ключ: `/home/user/olhadrive-sa.json` (завантажується з Firebase Console на початку сесії)

```bash
cd /home/user/webOlhaDriveClient
GOOGLE_APPLICATION_CREDENTIALS=/home/user/olhadrive-sa.json npm run build
GOOGLE_APPLICATION_CREDENTIALS=/home/user/olhadrive-sa.json firebase deploy --only hosting
```

## Правила

- Мінімальні зміни — не переписувати робочий код без причини
- Не змінювати UI без прямого запиту (кольори, відступи, структура)
- Не виконувати без підтвердження: `rm -rf`, `git reset --hard`, `git push --force`

## Стиль відповідей

- Мінімум тексту: що зроблено + файл/рядок, без пояснень якщо не питали
- Після кожного повідомлення виводити **Повідомлення #N**
- Після 30 повідомлень — запропонувати новий чат з підсумками
