<template>
    <section>
        <h1>Фильмы</h1>
        <FilmsSort></FilmsSort>
        
        <Loader v-if="loader"></Loader>
        <div class="FilmsList" v-else>

            <div class="filmCard">
                <div class="filmCard__img">
                    <!-- <img :src="img" alt=""> -->
                </div>
                <div class="filmCard__content">
                    <div class="filmCard__title"></div>
                    <div class="filmCard__tags">
                        <span class="filmCard__date"></span>
                        <span class="filmCard__category"></span>
                    </div>
                    <div class="filmCard__producer"><span>Режиссёр:</span></div>
                    <div class="filmCard__actors"><span>Актёры:</span></div>
                    <div class="filmCard__description">
                        Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается 
с жестокостью и беззаконием, царящими по обе стороны решётки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. 
Но Энди, обладающий живым умом и доброй душой, находит подход как к заключённым, так и к охранникам, добиваясь их особого к себе расположения.
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
    
    import FilmsSort from '@/components/Films/Films-Sort.vue'
    import Loader from '@/components/Loader.vue'

    // import img from '~/img/210fe590b03bbff2132d275df4f175e1.jpg';

    export default {
        components: {
            FilmsSort,
            loader: true,
        },
        mounted() {
        setTimeout(()=>{
            this.loader = false;
        },10000)
    }
    }
</script>
