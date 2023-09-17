import styled from "styled-components";

//Стили в styled-components тоже умеем)
export const BodyCar = styled.div `
  height: 100%;
  width: 100%;
  
  .banner {
    height: 100px;
    width: 100%;
    object-fit: cover;
  }
`

export const InfoCar = styled.div `
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 21px;
  }
`