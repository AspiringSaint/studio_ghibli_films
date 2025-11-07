<template>
  <div class="film-detail-container">
    <div class="detail-container">

      <!-- Left: Skeleton Banner -->
      <div class="image-wrapper skeleton animate-pulse"></div>

      <!-- Right: Skeleton Details -->
      <div class="details-wrapper">
        
        <!-- Back Button Skeleton -->
        <div class="back-button skeleton animate-pulse"></div>

        <!-- Title & Description Skeleton -->
        <div class="title-description">
          <div class="skeleton h-8 w-3/4 mb-2 animate-pulse"></div>
          <div class="skeleton h-4 w-1/2 mb-4 animate-pulse"></div>
          <div class="skeleton h-32 w-full animate-pulse"></div>
        </div>

        <!-- Meta Items Skeleton -->
        <div class="meta-items">
          <div class="meta-item skeleton animate-pulse" v-for="n in 5" :key="n"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* Container same as film detail */
.film-detail-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: #242424;
  padding: 2rem 1rem;
  box-sizing: border-box;
}

.detail-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-width: 1200px;
  width: 100%;
  background-color: #2c2c2c;
  border-radius: 12px;
  padding: 1.5rem;
  color: #f5f5f5;
}

@media (min-width: 768px) {
  .detail-container {
    flex-direction: row;
  }
}

/* Left image skeleton */
.image-wrapper {
  flex: 1;
  max-width: 500px;
  height: 500px;
  border-radius: 12px;
  background-color: #3a3a3a;
}

/* Right details skeleton */
.details-wrapper {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Back button skeleton */
.back-button {
  width: 60px;
  height: 36px;
  border-radius: 8px;
  background-color: #3a3a3a;
  align-self: flex-end;
}

@media (max-width: 767px) {
  .back-button {
    align-self: stretch;
    height: 48px;
  }
}

/* Title & description skeleton */
.title-description .skeleton {
  border-radius: 6px;
  background-color: #3a3a3a;
}

/* Meta items skeleton */
.meta-items {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.meta-item {
  height: 40px;
  border-radius: 10px;
  background-color: #3a3a3a;
}

/* Pulse animation */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.animate-pulse {
  animation: pulse 1.5s ease-in-out infinite;
}
</style>
