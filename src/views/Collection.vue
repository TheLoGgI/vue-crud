<template>
  <div class="home">
    <teleport to="#headingTeleport" >
      <h1>Collection</h1>
    </teleport>
    <div class="card-section">
    <Card v-for="person of persons" :key="person" :person="person"/>
    </div>
  </div>

</template>

<script>
import { personsRef, db } from '../firebase'
import Card from "@/components/card.vue"
import { ref } from 'vue';


export default {
  name: 'Home',
  components: {
    Card
  },
  props: {
		title: {
			type: String,
			required: false
		}
	},
  setup() {
    const persons = ref([])

    // Snapshot function
    personsRef.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        const docData = doc.data()
        docData.id = doc.id
        persons.value.push(docData)
        // console.log(docData);
    });
    });
    
    return {
      persons
    }
  }
}

</script>

<style scoped>
.card-section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 2em;
  max-width: 1200px;
  margin: 0 auto;
}

[v-cloak] {
  display: none;
}

</style>