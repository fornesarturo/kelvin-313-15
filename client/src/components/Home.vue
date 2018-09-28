<template>
  <div class="home">
    <br>
     <div class="split left">
      <div class="centered">
        <!--Icons made by Freepik "http://www.freepik.com" from www.flaticon.com  -->
        <img src="../assets/opened-book.svg" alt="opened-book">
        <h2 onclick="location.href = '/public'" class="b-left" id="buttonPublic">Público</h2>
      </div>
    </div>

    <div class="split right">
      <div class="centered">
        <!--Icons made by Freepik "http://www.freepik.com" from www.flaticon.com  -->
         <img src="../assets/closed-book.svg" alt="closed-book">
        <h2 onclick="location.href = '/clubs'" class="b-right" id="buttonClubs">Clubes</h2>
      </div>
    </div> 
  </div>
</template>
<script>

export default {
  name: 'Home',
  props: {
    msg: String
  },

  methods: {
    addQuote(){
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

/* Split the screen in half */
.split {
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  padding-top: 20px;
}

/* Control the left side */
.left {
  left: 0;
  background-color: #1BBC9B;
}

/* Control the right side */
.right {
  right: 0;
  background-color: #16A086;
}

/* If you want the content centered horizontally and vertically */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

/* Style the image inside the centered container, if needed */
.centered img {
  width: 150px;
  margin-bottom: 15px;
}

.b-left{
  color: #EEE;
}

.b-right{
  color: #EEE;
}










</style>
