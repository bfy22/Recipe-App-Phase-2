// Templates for different pages to be rendered to achieve SPA architecture
export const templates = {
  home: `
    <section>
      <div class="container initial js-container">
        <h1 class="brand-name js-brand-name">Recipe Matrix</h1>
        <form class="js-form search-form">
          <input type="text" placeholder="Search Recipe...">
          <button type="submit" class="icon-button"> <ion-icon name="search-outline"></ion-icon></button>
        </form>
        <div class="search-results js-search-results"></div>
      </div>
    </section>
  `,
  login: `
    <section>
      <div class="container session">
        <h1>Login</h1>
        <form id="login-form" action="javascript:void(0);">
          <input type="text" id="username" placeholder="Username" required>
          <input type="password" id="password" placeholder="Password" required>
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <button data-page="register">Register here</button></p>
      </div>
    </section>
  `,
  register: `
    <section>
      <div class="container session">
        <h1>Register</h1>
        <form id="register-form">
          <input type="text" id="username" placeholder="Username" required>
          <input type="password" id="password" placeholder="Password" required>
          <button type="submit">Register</button>
        </form>
        <p>Already have an account? <button data-page="login">Login here</button></p>
      </div>
    </section>
  `,
  favorites: `
    <section>
      <div class="container initial js-container">
        <h1 class="brand-name" style="cursor: auto">Favorites</h1>
        <div class="favorites js-favorites"></div>
      </div>
    </section>
  `,
};