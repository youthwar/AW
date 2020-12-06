import styled from "styled-components";

export default styled.a({
  fontFamily: "'Abril Fatface', cursive",
  fontSize: '1.5em',
  color: '#000',
  position:'absolute',
  left: 'calc(50% - 45px)',
  //right: '30px',
  top: '15px',
  zIndex: 1,
  '&:hover': {
    textDecoration: 'none',
    color: 'blue'
  },  
  ['@media screen and (max-width: 1175px)']: {
    fontSize: '1.5em'
  } 
});