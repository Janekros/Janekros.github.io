//document.getElementById('button').addEventListener('click', function() {

//definicja funkcji Ajax

function ajax(method, url) {
    // utworzenie obiektu XMLHttpRequest
    var httpReq = new XMLHttpRequest();

    //otwieramy połączenie z serwerem za pomocą httpReq
    httpReq.open(method, url);

    //status połączenia
    //0: połączeie nienawiązane
    //1: połączenie nawiązene
    //2: żądanie odebrane
    //3: przetwarzanie żądania
    //4: dane zwrócone i gotowe do użycia

    httpReq.onreadystatechange = function () {
        //jeśli 4: dane zwrócone i gotowe
        if (httpReq.readyState == 4) {

            //sprawdz kod statusu połącznie, jeśli 200 to jest ok
            if (httpReq.status == 200) {

                //responseText - zwrócone dane w formacie tekstowym
                var returnData = httpReq.responseText;

                httpReq.onsuccess(returnData);//wywołujemy funkcję onsuccess aby zrobić coś z danymi

                //zerujemy obiekt aby nie obciążać połączenia i pamięci

                httpReq = null;
            }
        }
    }
    
    httpReq.onerror = function(response) {
        console.log('error');
    }

    httpReq.onsuccess = function(response) {
        var jsonObj = JSON.parse(response);
        var paragraf_1 = document.createElement('p');
        var paragraf_2 = document.createElement('p');
        var paragraf_3 = document.createElement('p');
        
        paragraf_1.innerHTML = jsonObj.userId;
        paragraf_2.innerHTML = jsonObj.userName;
        paragraf_3.innerHTML = jsonObj.userURL;
        
        document.body.appendChild(paragraf_1);
        document.body.appendChild(paragraf_2);
        document.body.appendChild(paragraf_3);
        
    }
    
    // wysyłame żądania do serwera
    httpReq.send();
    
}

//ajax ('GET', 'http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl')

function pobierzDane() {
    document.getElementById('button').addEventListener('click', function() {
        ajax ('GET', 'http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl')
        });
}

pobierzDane();

// można zrobić to bez funkcji pobierzDane!!!!!!!!!!!1