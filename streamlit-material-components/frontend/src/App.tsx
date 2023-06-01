import React from "react";
import { withStreamlitConnection, StreamlitComponentBase, ComponentProps } from 'streamlit-component-lib';
import { SearchBar, ISearchBarProps as ISearchBarPropsBase } from './components';

enum COMPONENTS_TYPES {
  SEARCH_BAR = 'search-bar',
  UNKNOWN = 'unknown',
}

interface ISearchBarArgs extends ISearchBarPropsBase {
  type: COMPONENTS_TYPES.SEARCH_BAR;
}

interface IOtherArgs {
  type: COMPONENTS_TYPES.UNKNOWN;
  props: any;
}

interface IState {
  args: ISearchBarArgs | IOtherArgs;
}

class MaterialComponentsWrapper extends StreamlitComponentBase<IState> {
  private args: ISearchBarArgs;
  constructor(props: ComponentProps) {
    super(props)
    this.args = props.args;
  }

  private renderSearchBar(args: ISearchBarArgs): React.ReactNode {
    const { type, ...rest } = args;
    return (
      <div className="material-component-wrapper">
        {this.args.type === 'search-bar' && (<SearchBar {...rest} />)}
      </div>
    )
  }

  public render(): React.ReactNode {
    if (this.args.type === COMPONENTS_TYPES.SEARCH_BAR) {
      return this.renderSearchBar(this.args);
    } else {
      return (
        <div className="material-component-wrapper">
          unknown component
        </div>
      )
    }
  }
}

export default withStreamlitConnection(MaterialComponentsWrapper)
