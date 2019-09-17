import React from 'react';
import Playground from 'component-playground';
import styled, { css } from 'styled-components';

import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live';

import Button from './components/button';
import buttonExample from './components/button/index.example.js';
import buttonExample2 from './components/button/index.example.2.js';

import './App.css';

const reactLiveHome = {
  plain: {
    color: '#e7d2ed'
  },
  styles: [
    {
      types: ['prolog', 'comment', 'doctype', 'cdata'],
      style: {
        color: 'hsl(30, 20%, 50%)'
      }
    },
    {
      types: ['property', 'tag', 'boolean', 'number', 'constant', 'symbol'],
      style: { color: '#f677e1' }
    },
    {
      types: ['attr-name', 'string', 'char', 'builtin', 'insterted'],
      style: {
        color: 'hsl(75, 70%, 70%)'
      }
    },
    {
      types: [
        'operator',
        'entity',
        'url',
        'string',
        'variable',
        'language-css'
      ],
      style: {
        color: 'hsl(40, 90%, 70%)'
      }
    },
    {
      types: ['deleted'],
      style: {
        color: 'rgb(255, 85, 85)'
      }
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic'
      }
    },
    {
      types: ['important', 'bold'],
      style: {
        fontWeight: 'bold'
      }
    },
    {
      types: ['regex', 'important'],
      style: {
        color: '#e90'
      }
    },
    {
      types: ['atrule', 'attr-value', 'keyword'],
      style: {
        color: '#f677e1'
      }
    },
    {
      types: ['punctuation', 'symbol'],
      style: {
        opacity: '0.7'
      }
    }
  ]
};

const LiveWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
  border-radius: 5px;
  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
  overflow: hidden;
  margin: 10px auto;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const column = css`
  flex-basis: 50%;
  width: 50%;
  max-width: 50%;

  @media (max-width: 600px) {
    flex-basis: auto;
    width: 100%;
    max-width: 100%;
  }
`;

const StyledEditor = styled.div`
  background: #272822;
  color: #f8f8f2;
  font-family: 'Source Code Pro', monospace;
  font-size: 14px;
  height: 350px;
  max-height: 350px;
  overflow: auto;

  ${column};

  * > textarea:focus {
    outline: none;
  }
`;

const StyledPreview = styled(LivePreview)`
  position: relative;
  padding: 0.5rem;
  background: white;
  color: black;
  height: auto;
  overflow: hidden;
  ${column};
`;


const StyledError = styled(LiveError)`
  display: block;
  padding: 8px;
  background: red;
  color: gainsboro;
  white-space: pre-wrap;
  text-align: left;
  font-size: 0.9em;
  font-family: 'Source Code Pro', monospace;
`;

function App() {
  return (
    <div className="App">
      <div className="component-playground-wrapper component-documentation">
        <h1>component-playground</h1>
        <Playground
          codeText={buttonExample}
          scope={{ React, Button }}
        />
      </div>
      
      <div className="component-playground-wrapper component-documentation">
        <h1>react-live</h1>
        <LiveProvider code={buttonExample2} scope={{ Button }} noInline theme={reactLiveHome}>
          <LiveWrapper>
            <StyledEditor>
              <LiveEditor />
            </StyledEditor>
            <StyledPreview />
          </LiveWrapper>

          <StyledError />
        </LiveProvider>
      </div>
    </div>
  );
}

export default App;
