window._ = require('lodash');

try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}

// Laravel API
window.axios = require('axios');
axios.defaults.withCredentials = true;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Change= Services API
window.axiosServices = axios.create({
    baseURL: 'https://services.change-is.com',
    headers: {
        'Authorization': 'Bearer '+btoa('beheer' + ':' + 'S3cure!ty')
    },
    withCredentials: false,
});

// Change= Services API
window.axiosStaff = axios.create({
    baseURL: 'https://app.onthat.app/api',
    auth: {
        username: 'Change=ApiAccount',
        password: 'dNYB72n!2@jd67!mcZ3'
    },
    withCredentials: false,
});

window.LoadingScreen = function (set) {
    const LoadingScreen = $('#LoadingScreen');

    switch(set) {
        case 'show':
            LoadingScreen.addClass('show');
            break;
        case 'hide':
            LoadingScreen.removeClass('show');
            break;
    }
}
