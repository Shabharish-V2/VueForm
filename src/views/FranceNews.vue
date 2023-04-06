<template>
    <div>
        <!-- Header -->
        <div>
            <NavBar />
        </div>
        <h1>FRANCE NEWS</h1>
        <!-- Body -->
        <div class="row">
            <div class="sidebar">
                <SideBar />
            </div>
            <!-- News -->
            <div class="body">
                <HeadLines />
                <FranceFetch/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import HeadLines from "@/components/HeadLines.vue";
import NavBar from "@/components/NavBar.vue";
import SideBar from "@/components/SideBar.vue";
import FranceFetch from "@/components/FranceFetch.vue";
</script>

<style></style>