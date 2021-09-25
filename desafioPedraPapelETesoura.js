/*1*/var tesouraVsPaPel = 'Tesoura corta Papel!';
/*2*/var papelVsPedra = 'Papel cobre Veneno!';
    papelVsPedra = papelVsPedra.replace("Veneno", "Pedra");

/*3*/var pedraVsTesoura = 'Pedra esmaga Lagarto!';
    pedraVsTesoura = pedraVsTesoura.replace("esmaga", "quebra");
    pedraVsTesoura = pedraVsTesoura.replace("Lagarto", "Tesoura");

/*4*/var tesouraVsPapel2 = 'Lagarto corta Spock!';
    tesouraVsPapel2 = tesouraVsPapel2.replace("Lagarto", "Tesoura");
    tesouraVsPapel2 = tesouraVsPapel2.replace("Spock", "Papel");

/*5*/var papelVsTesoura = 'Spock vaporiza Tesoura!';
    papelVsTesoura = papelVsTesoura.replace("Spock", "Papel");
    papelVsTesoura = papelVsTesoura.replace("vaporiza", "embrulha");

/*6*/var tesouraVsPapel3 = 'Tesoura decapita Spock!';
    tesouraVsPapel3 = tesouraVsPapel3.replace("decapita", "corta");
    tesouraVsPapel3 = tesouraVsPapel3.replace("Spock", "Papel");

/*7*/var tesouraVsPapel4 = 'Lagarto come Papel!';
    tesouraVsPapel4 = tesouraVsPapel4.replace("Lagarto", "Tesoura");
    tesouraVsPapel4 = tesouraVsPapel4.replace("come", "corta");

/*8*/var pedraVsTesoura2 = 'Veneno refuta Lagarto!';
    pedraVsTesoura2 = pedraVsTesoura2.replace("Veneno", "Pedra");
    pedraVsTesoura2 = pedraVsTesoura2.replace("refuta", "quebra");
    pedraVsTesoura2 = pedraVsTesoura2.replace("Lagarto", "Tesoura");

/*9*/var papelVsPedra2 = 'Spock vaporiza Pedra!';
    papelVsPedra2 = papelVsPedra2.replace("Spock", "Papel");
    papelVsPedra2 = papelVsPedra2.replace("vaporiza", "embrulha");

/*10*/var pedraVsTesoura3 = 'Veneno esmaga Tesoura!';
    pedraVsTesoura3 = pedraVsTesoura3.replace("Veneno", "Pedra");
    pedraVsTesoura3 = pedraVsTesoura3.replace("esmaga", "quebra");

//var game = [tesouraVsPaPel, papelVsPedra, pedraVsTesoura, tesouraVsPapel2, papelVsTesoura, 
//   tesouraVsPapel3, tesouraVsPapel4, pedraVsTesoura2, papelVsPedra2, pedraVsTesoura3];
console.log(tesouraVsPaPel);
console.log(papelVsPedra);
console.log(pedraVsTesoura);
console.log(tesouraVsPapel2);
console.log(papelVsTesoura);
console.log(tesouraVsPapel3);
console.log(tesouraVsPapel4);
console.log(pedraVsTesoura2);
console.log(papelVsPedra2);
console.log(pedraVsTesoura3);