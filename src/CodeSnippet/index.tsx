import React, { useCallback, useEffect, useRef } from 'react';
import Prism from 'prismjs';

import '../prism.css';

import { CodeContainer } from './styles';

interface ICodeSnippetProps {
  formattedBorderRadius: string;
}

export function CodeSnippet({
  formattedBorderRadius,
}: ICodeSnippetProps): React.ReactElement {
  useEffect(() => {
    Prism.highlightAll();
  }, [formattedBorderRadius]);

  const codeEl = useRef<HTMLTextAreaElement>(null);
  const message = useRef<HTMLButtonElement>(null);

  const copyCode = useCallback(e => {
    // eslint-disable-next-line no-unused-expressions
    codeEl.current?.select();
    document.execCommand('Copy');
    e.currentTarget.innerHTML = 'Copied!';
    setTimeout(() => {
      if (message.current) {
        message.current.innerHTML = 'Copy';
      }
    }, 2000);
  }, []);

  return (
    <CodeContainer>
      <pre style={{ border: '1px solid #E5D3A1' }}>
        <code className="language-css">
          {`div {
  border-radius: ${formattedBorderRadius};
}`}
        </code>
      </pre>
      <button type="button" ref={message} onClick={copyCode}>
        Copy
      </button>
      <div>
        <textarea
          readOnly
          ref={codeEl}
          value={` div {
  border-radius: ${formattedBorderRadius}
}`}
        />
      </div>
    </CodeContainer>
  );
}

export default CodeSnippet;
