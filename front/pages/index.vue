<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        front
      </h1>
      
      <button @click="storeToken()">
        Test
      </button>

    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        token:""
      }
    },
    methods:{

      async storeToken(){

        await this.$axios.post("/notification/store", {token: this.token})
        await this.sendNotification()

      },
      async sendNotification(){

        await this.$axios.get("/notification/send-all")

      }

    },
    async mounted(){
      const currentToken = await this.$fire.messaging.getToken()
      this.token = currentToken
      
    }

  }
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
