/*1*/var tesouraVsPaPel = 'Tesoura corta Papel!';
/*2*/var papelVsPedra = 'Papel cobre Veneno!';
     var afterpapelVsPedra;
     afterpapelVsPedra = papelVsPedra.replace("Veneno", "Pedra");

/*3*/var pedraVsTesoura = 'Pedra esmaga Lagarto!';
     var afterpedraVsTesoura;
     afterpedraVsTesoura = pedraVsTesoura.replace("esmaga", "quebra");
     afterpedraVsTesoura = pedraVsTesoura.replace("Lagarto", "Tesoura");

/*4*/var tesouraVsPapel2 = 'Lagarto corta Spock!';
     var aftertesouraVsPapel2
     aftertesouraVsPapel2 = tesouraVsPapel2.replace("Lagarto", "Tesoura");
     aftertesouraVsPapel2 = tesouraVsPapel2.replace("Spock", "Papel");

/*5*/var papelVsTesoura = 'Spock vaporiza Tesoura!';
     var afterpapelVsTesoura;
     afterpapelVsTesoura = papelVsTesoura.replace("Spock", "Papel");
     afterpapelVsTesoura = papelVsTesoura.replace("vaporiza", "embrulha");

/*6*/var tesouraVsPapel3 = 'Tesoura decapita Spock!';
     var aftertesouraVsPapel3;
     aftertesouraVsPapel3 = tesouraVsPapel3.replace("decapita", "corta");
     aftertesouraVsPapel3 = tesouraVsPapel3.replace("Spock", "Papel");

/*7*/var tesouraVsPapel4 = 'Lagarto come Papel!';
     var aftertesouraVsPapel4;
     aftertesouraVsPapel4 = tesouraVsPapel4.replace("Lagarto", "Tesoura");
     aftertesouraVsPapel4 = tesouraVsPapel4.replace("come", "corta");

/*8*/var pedraVsTesoura2 = 'Veneno refuta Lagarto!';
     var afterpedraVsTesoura2;
     afterpedraVsTesoura2 = pedraVsTesoura2.replace("Veneno", "Pedra");
     afterpedraVsTesoura2 = pedraVsTesoura2.replace("refuta", "quebra");
     afterpedraVsTesoura2 = pedraVsTesoura2.replace("Lagarto", "Tesoura");

/*9*/var papelVsPedra2 = 'Spock vaporiza Pedra!';
     var afterpapelVsPedra2;
     afterpapelVsPedra2 = papelVsPedra2.replace("Spock", "Papel");
     afterpapelVsPedra2 = papelVsPedra2.replace("vaporiza", "embrulha");

/*10*/var pedraVsTesoura3 = 'Veneno esmaga Tesoura!';
      var afterpedraVsTesoura3;
      afterpedraVsTesoura3 = pedraVsTesoura3.replace("Veneno", "Pedra");
      afterpedraVsTesoura3 = pedraVsTesoura3.replace("esmaga", "quebra");

//var game = [tesouraVsPaPel, papelVsPedra, pedraVsTesoura, tesouraVsPapel2, papelVsTesoura, 
//   tesouraVsPapel3, tesouraVsPapel4, pedraVsTesoura2, papelVsPedra2, pedraVsTesoura3];
console.log('Não precisei mudar nada nesta String' + tesouraVsPaPel);
console.log('Usei o método replace para mudar palavras da String ' + papelVsPedra + ' para a string ' + afterpapelVsPedra);
console.log('Usei o método replace para mudar palavras da String ' + pedraVsTesoura + ' para a string ' + afterpedraVsTesoura);
console.log('Usei o método replace para mudar palavras da String ' + tesouraVsPapel2 + ' para a string ' + aftertesouraVsPapel2);
console.log('Usei o método replace para mudar palavras da String ' + papelVsTesoura + ' para a string ' + afterpapelVsTesoura);
console.log('Usei o método replace para mudar palavras da String ' + tesouraVsPapel3 + ' para a string ' + aftertesouraVsPapel3);
console.log('Usei o método replace para mudar palavras da String ' + tesouraVsPapel4 + ' para a string ' + aftertesouraVsPapel4);
console.log('Usei o método replace para mudar palavras da String ' + pedraVsTesoura2 + ' para a string ' + afterpedraVsTesoura2);
console.log('Usei o método replace para mudar palavras da String ' + papelVsPedra2 + ' para a string ' + afterpapelVsPedra2);
console.log('Usei o método replace para mudar palavras da String ' + pedraVsTesoura3 + ' para a string ' + afterpedraVsTesoura3);