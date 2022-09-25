<template>
    <div class="cart-item-card border mt-2 py-4">
        <h3>Cart Total: ${{ cart_total.toFixed(2) }}</h3>

        <button type="button" class="btn btn-success">Pay by Credit Card</button>
    </div>
</template>

<script>
    export default {
        computed: {
            cart_total() {
                return this.$store.getters.cartItems.reduce((a, b) => a + (b.price * b.quantity), 0)
            }
        }
    }
</script>