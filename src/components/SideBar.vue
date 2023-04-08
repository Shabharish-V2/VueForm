<template>
    <div>
        <div class="sidebar-body">
            <h2>Country</h2>
           
            <div>
                <router-link :to="'/usa/'+ usa"><button class="button">USA</button></router-link>
            </div>
            <div>
                <router-link :to="'/France/'+ france"><button class="button">France</button></router-link>
            </div>
            <div>
                <router-link :to="'/Uk/'+ uk"><button class="button">United Kingdom</button></router-link>
            </div>
            <div>
                <router-link :to="'/Russ/'+ russia"><button class="button">Russia</button></router-link>
            </div>
            <div>
                <router-link :to="'/Jap/'+ japan"><button class="button">Japan</button></router-link>
            </div>
            <div>
                <router-link :to="'/south/'+ korea"><button class="button">South Korea</button></router-link>
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

<style>{

}
.sidebar-body{
    background-color: #d2e6fb;
    height: 100vh;
}

button{
    margin-top: 20px;
    margin-left: 20px;
    
}
</style>