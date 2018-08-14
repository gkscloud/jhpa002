const availableLanguagePacks = {"English":"en", "Русский":"ru"}

const locales = {
    'home': {
        "en": "Home",
        "ru": "Домашняя"
    },
    'ourCars':{
        "en": "Our Cars",
        "ru": "Автомобили",
    },
    'services':{
        "en": "Services",
        "ru": "Сервисы",
    },
    'shippingServices':{
        "en": "Worldwide Shipping",
        "ru": "Международная доставка"
    },
    'salvageCars':{
        "en": "Auction Cars",
        "ru": "Аукционные автомобили"
    },
    'contact':{
        "en": "Contact",
        "ru": "Контакт"
    },
    'about':{
        "en": "About Us",
        "ru": "О Компании"
    },
    'contactUs':{
        "en": "Contact Us",
        "ru": "Контакты"
    },
    'toggleLanguage': {
        "en": "Language",
        "ru": "Язык"
    }

}

const defaultLang = "en"

exports.translate =  function(key, lang) {
    
    if(!lang || !lang in availableLanguagePacks){
        lang = defaultLang;
    }
    else{
        lang = availableLanguagePacks[lang];
    }
    
    if(key in locales){
        var translated = locales[key][lang];
        if(!translated){
            return locales[key][defaultLang];
        }
        else{
            return translated;
        }
    }
    else{
        return "Not Found";
    }
};

exports.getLanguages = function(){
    var languages = []
    if(availableLanguagePacks){
        for (var key in availableLanguagePacks){
            languages.push(key);
        }
    }
    return languages;
}

exports.getLangCode = function(lang){
    var langCode = availableLanguagePacks[lang];
    if(!langCode){
        return defaultLang;
    }
    else if(langCode == defaultLang){
        return "";
    }
    else{
        return langCode;
    }
}
