import { NavigationAction } from '@react-navigation'

let Navigator

export const setNavigator = nav =>{
    nagivator = nav
}

export const navifate = (routeName,params) =>{
    navigator.dispatch(
        NavigationAction.navigate({
            routeName,
            params
        })
    )

}