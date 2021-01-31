<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Merhaba Vue!" />
  <ProductList @delete:product="deleteProduct" :products="product" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import ProductList from "./components/ProductList";
export default {
  name: "App",
  components: {
    HelloWorld,
    ProductList,
  },
  data() {
    return {
      product: [
        {
          id: 1,
          categoryId: 1,
          productName: "Leptop",
          quantityPerUnit: "Acer",
          unitPirice: 5000,
          unitInStock: 2,
        },
        {
          id: 2,
          categoryId: 2,
          productName: "Mouse",
          quantityPerUnit: "Logitech",
          unitPirice: 50,
          unitInStock: 10,
        },
        {
          id: 3,
          categoryId: 3,
          productName: "Keyboard",
          quantityPerUnit: "Logitech",
          unitPirice: 300,
          unitInStock: 20,
        },
      ],
    };
  },
  methods: {
    deleteProduct(product) {
      this.product = this.product.filter((item) => item.id !== product.id);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
