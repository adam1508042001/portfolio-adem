<template>
    <section class="text-white mt-20" id="contact">
      <h2 class="text-4xl font-bold text-white text-left mb-4 px-4 xl:pl-16">Let's connect</h2>
      <div class="grid md:grid-cols-2 gap-4 relative px-4 xl:px-16 mt-8" data-aos="zoom-in-up">
        <div>
          <p class="text-[#adb7be]">Je serai ravi d'échanger avec vous, contactez-moi!</p>
          <div class="col-lg-4 col-md-4 mb-lg-0 mt-5">
            <div class="flex mb-10 items-center">
              <div class="p-2" style="background: #111a3e; width: 50px; height: 46px; display: flex; justify-content: center; border-radius: 50%; overflow: hidden; border: 1px solid #111a3e; backdrop-filter: blur(9px); -webkit-backdrop-filter: blur(9px);">
                <img src="https://img.icons8.com/metro/50/ffffff/new-post.png" alt="new-post" class="w-6">
              </div>
              <div class="ml-5 text-white">
                <h4>Email</h4>
                <p>afroune.2001.mohamed@outlook.com</p>
              </div>
            </div>
            <div class="flex mb-10 items-center">
              <div class="p-2" style="background: #111a3e; width: 50px; height: 46px; display: flex; justify-content: center; border-radius: 50%; overflow: hidden; border: 1px solid #111a3e; backdrop-filter: blur(9px); -webkit-backdrop-filter: blur(9px);">
                <img src="https://img.icons8.com/ios-filled/50/ffffff/phone.png" alt="phone" class="w-6">
              </div>
              <div class="ml-5 text-white">
                <h4>Téléphone</h4>
                <p>+33 6 04 15 87 72</p>
                <button @click="copyToClipboard('+33 6 04 15 87 72')" class="bg-primary text-white p-2 rounded mt-2">Copier</button>
              </div>
            </div>
            <div class="flex mb-10 items-center">
              <div class="p-2" style="background: #111a3e; width: 50px; height: 46px; display: flex; justify-content: center; border-radius: 50%; overflow: hidden; border: 1px solid #111a3e; backdrop-filter: blur(9px); -webkit-backdrop-filter: blur(9px);">
                <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="linkedin" class="w-6">
              </div>
              <div class="ml-5 text-white">
                <a href="https://www.linkedin.com/in/mohamed-adam-afroune/" target="_blank">
                  <h4>LinkedIn</h4>
                  <p>Mohamed Adam AFROUNE</p>
                </a>
              </div>
            </div>
          </div>
        </div>
    









        <!-- ########################################################### -->
        <!-- Formulaire de contact -->
        <div style="background: #111a3e; width: 100%; height: 100%; border-radius: 20px; overflow: hidden; border: 1px solid #111a3e; backdrop-filter: blur(9px); -webkit-backdrop-filter: blur(9px); ">
          <form
           @submit="check"
            class="flex flex-col p-8"
             data-aos="zoom-in-up"
             >

            <!-- afficher  des erreurs -->

            <div v-if="errors.length" class="text-red-500 mb-4">
              <b>Veuillez corriger les erreurs suivantes :</b>
              <ul>

                <!-- pour rendre la liste des elements adéquats -->
                <li v-for="error in errors" :key="error">{{ error }}</li>
              </ul>
            </div>
    



            <div class="mb-6">
              <label for="email" class="text-white block mb-2 text-sm font-medium">Email</label>
              <input type="email" id="email" class="bg-[#111827] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="email@gmail.com" v-model="email">

              <!-- v-if    -->
              <p v-if="!email" class="text-white text-sm">Veuillez renseigner votre email.</p>
            </div>
    
            <div class="mb-6">
              <label for="subject" class="text-white block mb-2 text-sm font-medium">Sujet</label>
              <input type="text" id="subject" class="bg-[#111827] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="Sujet" v-model="subject">
              <p v-if="!subject" class="text-white text-sm">Veuillez renseigner votre sujet.</p>
            </div>
    
            <div class="mb-6">
              <label for="message" class="text-white block mb-2 text-sm font-medium">Message</label>
              <textarea id="message" class="bg-[#111827] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="Votre message ici ..." v-model="message"></textarea>
              <p v-if="!message" class="text-white text-sm">Veuillez renseigner votre message.</p>
            </div>
    


            <!--  le type submit  -->
            <button type="submit" class="z-1 w-full px-6 py-3 rounded-full text-white bg-primary border-2 border-transparent ">Envoyer le message</button>
          </form>
        </div>
      </div>
    
      <!-- Notification de succès -->
      <div v-if="formNotification" class="fixed bottom-4 right-[100px] bg-green-600 bg-opacity-60 text-white px-4 py-2 rounded shadow-md transition-opacity duration-300 flex items-center justify-center">
        Formulaire envoyé avec succès!
      </div>
  
      <!-- Notification de copie -->
      <div v-if="numberNotification"  class="fixed bottom-4 right-[100px] bg-green-600 bg-opacity-60 text-white px-4 py-2 rounded shadow-md transition-opacity duration-300 flex items-center justify-center">
        Numéro copié dans le presse-papiers!
      </div>
    </section>
  </template>
    
  <script>
  import emailjs from "emailjs-com";
  
  export default {
    data() {
      return {
        email: "",
        subject: "",
        message: "",
        errors: [],
        formNotification: false,
        numberNotification: false, 
      };
    },
    methods: {
      check(e) {
        e.preventDefault();
    
        // Réinitialiser les erreurs
        this.errors = [];
    
        // Validation des champs
        if (!this.email) this.errors.push("Veuillez renseigner votre email.");
        if (!this.subject) this.errors.push("Veuillez renseigner votre sujet.");
        if (!this.message) this.errors.push("Veuillez renseigner votre message.");
    
        if (this.errors.length === 0) {
          const templateParams = {
            from_email: this.email,
            subject: this.subject,
            message: this.message,
          };
    
          // Envoi de l'email avec EmailJS
          emailjs
            .send("service_eusb70p", "template_hs6apob", templateParams, "y0QevdbPdG5_8bM7m")
            .then(
              (response) => {
                console.log("Email envoyé avec succès !", response);
                console.log(
                 this.email,
                     this.subject,
                  this.message
                );
                
                this.formNotification = true;
    
                // Réinitialiser le formulaire
                this.email = "";
                this.subject = "";
                this.message = "";
    
                setTimeout(() => {
                  this.formNotification = false;
                }, 1500);
              },
              (error) => {
                console.error("Erreur lors de l'envoi de l'email :", error);
              }
            );
        }
      },
      copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(
          () => {
            console.log("Numéro copié :", text);
            this.numberNotification = true;
  
            setTimeout(() => {
              this.numberNotification = false;
            }, 2000);
          },
          (err) => {
            console.error("Erreur lors de la copie :", err);
          }
        );
      },
    },
  };
  </script>
  