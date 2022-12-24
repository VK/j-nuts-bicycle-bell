<template>
  <div class="text-center">
    <v-dialog v-model="show" max-width="300px">
      <v-card>
        <v-card-title>Installieren?</v-card-title>

        <v-card-text v-if="installed">
          <p>Du kannst auch die installierte App verwenden.</p>
          <v-btn color="primary" href="web+jnutsbell://" block> App </v-btn>
        </v-card-text>

        <v-card-text v-if="canInstall">
          <p>Wenn du möchtest kann die App installiert werden.</p>
          <v-btn color="primary" @click="triggerInstall" block>
            Installieren
          </v-btn>
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
      installed: false,
      canInstall: false,
      installEvent: null,
      tried: false
    };
  },
  methods: {
    ignore() {
      this.show = false;
    },
    triggerInstall() {

      this.installEvent.prompt();

      this.show = false;

      this.installEvent.userChoice.then((res) => {
         if (res.outcome == 'success') {
            this.installed = true;
            this.canInstall = true;
         }
      })
    },
  },
};
</script>  