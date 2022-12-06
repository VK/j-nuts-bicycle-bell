<template>
  <div class="bellDiv" ref="bellDiv">
    <v-sheet height="100vh">
      <div class="w-100 text-center" v-if="(offline || ignore)">
        <v-btn icon :style="bellStyle" @click="ring">
          <v-icon :size="bellSize">mdi-bell-ring-outline</v-icon>
        </v-btn>
      </div>
      <div v-else class="w-100 text-center text-h3 pa-3">
        Please use airplane mode!<br />
        <v-icon :size="bellSize">mdi-airplane-check</v-icon><br />
        <v-btn elevation="2" x-large  @click="ign">Ignore</v-btn>
      </div>
    </v-sheet>
  </div>
</template>


<script>
import Wad from "web-audio-daw";
import { watch } from 'is-offline';

// const sounds = {
//   sopran: new Audio(require("/public/audio/A sopran.mp3")),
//   alt: new Audio(require("/public/audio/A alt.mp3")),
//   bariton: new Audio(require("/public/audio/A bariton.mp3")),
// };

const sounds = {
  sopran: new Wad({ source: "/audio/A sopran.mp3" }),
  alt: new Wad({ source: "/audio/A alt.mp3" }),
  bariton: new Wad({ source: "/audio/A bariton.mp3" }),
};

export default {
  data: () => ({
    iWidth: 0,
    iHeight: 0,
    iTop: 0,
    offline: false,
    ignore: false,
    type: "sopran",
    types: ["sopran", "alt", "bariton"],
  }),

  computed: {
    bellStyle() {
      return {
        width: this.iWidth + "px",
        height: this.iHeight + "px",
        top: this.iTop + "px",
      };
    },
    bellSize() {
      return (this.iWidth * 0.5).toString() + "px";
    },
  },
  methods: {
    ign() {
      this.ignore = true;
    },
    ring() {
      let audio = sounds[this.type];
      audio.play();

    },
    update_size() {
      if (this.$refs.bellDiv) {
        let new_min = Math.min(
          this.$refs.bellDiv.clientHeight,
          this.$refs.bellDiv.clientWidth
        );

        this.iWidth = new_min - 20;
        this.iHeight = this.iWidth;
        this.iTop = Math.max(
          0,
          this.$refs.bellDiv.clientHeight - this.$refs.bellDiv.clientWidth - 30
        );
      }
    },
  },

  mounted() {
    window.addEventListener("resize", () => {
      this.update_size();
    });
    setTimeout(this.update_size(), 5000);

    watch((state) => {this.offline = state});
  },
};
</script>


<style scoped>
.bellDiv {
  height: calc(100vh - 62px);
  top: 0px;
  overflow: hidden;
}
</style>
