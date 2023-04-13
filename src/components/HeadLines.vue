
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
                <b>Image </b> <img :src="article.urlToImage" alt="{{article.title}}" :style="{ width: '350px' }">
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

    <div class="row">
        <!-- dropdown pagesize -->
        <div class="page-size">
            <select id="pageSize" ref="pageSize" @change="handlePageLimitChange">
                <option value="5" selected>5</option>
                <option value="10">10</option>
                <option value="15">15</option>
            </select>
        </div>
        <!-- page number -->
        <div class="page-number">
            Page {{ currentPage }} of {{ endIndex }}
        </div>

        <!-- pagination  -->
        <div class="btn nxtbtn">
            <!-- <div v-for="(article, index) in articles.slice((currentPage - 1) * pageSize, currentPage * pageSize)" :key="index" class="card"> -->

            <!-- Previous & Next  -->
            <button class="bu" @click="loadNextPage">Next</button>
            <button class="bu" @click="loadPreviousPage">Previous</button>
        </div>
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

const pageSize = ref(15);

const startIndex = (currentPage.value - 1) * pageSize.value;

const endIndex = startIndex + pageSize.value;
// const currentPage = ref(1);
const handlePageLimitChange = () => {
    pageSize.value = pageSize.value.value;
    console.log('test1??', pageSize.value)
    fetchData(pageSize.value);

}
const loadNextPage = async () => {
    console.log("loadNext",pageSize.value.value);

    currentPage.value++;

    const startIndex = (currentPage.value + 1) * pageSize.value.value;

    const endIndex = startIndex + pageSize.value.value;

    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${route.params.code}&category=${selectedValue.value}&apiKey=${apiKey}`);

    articles.value = response.data.articles.slice(startIndex, endIndex);

};




const loadPreviousPage = async () => {
    console.log("loadPrevious",pageSize.value.value)

    currentPage.value--;

    const startIndex = (currentPage.value - 1) * pageSize.value.value;

    const endIndex = startIndex + pageSize.value.value;

    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${route.params.code}&category=${selectedValue.value}&apiKey=${apiKey}&pageSize=${pageSize.value.value}`);

    articles.value = response.data.articles.slice(startIndex, endIndex);


};





// const next = () => {

//   loadNextPage();

// };

// const previous = () => {

// loadPreviousPage();

// };


const handleSelectChange = () => {
    selectedValue.value = mySelect.value.value;
    currentPage.value = 1;
    console.log(selectedValue.value);
}

const apiKey = '46ffce870c8445629ff2a1b1038edab7'
const articles = ref()
const route = useRoute()
const fetchData = async (pageSize:any) => {

    console.log("pageSize", pageSize)
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${route.params.code}&category=${selectedValue.value}&apiKey=${apiKey}&pageSize=${pageSize} `)
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
    fetchData(5);

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

.auth {
    width: 50%;
}

.date {
    width: 50%;
}

.page-number{
margin-left: 300px;
}

.nxtbtn{
    margin-left: 300px;
}
</style>
<!-- hi -->