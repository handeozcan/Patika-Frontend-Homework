import React from 'react'

import { ButtonColor, ExampleComponent, Text } from 'hozcan'
import 'hozcan/dist/index.css'

const App = () => {
  return (
    <div>
      <Text text='Patika Dev Project' />
      <ExampleComponent text='you can check my githup site 😄' />
    
        <ButtonColor
          className="primary"
          onClick={() => alert('https://github.com/handeozcan')}
          text='Primary Button'
        />
        <br />
        <ButtonColor
          type='button'
          className='default'
          onClick={() => alert('https://github.com/handeozcan')}
          text='Default Button'
        />
        <br />
        <ButtonColor
          type='button'
          className='dashed'
          onClick={() => alert('https://github.com/handeozcan')}
          text='Dashed Button'
        />
        <br />
        <ButtonColor
          type='button'
          className='text'
          onClick={() => alert('https://github.com/handeozcan')}
          text='Text Button'
        />
        <br />
        <ButtonColor
          type='button'
          className='link'
          onClick={() => alert('https://github.com/handeozcan')}
          text='Link Button'
        />
        <br />
      </div>
 
  )
}

export default App
