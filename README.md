# Репозиторий для приложения проекта `Mesto` (frontend + backend)

## [Ссылка](https://murzin.ruslan.students.nomoredomains.monster/) на проект (развернут на виртуальной машине с помощью сервиса Yandex.Cloud)

## Описание

Репозиторий для приложения проекта `Mesto`, включающий фронтенд и бэкенд части приложения со следующими возможностями: авторизации и регистрации пользователей, операции с карточками и пользователями. Бэкенд располагается в директории `express-mesto/`, а фронтенд - в `react-mesto-auth/`.

## Функциональность проекта

* Функциональность проекта описана отдельно для каждой директории - фронтенд и бэкенд - в файлах `README.md`.

* В качестве эксперимента и освоения - `для объединения 2-х репозиториев в один` - выбран подход `git submodules`.

## Как использовать `git submodules`

### Краткое руководство приведено [по этой ссылке](https://git-scm.com/book/ru/v2/%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B-Git-%D0%9F%D0%BE%D0%B4%D0%BC%D0%BE%D0%B4%D1%83%D0%BB%D0%B8)

### Основные команды

#### `git clone --recurse-submodules https://github.com/Ruslan-Mrzn/react-mesto-api-full.git`
Клонирование проекта с подмодулями

#### `git submodule update --remote`
Получение изменений всех подмодулей из удалённого репозитория

### Почему `submodules`

* Мне было интересно попробовать этот способ

* Удобно работать с каждой частью проекта (front и back) отдельно

* Удобно забирать обновления из подмодулей одной командой

* Есть возможность "гибкой" настройки для обновления из определенной ветки удалённого репозитория
