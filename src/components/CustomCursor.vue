<template>
  <img
    v-show="$q.screen.gt.xs"
    :src="isOverCard ? pokeballOpenImg : pokeballImg"
    alt=""
    class="cursor absolute ease-out z-10 drop-shadow"
    :class="isOverCard ? 'animate__bounce' : 'animate__bounce'"
  />
</template>

<script>
import pokeballImg from "../assets/images/cursor/pokeball.png";
import pokeballOpenImg from "../assets/images/cursor/pokeball_open.png";


export default {
  data() {
    return {
      pokeballImg,
      pokeballOpenImg,
      isOverCard: false,
    };
  },
  methods:{
      mouseOverCard(){
          this.isOverCard = true
      },
      mouseOutCard(){
          this.isOverCard = false
      }
  },
  mounted() {
    // Image that follows the cursor
    const cursor = document.querySelector(".cursor");
    document.addEventListener("mousemove", (e) => {
      cursor.setAttribute(
        "style",
        "top: " + (e.pageY - 12 ) + "px; left: " + (e.pageX - 12) + "px;"
      );
    });
    // Click on card animation
/*     document.addEventListener("mousedown", () => {
      if (this.isOverCard) {
        cursor.classList.add("animate__ping");
        cursor.classList.remove("animate__bounce");
        setTimeout(() => {
          cursor.classList.remove("animate-ping");
        }, 1000);
      }
    }); */

  },
};
</script>

<style lang="sass">
.cursor
  animation: cursorAnim 0.5s infinite alternate

</style>