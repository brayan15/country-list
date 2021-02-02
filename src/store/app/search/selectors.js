//@flow
import type { AppStateT } from '../types'

export const getSearchTerm = (state: AppStateT) => state.search.searchTerm

export const getFilterTerm = (state: AppStateT) => state.search.filterTerm
