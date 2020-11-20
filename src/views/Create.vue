<template>
  <div class="create">
    <teleport to="#headingTeleport">
      <h1>Create</h1>
    </teleport>
    <form class="form" @submit="createCard">
      <div class="left-col">
      <div class="label-top">
      <label for="Name">Name</label>
      <input v-model="name" type="text" id="name" placeholder="Name" required>
      </div>

      <div class="label-top">
      <label for="Name">Image file</label>
      <input
        class="input-file"
        type="file"
        ref="fileInput"
        accept="image/*"
        @change="imageUpdate"
        required
      />
      </div>
      <img class="profil-image" v-if="this.image" :src="this.image" alt="Default Image">
      </div>

      <div class="right-col">

      <div class="personality-traits">
      <div class="selected-trait">
        <label for="conscientiousness">Conscientiousness</label>
        <select class="select-trait" v-model="conscientiousness" name="Conscientiousness" id="conscientiousness" required>
          <option value="impulsive">impulsive</option>
          <option value="disorganized ">disorganized </option>
          <option value="disciplined">disciplined</option>
          <option value="careful">careful</option>
        </select>
      </div>
    <div class="selected-trait">
      <label for="agreeableness">Agreeableness</label>
      <select class="select-trait" v-model="agreeableness" name="Agreeableness" id="agreeableness" required>
        <option value="suspicious">suspicious</option>
        <option value="uncooperative">uncooperative</option>
        <option value="trusting">trusting</option>
        <option value="helpful">helpful</option>
      </select>

    </div>

      <div class="selected-trait">
        <label for="Neuroticism">Neuroticism</label>
        <select class="select-trait" v-model="neuroticism" name="Neuroticism" id="neuroticism" required>
          <option value="calm">calm</option>
          <option value="confident">confident</option>
          <option value="anxious">anxious</option>
          <option value="pessimistic">pessimistic</option>
        </select>
      </div>

      <div class="selected-trait">
        <label for="extraversion">Extraversion</label>
        <select class="select-trait" v-model="extraversion" name="Extraversion" id="extraversion" required>
          <option value="reserved">reserved</option>
          <option value="thoughtful">thoughtful  </option>
          <option value="sociable">sociable</option>
          <option value="fun-loving">fun-loving</option>
        </select>
      </div>

      </div>
      <input class="form__create" type="submit" value="Create Personality">
      </div>
    </form>
  </div>
</template>

<script>
import { personsRef, db } from '../firebase'
console.log(personsRef, db);

export default {
	name: 'Card',
	props: {
		title: {
			type: String,
			required: false
		}
  },
  // setup() {
  //   this.changeHeading('Create')
  // },
  data() {
    // console.log(this.$props.title);
    // this.$props.title.value = 'Create'
    

    const name = ''
    const image = ''
    const conscientiousness = ''
    const agreeableness = ''
    const neuroticism = ''
    const extraversion = ''
    
    return {
      name,
      image,
      conscientiousness,
      agreeableness,
      neuroticism,
      extraversion
    }
  },
  methods: {
    createCard(e) {
      e.preventDefault()

        // Sendt data to firebase
      personsRef.add({
        name: this.name,
        image: this.image,
        traits: [
          this.conscientiousness,
          this.agreeableness,
          this.neuroticism,
          this.extraversion 
        ]
      })

      e.target.reset()
    },
    imageUpdate(e) {
      const imageFile = this.$refs.fileInput.files[0];
      const fileReader = new FileReader();

      fileReader.onload = event => {
        console.log(this.image, event);
        // console.log(event.target.result);
        this.image = event.target.result;
        
      }

      fileReader.readAsDataURL(imageFile);
    },
    changeHeading(heading){
      this.$emit('change-heading', heading)
    }
  }

}

</script>

<style scoped>

.create {
  max-width: 1000px;
  margin: 0 auto;
}

.form {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.right-col,
.left-col,
.personality-traits {
  display: flex;
  flex-direction: column;
  /* width: clamp(200px, 50%, 60vw); */
}

.selected-trait,
.label-top {
  display: inline-flex;
  flex-flow: column nowrap;
  margin: .5rem 1rem .5rem 1rem;
  text-align: left;
}

.select-trait {
  font-size: 1rem;
  padding: .3em .5em;
  margin-top: 0.2em;
}

.form__create {
  background: #42b983;
  color: black;
  border: none;
  padding: .8em;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 2rem;
  text-transform: capitalize;
  box-sizing: border-box;
}

.input-file {
  background: #f2f2f2;
}

.profil-image {
  box-sizing: border-box;
  display: block;
  width: 100%;
  object-fit: contain;
  padding: 1rem;
}


</style>
