<template>
  <div class="note-screen screen">
    <NoteListComponent></NoteListComponent>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import NoteListComponent from '@/app/components/note/NotesListComponent.vue'

@Component({
  components: { NoteListComponent }
})
export default class NotesScreen extends Vue {

}
</script>

<style scoped>

</style>
