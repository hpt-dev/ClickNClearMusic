<template>
  <section class="container">
    <div class="level-item">
      <div class="columns is-multiline is-centered cards-container" id="sectioncontainer">
        <table class="table is-striped is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>Id</th>
              <th>Artist</th>
              <th>Title</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th>Id</th>
              <th>Artist</th>
              <th>Title</th>
            </tr>
          </tfoot>
          <tbody>
            <tr v-for="track in tracks" :key="track.id">
              <td>{{ track.id }}</td>
              <td>{{ track.artist }}</td>
              <td>{{ track.title }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ArtistTable extends Vue {
  @Prop() private tracks!: [];
}
</script>

<style scoped>
</style>
