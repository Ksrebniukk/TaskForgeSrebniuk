# Тестування працездатності системи

Тестування сервісу проводилося за допомогою застосунку [Postman](https://www.google.com/search?q=postman&rlz=1C1GCEA_enUA1034UA1034&oq=postman&gs_lcrp=EgZjaHJvbWUqCQgAEEUYOxiABDIJCAAQRRg7GIAEMgcIARAAGIAEMgcIAhAAGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgcIBRAAGIAEMgcIBhAAGIAEMgcIBxAAGIAEMgcICBAAGIAEMgcICRAAGIAE0gEIMTA4NGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8).

## Створення проєкту (метод POST)

### Запит на створення проєкту

![create_project.png](https://imgur.com/ays5Q5H)

### Відповідь на створення проєкту

![create_project_response.png](https://imgur.com/1jPdpFq)

### Спроба створити проєкт з помилковим часом

![create_project_exception_data.png](https://imgur.com/irqdCjz)

### Спроба створити проєкт з вже існуючою назвою

![create_project_exception_title.png](https://imgur.com/PT8iOvT)

## Отримання проєкту (метод GET)

### Успішне отримання проєкту

![get_project.png](https://imgur.com/3PnubPx)

### Помилка в отриманні проєкту

![get_project_exeption_invalid_id.png](https://imgur.com/YCDzj5j)

## Оновлення проєкту (метод PATCH)

### Запит на оновлення проєкту

![patch_project.png](https://imgur.com/lhGBv66)

### Відповідь на оновлення проєкту

![patch_project_response.png](https://imgur.com/jXD32G4)

### Помилка в оновленні проєкту

![patch_project_exception_invalid_id.png](https://imgur.com/ASPa4sr)

## Видалення користувача (метод DELETE)

### Успішне видалення проєкту

![delete_project.png](https://imgur.com/tmQo1FY)

### Видалення неіснуючого проєкту

![delete_project_exeption_invalid_id.png](https://imgur.com/779FRi2)