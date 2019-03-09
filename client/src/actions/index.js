export const SIGN_IN = 'sign_in';
export const SIGN_OUT = 'sign_out';

export const SignIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const SignOut = () => {
    return {
        type: SIGN_OUT
    }
}