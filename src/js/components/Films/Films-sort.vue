<template>
        <form class="sortForm">
            <div>
                <input id="sorbyname" type="checkbox" v-model="sortbyname" />
                <label for="sorbyname" >Отсортировать по названию</label>
            </div>
            <div>
                <input id="sorbyyears" type="checkbox" v-model="sortbyyears" />
                <label for="sorbyyears" >Отсортировать по году</label>
            </div>

        </form>
</template>
<script>

// за сортировку отвечает два метода sortbyname (по имени), sortbyyears (по году)
// через $emit возвращаю в родительский компонент новый отсортированный масив обьектов

// если нужно добавить ещё один метод сортировки то можно добавить ещё один input и к нему указать свой метод

export default {
    props: ["films"],
    data() {
        return {
            sortbyname: false,
            sortbyyears: false,

        }
    },
    watch: {
        sortbyname() {

            if(this.sortbyname) { // выключает предыдущую сортировку
                this.sortbyyears = false;
            }
            
            if(this.sortbyname) {
                function SortArray(x, y){
                    if (x.title < y.title) {return -1;}
                    if (x.title > y.title) {return 1;}
                    return 0;
                }
                return this.$emit("sortfilm", this.films.sort(SortArray));
            }

            // если сортировка невыбрана то возращаю исходный массив
            if(this.sortbyname == false && this.sortbyyears == false) {

                // если выбрана сортировка то высылаю через $emit отсортированный новый массив
                // если не выбрана сортировка то указываю original т.е. отрисовать исходный
                this.$emit("sortfilm", "original" )
            }

            
        },
        sortbyyears() {

            if(this.sortbyyears) {
                this.sortbyname = false;
            }

            if(this.sortbyname == false && this.sortbyyears == false) {
                return this.$emit("sortfilm", "original" )
            }

            if(this.sortbyyears) {
                let sortYears = this.films.sort((a, b) => a.year > b.year ? 1 : -1);
                return this.$emit("sortfilm", sortYears )
            }
            
        }
    }
}
</script>
