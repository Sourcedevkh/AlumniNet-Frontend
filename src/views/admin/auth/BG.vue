<template>
  <div class="login-wrapper">
    <div class="bg-shape shape-top-left-1"></div>
    <div class="bg-shape shape-top-left-2"></div>

    <div class="bg-shape shape-bottom-right-1"></div>
    <div class="bg-shape shape-bottom-right-2"></div>

    <div class="login-content">
      <slot> </slot>
    </div>
  </div>
</template>

<style scoped>
.login-wrapper {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: var(--color-primary);
  background-image: radial-gradient(
    circle at 30% 30%,
    #113a6a 0%,
    #081d38 100%
  );
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bg-shape {
  position: absolute;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.09) 0%,
    rgba(255, 255, 255, 0.01) 100%
  );
  /* backdrop-filter: blur(4px); */
  border-radius: 45px;
  pointer-events: none;
}

/* --- Top Left Shape Group --- */
.shape-top-left-1 {
  width: 500px;
  height: 600px;
  top: -100px;
  left: -100px;
  transform: rotate(-35deg) translate(70px, -185px);
}

.shape-top-left-2 {
  width: 400px;
  height: 450px;
  top: -120px;
  left: -70px;
  transform: rotate(-35deg) translate(30px, -150px);
}

/* --- Bottom Right Shape Group --- */
.shape-bottom-right-1 {
  width: 550px;
  height: 500px;
  right: -120px;
  top: 120px;
  transform: rotate(50deg) translate(180px, 220px);
  opacity: 0.8;
}

.shape-bottom-right-2 {
  width: 650px;
  height: 500px;
  bottom: -100px;
  right: -80px;
  transform: rotate(50deg) translate(200px, -100px);
  opacity: 0.6;
}

.login-content {
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
