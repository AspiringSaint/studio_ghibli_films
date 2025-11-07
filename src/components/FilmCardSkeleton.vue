<script setup lang="ts">
import { Calendar, Star } from "lucide-vue-next";
</script>

<template>
  <div class="card skeleton">
    <!-- Image placeholder -->
    <div class="image-wrapper skeleton-box"></div>

    <!-- Details placeholder -->
    <div class="image-details-wrapper">
      <div class="text-content">
        <div class="skeleton-line title"></div>
        <div class="skeleton-line subtitle"></div>
        <div class="skeleton-line"></div>
        <div class="skeleton-line short"></div>
      </div>

      <div class="meta">
        <div class="meta-item">
          <Calendar class="icon" />
          <div class="skeleton-circle small"></div>
        </div>
        <div class="meta-item">
          <Star class="icon" />
          <div class="skeleton-circle small"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 480px;
  border: 1px solid #444;
  border-radius: 12px;
  overflow: hidden;
  background-color: #2c2c2c;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* Skeleton shimmer animation */
@keyframes shimmer {
  0% {
    background-position: -400px 0;
  }
  100% {
    background-position: 400px 0;
  }
}

.skeleton-box,
.skeleton-line,
.skeleton-circle {
  background: #444;
  background-image: #3a3a3a;
  background-size: 600px 100%;
  animation: shimmer 1.5s infinite linear;
}

/* Image section */
.image-wrapper {
  width: 100%;
  height: 55%;
}

/* Details section */
.image-details-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  height: 45%;
  box-sizing: border-box;
}

/* Text placeholders */
.skeleton-line {
  height: 10px;
  border-radius: 6px;
  margin-bottom: 0.6rem;
  width: 100%;
}

.skeleton-line.title {
  width: 70%;
  height: 16px;
}

.skeleton-line.subtitle {
  width: 50%;
  height: 12px;
  margin-bottom: 1rem;
}

.skeleton-line.short {
  width: 80%;
}

.skeleton-circle {
  width: 16px;
  height: 16px;
  border-radius: 50%;
}

.skeleton-circle.small {
  width: 12px;
  height: 12px;
}

/* Meta layout */
.meta {
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  padding-top: 0.8rem;
  gap: 0.5rem;
  border-top: 1px solid #3a3a3a;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: #3a3a3a;
  padding: 0.3rem 0.6rem;
  border-radius: 8px;
}

.icon {
  width: 16px;
  height: 16px;
  color: #3a3a3a;
}
</style>