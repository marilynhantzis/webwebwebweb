function showDate() {
    let out = document.getElementById('current-date');
    let out1 = document.getElementById('current-date1');
    let out2 = document.getElementById('current-date2');
    let out3 = document.getElementById('current-date3');
    let out4 = document.getElementById('current-date4');
    let today = new Date();
    out.innerHTML = 'Дата и время для русской локали: ' + today.toLocaleString('ru-RU');
    out1.innerHTML = 'Дата и время для арабской локали: ' + today.toLocaleString('ar-AE');
    out2.innerHTML = 'Дата и время для турецкой локали: ' + today.toLocaleString('tr-TR');
    out3.innerHTML = 'Дата и время для вьетнамской локали: ' + today.toLocaleString('vi-VN');
    out4.innerHTML = 'Дата и время для норвежской локали: ' + today.toLocaleString('nb-NO');

}

function showDaysCount() {
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date (inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    daysCount = Math.floor (daysCount);
    let datetime = document.querySelector('div[id=datetime]');
    datetime.innerHTML = 'Вы родились около ' + daysCount + ' дней назад'
}

function deleteDays() {
    document.querySelector('div[id=datetime]').innerHTML = '';
    document.querySelector('input[type=date]').value='';
}

function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = currentTime;
}

setInterval (showTime, 1000);


