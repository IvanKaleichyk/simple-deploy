import { RootState } from '@/app/store/base/RootState'
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import { Note } from '@/app/store/usecase/note/model/Note'

export interface NoteState extends RootState {
  notes: Array<Note> | undefined
}

const state: NoteState = {
  notes: undefined,
  isLoading: false
}

const actions: ActionTree<NoteState, RootState> = {
  fetchNote (): any {
    this.commit('loading')
    const notes = [{
      id: 1,
      title: 'Note Hello',
      body: 'First Note',
      name: 'Evan',
      isPrivate: false
    }]
    this.commit('loaded', notes)
  }
}

const mutations: MutationTree<NoteState> = {
  loaded (state: NoteState, note: Array<Note>) {
    state.notes = note
    state.isLoading = false
  },
  loading (state: NoteState) {
    state.isLoading = true
  }
}

const getters: GetterTree<NoteState, RootState> = {
  isLoading (state: NoteState): boolean {
    return state.isLoading
  },
  note (state: NoteState): Array<Note> | undefined {
    return state.notes
  }
}

export const noteState: Module<NoteState, RootState> = {
  state,
  getters,
  actions,
  mutations
}
