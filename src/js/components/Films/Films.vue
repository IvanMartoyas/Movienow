<template>
    <section>
        <h1>Фильмы</h1>
        <FilmsSort></FilmsSort>
        
        <Loader v-if="loader"></Loader>
        <div class="FilmsList" v-else>
            dsadsa
        </div>

    </section>
</template>

<script>
    
    import FilmsSort from '@/components/Films/Films-Sort.vue'
    import Loader from '@/components/Loader.vue'

    export default {
        components: {
            FilmsSort,
            loader: true
        },
        mounted() {
        setTimeout(()=>{
            this.loader = false;
        },10000)
    }
    }
</script>
