document.addEventListener('DOMContentLoaded', function(){
    let time = document.querySelector('#time');
    let day = document.querySelector('#day');
    let midday = document.querySelector('#midday');
    
    let clock = setInterval(
        function calcTime() {
            let now = new Date();
            let hour = now.getHours();
            let minute = now.getMinutes();
            let second = now.getSeconds();
            let middayValue = "AM";
    
            let days = [
                "Domingo",
                'Segunda-Feira',
                'Terça-Feira',
                'Quarta-Feira',
                'Quinta-Feira',
                'Sexta-Feira',
                'Sábado',
            ];
            day.textContent = days[now.getDay()];
     
            middayValue = hour > 12 ? "PM" : 'AM';
            if(hour < 0) {
                hour = 12;
            }else if (hour > 12) {
                hour == 12;
            }
            hour = hour < 10 ? "0" + hour : hour;
            minute = minute < 10 ? "0" + minute : minute;
            second = second < 10 ? "0" + second : second;
    
            time.textContent = hour + ':' + minute + ":" + second;
            midday.textContent = middayValue;
        },
    );

})