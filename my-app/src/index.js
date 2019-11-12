import React from 'react'
import ReactDom from 'react-dom'
import { provider } from 'react-redux'
import { createStore } from 'redux'

import App from '.components/App'
import reducers from './reducers'

ReactDom.render(
    <provider store={createStore(reducers)}>
        <app />
    </provider>
    , document.querySelector('#root')
)
    //ReactDOM.render(<app />, querySelector('#root'))