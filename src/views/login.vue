<template>
  <div
    class="fill-height"
    :style="headerStyle"
  >
    <v-container
      class="fill-height"
    >
      <v-row
        justify="center"
        align="center"
      >
        <v-col
          cols="6"
          style="margin: auto"
        >
          <v-form
            v-model="loginvalid"
            ref="logform"
          >
            <base-material-card>
              <template v-slot:heading>
                <div
                  class="text-center"
                  style="padding: 6px; text-align:center"
                >
                  <h1>Login</h1>
                  <h2>Welcome back to Website</h2>
                </div>
              </template>
              <v-container class="py-0">
                <v-row>
                  <v-col
                    cols="12"
                  >
                    <v-text-field
                      label="username"
                      solo
                      type="text"
                      name="usrename"
                      :rules="[rules.required]"
                      v-model="loginform.username"
                    >
                    </v-text-field>
                    <v-text-field
                      label="Password"
                      solo
                      v-model="loginform.password"
                      :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="passwordShow ? 'text' : 'password'"
                      name="password"
                      hint="At least 3 characters"
                      :rules="[rules.required, rules.min]"
                      counter
                      @click:append="passwordShow = !passwordShow"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-btn
                      :disabled="!loginvalid"
                      block
                      elevation="25"
                      color="pink"
                      @click="loginSubmit"
                    >
                      Login
                    </v-btn>
                   </v-col>
                </v-row>
              </v-container>
            </base-material-card>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    props: {
      header: {
        type: String,
        default: require('@/assets/login.jpg'),
      },
    },
    computed: {
      ...mapGetters([
        'isAuth',
      ]),
      headerStyle () {
        return {
          backgroundSize: '100% 100%',
          backgroundImage: `url(${this.header})`,
          height: '100vh',
        }
      },
    },
    mounted () {
      if (this.isAuth) {
        // location.href = '/dashboard'
        this.$router.push('/dashboard')
      }
    },
    data () {
      return {
        passwordShow: false,
        loginvalid: false,
        loginform: {
          username: '',
          password: '',
        },
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 3 || 'Min 3 characters',
        },
      }
    },
    methods: {
      ...mapActions([
        'login',
      ]),
      loginSubmit () {
        console.log(this.$refs.logform.validate())
        if (this.$refs.logform.validate()) {
          if (this.loginform.username === 'admin' && this.loginform.password === 'admin') {
            this.login().then((res) => {
              console.log(res)
              location.href = './'
            })
          }
        }
      },
    },
  }
</script>
