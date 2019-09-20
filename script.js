/*function initMap() {
    const opt = {
        center: {lat:49.55378902974205,lng:25.5719207519738},
        zoom: 16,
        mapTypeId: 'roadmap'
    };
    const map = new google.maps.Map(document.getElementById('map'),opt);
}
*/

const data = {
    type: 'город',
    name: 'Тернополь',
    code: '69000',
    address: 'проспект Соборный 151',
    email: 'mycitytic@gmail.com'
};
const administrationPhones =  [ '+380504242054', '+380617097001'];


function addInformation() {
    const informCenter = document.getElementById('informCenter');
    const htmlText = data.type + ' ' + data.name + ', ' + data.code + '<br>'
                    + data.address + '<br>'
                    + data.email;
    informCenter.innerHTML = htmlText;


    const adminPhones = document.getElementById('phones');
    const htmlPhones = administrationPhones.map(item => item+'<br>').join('')
    adminPhones.innerHTML = htmlPhones;
}

addInformation();
