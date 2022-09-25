<template>
    <div class="col">
        <div class="card py-4">
            <h3>
                {{ product.name }}
            </h3>
            <h5 class="price" style="color: red;">Price: ${{ product.price.toFixed(2) }}</h5>
            <p class="description">Description: {{ description }}</p>
            <p class="text-muted">{{ product.category }}</p>
            <router-link :to="{name: 'ProductDescriptionDrawer', params: {id : product.id}}">
                <button  type="button" class="btn btn-primary">Xem Chi Tiết</button>
            </router-link>
            <!-- <button class="view-product-button" @click.prevent="$emit('view-product', product)">View Product</button> -->
        </div>
    </div>
</template>

<script>
    export default {
        props: ['product'],
        computed: {
            description() {
                return this.product.description.substring(0, 150)
            }
        }
    }
</script>

