import { createGlobalStyle } from "styled-components";

export default createGlobalStyle({
  'html, body': {
    height: '100%',
    margin: '0',
  },

  body : {
    fontSize: '16px',
    background: 'whitesmoke',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '25px',
    letterSpacing: '1px',
    wordSpacing: '-1px',
    lineHeight: '30px',
    color: '#222'
  },

  '#wrap': {
    minHeight: '100%',

    /* Equal to height of footer */
    /* But also accounting for potential margin-bottom of last child */
    marginBottom: '-50px',
  },

  '.push': {
    height: '100px'
  }

});
