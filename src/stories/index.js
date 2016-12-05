import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';

import Nineteen from './Nineteen';
import Eighteen from './Eighteen';
import Sixteen from './Sixteen';
import Fifteen from './Fifteen';
import Thirteen from './Thirteen';
import Fourteen from './Fourteen';
import Eleven from './Eleven';
import Ten from './Ten';
import Nine from './Nine';
import Eight from './Eight';
import Seven from './Seven';
import OneToSix from './OneToSix';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));

storiesOf('OneToSix', module)
  .add('Hello World', () => (
    <OneToSix showApp={linkTo('OneToSix')}/>
  ));

storiesOf('Seven', module)
  .add('Nested stateless components', () => (
    <Seven showApp={linkTo('Seven')}/>
  ));

storiesOf('Eight', module)
  .add('Validation', () => (
    <Eight showApp={linkTo('Eight')}/>
  ));

storiesOf('Nine', module)
  .add('Synthetic Events', () => (
    <Nine showApp={linkTo('Nine')}/>
  ));

storiesOf('Ten', module)
  .add('Refs', () => (
    <Ten showApp={linkTo('Ten')}/>
  ));

storiesOf('Eleven', module)
  .add('Mount and Unmount', () => (
    <Eleven showApp={linkTo('Eleven')}/>
  ));

storiesOf('Thirteen', module)
  .add('Counter in 5s', () => (
    <Thirteen showApp={linkTo('Thirteen')}/>
  ));

storiesOf('Fourteen', module)
  .add('Star Wars API', () => (
    <Fourteen showApp={linkTo('Fourteen')}/>
  ));

storiesOf('Fifteen', module)
  .add('Higher Order Components', () => (
    <Fifteen showApp={linkTo('Fifteen')}/>
  ));

storiesOf('Sixteen', module)
  .add('jsX Compiler', () => (
    <Sixteen showApp={linkTo('Sixteen')}/>
  ));

storiesOf('Eighteen', module)
  .add('Iterating Children', () => (
    <Eighteen showApp={linkTo('Eighteen')}/>
  ));

storiesOf('Nineteen', module)
  .add('React.cloneElement', () => (
    <Nineteen showApp={linkTo('Nineteen')}/>
  ));
