<script setup lang="ts">
defineProps<{
  branding: string,
  collapsed?: boolean,
}>();

</script>

<template>
  <aside :class="['sidebar', { 'sidebar--colapsed': collapsed }]">
    <div class="sidebar-header">
      <div class="logo">
        <a href="/">
          <h1>{{ branding }}</h1>
        </a>
      </div>
    </div>
    <div class="sidebar-content">
      <slot></slot>
    </div>
    <div class="sidebar-footer">
      <slot name="footer"></slot>
    </div>
  </aside>
</template>

<style lang="scss">
.sidebar {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  gap: 1.8rem;
  background-color: rgb(141, 135, 135);
  width: 250px;

  &--colapsed {
    display: none;
  }

  &-content {
    flex-grow: 1;
  }
}
</style>