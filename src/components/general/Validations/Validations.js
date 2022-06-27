export const required = (value) => {
    if (value) return undefined;

    return "Field is required"; // Якщо в нас в текстеріі не має даних пишимо помилку: "Field is required"
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength)
        return `Max Length is ${maxLength} symbols`; // Якщо в нас в текстеріі багато символів пишем помилку:
    //`Max Length is ${maxLength} symbols`;
    return undefined;
}