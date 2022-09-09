<template>
    <Layout>
        
        <router-view></router-view>
    </Layout>
</template>
<script>
    import Layout from '@/layout/Main.vue'
    

    export default {
        components: {
            Layout,
        },

    }
</script>