<template>
  <div class="wrapper">
    <div v-if="isSuccess">
      <h1>Your Deck</h1>
      <div class="products">
        <div
          class="product"
          v-for="product in this.$root.$data.cart"
          :key="product.id"
        >
          <div class="info">
            <h1>{{ product.name }}</h1>
          </div>
          <div class="imageInfo">
            <div class="image">
              <img :src="'/images/products/' + product.image" />
            </div>
            <div class="horziontal">
              <div class="cardInfo">ATK: {{ product.ATK }}</div>
              <div class="cardInfo">DEF: {{ product.DEF }}</div>
              <div class="attribute">Type: {{ product.Attribute }}</div>
            </div>
          </div>
          <button class="auto" v-on:click="cart(product)">Add to Deck</button>
        </div>
      </div>
    </div>
    <div v-else>
      <h1>Deck is Empty</h1>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isSuccess: this.lengthData(),
    };
  },
  methods: {
    lengthData() {
      if (this.$root.$data.cart.length == 0) {
        return false;
      } else {
        return true;
      }
    },
    remove(productID) {
      for (let i = 0; i < this.$root.$data.cart.length; i++) {
        if (this.$root.$data.cart[i].id == productID) {
          this.$root.$data.cart.splice(i, 1);
          break;
        }
      }
    },
  },
};
</script>
<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
}

.imageInfo {
  display: flex;
  justify-content: start;
  align-items: center;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 400px;
}

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.cardInfo {
  margin: 10px;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background-color: brown;
  color: #000;
  padding: 20px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.info h1 {
  font-size: 20px;
  color: white;
}

.price {
  display: flex;
}

button {
  width: 400px;
  height: 50px;
  background: #000;
  color: white;
  border: none;
  font-size: 20px;
}

.auto {
  margin-left: auto;
}

.horziontal {
  flex-direction: row;
  text-emphasis-style: bold;
  font-size: 25px;
  align-self: center;
  margin-left: 15px;
}

.attribute {
  margin: 10px;
}
</style>
