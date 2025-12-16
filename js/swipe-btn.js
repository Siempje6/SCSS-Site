import SwipeButton from 'vue-swipe-button'
import 'vue-swipe-button/dist/swipeButton.css'

export default {
  name: 'app',
  components: {
    SwipeButton
  },
  methods: {
    onActionConfirmed() {
      setTimeout(() => {
        this.$refs.swipeButton.reset();
      }, 1000);
    },
  },

}