<template>
  <div class="text-center">
    <v-dialog v-model="show" max-width="300px">
      <v-card>
        <v-card-title>Install</v-card-title>

        <v-card-text>
          <p>Use the installed app.</p>
          <v-btn color="primary" href="web+jnutsbell://" block> App </v-btn>
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
    };
  },
  methods: {
    ignore() {
      this.show = false;
    },
  },
};
</script>  