import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios,axios)

const state={
	keyword:"this is a simple keyowrd for testimonal",
	nextKeyword:"this is another keyword",
	finalKeyword:"this is final keyword",
	names:"",
	password:""
}

const getters={
	//this section contains only methods
	getThis:function(state,{data}){
		return state.names		
	} ,
	getAnother:function(state,{data}){
		return state.password
	}
}

const mutations={				
	//to change the state
	//to update the state
	changeIt(state){
		return state.nextKeyword="this is updated keyword"
	},
	changeName(state,{data}){
		state.names=data
		
	},
	changePassword(state,{data}){
		state.password=data
	}
}

const actions={
	//to run before mutations

	FixedChange(texts){
		texts.commit('changeIt')
	},
	AnotherChange(changes){
		changes.commit('changeName')
	},
	callingMut({commit}){
		axios.get('http://localhost:3000/names').
		then(function(response){
			console.log(response)
		commit('changeName',{data:response.data.name})
		}).catch(
			(error)=>{
				console.log(error)
			}
			)
	},
	callingPassword({commit}){
		axios.get('http://localhost:3000/passwords').
		then(function(response){
			console.log(response)
		commit('changePassword',{data:response.data.password})
		}).catch(
			(error)=>{
				console.log(error)
			}
		)	
	}
}
export default new Vuex.Store({
	state,getters,mutations,actions
})		