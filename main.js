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

let clicke = (e) => {
  e = e || window.event;
  let div = e.target
  let home = document.getElementById('home')
  home.style.setProperty('display', 'none')
  list.show()
}
window.onload = () => {

  let title = new Title('title-block')
  let collection = new CollectionList('collections')
}
class Title{
  constructor(elem){
    this.elem = document.getElementById(elem)
    this.splash()
  }
  splash(){
    setTimeout(() => {
      this.elem.style.setProperty('transition', '0.5s cubic-bezier(.5,0,.5,1)')
      this.elem.style.setProperty('font-size', '8vw')
      this.elem.style.setProperty('line-height', '25vh')
      setTimeout(() => {
        this.elem.style.setProperty('transition', 'none')

      }, 500)
    }, 1000)
  }

}
class CollectionList{
  constructor(elem){
    this.elem = document.getElementById(elem)
    this.load();
  }
  load(){
    firebase.database().ref('collection/').once('value').then((sc) => {
      let collections = sc.val()
      let n = collections.length;
      for (var i in collections){
        let collection = collections[i]
        this.elem.innerHTML += `<h3 onclick = "clicke(event)">${collection.title}</h3>`
        this.elem.innerHTML += !(i == n -1)?'<h3><svg class="lil" viewBox = "-50 -50 500 500"><path d="M206.1-0.5C159.4,105.2,83.2,134.6,79.5,234.1s55.3,135.1,67.6,147.4c0,0-82.6-144,59-132.7c122.9,9.8,24.6,151.1,24.6,151.1s89.7-25.8,90.9-157.3S255.2,118.7,206.1-0.5z"/></svg></h3>':''
      }

    })
  }
}
class DesignList{
  constructor(id){
    // this.elem = typeof id == 'string'?document.getElementById(id):id
    this.elem = document.getElementById(id);
    this.hide()
    this.load()
  }
  addDesign(design){
    let html = `<div class = "design-box">
        <img src = "${design.dp}"/>
        <h1 class = "title">
          ${design.title}
        </h1>
      </div>`
    this.elem.innerHTML += html
  }
  load(){
    firebase.database().ref('designs/').once('value').then((sc) => {
      let designs = sc.val()
      for (var i in designs){
        this.addDesign(designs[i])
      }
    })
  }

  hide(){
    this.elem.style.setProperty('visibility', 'hidden')
  }

  show(){
    this.elem.style.setProperty('visibility', 'visible')
  }
}

let list = new DesignList('designs')
