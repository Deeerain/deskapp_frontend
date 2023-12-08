<script setup lang="ts">
defineProps<{
  branding: string,
  collapsed?: boolean,
}>();

defineEmits<{
  (event: 'onControlButtonClick'): void,
}>();

</script>

<template>
  <aside :class="['sidebar', { 'sidebar--colapsed': collapsed }]">
    <div class="sidebar-header">
      <div v-if="!collapsed" class="sidebar-header__control-button">
        <button class="btn" @click="$emit('onControlButtonClick')">
          <img src="../../assets/img/arrow-back.svg" alt="">
        </button>
      </div>
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
  min-width: 250px;
  position: relative;
  height: 100%;
  transition: .3s all;

  &--colapsed {
    display: none;
  }

  &-header {
    &__control-button {
      position: absolute;
      top: 3px;
      right: 3px;
      display: flex;
      opacity: 0.6;

      .btn {
        background: none;
      }

      img {
        width: 20px;
        height: 20px;
      }

      &:hover {
        opacity: 1;
      }
    }
  }

  &-content {
    flex-grow: 1;
  }
}
</style>