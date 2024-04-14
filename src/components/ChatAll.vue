<!-- eslint-disable vue/multi-word-component-names -->
<script>
import Chat from "@/components/Chat.vue";
import ChatMobile from "@/components/ChatMobile.vue";

export default {
  name: "ChatAll",
  components: {ChatMobile, Chat},
  data(){
    return{
      isMobile: false, //手机端
    }
  },
  methods:{
    //检查手机
    checkIfMobile() {
      this.isMobile = window.innerWidth < 800; // Adjust the value based on your requirements
    },
  },

  mounted(){
    this.checkIfMobile();
  },
}
</script>

<template>
<div>
  <Chat v-if="!isMobile"></Chat>
  <ChatMobile v-if="isMobile"></ChatMobile>
</div>
</template>

<style scoped>

</style>