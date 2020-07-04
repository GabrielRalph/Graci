let path = document.getElementById('flame_path')
let svg = document.getElementById('svg_flame')
let newPath = document.getElementById('new_path')


let l = 0;
let end = path.getTotalLength()
let inc = 10;

let p0 = path.getPointAtLength(0)
newPath.setAttribute('d',`M${p0.x},${p0.y}`)

let next = () => {
  let p = path.getPointAtLength(l)
  l += inc;

  let d = newPath.getAttribute('d')
  d += `L${p.x},${p.y}`
  newPath.setAttribute('d',d)

  if(l > end){

  }else{
    window.requestAnimationFrame(next)
  }
}
window.requestAnimationFrame(next)
