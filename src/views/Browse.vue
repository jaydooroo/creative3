<template>
  <div>
    <div class="pure-menu pure-menu-horizontal">
      <ul class="pure-menu-list">
        <li class="pure-menu-item">
          <a @click="select('Light')" href="#" class="pure-menu-link">Light</a>
        </li>
        <li class="pure-menu-item">
          <a @click="select('Dark')" href="#" class="pure-menu-link">Dark</a>
        </li>
        <li class="pure-menu-item">
          <a @click="select('Earth')" href="#" class="pure-menu-link">Earth</a>
        </li>
        <li class="pure-menu-item">
          <a @click="select('Water')" href="#" class="pure-menu-link">Water</a>
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
      attribute: "",
    };
  },
  computed: {
    products() {
      return this.$root.$data.products.filter(
        (product) => product.attribute === this.attribute
      );
    },
  },
  methods: {
    select(attribute) {
      this.attribute = attribute;
    },
  },
};
</script>
