import {createStore} from "vuex";

// import mutations from "@/store/mutations/mutations";
// import actions from "@/store/actions/actions";
// import getters from "@/store/getters/getters";

const store = createStore({
    state(){
        return{
            isMobile: false,
            isDesktop: true,
        }

    },

})

export default store
