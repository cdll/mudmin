
<script>
  export default {
    data() {
      return {
        dateData: undefined
        ,timeData: undefined
        ,timeFormat: '24hr'
        ,timeViewType: 'clock'
        ,isLandscape: window.innerHeight< window.innerWidth
      }
    }
    ,render() {
      return (
        <mu-container class='home-page'>
          <mu-flex class=''
            justify-content="between"
            align-items="center"
            wrap="wrap"
          >
            <mu-paper class="demo-date-picker"
              z-depth={1}
              style='margin: 1em auto;'
            >
              <mu-date-picker
                landscape={
                  this.isLandscape
                }
                date={this.dateData}
              />
            </mu-paper>
          </mu-flex>

          <mu-flex justify-content="between" align-items="end" wrap="wrap">
            <mu-paper z-depth={1}
              style='margin: 1em auto;'
            >
              <mu-time-picker
                // no-display={!this.display}
                view-type={this.timeViewType|| 'list'}
                time={this.timeData}
                format={this.timeFormat|| 'ampm'}
                landscape={
                  this.isLandscape
                }
              />
              <mu-flex hidden>
                时间类型：
                <mu-radio class="demo-picker-form" v-model={this.timeFormat} value="ampm" label="ampm"></mu-radio>
                <mu-radio class="demo-picker-form" v-model={this.timeFormat} value="24hr" label="24hr"></mu-radio>
              </mu-flex>
            </mu-paper>
          </mu-flex>
        </mu-container>
      )
    }
    , name: 'app-main'
    ,created () {
      window.onresize= ()=> this.isLandscape= window.innerHeight< window.innerWidth
    }
  }
</script>
