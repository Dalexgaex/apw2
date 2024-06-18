
document.getElementById('generar').addEventListener('click', function() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const nombre = data.results[0].name.first;
            const apellido = data.results[0].name.last;
            document.getElementById('nombre').innerText = `${nombre} ${apellido}`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('nombre').innerText = 'Error al generar nombre';
        });
});
