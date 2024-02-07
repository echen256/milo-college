export default function init(el) {
  let i = 0
  for (const c of el.children){
    i === 0 ? c.classList.add("table-header") : 
    c.classList.add("flex")
    for (const c2 of c.children) {
      c2.classList.add("flex-item")
    }
   
    i === 1 ? c.classList.add("column-header") : undefined
    i += 1
  }
   
}