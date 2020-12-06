import styled from "styled-components";

export default styled.a({
  width: '18%',
  display: 'inline-block',
  margin: '0 16px 16px 16px',
  position: 'relative',
  ['@media screen and (max-width: 1175px)']: {
    width: '100%'
  } 
});