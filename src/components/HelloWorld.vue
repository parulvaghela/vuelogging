<template>
  <div class="hello">
  <h1>Login with google 2222</h1>
     <h1>IsInit: {{ Vue3GoogleOauth.isInit }}</h1>
  <h1>IsAuthorized: {{ Vue3GoogleOauth.isAuthorized }}</h1>
  <h2 v-if="user">signed user: {{user}}</h2>
  <button @click="handleClickSignIn" :disabled="!Vue3GoogleOauth.isInit || Vue3GoogleOauth.isAuthorized">sign in</button>
  <button @click="handleClickGetAuthCode" :disabled="!Vue3GoogleOauth.isInit">get authCode</button>
  <button @click="handleClickSignOut" :disabled="!Vue3GoogleOauth.isAuthorized">sign out</button>
  <button @click="handleClickDisconnect" :disabled="!Vue3GoogleOauth.isAuthorized">disconnect</button>
  </div>
</template>

<script>
import { inject, toRefs } from "vue";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
    data(){
    return {
      user: '',
    }
  },
  methods: {
    async handleClickSignIn(){
      try {
        const googleUser = await this.$gAuth.signIn();
        if (!googleUser) {
          return null;
        }
        console.log("googleUser", googleUser);
        this.user = googleUser.getBasicProfile().getEmail();
        console.log("getId", this.user);
        console.log("getBasicProfile", googleUser.getBasicProfile());
        console.log("getAuthResponse", googleUser.getAuthResponse());
        console.log(
          "getAuthResponse",
          this.$gAuth.instance.currentUser.get().getAuthResponse()
        );
      } catch (error) {
        //on fail do something
        console.error(error);
        return null;
      }
    },
    async handleClickGetAuthCode(){
      try {
        const authCode = await this.$gAuth.getAuthCode();
        console.log("authCode", authCode);
      } catch(error) {
        //on fail do something
        console.error(error);
        return null;
      }
    },
    async handleClickSignOut() {
      try {
        await this.$gAuth.signOut();
        console.log("isAuthorized", this.Vue3GoogleOauth.isAuthorized);
        this.user = "";
      } catch (error) {
        console.error(error);
      }
    },
    handleClickDisconnect() {
      window.location.href = `https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=${window.location.href}`;
    },
  },
  setup(props) {
    const { isSignIn } = toRefs(props);
    const Vue3GoogleOauth = inject("Vue3GoogleOauth");
    const handleClickLogin = () => {};
    return {
      Vue3GoogleOauth,
      handleClickLogin,
      isSignIn,
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
