<template>
    <div class="app-mySup">
        <!--顶部页面提示-->
        <div class='mui-row sups'>
            <div class='mui-col-xs-12'>
                <div class='grid-content bg-purple-dark back'>
                    <span class='arrow' @click='backToOld'></span>
                    <span>我的团队</span>
                </div>
            </div>
        </div>
        <!-- 我的团队 -->
        <div class="ui-form ui-border-t" >
            <form action="">
                <div class="ui-form-item ui-form-item-link ui-border-b"  v-for="(item,i) of jsonP[num]">
                    <label>
                        {{item}}
                    </label>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
        num:0,
      jsonP: [{
          name:"Tom",
          asdf:"jack",
          nasdaame:"asdf",
          naasdme:"Todsafm",
          naadsme:"ads",
      }, {
          name:"Tom",
          asdf:"jack",
          nasdaame:"asdf",
          naasdme:"Todsafm",
          naadsme:"ads",
      }, {
          name:"Tom",
          asdf:"jack",
          nasdaame:"asdf",
          naasdme:"Todsafm",
          naadsme:"ads",
      }, {
          name:"Tom",
          asdf:"jack",
          nasdaame:"asdf",
          naasdme:"Todsafm",
          naadsme:"ads",
      }],
      getTeam: {
        type: 800,
        data: {
          user: null,
          token: null
        }
      }
    };
  },
  created() {
      var URL = window.location.href;
      let v =  URL.slice(
          URL.indexOf('page')+4,
          URL.indexOf('page')+5
      );
      console.log(v);
      this.num = v;
  },
  watch: {},
  methods: {
      backToOld(){
          this.$router.go(-1);
      },
    getTeams() {
      let url = sessionStorage.getItem('serverIp')+"/getTeam";
      this.axios
        .post(url, this.qs.stringify(this.getSup), {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        })
        .then(res => {
          console.log(res.data);
          if (res.data.type == 801) {
            this.Sup = res.data.data.Sup;
          }
        });
    }
  }
};
</script>
<style lang="less">
.sups .arrow{
  display:flex;
  justify-content:space-between;
  align-items:center;
}
.sups .arrow::after{
  content:'';
  width:15px;
  height:15px;
  border-top:3px solid #ccc;
  border-right:3px solid #ccc;
  transform:rotate(225deg);
}
.sups .back{
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:start;
  width:100%;
}
.sups .back span:nth-child(1){
  margin-left:5%;
}
.sups .back span:nth-child(2){
  margin:0 auto !important;
}
</style>
