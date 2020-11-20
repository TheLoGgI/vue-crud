
<template>
    <div class="card">
        <h2 class="card__heading" >{{person.name}}</h2>
        <img class="card__image" :src="person.image" alt="World of tatooine">
		<ul class="card__list">
			<li v-for="item of person.traits" :key="item" class="card__tag">{{item}}</li>
		</ul>
		<button class="edit-btn btn--active" @click="editStyle">Edit Name</button>
        <!-- <p class="card__paragrath">A harsh desert world orbiting twin suns in the galaxy’s Outer Rim, Tatooine is a lawless place ruled by Hutt gangsters. Many settlers scratch out a living on moisture farms, while spaceport cities such as Mos Eisley and Mos Espa serve as home base for smugglers</p> -->
    </div>
</template>

<script>
import { personsRef } from '../firebase'

export default {
	name: 'Card',
	props: {
		person: {
			type: Object,
			required: true
		}
	},
	methods: {
		editStyle(e) {
			const parrent = e.currentTarget.parentNode
			parrent.classList.toggle('changeable')
			const childrenList = parrent.children

			if (parrent.classList.contains('changeable')) {
				childrenList[0].setAttribute("contenteditable", "true")
			} else {
				childrenList[0].setAttribute("contenteditable", "false")
			}

			personsRef.doc(this.$props.person.id).update({
				name: childrenList[0].textContent
			})


		}
	}

}

</script>

<style>
:root {
--clr-card: #05223D;
}

.changeable {
	transform: scale(2) translate(50%, 10%);
	position: absolute;
	filter: saturate(150%);
	transition: transform .4s ease-in;
}

.card {
	width: clamp(350px, 30vw, 100%);
	background: var(--clr-card);
	border-radius: 3px;
	color: white;
	font-family: "Avenir std", Helvetica, Arial, sans-serif;
	transition: transform .2s ease-in;
	animation: fade-in .6s ease;
}

.card__heading {
	font-size: 2rem;
	margin:0;
	padding: .5em 0;
    /* margin-bottom: .3em; */
}

.card__image {
    width: 100%;
	max-height: 350px;
	object-fit: cover;
	background: #3c546d;
    /* border-radius: var(--round); */
}

.card__list{
	display: flex;
	justify-content: space-evenly;
	margin: 1em 0;
	padding: 0;
}
.card__tag {
	text-align: left;
	text-transform: capitalize;
	list-style-type: none;
	background: #3c546d;
	padding: .2em;
	border-radius: 3px;
}

.card__paragrath {
	padding: 1em;
	font-weight: normal;
	text-align: left;
}

.edit-btn {
	background: #42b983;
	color: black;
	border: none;
	padding: .4em .6em;
	font-size: 1rem;
	font-weight: bold;
	margin-bottom: 1rem;
	text-transform: capitalize;
	outline: none;
}

.btn--active:active {
	background-color: #9C27B0;
	color: white;
}

@keyframes fade-in {
	from {
		perspective: 1000px;
		transform: translateY(30px) skew(40deg);
		opacity: 0;
	}
	to {
		transform: translateY(0px) skew(0deg);
		opacity: 1;
	}
}

</style>
