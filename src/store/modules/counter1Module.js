export const counter1Module ={
    namespaced: true,
    state: () => ({
        count: 0
    }),
    mutations: {
        increment (state, arg) {
            state.count += arg || 1
        }
    },
    actions: {
        inc(){
            this.commit('counter1/increment')
        },
        incCustom(context, val){
            context.commit('increment', val)
        }
    },
    getters: {
        counterFormated(store) {
            return `current Counter value is ${store.count}`
        }
    }
}
