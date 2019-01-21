<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      class="hidden-md-and-up"
      app
      right
      clipped
      disable-resize-watcher
    >
      <v-list>
        <v-list-tile
          v-for="(link, index) in links"
          :key="index"
          :to="link.to"
          exact
        >
          <v-list-tile-action>
            <v-icon>
              {{ link.icon }}
            </v-icon>
          </v-list-tile-action>
          <v-list-tile-content
            class="subheading"
          >
            <v-list-tile-title>
              {{ link.title }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      app
      dark
      clipped-right
      color="primary lighten-1"
    >
      <v-toolbar-title
        class="headline"
      >
        JSON Editor
      </v-toolbar-title>

      <v-spacer />

      <v-toolbar-side-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      />

      <v-toolbar-items
        class="hidden-sm-and-down"
      >
        <v-btn
          v-for="(link, index) in links"
          :key="index"
          :to="link.to"
          class="title font-weight-light"
          flat
          exact
        >
          {{ link.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        {
          title: 'Home',
          to: { name: 'home' },
          icon: 'fas fa-home',
        },
      ],
    };
  },
};
</script>
