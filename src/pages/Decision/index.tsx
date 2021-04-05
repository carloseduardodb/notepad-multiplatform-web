import React from 'react';
import { Content, ContentAnimation } from './styles';
import Lottie from 'react-lottie';
import animationAtom from '../../animations/atomic.json';
import { useSpring, animated } from 'react-spring';

const Decision = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationAtom,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <animated.div style={props}>
      <Content>
        <ContentAnimation>
          <Lottie options={defaultOptions} height={200} width={200} />
        </ContentAnimation>
        <h1>Carregando...</h1>
      </Content>
    </animated.div>
  );
};

export default Decision;
