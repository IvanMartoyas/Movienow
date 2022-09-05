<template>
        <form class="sortForm">
            <input id="sorbyname" type="checkbox" v-model="sorbyname" />
            <label for="sorbyname">Отсортировать по названию</label>
            
            
            <input id="sorbyyears" type="checkbox" v-model="sorbyyears" />
            <label for="sorbyyears">Отсортировать по году</label>
            
        </form>
</template>
<script>

export default {
    data() {
        return {
            sorbyname: false,
            sorbyyears: false,
        }
    },
}
</script>
