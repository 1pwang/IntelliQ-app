<template>
  <div>
    <div>
      <HomePage />
    </div>
    <div class="sessions-section">
      <button @click="toggleModal" type="button" class="rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20">
        Add Subject card
      </button>
      <SubjectCard :cards="cards" />
    </div>

    <CardModal v-if="showModal" @close="toggleModal" @submitData="handleDataSubmit" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import HomePage from "@/components/HomePage.vue";
import SubjectCard from "@/components/SubjectCard.vue";
import CardModal from "@/components/CardModal.vue";

const showModal = ref(false);
const toggleModal = () => {
  showModal.value = !showModal.value;
};

const cards = ref([]);

const handleDataSubmit = (data) => {
  const newCard = { ...data, id: Date.now() };
  cards.value.push(newCard);
};
</script>

<style scoped>
.sessions-section {
  margin-left: 22%;
  margin-top: 2%;
  margin-right: 2%;
}
</style>
