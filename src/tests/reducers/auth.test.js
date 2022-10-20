import authReducer from '../../reducers/auth';

test('should set user id on login', () => {
    const uid = 'twertwertwert'
    const action = {
        type: 'LOGIN',
        uid
    };
    const state = authReducer(undefined, action);
    expect(state).toEqual({ uid });
});

test('should set empty state on logout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({ uid: 'deletethis' }, action);
    expect(state).toEqual({});
});