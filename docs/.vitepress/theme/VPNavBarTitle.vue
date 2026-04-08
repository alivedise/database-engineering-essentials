<template>
  <div class="dee-nav-container" v-if="hasSidebar">
    <div>
      <div class="dee-nav-hero">
        DEE
      </div>
      <span class="nav-sub">Database Engineering Essentials</span>
    </div>
  </div>
</template>

<script setup>
import { useSidebar } from 'vitepress/theme';
const { hasSidebar } = useSidebar();
</script>

<style>
.dee-nav-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 15px 0;
}
.dee-nav-hero {
  font-size: 20px;
  background: -webkit-linear-gradient(left, #1a5c3a, white, #2d8659);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
}
span.nav-sub {
  padding: 10px;
}
</style>
