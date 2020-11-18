// CHIEDERE UTENTE IL COGNOME

var userLastName = prompt('What\'s your last name?').toUpperCase();


  if (!userLastName || !userLastName.match(/^[a-z]+$/i)) {



    alert("Only letters are allowed");




  }

  else {
    // INSERIRE COGNOME IN UN ARRAY

    // creo array list

    var lastNameList = ["AJEJE", "BRAZORF", "BRAMBILLA", "FUMAGALLI"];

    lastNameList.push(userLastName);

    // STAMPA ARRAY ORDINATA ALFABETICAMENTE

    lastNameList.sort();

    // SCRIVI LA POSIZIONE DEL COGNOME NELLA LISTA

    // SOLUZIONE USANDO IL WHILE LOOP

    var i = 0;
    var result = false;

    while (i < lastNameList.length) {
      var ul_list = document.getElementById("ul_list").innerHTML;
      document.getElementById("ul_list").innerHTML =
        ul_list + "<li>" + lastNameList[i] + "</li>";

      console.log(lastNameList[i]);

      if (userLastName == lastNameList[i]) {
        result = true;
      }

      i++;
    }

    if (result) {
      var posizione = document.getElementById("posizione");
      posizione.innerHTML =
        "Your lastname position within the list is " +
        (lastNameList.indexOf(userLastName) + 1);
    }
  }



// SOLUZIONE USANDO IL FOR LOOP

// var result = false;

// for (var i= 0; i < lastNameList.length; i++) {

// PRIMO METODO

    // var ul_list = document.getElementById("ul_list").innerHTML;
    // document.getElementById("ul_list").innerHTML = ul_list + "<li>" + lastNameList[i] + "</li>";

// SECONDO METODO

    // var ul_list = document.getElementById('ul_list');
    // ul_list.innerHTML += "<li>" + lastNameList[i] + "</li>";

//     console.log(lastNameList[i]);
    

//     if (userLastName == lastNameList[i]){
//         result = true;
//     }

// }


// if (result) {
//     var posizione = document.getElementById("posizione");
//     posizione.innerHTML =
//     "Your lastname position within the list is " +(lastNameList.indexOf(userLastName) + 1);
// }