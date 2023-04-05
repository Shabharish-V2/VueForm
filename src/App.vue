<template>
  <div>
    <div>
     <NavBar />
    </div>
    <div class="row">
      <!-- Body -->
      <div class="sidebar">
        <SideBar />
      </div>
      <div class="body">
       <HeadLines/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeadLines from "./components/HeadLines.vue";
import NavBar from "./components/NavBar.vue";
import SideBar from "./components/SideBar.vue";

</script>

<style>
.row {
  display: flex;
  flex-direction:row ;

}

.sidebar {
  width: 20%;
}

.body {
  width: 80%;
  background-color:rgb(255, 255, 255);
}
</style>