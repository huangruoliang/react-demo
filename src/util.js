export function getRedirectPath({type,avator}) {
    // user.
    let url = type === 'boss' ? '/boss' : '/genius'
    if(!avator) {
        url += 'info'
    }
    return url;
}