<template>
    <div>
        <!-- Header -->
        <div>
            <NavBar />
        </div>
        <h1>Russia NEWS</h1>
        <!-- Body -->
        <div class="row">
            <div class="sidebar">
                <SideBar />
            </div>
            <!-- News -->
            <div class="body">
                <HeadLines />
               <RussiaFetch/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import RussiaFetch from "@/components/RussiaFetch.vue";
import HeadLines from "@/components/HeadLines.vue";
import NavBar from "@/components/NavBar.vue";
import SideBar from "@/components/SideBar.vue";
</script>
