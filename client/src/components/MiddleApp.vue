<template>
</template>
<script>
export default {
    name: 'MiddleApp',
    data () {
        return {
            text: 'from serder',
            arrayProductsApi: [],
            arrayDbData: []
        }
    },
    created () {
        // this.getProductsApi()
        // this.getProductsDb()
        this.joinArrays()
    },
    mounted () {
        this.sender()
        
        // ,this.getProductsApi()
    },
    methods: {
        sender() {
            this.$eventBus.$emit('message', this.text)
        },
        getProductsApi() {
            this.$socket.on('products',data => {
                // console.log(data)
                this.arrayProductsApi = data
                // console.log(this.arrayProductsApi)
            })
        },
        getProductsDb() {
            this.$socket.on('db',data => {
                // console.log(data)
                this.arrayDbData = data
            })
        },
        joinArrays() {
            this.$socket.on('products',data => {
                this.arrayProductsApi = data
            })
            console.log(this.arrayProductsApi)
            
            // console.log(this.arrayProductsApi)
        }
    }
}
</script>
