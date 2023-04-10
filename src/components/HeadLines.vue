
<template>
    <div>
        <!-- Header -->
        
        <div class="row">
            <!-- Search -->
            <div class="search">
                <input v-model="query" @keyup.enter="search" placeholder="Search for news...">
            </div>
            <!-- Retrive -->
            <div class="retrive">
                <button class="r-btn" @click="retrieveAndClear">Retrive</button>
            </div>
            <!-- Dropdown -->
            <div class="category">
                <label for="category">Category:</label>
                <select id="category" ref="mySelect" @change="handleSelectChange">
                    <option value="business">Business</option>
                    <option value="sports">Sports</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="health">Health</option>
                    <option value="General">General</option>
                    <option value="science">Science</option>
                    <option value="technology">Technology</option>
                </select>
            </div>
        </div>
        <!-- News Body -->
        <div v-for="article in articles" :key="article.source.id" class="card">
            <h3>Title:- </h3> {{ article.title }}
            <div>
                <b>
                    <p>Description:- </p>
                </b>{{ article.description }}
            </div>
            <br />
            <div>
                <b>Image </b> <img :src="article.urlToImage" alt="{{article.title}}" :style="{ width: '500px' }">
            </div>
            <div class="row">
                <div class="auth">
                    <b>
                        <p>Author</p>
                    </b> {{ article.author }}
                </div>
                <div class="date">
                    <b> Date </b> {{ article.publishedAt }}
                </div>
            </div>
        </div>
    </div>


    <!-- dropdown pagesize -->
    <div class="page-size">
        <select id="pageSize" v-model="pageSize" @change="fetchData">
            <option value="25" selected>25</option>
            <option value="50">50</option>
            <option value="100">100</option>
        </select>
    </div>


    <!-- pagination  -->
    <div class="btn">
        <!-- <div v-for="(article, index) in articles.slice((currentPage - 1) * pageSize, currentPage * pageSize)" :key="index" class="card"> -->

        <!-- Previous & Next  -->
        <button class="bu" @click="next">Next</button>
        <button class="bu" @click="previous">Previous</button>
    </div>
    
</template>
<script setup lang="ts">

import { ref, onMounted, watch, computed } from 'vue'
import axios from 'axios';
import { useRoute } from 'vue-router'



const mySelect = ref(null);
const selectedValue = ref();
const query = ref('');

const currentPage = ref(1);

const pageSize = ref(5);

const startIndex = (currentPage.value - 1) * pageSize.value;

const endIndex = startIndex + pageSize.value;
// const currentPage = ref(1);
// const totalPages = computed(() => Math.ceil(articles.value.length / pageSize.value));
const loadNextPage = async () => {

currentPage.value++;

const startIndex = (currentPage.value - 1) * pageSize.value;

 const endIndex = startIndex + pageSize.value;

 const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${route.params.code}&category=${selectedValue.value}&apiKey=${apiKey}`);

 articles.value = response.data.articles.slice(startIndex, endIndex);

};




const loadPreviousPage = async () => {

 currentPage.value--;

 const startIndex = (currentPage.value - 1) * pageSize.value;

 const endIndex = startIndex + pageSize.value;

 const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${route.params.code}&category=${selectedValue.value}&apiKey=${apiKey}`);

 articles.value = response.data.articles.slice(startIndex, endIndex);

};





const next = () => {

 

  loadNextPage();

  

};

const previous = () => {

 

   loadPreviousPage();

};


const handleSelectChange = () => {
    selectedValue.value = mySelect.value.value;
    currentPage.value = 1;
    console.log(selectedValue.value);
}

const apiKey = '46ffce870c8445629ff2a1b1038edab7'
const articles = ref()
const route = useRoute()
const fetchData = async () => {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${route.params.code}&category=${selectedValue.value}&apiKey=${apiKey}`)
        // articles.value = response.data.articles;
        articles.value = response.data.articles.slice(startIndex, endIndex);
        // currentPage.value = 1;
    } catch (error) {
        console.error(error)
    }
};
const search = async () => {

const result = await axios.get('https://newsapi.org/v2/everything', {

 params: {

   q: query.value,

   apiKey: `${apiKey}`,

},

});

articles.value = result.data.articles

};
const retrieveAndClear = () => {
 query.value = "";
 fetchData();

};
onMounted(() => {
    fetchData()
})
watch(selectedValue, () => {
    fetchData()
})


</script>

<style>
.row {
    display: flex;
    flex-direction: row;
}

.card {
    background-color: rgb(207, 200, 200);
    padding: 10px;
    margin: 0 30px 30px 30px;
}

.search {
    width: 33.33%;
    padding-left: 40px;

}

.retrive {
    width: 33.33%;
    padding-left: 40px;

}

.category {
    width: 33.33%;
    padding-left: 40px;
}

.btn {
    display: flex;
    justify-content: flex-end;
    align-content: center;
}

.bu {
    margin: 0;
}

.r-btn {
    margin: 0;
}

.auth{
width: 50%;
}
.date{
    width: 50%;
}
</style>
<!-- hi -->