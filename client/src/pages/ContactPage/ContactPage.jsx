import {React, useContext} from "react";
import {AuthContext} from '../../utils/context/Auth.context'
import ContactUs from './ContactUs'
import Chat from './Chat'

const ContactPage = () => {
  
  const {isAuthenticated} = useContext(AuthContext);

  return (
    <>
    {!isAuthenticated ? <ContactUs/> : <Chat/>}
    </>
  );
};

export default ContactPage;
