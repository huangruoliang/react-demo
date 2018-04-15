export function getRedirectPath({type,avator}) {
    // user.
    console.log(type)
    let url = type === 'boss' ? '/boss' : '/genius'
    if(!avator) {
        url += 'info'
    }
    return url;
}