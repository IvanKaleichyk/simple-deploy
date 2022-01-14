<template>
  <div class="note-list-component">
    <div class="list-notes list" v-for="note in notes" :key="note.id">
      <NoteComponent :note="note"></NoteComponent>
    </div>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import NoteComponent from './NoteComponent.vue'
import { Action, Getter, State } from 'vuex-class'
import { NoteState } from '@/app/store/usecase/note/NotesStore'
import { Note } from '@/app/store/usecase/note/model/Note'
import Vue from 'vue'

@Component({
  components: { NoteComponent }
})
export default class NoteListComponent extends Vue {
  @State('notesState') state!: NoteState
  @Action('fetchNote') fetchNote!: any
  @Getter('note') notes!: Array<Note>
  @Getter('isLoading') isLoading!: boolean

  mounted (): void {
    this.fetchNote()
  }
}
</script>

<style scoped>

</style>
