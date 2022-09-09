<template>
    <div class="container Film">
        <router-link class="Film__back" to="/">Вернуться к списку</router-link>
        

        <div class="filmCard">
            <div class="filmCard__img">
                <!-- <img :src="linkImg(film.poster)" alt="film.title"> -->
            </div>
            <div class="filmCard__content">
            
                <div class="filmCard__title">
                    {{film.title}}
                </div>
                
                <div class="filmCard__mark" v-if="film.duration">
                    {{
                        film.duration
                    }}
                    <div class="filmCard__icon">
                        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 0V2H12V0H4V2H2V0H0V18H2V16H4V18H12V16H14V18H16V0H14ZM4 14H2V12H4V14ZM4 10H2V8H4V10ZM4 6H2V4H4V6ZM10 16H6V2H10V16ZM14 14H12V12H14V14ZM14 10H12V8H14V10ZM14 6H12V4H14V6Z" fill="#FA2828" fill-opacity="0.98"/>
                        </svg>
                    </div>
                </div>

                <div class="filmCard__tags">
                    <span class="filmCard__date" v-if="film.year" >{{ film.year + ", "  }}</span>
                    <span class="filmCard__category" v-if="film.genres" >{{joinObject(film.genres)}} </span>
                </div>
                <div class="filmCard__producer"     v-if="film.directors" ><span>Режиссёр: {{ joinObject(film.directors) }}</span></div>
                <div class="filmCard__actors"       v-if="film.actors" ><span>Актёры: {{" " + joinObject(film.actors) }}</span></div>
                <div class="filmCard__description"  v-if="film.description"  >
                    {{film.description}}
                </div>
            </div>
        </div>

     
    </div>
</template>
<script>
    export default {
        data() {
            return {
                film: {}
            }
        },
        mounted() {
            if(this.$route.query) {
                this.film = this.$route.query;
            }
        
            console.log(" this.film ",this.film)

     
        },
        methods: {
            joinObject(array) {
                let string ='';
                for (let i in array) {
                    string += array[i] + ", ";
                }
                return string.slice(0, -2);
            },
        }
    }
</script>