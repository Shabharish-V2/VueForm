<template>
    <div>
        <div class="sidebar-body">
            <h2>Country</h2>


            <div>
                <router-link :to="'/usa/' + usa" active-class="selectedbtn">
                    <button class="button" :class="{ 'selectedbtnactive': $route.path === '/usa/' + usa }">USA</button>
                </router-link>
            </div>
            
            <div>

                <router-link :to="'/France/' + france" active-class="selectedbtn">
                    <button class="button" :class="{'selectedbtnactive': $route.path === '/France/' + france}">France</button></router-link>
            </div>
            <div>
                <router-link :to="'/Uk/' + uk" active-class="selectedbtn">
                    <button class="button" :class="{'selectedbtnactive': $route.path === '/Uk/' + uk}">United Kingdom</button></router-link>
            </div>
            <div>
                <router-link :to="'/Russ/' + russia" active-class="selectedbtn">
                    <button class="button" :class="{'selectedbtnactive': $route.path === '/Russ/' + russia}">Russia</button></router-link>
            </div>
            <div>
                <router-link :to="'/Jap/' + japan" active-class="selectedbtn">
                    <button class="button" :class="{'selectedbtnactive': $route.path === '/Jap/' + japan}">Japan</button></router-link>
            </div>
            <div>
                <router-link :to="'/south/' + korea" active-class="selectedbtn">
                    <button class="button" :class="{'selectedbtnactive': $route.path === '/south/' + korea}">South Korea</button></router-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";



const usa = ref('us');
const france = ref('fr');
const uk = ref('gb');
const russia = ref('ru');
const japan = ref('jp');
const korea = ref('kr');

</script>

<style>
.sidebar-body {
    background-color: #d2e6fb;
    height: 100vh;
}

button {
    margin-top: 20px;
    margin-left: 20px;
    padding: 5px;
border-radius: 30px;

}

.selectedbtnactive {
    background-color: lightsalmon;
    color: white;
}
</style>