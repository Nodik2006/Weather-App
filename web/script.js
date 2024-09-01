let currentLanguage = "ru";
let currentTheme = "blue";

const translations = {
  ru: {
    appTitle: "Погодное приложение",
    cityInputPlaceholder: "Введите название города",
    getWeatherBtn: "Получить погоду",
    settingsTitle: "Настройки",
    apiKeyInputPlaceholder: "Введите API ключ",
    saveSettingsBtn: "Сохранить настройки",
    backBtn: "Вернуться",
    localTime: "Местное время",
    blueTheme: "Синяя тема",
    redTheme: "Красная тема",
    darkTheme: "Темная тема",
    lightTheme: "Светлая тема",
  },
  en: {
    appTitle: "Weather App",
    cityInputPlaceholder: "Enter city name",
    getWeatherBtn: "Get Weather",
    settingsTitle: "Settings",
    apiKeyInputPlaceholder: "Enter API key",
    saveSettingsBtn: "Save Settings",
    backBtn: "Back",
    localTime: "Local time",
    blueTheme: "Blue theme",
    redTheme: "Red theme",
    darkTheme: "Dark theme",
    lightTheme: "Light theme",
  },
};

function updateLanguage(lang) {
  currentLanguage = lang;
  document.getElementById("appTitle").textContent = translations[lang].appTitle;
  document.getElementById("cityInput").placeholder =
    translations[lang].cityInputPlaceholder;
  document.getElementById("getWeatherBtn").textContent =
    translations[lang].getWeatherBtn;
  document.getElementById("settingsTitle").textContent =
    translations[lang].settingsTitle;
  document.getElementById("apiKeyInput").placeholder =
    translations[lang].apiKeyInputPlaceholder;
  document.getElementById("saveSettingsBtn").textContent =
    translations[lang].saveSettingsBtn;
  document.getElementById("backBtn").textContent = translations[lang].backBtn;

  // Обновляем опции выбора темы
  const themeSelect = document.getElementById("themeSelect");
  themeSelect.options[0].textContent = translations[lang].blueTheme;
  themeSelect.options[1].textContent = translations[lang].redTheme;
  themeSelect.options[2].textContent = translations[lang].darkTheme;
  themeSelect.options[3].textContent = translations[lang].lightTheme;
}

function updateTheme(theme) {
  currentTheme = theme;
  document.body.className = theme + "-theme";
}

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const weatherInfo = await eel.get_weather(city, currentLanguage)();
  const weatherInfoDiv = document.getElementById("weatherInfo");

  if (weatherInfo.error) {
    weatherInfoDiv.innerHTML = `<p class="error">${weatherInfo.error}</p>`;
  } else {
    weatherInfoDiv.innerHTML = `
      <p class="temperature">${weatherInfo.temperature}°C</p>
      <p class="description">${weatherInfo.description}</p>
      <img src="http://openweathermap.org/img/w/${weatherInfo.icon}.png" alt="Weather icon" class="weather-icon">
      <p class="local-time">${translations[currentLanguage].localTime}: ${weatherInfo.local_time}</p>
    `;
  }
}

function showSettings() {
  document.getElementById("mainContainer").style.display = "none";
  document.getElementById("settingsContainer").style.display = "block";
  loadSavedSettings();
}

function showMain() {
  document.getElementById("settingsContainer").style.display = "none";
  document.getElementById("mainContainer").style.display = "block";
}

async function saveSettings() {
  const apiKey = document.getElementById("apiKeyInput").value;
  const language = document.getElementById("languageSelect").value;
  const theme = document.getElementById("themeSelect").value;
  const result = await eel.save_settings(apiKey, language, theme)();
  if (result) {
    alert(
      currentLanguage === "ru"
        ? "Настройки успешно сохранены"
        : "Settings saved successfully"
    );
    updateLanguage(language);
    updateTheme(theme);
  } else {
    alert(
      currentLanguage === "ru"
        ? "Ошибка при сохранении настроек"
        : "Error saving settings"
    );
  }
}

async function loadSavedSettings() {
  const settings = await eel.get_saved_settings()();
  document.getElementById("apiKeyInput").value = settings.api_key;
  document.getElementById("languageSelect").value = settings.language;
  document.getElementById("themeSelect").value = settings.theme;
  updateLanguage(settings.language);
  updateTheme(settings.theme);
}

// Добавляем обработчики событий для мгновенного изменения языка и темы
document
  .getElementById("languageSelect")
  .addEventListener("change", function () {
    updateLanguage(this.value);
  });

document.getElementById("themeSelect").addEventListener("change", function () {
  updateTheme(this.value);
});

// Загрузка сохраненных настроек при запуске
loadSavedSettings();
