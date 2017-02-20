import React from 'react';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  user-select: none;
`;

const Container = styled.div`
  align-self: center;
  margin: 0 auto;
  width: 70px;
  display: block;
  display: flex;
  padding: 20px 0;
`;

const scaleInOut = keyframes`
  0%, 80%, 100% {
    transform: scale(0.0);
  } 40% {
    transform: scale(1.0);
  }
`;

const Circle = styled.div`
  width: 18px;
  height: 18px;
  margin-left: 5px;

  border-radius: 100%;
  display: inline-block;
  animation: ${scaleInOut} 1.4s infinite ease-in-out;
  /* Prevent first frame from flickering when animation starts */
  animation-fill-mode: both;
  background-color: grey;
`;

const Circle1 = styled(Circle)`
  animation-delay: -0.32s;
`;

const Circle2 = styled(Circle)`
  animation-delay: -0.16s;
`;


/**
 * Loader Component
 */
const Loader = () => (
  <Wrapper>
    <Container>
      <Circle1 />
      <Circle2 />
      <Circle />
    </Container>
  </Wrapper>
);


export default Loader;
