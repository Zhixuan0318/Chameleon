<template>
    <!-- <div class="content"> -->
        
        <div>
            <div class="content-wrapper">
              <h5>IPFS Configuration</h5>
              <span
                >Before contributing topography data to Chameleon, you need to
                configure your IPFS storage tool. The IPFS storage tool will be use
                to store your topography data, metadata, additional files, and
                Bacalhau COD computation result. Currently, Chameleon only supports
                Pinata.</span>
            </div>
    
            <div class="input-wrapper mt-4">
              <label> Pinata API Key</label>
              <input type="text" v-model="pinataKey" :readonly ="registered" />
            </div>
    
            <div class="input-wrapper">
              <label> Pinata API Secret</label>
              <input type="text" v-model="pinataSecret" :readonly ="registered"/>
            </div>
            <button v-if="!registered" @click="saveUserData()" class="d-flex justify-center mt-6">Save</button>
            <button v-else @click="registered = !registered" class="d-flex justify-center mt-6" style="background-color: blue;">Edit</button>

        </div>
    <!-- </div> -->
</template>
<script>
export default {
    name: "Configuration",
    data() {
      return {
        pinataKey: '',
        pinataSecret: '',
        registered: false,
      }
    },
    created(){
        this.pinataKey = this.$store.state.pinataKey
        this.pinataSecret = this.$store.state.pinataSecret
    },
    methods: {
      
      saveUserData(){
        if (!this.$store.state.account.address) {
          this.$toast.error('Please connect your wallet first.')
          return
        }
        if (!this.pinataKey) {
          this.$toast.error('Please type your pinata api key.')
          return
        }
        if (!this.pinataSecret){
          this.$toast.error('Please type your pinata api secret.')
          return
        }
        let data = {}
        data.pinataKey = this.pinataKey
        data.pinataSecret = this.pinataSecret
        data.address = this.$store.state.account.address
        this.$api.request.saveUserData(data, (res => {
          if (res.data.user) {
            this.$store.dispatch('account/setAccount', res.data.user)
            if (res.data.type == 1)
              this.$toast.show('Pinata API Key and Pinata API Secret are registered.')
            else if (res.data.type == 2)
              this.$toast.show('Pinata API Key and Pinata API Secret are updated.')
            this.registered = true
          }
        }), err =>{
          console.log(err)
        })
      }
    }
  };
</script>
<style lang="scss" scoped>

</style>