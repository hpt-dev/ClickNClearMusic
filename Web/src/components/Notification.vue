<template>
  <div class="notification is-link is-light">
    <button class="delete"></button>
      {{ content }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Notification extends Vue {
  @Prop() private content!: string;
}
</script>

<style scoped>
</style>
