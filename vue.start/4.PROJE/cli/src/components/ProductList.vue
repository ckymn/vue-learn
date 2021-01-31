<template>
  <div>
    <h3>Product List Data</h3>
    <p v-if="products.length == 0">Urun Bulunamadi</p>
    <table class="table">
      <thead>
        <th>Id</th>
        <th>Urun Adi</th>
        <th>Kategori Id</th>
        <th>Aciklama</th>
        <th>Fiyat</th>
        <th>Stok Adedi</th>
        <th></th>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.productName }}</td>
          <td>{{ product.categoryId }}</td>
          <td>{{ product.quantityPerUnit }}</td>
          <td>{{ product.unitPirice }}</td>
          <td>{{ product.unitInStock }}</td>
          <td>
            <button
              class="btn btn-sm btn-danger"
              @click="sil(product)"
            >
              sil
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "products-list",
  props: {
    products: Array,
  },
  methods: {
    sil(product) {
      this.$emit("delete:product", product);
    },
    guncelle() {},
    ekle() {},
  },
};
</script>

<style scoped></style>
