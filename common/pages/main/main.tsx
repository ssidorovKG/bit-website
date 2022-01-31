import React, {ReactNode} from 'react';
import {Button} from '@wh-el/common.ui.button';

export type MainProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Main({children}: MainProps) {
  return (
    <div>
      {children}
      <h1>This is my super cool main page</h1>
      <Button>Test!</Button>
    </div>
  );
}
