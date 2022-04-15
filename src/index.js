import _ from 'lodash';
import { DateTime } from 'luxon';
import './style.css';

function component()
{
  const element = document.createElement( 'div' );

  const date = DateTime.now().toString();
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join( [ 'Hello', 'webpack at ', date ], ' ' );
  element.classList.add( 'hello' );



  return element;
}

document.body.appendChild( component() );