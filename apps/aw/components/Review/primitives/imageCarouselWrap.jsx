import styled from "styled-components";

export default styled.div({
  width: '50%',
  margin: '0 auto 50px auto',
  background: '#565656',
  ['@media screen and (max-width: 1175px)']: {
    width: '100%'
  }
});