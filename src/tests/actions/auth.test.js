import { login, logout } from '../../actions/auth';

test('Should setup login action', () => {
    const uid = 'werqwerwqer';
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('Should setup logout action', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});

