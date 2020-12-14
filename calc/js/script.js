const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json'); // в нашем случае, указываем путь к файлу
    request.setRequestHeader('Cintent-type', 'application/json; charset=utf-8');
    request.send(); // пустое при GET запросе

    request.addEventListener('readystatechange', () => { 
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response); // выведет полученный ответ от сервера в виде JSON:
            // {
            //     "current": {
            //         "usd": 74
            //     }
            // }
            const data = JSON.parse(request.response);
            inputUsd.value = +inputRub.value / data.current.usd;
        } else {
            inputUsd.value = 'Что-то пошло не так';
        }
    });
});