<template>
    <div class="container pt-5">
        <div>
            <h1 class="text-left">Giỏ Hàng Của Bạn</h1>
            <div class="row">
               <div class="col-9">
                <CartItemCard class="border mt-2"
                v-for="item in items"
                :key="item.id"
                :item="item" />
               </div>
    
            <CartSummaryPaymentCard class="col-3"/>
            </div>
            
        </div>
    </div>
</template>

<script>
    import CartItemCard from '../components/cart/CartItemCard.vue'
    import CartSummaryPaymentCard from '../components/cart/CartSummaryPaymentCard.vue'

    export default {
        components: {
            CartItemCard, CartSummaryPaymentCard
        },
        computed: {
            items() {
                return this.$store.getters.cartItems
            }
        }
    }
</script>