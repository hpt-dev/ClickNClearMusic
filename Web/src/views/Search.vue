<template>
  <div class="home">
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <div class="card">
            <div class="card-content">
              <div class="content">
                <div class="control has-icons-left has-icons-right">
                  <input
                    v-model.trim="search"
                    class="input is-large"
                    type="search"
                    placeholder="12 Stone Toddler"
                  />
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
    <section class="container" v-if="noResults || searching">
      <Notification v-if="searching" :content="searchingMsg" />
      <Notification v-else :content="noResultMsg" />
    </section>
    <section class="container" v-else>
      <ArtistTable :tracks="data" />
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import ArtistTable from "@/components/ArtistTable.vue";
import Notification from "@/components/Notification.vue";
import { Debounce } from 'vue-debounce-decorator';
import axios from "axios";

@Component({
  components: {
    ArtistTable,
    Notification
  }
})
export default class Home extends Vue {
  public data: [] | void = [];
  public search = "";
  public noResults = true;
  public searching = false;
  public noResultMsg = "Sorry, no results found.";
  public searchingMsg = "Searching...";

  @Watch("search")
  @Debounce(500)
  searchTracks() {
    this.searching = true;
    this.request();
  }

  async request() {
    await axios.get(`/track/search/${this.search}`).then(response => {
      this.searching = false;
      this.data = response.data;
      this.noResults = response.data.length === 0;
    });
  }

}
</script>
