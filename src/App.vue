<template>
  <div id="app">
    <dashboard></dashboard>
  </div>
</template>

<script>
import Dashboard from './components/Dashboard';

export default {
  name: 'app',
  data() {
    return {
      drawer: true,
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' }
      ],
      mini: false,
      right: null
    };
  },
  components: {
    dashboard: Dashboard
  }
};
</script>
