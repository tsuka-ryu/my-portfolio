import React, { useEffect, useRef } from 'react';
import './GetInTouch.css';

import window from '../../../images/TopPage/getintouchsvg/window.svg';
import twitter from '../../../images/twitter.svg';
import github from '../../../images/github.svg';
import slideAnimationInit from '../../../app/slideAnimationInit';
import { opacityAnimation, slideTextAnimation } from '../../../app/animations';

export default function GetInTouch() {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    let tl = slideAnimationInit({ trigger: '.GetInTouch' });
    slideTextAnimation(element, tl, '.GetInTouch__text__title', '');
    slideTextAnimation(element, tl, '.GetInTouch__mail');
    slideTextAnimation(element, tl, '.GetInTouch__wantedly');
    slideTextAnimation(element, tl, '.GetInTouch__twitter');
    slideTextAnimation(element, tl, '.GetInTouch__github', '-=1');
    opacityAnimation(element, tl, '.GetInTouch__window > img');
  });
  return (
    <div id='getintouch' className='GetInTouch container' ref={ref}>
      <div className='GetInTouch__Inner container__Inner'>
        <div className='GetInTouch__texts container__texts'>
          <div className='GetInTouch__text__title container__text__title'>
            <h1>Get In Touch</h1>
          </div>
          <div className='GetInTouch__text__link'>
            <div className='GetInTouch__text__linkitem'>
              <a href='mailto:drgon8otsuka@gmail.com' alt=''>
                <p className='GetInTouch__mail'>drgon8otsuka@gmail.com</p>
              </a>
            </div>
            <div className='GetInTouch__text__linkitem'>
              <a
                href='https://www.wantedly.com/id/otsuka_ryutaro'
                alt=''
                target='_blank'
                rel='noreferrer noopener'
              >
                <p className='GetInTouch__wantedly'>Wantedly</p>
              </a>
            </div>
            <div className='GetInTouch__text__linkitem'>
              <a
                href='https://twitter.com/tsuka_ryu'
                target='_blank'
                rel='noreferrer noopener'
              >
                <img className='GetInTouch__twitter' src={twitter} alt='' />
              </a>
              <a
                href='https://github.com/tsuka-ryu'
                target='_blank'
                rel='noreferrer noopener'
              >
                <img className='GetInTouch__github' src={github} alt='' />
              </a>
            </div>
            <div className='GetInTouch__text__thanks'>
              <h1>Thank you for visiting!</h1>
            </div>
          </div>
        </div>
        <div className='GetInTouch__img container__img'>
          <div className='GetInTouch__window'>
            <img src={window} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}
