export const getText = (text: string) => {
    switch (text) {
        case "gas":
            return "Бензин"
        case "diesel":
            return "Дизель"
        case "electricity":
            return "Электрический"
        case "a":
            return "Автоматический"
        case "m":
            return "Ручной"
    }
}