function torta(){
    //inicializa el grafico
        const ctx = document.getElementById('torta');

        const colores=['#d1d414ff','#e49216ff','#fa1007ff','#8a8a8aff', ' #ffa571ff']

        // da comienzo a las librerias de chartjs
        new Chart(ctx, {
            type: 'pie', // tipo de grafico a representar
            data: {    //  0      1         2         3
                labels: ['1960', '1970', '1980', '1990', '2000', '2010', '2020'],
                datasets: [{
                    label: 'Generación de energía solar (Twh)',
                        // 0   1   2   
                    data: [0.01, 0.01, 0.002, 0.037, 0.385, 17.34, 55.97],
                    // ancho de borde de las barra
                    borderWidth: 2,
                    backgroundColor:colores

                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

}

Chart.defaults.color = "#ffffff"
torta();