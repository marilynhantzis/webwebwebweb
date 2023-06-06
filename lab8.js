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