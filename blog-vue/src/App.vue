<template>
    <div>
        <navigation/>
        <router-view/>

    </div>
</template>

<script>
import navigation from "./components/navigation.vue"

export default {
    components: {
        navigation
    }
}

</script>