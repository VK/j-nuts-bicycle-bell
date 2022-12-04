<template>
  <div class="bellDiv" ref="bellDiv">
    <v-sheet height="100%">
      <div class="w-100 text-center">
        <v-btn icon :style="bellStyle" @click="ring">
          <v-icon :size="bellSize">mdi-bell-ring-outline</v-icon>
        </v-btn>
      </div>
    </v-sheet>
  </div>
</template>


<script>
const sounds = {
  sopran: new Audio(require("/public/audio/A sopran.mp3")),
  alt: new Audio(require("/public/audio/A alt.mp3")),
  bariton: new Audio(require("/public/audio/A bariton.mp3")),
};

export default {
  data: () => ({
    iWidth: 0,
    iHeight: 0,
    type: "sopran",
    types: ["sopran", "alt", "bariton"],
  }),

  computed: {
    bellStyle() {
      return {
        width: this.iWidth + "px",
        height: this.iHeight + "px",
      };
    },
    bellSize() {
      console.log((this.iWidth * 0.5).toString() + "px");
      return (this.iWidth * 0.5).toString() + "px";
    },
  },
  methods: {
    ring() {
      let audio = sounds[this.type];
      if (audio.paused) {
        audio.play();
      } else {
        audio.currentTime = 0;
      }
    },
    update_size() {
      let new_min = Math.min(
        this.$refs.bellDiv.clientHeight,
        this.$refs.bellDiv.clientWidth
      );
      console.log(new_min);
      this.iWidth = new_min - 20;
      this.iHeight = this.iWidth;
    },
  },

  mounted() {
    window.addEventListener("resize", () => {
      this.update_size();
    });
    setTimeout(this.update_size(), 5000);
  },
};
</script>


<style scoped>
.bellDiv {
  height: calc(100% - 50px);
}
</style>
