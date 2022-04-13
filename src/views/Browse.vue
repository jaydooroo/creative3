<template>
  <div>
    <div class="typeMenus">
      <ul class="type-list">
        <li class="type-itemL">
          <a @click="select('LIGHT')" href="#">Light</a>
        </li>
        <li class="type-itemD">
          <a @click="select('DARK')" href="#">Dark</a>
        </li>
        <li class="type-itemE">
          <a @click="select('EARTH')" href="#">Earth</a>
        </li>
        <li class="type-itemW">
          <a @click="select('WATER')" href="#">Water</a>
        </li>
      </ul>
    </div>
    <ProductList :products="products" />
  </div>
</template>
<script>
import ProductList from "../components/ProductList.vue";
export default {
  name: "Browse",
  components: {
    ProductList,
  },
  data() {
    return {
      Attribute: "",
    };
  },
  computed: {
    products() {
      return this.$root.$data.products.filter(
        (product) => product.Attribute === this.Attribute
      );
    },
  },
  methods: {
    select(Attribute) {
      this.Attribute = Attribute;
    },
  },
};
</script>
<style>
.typeMenus {
  text-align: center;
}

.type-list {
  list-style: none;
}

.type-itemL {
  display: inline-block;
  font-size: 65px;
  margin: 5%;
  padding: 4%;
  background-color: rgb(223, 226, 39);
  color: aquamarine;
}
.type-itemD {
  display: inline-block;
  font-size: 65px;
  margin: 5%;
  padding: 4%;
  background-color: rgb(49, 40, 30);
  color: white;
}
.type-itemE {
  display: inline-block;
  font-size: 65px;
  margin: 5%;
  padding: 4%;
  background-color: rgb(183, 109, 19);
  color: white;
}
.type-itemW {
  display: inline-block;
  font-size: 65px;
  margin: 5%;
  padding: 4%;
  background-color: rgb(71, 118, 213);
  color: white;
}

.type-list a {
  color: white;
  text-decoration: none;
}
</style>
