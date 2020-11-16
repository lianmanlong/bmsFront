<template>
<div>
    <temp-2>
        <template v-slot:image>
            <el-image :src="url" :lazy='true' @click.stop="$router.push('/manager')"></el-image>
        </template>
        <template v-slot:text>
             <p>图书管理</p>
        </template>
    </temp-2>

</div>
</template>

<script>
const Temp2 = import("./Temp2.vue")

export default {
    name: "Temp",
    components: {
        Temp2
    }
}
</script>

<style scoped>

</style>
