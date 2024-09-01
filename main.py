import eel
import requests
import json
from datetime import datetime, timedelta

eel.init('web')

def load_settings():
    try:
        with open('settings.json', 'r') as f:
            return json.load(f)
    except FileNotFoundError:
        return {'api_key': '', 'language': 'ru', 'theme': 'blue'}

@eel.expose
def save_settings(api_key, language, theme):
    settings = {'api_key': api_key, 'language': language, 'theme': theme}
    with open('settings.json', 'w') as f:
        json.dump(settings, f)
    return True

@eel.expose
def get_saved_settings():
    return load_settings()

BASE_URL = "http://api.openweathermap.org/data/2.5/weather"

@eel.expose
def get_weather(city, lang):
    settings = load_settings()
    api_key = settings['api_key']
    if not api_key:
        return {"error": "API key is not set" if lang == 'en' else "API ключ не установлен"}
    
    params = {
        "q": city,
        "appid": api_key,
        "units": "metric",
        "lang": lang
    }
    response = requests.get(BASE_URL, params=params)
    data = response.json()
    
    if response.status_code == 200:
        local_time = datetime.utcnow() + timedelta(seconds=data['timezone'])
        return {
            "temperature": data["main"]["temp"],
            "description": data["weather"][0]["description"],
            "icon": data["weather"][0]["icon"],
            "local_time": local_time.strftime("%H:%M:%S")
        }
    else:
        error_message = "Failed to get weather data" if lang == 'en' else "Не удалось получить данные о погоде"
        return {"error": error_message}

eel.start("main.html", size=(550, 700))