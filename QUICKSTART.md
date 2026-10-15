# 📋 Чеклист: Как опубликовать сайт на GitHub Pages

## ⚡ Быстрая инструкция (5 минут)

### Шаг 1️⃣: Создайте репозиторий на GitHub
1. Откройте https://github.com/new
2. Введите название: `banking-website` (или любое другое)
3. Выберите **Public**
4. ❗ **НЕ ставьте галочку** "Add a README file"
5. Нажмите **Create repository**

### Шаг 2️⃣: Скопируйте URL репозитория
После создания GitHub покажет URL вида:
```
https://github.com/ВАШ_USERNAME/banking-website.git
```
**Скопируйте этот URL!**

### Шаг 3️⃣: Откройте терминал Claude Code
Вставьте эти команды **ПО ОЧЕРЕДИ** (замените URL на свой):

```bash
cd "C:\Users\gosgo\OneDrive\Рабочий стол\WebSite FINKI"
```

```bash
git remote add origin https://github.com/ВАШ_USERNAME/banking-website.git
```

```bash
git branch -M main
```

```bash
git push -u origin main
```

❗ **Внимание**: При первом push GitHub попросит авторизацию:
- Username: ваш логин GitHub
- Password: **НЕ пароль!** Используйте Personal Access Token (см. ниже)

### Шаг 4️⃣: Включите GitHub Pages
1. Откройте ваш репозиторий на GitHub
2. Перейдите в **Settings** (вкладка справа)
3. В левом меню нажмите **Pages**
4. В разделе "Branch":
   - Выберите **main**
   - Выберите **/ (root)**
   - Нажмите **Save**

### Шаг 5️⃣: Получите ссылку на сайт ✅
Через 1-2 минуты сайт будет доступен:
```
https://ВАШ_USERNAME.github.io/banking-website/
```

---

## 🔑 Как получить Personal Access Token (PAT)?

Если GitHub просит пароль при `git push`:

1. Откройте: https://github.com/settings/tokens
2. Нажмите **Generate new token** → **Generate new token (classic)**
3. Название: `Website Deploy`
4. Срок: 90 days (или больше)
5. Выберите scope: **✅ repo** (только это!)
6. Нажмите **Generate token**
7. **Скопируйте token** (показывается только 1 раз!)
8. Используйте этот token вместо пароля

---

## ❓ Что делать если...

### Ошибка: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/ВАШ_USERNAME/banking-website.git
```

### Ошибка: "failed to push"
```bash
git pull origin main --rebase
git push -u origin main
```

### Сайт не открывается
- Подождите 5 минут после включения GitHub Pages
- Проверьте Settings → Pages (должен быть зеленый чекмарк)
- Попробуйте открыть в режиме инкогнито

---

## ✅ Готово!

После всех шагов:
1. ✅ Сайт работает онлайн
2. ✅ Доступен по короткой ссылке
3. ✅ Оптимизирован для мобильных
4. ✅ Все ссылки ведут на @wwooolf

**Можно делиться ссылкой с клиентами!** 🎉

---

## 🔄 Как обновить сайт в будущем?

Если нужно внести изменения:

```bash
cd "C:\Users\gosgo\OneDrive\Рабочий стол\WebSite FINKI"
git add .
git commit -m "Update website content"
git push
```

Изменения появятся на сайте через 1-2 минуты.
