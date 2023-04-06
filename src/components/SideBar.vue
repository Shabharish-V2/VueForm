<template>
    <div>
        <div class="sidebar-body">
            <h2>Country</h2>
           
            <div>
                <router-link to="/usa"><button class="button">USA</button></router-link>
            </div>
            <div>
                <router-link to="/France"><button class="button">France</button></router-link>
            </div>
            <div>
                <router-link to="/Uk"><button class="button">United Kingdom</button></router-link>
            </div>
            <div>
                <router-link to="/Russ"><button class="button">Russia</button></router-link>
            </div>
            <div>
                <router-link to="/Jap"><button class="button">Japan</button></router-link>
            </div>
            <div>
                <router-link to="/south"><button class="button">South Korea</button></router-link>
            </div>
        </div>
    </div>
</template>

<script>

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