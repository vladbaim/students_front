import {Reducer} from 'redux'
import {Action} from '../model/index'

export default <S>(initialState: S, handlers: any): Reducer<S> => {
	const r = (state: S = initialState, action: Action): S => {
		if (handlers.hasOwnProperty(action.type)) {
			return handlers[action.type](state, action)
		} else {
			return state
		}
	}

	return r as Reducer<S>
}
