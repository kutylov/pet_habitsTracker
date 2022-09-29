const app = {
    data() {
      return {
      }
    }
  }
  
  Vue.createApp(app).mount('#app')

let tdAll = document.querySelectorAll('.january td, .february td, .march td, .april td');

for (let td of tdAll) {
    td.addEventListener('click', (e) => {
        e.target.classList.toggle('switchColor')
    })
}