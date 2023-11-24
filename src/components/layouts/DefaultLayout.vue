<script setup lang="ts">
import Sidebar from '../aside/Sidebar.vue'
</script>

<template>
      <Sidebar branding="helpdesk" />
  <main>
    <div class="content">
      <slot></slot>
    </div>
  </main>
</template>