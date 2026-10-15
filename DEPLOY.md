# 🚀 Инструкция по деплою на GitHub Pages

## Шаг 1: Создание репозитория на GitHub

1. Перейдите на [GitHub](https://github.com)
2. Войдите в свой аккаунт (или создайте новый)
3. Нажмите на кнопку "+" в правом верхнем углу
4. Выберите "New repository"
5. Заполните данные:
   - **Repository name**: `banking-consultant-website` (или любое другое имя)
   - **Description**: "Professional banking consultant website"
   - **Visibility**: Public
   - ❗ **НЕ** ставьте галочку "Initialize this repository with a README"
6. Нажмите "Create repository"

## Шаг 2: Загрузка кода на GitHub

После создания репозитория GitHub покажет инструкции. Выполните следующие команды в терминале:

```bash
cd "C:\Users\gosgo\OneDrive\Рабочий стол\WebSite FINKI"

# Добавьте ваш GitHub репозиторий (замените YOUR_USERNAME на ваш логин GitHub)
git remote add origin https://github.com/YOUR_USERNAME/banking-consultant-website.git

# Загрузите код на GitHub
git branch -M main
git push -u origin main
```

**Пример:**
Если ваш username на GitHub: `andreybank`, команда будет:
```bash
git remote add origin https://github.com/andreybank/banking-consultant-website.git
```

## Шаг 3: Настройка GitHub Pages

1. Перейдите в ваш репозиторий на GitHub
2. Нажмите на вкладку **Settings** (Настройки)
3. В левом меню найдите **Pages**
4. В разделе "Source" (Источник):
   - Выберите **main** (ветка)
   - Выберите **/ (root)** (корневая папка)
5. Нажмите **Save**
6. Подождите 1-2 минуты

## Шаг 4: Готово! 🎉

Ваш сайт будет доступен по адресу:
```
https://YOUR_USERNAME.github.io/banking-consultant-website/
```

Например:
```
https://andreybank.github.io/banking-consultant-website/
```

---

## 🔄 Обновление сайта

Если вы внесли изменения в код и хотите обновить сайт:

```bash
cd "C:\Users\gosgo\OneDrive\Рабочий стол\WebSite FINKI"

git add .
git commit -m "Update website"
git push
```

Изменения появятся на сайте через 1-2 минуты.

---

## ❗ Возможные проблемы

### Проблема 1: Git просит авторизацию
**Решение**: Используйте Personal Access Token вместо пароля:
1. Перейдите в GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token (classic)
3. Выберите scope: `repo`
4. Скопируйте token
5. При запросе пароля вставьте этот token

### Проблема 2: Сайт не открывается
**Решение**: 
- Подождите 5-10 минут после настройки GitHub Pages
- Проверьте, что файл называется `index.html` (с маленькой буквы)
- Убедитесь, что в Settings → Pages выбрана правильная ветка (main)

### Проблема 3: Изображения не загружаются
**Решение**: Проверьте, что путь к изображению правильный в `styles.css`

---

## 📱 Что дальше?

✅ Сайт полностью готов и оптимизирован
✅ Адаптирован для мобильных устройств
✅ Все ссылки ведут на Telegram @wwooolf
✅ SEO оптимизация выполнена

**Можете делиться ссылкой на сайт!** 🚀
