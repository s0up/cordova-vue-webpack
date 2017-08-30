<template>
  <v-app id="example-2" toolbar>
    <v-navigation-drawer
      fixed persistent light v-model="drawer" overflow enable-resize-watcher clipped
    >
    <v-list dense>
      <v-list-tile v-for="item in items" :key="item.text">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            {{ item.text }}
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-subheader class="mt-3 grey--text text--darken-1">SUBSCRIPTIONS</v-subheader>
      <v-list>
        <v-list-tile v-for="item in items2" :key="item.text" avatar>
          <v-list-tile-avatar>
            <img :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`" alt="">
          </v-list-tile-avatar>
          <v-list-tile-title v-text="item.text"></v-list-tile-title>
        </v-list-tile>
      </v-list>
      <v-list-tile class="mt-3">
        <v-list-tile-action>
          <v-icon class="grey--text text--darken-1">add_circle_outline</v-icon>
        </v-list-tile-action>
        <v-list-tile-title class="grey--text text--darken-1">Browse Channels</v-list-tile-title>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon class="grey--text text--darken-1">settings</v-icon>
        </v-list-tile-action>
        <v-list-tile-title class="grey--text text--darken-1">Manage Subscriptions</v-list-tile-title>
      </v-list-tile>
    </v-list>
    </v-navigation-drawer>
    <v-toolbar class="light-blue" dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Boilerplate</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>view_module</v-icon>
      </v-btn>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>
<script>
export default {
  name: 'dashboard',
  data: () => ({
    drawer: true,
    items: [
      { icon: 'trending_up', text: 'Most Popular' },
      { icon: 'subscriptions', text: 'Subscriptions' },
      { icon: 'history', text: 'History' },
      { icon: 'featured_play_list', text: 'Playlists' },
      { icon: 'watch_later', text: 'Watch Later' }
    ],
    items2: [
      { picture: 28, text: 'Joseph' },
      { picture: 38, text: 'Apple' },
      { picture: 48, text: 'Xbox Ahoy' },
      { picture: 58, text: 'Nokia' },
      { picture: 78, text: 'MKBHD' },
    ]
  }),
  methods: {
    goTo(link){
      this.$router.push(link);
    }
  }
};
</script>
