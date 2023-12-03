
const searchBarItem = {
    type: {
        title: "Тип недвижимости",
        defaultValue: "Все",
        dropdownMenuArr: [
            "Аланья Центр",
            "Авсаллар",
            "Оба",
            "Тосмур",
            "Махмутлар"
        ],
        activeValue: "",
        id: 'type'},

    estate: {
        title: "Недвижимость",
        defaultValue: "Все районы",
        activeValue: "",
        dropdownMenuArr: ["Ознакомительный тур", "Онлайн-подбор", "Продать недвижимость", "Послепродажный сервис"],
        id: 'estate'
    },

    district: {
        title: "Район",
        defaultValue: "Все районы",
        activeValue: "",
        dropdownMenuArr: ["Аланья Центр", "Авсаллар", "Оба", "Тосмур", "Махмутлар"],
        id: 'district'
    },

    layout: {
        title: "Планировка",
        defaultValue: "Любая",
        activeValue: "",
        dropdownMenuArr: ["О нас", "Наша команда", "Вакансии"],
        id: 'layout'
    },

    distance: {
        title: "Расстояние до моря",
        defaultValue: "Любое",
        activeValue: "",
        dropdownMenuArr: ["до 500м", "до 2км", "до 1000км"],
        id: 'distance'
    },

    area: {
        title: "Площадь",
        defaultValue: "Любая",
        activeValue: "",
        dropdownMenuArr: ["5 кв.м", "50 кв.м", "500 кв.м", "5000 кв.м"],
        id: 'area'
    },

    advantages: {
        title: "Преимущества",
        defaultValue: "Любые",
        activeValue: "",
        dropdownMenuArr: ["Балкон", "Чайник", "Крыша"],
        id: 'advantages'
    },

    yearBuild: {
        title: "Год постройки",
        defaultValue: "Неважно",
        activeValue: "",
        dropdownMenuArr: ["100 год до н.э", "1950г.", "2024г."],
        id: 'yearBuild'
    },

    infrastructure: {
        title: "Инфаструктура",
        defaultValue: "Выбрать...",
        activeValue: [],
        dropdownMenuArr: ["Школа", "Парковка", "Личный аэропорт", "Шаверма"],
        id: 'infrastructure'
    }
}

export default searchBarItem;
