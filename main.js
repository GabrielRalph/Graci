var firebaseConfig = {
    apiKey: "AIzaSyASaVF7-6FxP3rIJrznSHYwzjrL-ZXh6dg",
    authDomain: "graci-fashion.firebaseapp.com",
    databaseURL: "https://graci-fashion.firebaseio.com",
    projectId: "graci-fashion",
    storageBucket: "graci-fashion.appspot.com",
    messagingSenderId: "157584099365",
    appId: "1:157584099365:web:79f6ca671ed88af157d7cc",
    measurementId: "G-BQBVFFY3D2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

let designs_el = null;
window.onload = () => {
  let title_el = document.getElementById('title-block')
  let collections_el = document.getElementById('collections')
  firebase.database().ref('collection/').once('value').then((sc) => {
    let collections = sc.val()
    for (var i in collections){
      let collection = collections[i]
      collections_el.innerHTML += `<h3>${collection.title}</h3>`
      title_el.style.setProperty('margin', '0')
      title_el.style.setProperty('font-size', '8vw')
      title_el.style.setProperty('line-height', '9vw')
    }
  })

  // setTimeout(() => {
  // }, 1000)
}

let addDesign = (elem, design) => {
  let html = `<div class = "design-box">
      <img src = "${design.dp}"/>
      <h1 class = "title">
        ${design.title}
      </h1>
    </div>`
  elem.innerHTML += html
}
