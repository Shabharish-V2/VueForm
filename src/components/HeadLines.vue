
<template>
    <div>
        <!-- Header -->
    <div v-if="loading" class="loader">Loading...</div>

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

    <div class="row">
        <!-- dropdown pagesize -->
        <div class="page-size">
            <select id="pageSize" ref="pageSize" @change="handlePageLimitChange">
                <option value="5" >5</option>
                <option value="10">10</option>
                <option value="15" selected>15</option>
            </select>
        </div>
        <!-- page number -->
        <div class="page-number">
            Page {{ currentPage }} of {{ endIndex }}
        </div>

        <!-- pagination  -->
        <div class="btn nxtbtn">
            

            <!-- Previous & Next  -->
            <button :disabled="isFirstPage" class="bu" @click="loadPreviousPage">Previous</button>
            <button :disabled="isLastPage" class="bu" @click="loadNextPage">Next</button>
           
        </div>
    </div>
</template>
<script setup lang="ts">

import { ref, onMounted, watch, computed } from 'vue'
import axios from 'axios';
import { useRoute } from 'vue-router'


const loading = ref(false);
const mySelect = ref(null);
const selectedValue = ref();
const query = ref('');

const currentPage = ref(1);
const totalPages = ref(0);
const pageSize = ref(15);

const startIndex = (currentPage.value - 1) * pageSize.value;

const endIndex = startIndex + pageSize.value;

const handlePageLimitChange = () => {
    pageSize.value = pageSize.value.value;
    console.log('test1??', pageSize.value)
    fetchData(pageSize.value);

}
// const loadNextPage = async () => {
//     console.log("loadNext",pageSize.value.value);

//     currentPage.value++;

//     const startIndex = (currentPage.value + 1) * pageSize.value.value;

//     const endIndex = startIndex + pageSize.value.value;

//     const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${route.params.code}&category=${selectedValue.value}&apiKey=${apiKey}`);

//     // articles.value = response.data.articles.slice(startIndex, endIndex);

// };




// const loadPreviousPage = async () => {
//     console.log("loadPrevious",pageSize.value.value)

//     currentPage.value--;

//     const startIndex = (currentPage.value - 1) * pageSize.value.value;

//     const endIndex = startIndex + pageSize.value.value;

//     const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${route.params.code}&category=${selectedValue.value}&apiKey=${apiKey}`);

    // articles.value = response.data.articles.slice(startIndex, endIndex);


// };
const loadPreviousPage=() => {
  if (currentPage.value > 1) {
      currentPage.value--;
    fetchData(pageSize.value);
  }
}

const loadNextPage=() => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    fetchData(pageSize.value);
  }
}


const handleSelectChange = () => {
    selectedValue.value = mySelect.value.value;
    currentPage.value = 1;
    console.log(selectedValue.value);
}


const apiKey = '46ffce870c8445629ff2a1b1038edab7';
const articles = ref();
const route = useRoute();
const fetchData = async () => {
    
    loading.value = true;
    console.log("pageSize", pageSize);
    try {
        const response = await axios({
            method: 'GET',
            url: 'https://newsapi.org/v2/top-headlines',
            params: {
                country: route.params.code,
                category: selectedValue.value,
                apiKey: apiKey,
                pageSize: pageSize.value,
                page: currentPage.value,
                
            }
        });
        articles.value = response.data.articles;
        totalPages.value = Math.ceil(response.data.totalResults / pageSize.value);
       
    } catch (error) {
        console.error(error);
    } finally {
        loading.value = false;
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

const loadData = async () => {
   
    
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${route.params.code}&apiKey=${apiKey}`)
       
        articles.value = response.data.articles.slice(startIndex, endIndex);
        
    } catch (error) {
        console.error(error)
    }finally {
        loading.value = false;
    }
};

onMounted(() => {
loadData();
fetchData();

})
watch(selectedValue, () => {
    fetchData()
    
})
watch(pageSize,  () => {
    fetchData()
})
watch(() => route.params.code, () => {
  fetchData();
});



const isFirstPage = computed(() =>{
    return currentPage.value === 1;
});
const isLastPage = computed(() =>{
    return currentPage.value === endIndex;
});

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