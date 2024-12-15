export default{
    // setAuth(context){},
    login(context){
        context.commit('setAuth', {isAuth: true});
    },
    logout(context){
        context.commit('setAuth', {isAuth: false});
    },
};