<template>
    <div>
        <!-- Header -->
        <div>
            <NavBar />
        </div>
        <h1>UK NEWS</h1>
        <!-- Body -->
        <div class="row">
            <div class="sidebar">
                <SideBar />
            </div>
            <!-- News -->
            <div class="body">
                <HeadLines />
               <UkFetch/>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import UkFetch from "@/components/UkFetch.vue";
import HeadLines from "@/components/HeadLines.vue";
import NavBar from "@/components/NavBar.vue";
import SideBar from "@/components/SideBar.vue";
import UkFetchVue from "@/components/UkFetch.vue";
</script>