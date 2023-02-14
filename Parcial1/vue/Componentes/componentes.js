const app = Vue.createApp({
    data() {
        return {

        }
    }
})

app.component('mi-card', {
    template: `<div class="card" style="width: 18rem;">
    <img src="https://cdn-icons-png.flaticon.com/512/25/25645.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`
})

app.component('botones', {
    template: `<div>
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>
    </div>`
})


app.component('spinners', {
    template: `<div>
    <div class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-border text-secondary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-border text-success" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-border text-danger" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-border text-warning" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-border text-info" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-border text-light" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-border text-dark" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  
    </div>`
})
