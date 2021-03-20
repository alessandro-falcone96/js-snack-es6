$(document).ready(function() {

  const squadre = [
    {
      Nome: 'Juventus',
      Punti: 0,
      Falli: 0
    },
    {
      Nome: 'Inter',
      Punti: 0,
      Falli: 0
    },
    {
      Nome: 'Milan',
      Punti: 0,
      Falli: 0
    },
    {
      Nome: 'Roma',
      Punti: 0,
      Falli: 0
    }
  ];


  const newSquadre = [];

  for (let i = 0; i < squadre.length; i++) {
    squadre[i].Punti = Math.floor(Math.random() * 15) + 1;
    squadre[i].Falli = Math.floor(Math.random() * 15) + 1;
  }
  console.log(`Ecco la lista delle squadra con i relativi punti fatti e falli subiti: ${JSON.stringify(squadre)}`);

  for (let j = 0; j < squadre.length; j++) {

    let obj = ({
      Nome: squadre[j].Nome,
      Falli: squadre[j].Falli
    });
    newSquadre.push(obj)
  }

  console.log(`E questa è la lista delle squadre solamente con i falli subiti: ${JSON.stringify(newSquadre)}`);

});
