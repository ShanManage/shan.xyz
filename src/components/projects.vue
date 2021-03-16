<template>
  <div class="container-fluid p-0">
    <div id="slide-show" class="slide-show">
      <transition-group name="fade" tag="slide-show">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
      </div>
      </transition-group>
    </div>  
  </div>
</template>

<script>
export default {
   created () {
      document.title = "My Projects";
    },
  data() {
    return {
      images: [
        "../../static/images/one.jpg",
        "../../static/images/three.jpg",
        "../../static/images/five.jpg",
        "../../static/images/two.jpg",
        "../../static/images/four.jpg",
        "../../static/images/six.jpg",
      ],
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container-fluid {
    padding-top: 20px;
    height: 100vh;
    background-image: linear-gradient(to top left, #fdfcfb,#BDBDBD);
  } 

  .slid-show{
    position:fixed;
  }

  .fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

img {
  height:650px;
  width:80%;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

}
</style>
