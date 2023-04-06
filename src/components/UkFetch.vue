<template>
    <div>
      <h1>Top Headlines</h1>
      <ul>
        <li v-for="article in articles" :key="article.title">
          <a :href="article.url" target="_blank">{{ article.title }}</a>
          <p>{{ article.description }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  
  export default {
    setup() {
      const apiKey = '46ffce870c8445629ff2a1b1038edab7'
      const articles = ref([])
  
      const fetchHeadlines = async () => {
        try {
          const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=gb&apiKey=${apiKey}`)
          articles.value = response.data.articles
        } catch (error) {
          console.error(error)
        }
      }
  
      onMounted(() => {
        fetchHeadlines()
      })
  
      return {
        articles,
      }
    },
  }
  </script>