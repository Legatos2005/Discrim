newFunction();

function newFunction() {
    var vopros = confirm('Будем решать квадратное уравнение?');
    console.log(vopros);
    if (vopros) {
        var a = prompt('Введите первое число не равное нулю', '');
        console.log(a);
        if (a == 0 || '') {
            alert('Введите число повторно');
            var a = prompt('Введите первое число не равное нулю', '');
            var b = prompt('Введите второе число', '');
            var c = prompt('Введите третье число', '');
            var discrim = (b * b - 4 * a * c);
            if (discrim > 0) {
                x1 = (-b + Math.sqrt(discrim)) / (2 * a);
                x2 = (-b - Math.sqrt(discrim)) / (2 * a);
                alert('Первый корень = ' + x1 + ' а второй корень = ' + x2);
            }
            if (discrim == 0) {
                x = (-b) / (2 * a);
                alert('У нас всего 1 корень x = ' + x);
            }
            if (discrim < 0) {
                alert('К сожалению корней нет');
            }
        } else {
            
        var b = prompt('Введите второе число', '');
        var c = prompt('Введите третье число', '');
        var discrim = (b * b - 4 * a * c);
        if (discrim > 0) {
            x1 = (-b + Math.sqrt(discrim)) / (2 * a);
            x2 = (-b - Math.sqrt(discrim)) / (2 * a);
            alert('Первый корень = ' + x1 + ' а второй корень = ' + x2);
        }
        if (discrim == 0) {
            x = (-b) / (2 * a);
            alert('У нас всего 1 корень x = ' + x);
        }
        if (discrim < 0) {
            alert('К сожалению корней нет');
        }
    }
    } else {
        alert("Заходите в другой раз ;)");
    }
}