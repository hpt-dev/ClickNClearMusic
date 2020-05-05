<template>
  <div id="app">
    <nav class="navbar has-shadow">
      <div class="container">
        <div class="navbar-brand">
          <p class="level-item has-text-centered"> 
            <a href="/">Click N Clear Music</a> 
          </p>
          <div class="navbar-burger burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div class="navbar-menu" id="navMenu">
          <div class="navbar-end">
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">Menu</a>
              <div class="navbar-dropdown">
                <a class="navbar-item">
                  <router-link to="/">Search</router-link>
                </a>
                <a class="navbar-item">
                  <router-link to="/apidoc">API Documentation</router-link>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <router-view />
    <footer class="footer-bottom">
      <div class="box cta">
        <div class="columns is-mobile is-centered">
          <div class="field is-grouped is-grouped-multiline">
            <div class="control">
              <div class="tags has-addons">
                <a class="tag is-link" href="#">ClicknClear Music 2020</a>
                <span class="tag is-light"></span>
              </div>
            </div>
            <div class="control">
              <div class="tags has-addons">
                <a class="tag is-link" href="https://github.com/hpt-dev/ClickNClearMusic">Github Repo</a>
                <span class="tag is-light">
                  <i class="fa fa-github"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>

.footer-bottom {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}

</style>