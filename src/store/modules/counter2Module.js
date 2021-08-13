export const counter2Module ={
    namespaced: true,
    state: () => ({
        count: 0
    }),
    mutations: {
        increment (state, arg) {
            // state.count = arg ? state.count + arg : this.state.count +1
            state.count += arg || 1
        }
    },
    actions: {
        inc(){
            this.commit('increment')
        },
        incCustom(context, val){
            console.log(val)
            context.commit('increment', val)
        }
    },
    getters: {
        counterFormated(store) {
            return `current Counter value is ${store.count}`
        }
    }
}
