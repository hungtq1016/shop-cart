<template>
    <div class="container pt-5">
        <div class="row">
            <div class="col-4">
                <img src="https://www.hmmawards.com/wp-content/uploads/woocommerce-placeholder-600x600.png" class="img-thumbnail">
            </div>
            <div class="product-details col-8">
            
                <h3 class="text-left">{{ product.name }}</h3>
                <p class="description">{{ product.description }}</p>
                <h3 class="text-left" style="color: red;">Giá: ${{ parseFloat(product.price).toFixed(2) }}</h3>
    
                <div class="cart-total d-flex align-items-center" v-if="product_total" style="column-gap: 8px;">
                    <h3>Hiện Có: </h3>
                    <h4>{{ product_total }}</h4>
                </div>
                
    
                <div class="d-flex align-items-center" style="column-gap: 8px;">
                    <!-- <button class="remove" @click.prevent="removeFromCart()">Remove</button>
                    <button class="add" @click.prevent="addToCart()">Add</button> -->
                    <button @click.prevent="removeFromCart()"
                    type="button" class="btn btn-outline-danger">Xóa</button>
                    <button @click.prevent="addToCart()" 
                    type="button" class="btn btn-primary add">Thêm</button>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import items from '../../data/items.js'
    export default {
        name: "ProductDescriptionDrawer",
        // props: ['product', 'active'],
        // emits: ['closeProductDrawer'],
        data() {
            return {
                product: {}
            }
        },
        mounted(){
            let id = this.$route.params.id;
            console.log(id);
            this.product = items.find(item=>item.id==id);
            console.log(this.product);
        },
        methods: {
            addToCart() {
                this.$store.commit('addToCart', this.product)
            },
            removeFromCart() {
                this.$store.commit('removeFromCart', this.product)
            }
        },
        computed: {
            product_total() {
                return this.$store.getters.productQuantity(this.product)
            }            
        }
    }
</script>

<style>
    .description{
        text-align: justify;
    }
</style>



    

