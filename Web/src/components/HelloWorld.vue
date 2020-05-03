<template>
  <div class="hello"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  public info: any = "";
  public data: any = [];

  async mounted(): Promise<void> {
    this.data = await axios.get("/track/all").then(response => {
      this.info = response.data;
    });

    debugger;
    console.log(this.info);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
