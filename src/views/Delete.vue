<template>
  <div class="delete">
    <teleport to="#headingTeleport">
      <h1>Delete</h1>
    </teleport>
    <ul class="delete__list">
      <li class="delete__item" v-for="person of persons" :key="person.id">
        <p class="item__name">{{person.name}}</p>
        <p class="item-delete btn--active" @click="removePerson(person.id)">X</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue'
import { personsRef } from '../firebase'

export default {
  name: 'Home',
  setup() {
    const persons = ref([])

    personsRef.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        const docData = doc.data()
        docData.id = doc.id
        persons.value.push(docData)
        });
    });

    return {
      persons
    }
  },
  methods: {
    removePerson(id) {
      console.log(id);
      this.persons = this.persons.filter(person => {
        if (person.id !== id) return true
        return false
      })
      personsRef.doc(id).delete()
      
    }
  }
}
</script>


<style scoped>
  .delete__item {
    width: 100%;
    box-sizing: border-box;
    background: #f2f2f2;
    border: gray;
    border-radius: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 3rem;
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  .item__name {
    color: #42b983;
  }

  .item-delete {
    width: 15px;
    height: 15px;
    cursor: pointer;
    background-color: #42b983;
    color: white;
    padding: .5rem;
    border-radius: 50%;
    margin: 0;
    font-size: 1rem;
  }

  .item-delete:hover {
    color: black;
  }
</style>

