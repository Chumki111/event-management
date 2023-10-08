import { createContext } from "react";
import PropTypes from 'prop-types';
export const AuthContext = createContext(null)
const UserContext = ({children}) => {

    const authInfo ={}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
UserContext.propTypes ={
    children :PropTypes.node
}
export default UserContext;