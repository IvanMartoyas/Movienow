<template>
    <div class="container Film">
        <div class="Film__panel">
            <router-link class="Film__back" to="/">
                <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.67 1.86998L9.9 0.0999756L0 9.99998L9.9 19.9L11.67 18.13L3.54 9.99998L11.67 1.86998Z" fill="#FF5252" fill-opacity="0.98"/>
                </svg>
                Вернуться к списку
            </router-link>
        </div>
        
        <Loader v-if="loader"></Loader>
        <div v-else-if="error" class="Error container">
            <p>К сожалению, по вашему запросу ничего не найдено...</p>
        </div>
        <div class="filmCard" v-else>
            <div class="filmCard__img">
                <img :src=" getPoster(film.poster)" alt="film.title">
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
    import axios from 'axios';

    import Loader from '@/components/Loader.vue'

    export default {
        components: {
            Loader
        },
        data() {
            return {
                film: {},
                loader: true,
                error: false,
                isQuery: false
            }
        },
        mounted() {
            
            if(this.$route.query.title) {
                this.isQuery = true;
                this.film = this.$route.query;
            } 
            else if(this.$route.query.id) {
                
         
                axios.get('https://floating-sierra-20135.herokuapp.com/api/movie/'+this.$route.query.id).then(response => {
                
                this.loader = false;
        
                this.film = response.data.data;
                
            }).catch(e=>{
                console.log("Error ",e)
                this.error = true;
            })

            } else {
                this.error = true;
            }
            
            setTimeout(()=>{ this.loader = false},2000)
        },
        methods: {
            joinObject(array) {
                let string ='';
                for (let i in array) {
                    string += array[i] + ", ";
                }
                return string.slice(0, -2);
            },
            getPoster(link) { // у постера битая ссылка, достаю из неё название  фотографии и генерирую актуальную ссылку 
                
                if(!this.isQuery) {
                    link = link.split("/")[4]

                    return `http://st.kinopoisk.ru/images/film_big/${link}`
                } else {
                    return link
                }
            }
        }
    }
</script>