<template>
    <div>
        <!-- Header -->
        <div class="row">
            <!-- Search -->
            <div class="search">
                <input type="text" placeholder="Search..">
            </div>
            <!-- Retrive -->
            <div class="retrive">
                <button class="r-btn">Retrive</button></div>
            <!-- Dropdown -->
            <div class="category">
                <label for="category">Category:</label>
                <select id="category" v-model="category">
                    <option value="business">Business</option>
                    <option value="sports">Sports</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="health">Health</option>
                    <option value="General">Health</option>
                    <option value="science">Science</option>
                    <option value="technology">Technology</option>
                </select>
            </div>
        </div>
        <!-- News Body -->
        <div class="card">
            <h1>Title</h1>
            <p>Description</p>
        </div>
        <div class="card">
            <h1>Title</h1>
            <p>Description</p>
        </div>
        <div class="card">
            <h1>Title</h1>
            <p>Description</p>
        </div>
        <div class="card">
            <h1>Title</h1>
            <p>Description</p>
            </div>
            <!-- dropdown pagesize -->
            <select id="pageSize">
                <option value="25" selected>25</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
            <div>
            <!-- pagination  -->
        </div>
        <div class="btn">
            <!-- Previous & Next  -->
            <button class="bu">Next</button>
            <button class="bu">Previous</button>
        </div>
       
        </div>
</template>
<script>

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
.btn{
    display: flex;
    justify-content: flex-end;
    align-content: center;
}
.bu{
    margin: 0;
}
.r-btn{
    margin: 0;
}

</style>
