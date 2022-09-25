<template>
    <div class="cart-item-card">
        <div class="row align-items-center px-4" style="column-gap: 8px;">
            <h3 class="font-weight-bold">{{ item.name }}</h3>
            <h4 style="font-size:18px; color: red;">In Cart: {{ item.quantity }}</h4>
            <h4>Total Cost: ${{ item_cost.toFixed(2) }}</h4>
        </div>
        
        <p class="text-left px-2">{{ description }}</p>
    </div>
</template>

<script>
    export default {
        props: ['item'],
        computed: {
            description() {
                return this.item.description.substring(0, 120)
            },
            item_cost() {
                return this.item.price * this.item.quantity
            }
        }
    }
</script>
