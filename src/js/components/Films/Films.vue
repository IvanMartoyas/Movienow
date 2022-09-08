<template>
    <div class="Films">
        <header class="FilmsHeader">
            <h1>Фильмы</h1>
            <FilmsSort :films="films" @sortfilm="sortfilms"></FilmsSort>
        </header>  
        <Loader v-if="loader"></Loader>
        <div v-else-if="error" class="Error container">
            <p>К сожалению, по вашему запросу ничего не найдено...</p>
        </div>
        <div class="FilmsList" v-else>   
            <div class="FilmsList__wrapper">

                <div class="filmCard" v-for="film in films" :key="film.id">
                    <div class="filmCard__img">
                        <!-- <img :src="linkImg(film.poster)" alt="film.title"> -->
                    </div>
                    <div class="filmCard__content">
                    
                        <div class="filmCard__title">
                            {{film.title}}
                        </div>
                        <div class="filmCard__mark" v-if="film.collapse.duration">
                            {{
                                film.collapse.duration[0]
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
                        <div class="filmCard__producer" v-if="film.directors" ><span>Режиссёр: {{ joinObject(film.directors) }}</span></div>
                        <div class="filmCard__actors" v-if="film.actors" ><span>Актёры: {{" " + joinObject(film.actors) }}</span></div>
                        <div class="filmCard__description" v-if="film.description"  >
                            {{film.description}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    
    import FilmsSort from '@/components/Films/Films-Sort.vue'
    import Loader from '@/components/Loader.vue'
    import axios from 'axios';

    export default {
        components: {
            FilmsSort,
            Loader
        },
        data() {
            return {
                loader: true,
                films: [],
                error: false
            }
        },
        mounted() {
        
            axios.get('https://floating-sierra-20135.herokuapp.com/api/movies').then(response => {
                
                this.loader = false;
         
                this.films = response.data.data;
                console.log("this.films  ",this.films )
       
            }).catch(e=>{
                console.log("rerror: ",e);
                this.error = true;
            })
            
        },
        methods: {
            joinObject(array) {

                let string ='';
                for (let i in array) {
                    string += array[i] + ", ";
                }

                // console.log("string typeof ", typeof string)
                
                return string.slice(0, -2);
            },
            linkImg(link) {
                // console.log("link id ",link)
                // console.log("link  ",link)
                // link = link.split("/");
                // link = link[4].split(".")
                // link = link[0];
                
                
             
                return `https:${link}`
            },
            sortfilms(value) {
                
                this.loader = true;

                if(value == "original") {

                    axios.get('https://floating-sierra-20135.herokuapp.com/api/movies').then(response => {
                
                        this.loader = false;
                
                        this.films = response.data.data;
                        
                    }).catch(e=>{console.log("rerror: ",e)})
                    
                } else {
                    setTimeout(()=>{
                        this.loader = false;
                        this.films = value;
                    },2000)
                    
                }

                console.log("value ", value)
            }
        }
    }
</script>
