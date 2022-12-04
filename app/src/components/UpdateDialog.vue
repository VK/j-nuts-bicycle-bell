<template>
  <div class="text-center">
    <v-dialog v-model="show" max-width="300px">
      <v-card>
        <v-card-title>Update</v-card-title>

        <v-card-text>
          <p>Eine neue Version is vorhanden.</p>
          <v-btn color="primary" @click="refreshApp()" block> Update </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="secondary" text @click="show = false"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      worker: undefined,
    };
  },
  methods: {
    refreshApp() {
      this.show = false;
      // Protect against missing registration.waiting.
      if (!this.worker) {
        console.warn("No worker data found when trying to refresh!");
        return;
      }
      this.worker.postMessage({ type: "SKIP_WAITING" });
      console.log("skipWaiting finished");
    },
  },
};
</script>  