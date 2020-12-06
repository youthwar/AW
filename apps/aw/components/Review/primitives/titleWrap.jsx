import styled from "styled-components";

export default styled.div({
  width: '20%',
  position: 'fixed',
  top: '70px',
  borderBottom: '2px solid #000',
  paddingBottom: '1em',
  h1: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: '30px',
    width: '60%'
  },
  h2: {
    textTransform: 'uppercase',
    fontSize: '12px',
    fontWeight: 'bold'
  },
  ['@media screen and (max-width: 1175px)']: {
    width: '100%',
    position: 'relative',
    top: '10px',
    marginBottom: '70px'
  } 
});