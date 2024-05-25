# Тестування працездатності системи

Тестування сервісу проводилося за допомогою застосунку [Postman](https://www.google.com/search?q=postman&rlz=1C1GCEA_enUA1034UA1034&oq=postman&gs_lcrp=EgZjaHJvbWUqCQgAEEUYOxiABDIJCAAQRRg7GIAEMgcIARAAGIAEMgcIAhAAGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgcIBRAAGIAEMgcIBhAAGIAEMgcIBxAAGIAEMgcICBAAGIAEMgcICRAAGIAE0gEIMTA4NGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8).

## Створення проєкту (метод POST)

### Запит на створення проєкту

![](./create_project.png)

### Відповідь на створення проєкту

![](./create_project_response.jpg)

### Спроба створити проєкт з помилковим часом

![](./create_project_exception_title.jpg)

### Спроба створити проєкт з вже існуючою назвою

![](https://imgur.com/PT8iOvT)

## Отримання проєкту (метод GET)

### Успішне отримання проєкту

![](./get_project.jpg)

### Помилка в отриманні проєкту

![](./get_project_exeption_invalid_id.jpg)

## Оновлення проєкту (метод PATCH)

### Запит на оновлення проєкту

![](./patch_project.jpg)

### Відповідь на оновлення проєкту

![](./patch_project_response.jpg)

### Помилка в оновленні проєкту

![](./patch_project_exception_invalid_id.jpg)

## Видалення користувача (метод DELETE)

### Успішне видалення проєкту

![](./delete_project.jpg)

### Видалення неіснуючого проєкту

![](./delete_project_exeption_invalid_id.jpg)
