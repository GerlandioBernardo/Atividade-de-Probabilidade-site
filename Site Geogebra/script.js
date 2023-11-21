let sucesso=document.querySelector("#sucesso");
let button= document.querySelector("#button");
button.addEventListener("click", function(evt){
  evt.preventDefault();
    let valorSucesso=Number(sucesso.value);
    let valorFacasso=1-valorSucesso
    const ctx=document.getElementById("grafico").getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Sucesso' , 'Fracasso'],
          datasets: [{
            label: 'Distribuição de Bernoulli',
            data: [valorSucesso, valorFacasso],
            borderWidth: 1
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
})
function limpaGrafico(){
  location.reload();
}