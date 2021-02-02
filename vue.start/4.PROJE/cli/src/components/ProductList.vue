<template>
  <div>
    <h3>Product List Data</h3>
    <p v-if="getProducts.length == 0">Urun Bulunamadi</p>
    <table v-else class="table">
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
        <tr v-for="product in getProducts" :key="product.id">
          <td v-if="updateId === product.id">
            <input v-model="product.id" type="text" class="form-control" id>
            {{ product.id }}</td>
          <td>{{ product.productName }}</td>
          <td>{{ product.categoryId }}</td>
          <td>{{ product.quantityPerUnit }}</td>
          <td>{{ product.unitPirice }}</td>
          <td>{{ product.unitInStock }}</td>
          <td>
            <button class="btn btn-sm btn-primary" @click="guncelle(product)">
              update
            </button>
            <button class="btn btn-sm btn-danger" @click="sil(product)">
              remove
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
    getProducts: Array,
  },
  data() {
    return { updateId: null };
  },
  methods: {
    sil(product) {
      this.$emit("delete", product);
    },
    guncelle(product) {
      this.updateId = product
    },
    ekle() {},
  },
};
</script>

<style scoped></style>
