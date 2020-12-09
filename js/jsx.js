let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();

function getMonth() {
    switch(mm) {
        case '01':
            return 'janúar'
        case '02':
            return 'febrúar'
        case '03':
            return 'mars'
        case '04':
            return 'apríl'
        case '05':
            return 'maí'
        case '06':
            return 'júní'
        case '07':
            return 'júlí'
        case '08':
            return 'ágúst'
        case '09':
            return 'september'
        case '10':
            return 'óktóber'
        case '11':
            return 'nóvember'
        case '12':
            return 'desember'
    }
}

let currentDate = `${dd} ${getMonth()} ${yyyy}`;

let elements = document.getElementsByClassName('jsx:current-date');

for (var i = 0; elements.length > i; i++) {
    let element = elements[i];
    element.innerHTML = currentDate;
}