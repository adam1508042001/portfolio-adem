<template>
    <div class="bg-[#111827] min-h-screen flex justify-center items-center">
      <div class="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 class="text-2xl font-bold mb-4">Connexion</h1>
        <form @submit.prevent="handleLogin">
          <div class="mb-4">
            <label for="email" class="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              required
              class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-gray-700">Mot de passe</label>
            <input
              type="password"
              id="password"
              v-model="password"
              required
              class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const email = ref('');
  const password = ref('');
  const router = useRouter();
  
  function handleLogin() {
    console.log('Email:', email.value, 'Password:', password.value);
    // Ajoute une logique pour vérifier les identifiants utilisateur ici
    router.push('/'); // Redirige vers la page d'accueil après connexion
  }
  </script>
  
  <style>
  /* Ajoute des styles personnalisés ici si nécessaire */
  </style>
  