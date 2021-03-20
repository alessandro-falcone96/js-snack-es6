$(document).ready(function() {

  let pesoMinore = 1000;
  let indexBiciMigliore = 0;

  const bici = [
    {
      Nome: 'Cannondale',
      Peso: 500
    },
    {
      Nome: 'Bianchi',
      Peso: 200
    },
    {
      Nome: 'Bottecchia',
      Peso: 600
    },
    {
      Nome: 'Carrera',
      Peso: 500
    }
  ];

  for (let i = 0; i < bici.length; i++) {
    if (bici[i].Peso < pesoMinore) {
      pesoMinore = bici[i].Peso;
      indexBiciMigliore = i;
    }
  }

  console.log(`La bici più leggera è ${JSON.stringify(bici[indexBiciMigliore])}`);

});
