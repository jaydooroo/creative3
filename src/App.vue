<template>
  <div id="app">
    <div id="menu">
      <div id="brand">
        <router-link to="/">
          <img src="/images/logo.jpg" />
        </router-link>
      </div>
    
    </div>
    <div id="menus">
        <router-link to="/browse">
          <button class = "setting">
            <img src="/images/setting.png" />
            <p>Setting</p>
          </button>
        </router-link>
        <router-link to="/cart">
          <button class="Deck">
            <img src="/images/card-games.png" />
            <p>{{ this.$root.$data.cart.length }}MY Deck</p>
          </button>
        </router-link>
        <router-link to = "/Deck">
          <button class="AccessChoosingDeck">
            <img src = "/images/card.png"/> Choose Card</button>
        </router-link>
      </div>

      <router-view />
     <footer>
          Contact Info: abcd@gamil.com  
          <br>
          Phone Number: +1) 805-999-9999 
          <br>
          github:<a href = https://github.com/jaydooroo/groceryProject.git>https://github.com/jaydooroo/groceryProject.git</a>
      </footer>
  </div>
</template>
<style>
* {
  box-sizing: border-box;

}

body {
  margin: 50px 100px;
   background-color: #faf8f5;
}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #995e37;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#menus {
  justify-content: space-around;
  display: flex;
  margin: 5%;

}

#menus img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}
footer{
    height: 100px;
    font-family:  "Times New Roman", Times, serif;
    font-size: medium;
    color: rgb(27, 25, 25);;
    font-weight: bold;
    text-align: center;
}
.setting {
  width:400px;
  height: 400px;
  background-color: rgb(99, 110, 110);
}
.Deck {
   width:400px;
  height: 400px;
  background-color: blanchedalmond;
}
.AccessChoosingDeck {
  width:400px;
  height: 400px;
  background-color: rgb(151, 111, 61);
}

</style>
