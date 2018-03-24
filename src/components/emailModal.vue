<template>
  <div id='emailModal'>
    <div class="close-wrapper"><span @click="closeModal" ><i class="far fa-times"></i></span></div>
    <p>
      I'd love to hear from you! Feel free to email me about employment opportunities, the Vue Meetup, or just to grab coffee and talk. I should get back to you within a day or two.
    </p>
    <form v-if="!modalSuccess">
      <label>Your name:</label><br />
      <input v-model="email.name"/><br />
      <label>Your email:</label><br />
      <input v-model="email.email"/><br />
      <label>Your message:</label><br />
      <p class="message-area" v-model="email.message" contentEditable></p>
      <button @click.prevent="sendEmail">{{buttonText}}</button>
    </form>
    <h5 v-if="modalSuccess">{{resolveText}}</h5>
  </div>
</template>

<script>
// import emailjs from 'emailjs-com';

export default {
  name: 'emailModal',
  props: {
    closeModal: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      email: {
        message: '',
        email: '',
        name: '',
      },
      buttonText: 'Send',
      modalSuccess: false,
      resolveText: 'Message sent! Thank you very much.',
    };
  },

  methods: {
    sendEmail() {
      this.buttonText = 'Sending...';
      // eslint-disable-next-line
      emailjs.send('gmail', 'marlena_portfolio', this.email)
      .then(() => {
        this.modalSuccess = true;
        this.feedbackText = '';
        this.buttonText = 'Send';
      })
       .catch((err) => {
         // eslint-disable-next-line
         console.error("FAILED. error=", err)
         this.resolveText = 'Feedback form failed. Please email me at baker.marlena@gmail.com';
         this.modalSuccess = true;
       });
    },
  },
};
</script>
<style scoped>
  #emailModal {
    position: fixed;
    top: 10%;
    left: 25%;
    width: 50%;
    border: 1px solid #b14280;
    border-radius: 2px;
    background-color: white;
    padding: 20px;
    display: flex;
    flex-flow: column;
  }
  .close-wrapper {
    text-align: right;
  }
  form {
    align-self: center;
    width: 75%;
  }
  .message-area {
    border: 1px solid darkgrey;
    height: 100px;
    border-radius: 2px;
    overflow:hidden;
  }
  button {
    width:100%;
    align-self: center;
    background-color: #b14280;
    color: white;
  }
  label {
    margin-top: 5px;
  }
  iframe {
    width: 100%;
  }
</style>
