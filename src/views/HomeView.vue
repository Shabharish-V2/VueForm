<template>
 
  <div>
    <!-- Header -->
    <div>
     <NavBar />
    </div>
    <div class="row">
      <!-- Body -->
      <div class="sidebar">
        <SideBar />
      </div>
      <div class="body">
        <div v-for="article in articles" :key="article.source.id" class="card">
          <h3>Title:- </h3> {{ article.title }}
          <div v-if="article.description">
              <b>
                  <p>Description:- </p>
              </b>{{ article.description }}
          </div>
          <br />
          <div v-if="article.urlToImage">
              <b>Image </b> <img :src="article.urlToImage" alt="{{article.title}}" :style="{ width: '350px' }">
          </div>
          <div class="row">
              
              <div v-if="article.author" class="auth" >
                  <b>
                      <p>Author</p>
                  </b> {{ article.author }}
              </div>
              <div v-if="article.publishedAt" class="date">
                  <b> Date </b> {{new Date(article.publishedAt).toLocaleDateString('en-US', {day:'numeric', month: 'long', year:'numeric'}) }}
              </div>
          </div>
      </div>
      
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

// import HeadLines from "@/components/HeadLines.vue"
import NavBar from "@/components/NavBar.vue";
import SideBar from "@/components/SideBar.vue";
import axios from 'axios';
import { onMounted,ref } from "vue";

const articles = ref()
const loadData = async () => {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=46ffce870c8445629ff2a1b1038edab7`)
        // articles.value = response.data.articles;
        articles.value = response.data.articles.slice(1,5);
        // currentPage.value = 1;
    } catch (error) {
        console.error(error)
    }
};

onMounted(() => {
  loadData()
  
})
</script>

<style>

</style>