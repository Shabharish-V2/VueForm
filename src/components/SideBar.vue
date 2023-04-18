<template>
    <div>
        <div class="sidebar-body">
            <h2>Country</h2>


            <div>
                <router-link :to="'/country/' + usa" >
                    <button class="button"
                        :class="{ 'dynamicCLass': $route.path === '/country' && selected === 'usa', 'selected': selected === 'usa' }"
                        @click="selected = 'usa'">USA</button>
                </router-link>
            </div>

            <div>

                <router-link :to="'/country/' + france" >
                    <button class="button"
                        :class="{ 'dynamicClass': $route.path === '/country' && selected === 'france', 'selected': selected === 'france' }"
                        @click="selected = 'france'">France</button>
                </router-link>
            </div>
            <div>
                <router-link :to="'/country/' + uk" >
                    <button class="button" 
                    :class="{
                        'dynamicClass': $route.path === '/country' &&
                            selected === 'uk', 'selected': selected === 'uk'
                    }" @click="selected = 'uk'">United Kingdom</button>
                </router-link>
            </div>
            <div>
                <router-link :to="'/country/' + russia" >
                    <button class="button" :class="{
                        'dynamicClass': $route.path === '/country' &&
                            selected === 'russia', 'selected': selected === 'russia'
                    }"
                        @click="selected = 'russia'">Russia</button></router-link>
            </div>
            <div>
                <router-link :to="'/country/' + japan" >
                    <button class="button" :class="{
                        'dynamicClass': $route.path === '/country' &&
                            selected === 'japan', 'selected': selected === 'japan'
                    }"
                        @click="selected = 'japan'">Japan</button></router-link>
            </div>
            <div>
                <router-link :to="'/country/' + korea" >
                    <button class="button" :class="{
                        'dynamicClass': $route.path === '/country' &&
                            selected === 'korea', 'selected': selected === 'korea'
                    }" @click="selected =
    'korea'">South Korea</button></router-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const selected = ref('');

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



.selected {
    background-color: lightsalmon;
}</style>