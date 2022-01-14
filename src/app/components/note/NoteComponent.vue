<template>
  <div class="note-component">
    <h1>{{ note.title }}</h1>
    <h3>{{ note.name }}</h3>
    <p>{{ note.body }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Note } from '@/app/store/usecase/note/model/Note'

@Component
export default class NoteComponent extends Vue {
  @Prop({ required: true }) note!: Note
}

</script>

<style scoped>

</style>
