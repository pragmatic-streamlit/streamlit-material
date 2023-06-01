import React from "react";
import { withStreamlitConnection, StreamlitComponentBase, ComponentProps } from 'streamlit-component-lib';
import { SearchBar } from './components';

interface IArgs {
  type: string;
}

interface IState {
  args: IArgs;
}

class MaterialComponentsWrapper extends StreamlitComponentBase<IState> {
  private args: IArgs
  constructor(props: ComponentProps) {
    super(props)
    this.args = props.args;
  }

  public render(): React.ReactNode {
    return (
      <div className="material-component-wrapper">
        { this.args.type === 'search-bar' && <SearchBar /> }
      </div>
    )
  }
}

export default withStreamlitConnection(MaterialComponentsWrapper)
