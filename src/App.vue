<template>
  <div>
    <SwipeButton @actionConfirmed="onActionConfirmed" text="Swipe me!" />
  </div>
</template>

<script>
export default {
  methods: {
    onActionConfirmed() {
      alert('Action confirmed!');
    }
  }
}
</script>

<style>
</style>
