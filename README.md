# Погодное приложение / Weather App

[English version below](#weather-app)

Это простое погодное приложение, созданное с использованием Python (Eel) для бэкенда и HTML/CSS/JavaScript для фронтенда. Приложение позволяет пользователям получать текущую погоду для выбранного города, используя API OpenWeatherMap.

## Особенности

- Получение текущей погоды для любого города
- Поддержка русского и английского языков
- Настраиваемые темы оформления (синяя, красная, темная, светлая)
- Сохранение пользовательских настроек

## Требования

- Python 3.6+
- Eel
- Requests

## Установка

1. Клонируйте репозиторий:

   ```
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```

2. Установите необходимые зависимости:

   ```
   pip install eel requests
   ```

3. Получите API ключ от [OpenWeatherMap](https://openweathermap.org/api) и добавьте его в настройки приложения.

## Использование

1. Запустите приложение:

   ```
   python main.py
   ```

2. В открывшемся окне введите название города и нажмите кнопку "Получить погоду".

3. Для изменения настроек (API ключ, язык, тема) нажмите на иконку настроек в правом нижнем углу.

## Структура проекта

- `main.py`: Основной файл Python с бэкенд-логикой
- `web/main.html`: Основной HTML файл
- `web/script.js`: JavaScript для взаимодействия с пользователем
- `web/styles.css`: CSS стили для приложения
- `web/img/`: Директория с изображениями

## Лицензия

Этот проект распространяется под лицензией MIT. Подробности смотрите в файле `LICENSE`.

---

# Weather App

This is a simple weather application created using Python (Eel) for the backend and HTML/CSS/JavaScript for the frontend. The application allows users to get current weather information for a selected city using the OpenWeatherMap API.

## Features

- Get current weather for any city
- Support for Russian and English languages
- Customizable themes (blue, red, dark, light)
- Save user settings

## Requirements

- Python 3.6+
- Eel
- Requests

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```

2. Install the required dependencies:

   ```
   pip install eel requests
   ```

3. Get an API key from [OpenWeatherMap](https://openweathermap.org/api) and add it to the application settings.

## Usage

1. Run the application:

   ```
   python main.py
   ```

2. In the opened window, enter the name of the city and click the "Get Weather" button.

3. To change settings (API key, language, theme), click on the settings icon in the bottom right corner.

## Project Structure

- `main.py`: Main Python file with backend logic
- `web/main.html`: Main HTML file
- `web/script.js`: JavaScript for user interaction
- `web/styles.css`: CSS styles for the application
- `web/img/`: Directory with images

## License

This project is distributed under the MIT license. See the `LICENSE` file for details.
