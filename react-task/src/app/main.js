let data = require('./data');
// Добавлен модуль, который преобразует в верхний регистр
let uCase = require('./ucase');
let developer = require('./module');

developer(uCase(data.surname), uCase(data.name), uCase(data.patronymic));

exports.developer = developer;