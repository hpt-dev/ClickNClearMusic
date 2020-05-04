<template>
  <div class="home">
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <div class="card">
            <div class="card-content">
              <div class="content">
                <div class="control has-icons-left has-icons-right">
                  <input v-model.trim="search" class="input is-large" type="search" />
                  <span class="icon is-medium is-left">
                    <i class="fa fa-search"></i>
                  </span>
                  <span class="icon is-medium is-right">
                    <i class="fa fa-empire"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="box"></div>
    <ArtistTable :tracks="data" v-if="!noResults && !searching" />
    <section class="container">
      <div v-if="noResults && !searching">
        Sorry, no results found.
      </div>
      <div v-if="searching">
        <i>Searching...</i>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import ArtistTable from "@/components/ArtistTable.vue";
import _ from "lodash";
import axios from "axios";

@Component({
  components: {
    ArtistTable
  }
})
export default class Home extends Vue {
  public data: [] | void = [];
  public search = "";
  public noResults = true;
  public searching = false;

  @Watch("search")
  async searchTracks(): Promise<void> {
    this.searching = true;
    await axios.get(`/track/artist/${this.search}`).then(response => {
      this.searching = false;
      this.data = response.data;
      this.noResults = response.data.length === 0;
    });
  }
}
</script>
