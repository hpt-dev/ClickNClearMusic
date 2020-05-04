<template>
  <div class="home">
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <div class="card">
            <div class="card-content">
              <div class="content">
                <div class="control has-icons-left has-icons-right"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="box"></div>
    <table class="table">
      <thead>
        <tr>
          <th>Route</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>/track/all</td>
          <td>Returns id, artist, and title for all tracks.</td>
        </tr>
        <tr>
          <td>/track/:id</td>
          <td>Returns id, artist, and title for provided track id.</td>
        </tr>
        <tr>
          <td>/track/artist/:artist</td>
          <td>Returns id, artist, and title for all tracks that match the given artist.</td>
        </tr>
        <tr>
          <td>/track/search/:term</td>
          <td> Returns id, artist, and title for all tracks that match the search term. Checks against artist and title (case-sensitive.) </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class APIDoc extends Vue {}
</script>
