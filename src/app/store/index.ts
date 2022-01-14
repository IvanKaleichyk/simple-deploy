import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from '@/app/store/base/RootState'
import { noteState } from '@/app/store/usecase/note/NotesStore'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  modules: {
    noteState
  }
}

export default new Vuex.Store(store)
