
<!-- <template lang='pug'>
  mu-form
</template> -->

<script>
  const _formData= {
    uid: ''
    ,psw: ''
  }
  function copyObject (obj) {
    return Object.assign({}, obj)
  }
  export default {
    data () {
      return {
        formData: copyObject(_formData)
      }
    }
    ,methods: {
      onInput (key, val) {
        console.info({val})
        this.formData[key]= val
      }
      ,reset () {
        this.formData= copyObject(_formData)
      }
      ,submit () {
        console.info(this.formData, _formData)
      }
    }
    ,render () {
      return (
        <mu-row class='login-page' gutter>
          <mu-col class=''
            span='3'
            xs='12'
          />
          <mu-col class=''
            span='12'
            md='6'
            style='text-align: center;'
          >
            <mu-form class=''
              model={this.formData}
              onKeyup={
                (eve)=> {
                  if(event.which=== 13|| event.keyCode=== 13){
                    return this.submit()
                  }
                }
              }
            >
              <mu-form-item/>
              <div mu-form-item class=''
                // label="用户"
                // prop="uid"
              >
                <mu-text-field
                  value={this.formData.uid}
                  // prop="uid"
                  label="用户"
                  label-float
                  help-text="用户名为6-12长度的字符"
                  icon="account_circle"
                  onKeyup={
                    ()=> this.onInput('uid', event.target.value)
                  }
                />
              </div>
              <div mu-form-item class=''
                // label="密码"
                // prop='psw'
                rules={
                  []
                }
              >
                <mu-text-field
                  value={this.formData.psw}
                  // prop='psw'
                  label="密码"
                  label-float
                  error-text={
                    this.formData.psw=== ''
                      ? '请输入密码'
                      : ''
                  }
                  icon="locked"
                  type='password'
                  onKeyup={
                    ()=> this.onInput('psw', event.target.value)
                  }
                />
              </div>
              <mu-row gutter>
                <mu-col md='1' span='3'/>
                <mu-col md='4' span='6'>
                  <mu-button class=''
                    full-width
                    color="primary"
                    onClick={ this.submit }
                    style='margin-top: 1em;'
                  >提交</mu-button>
                </mu-col>
                <mu-col md='1' span='3'/>
                <mu-col md='1' span='3'/>
                <mu-col md='4' span='6'>
                  <mu-button class=''
                    full-width
                    onClick={ this.reset }
                    style='margin-top: 1em;'
                  >重置</mu-button>
                </mu-col>
                <mu-col md='1' span='3'/>
              </mu-row>
            </mu-form>
          </mu-col>
        </mu-row>
      )
    }
    ,mounted () {
      window.comp= this
    }
  }
</script>

<style>
</style>
