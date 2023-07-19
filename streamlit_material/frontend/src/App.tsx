import React from "react";
import { withStreamlitConnection, StreamlitComponentBase, ComponentProps } from 'streamlit-component-lib';
import { SearchBar, ISearchBarProps as ISearchBarPropsBase } from './components';
import { SearchDataView, ISearchDataViewProps } from './components';
import columns from './components/search-bar/columns.json';

enum COMPONENTS_TYPES {
  SEARCH_BAR = 'search-bar',
  SEARCH_DATA_VIEW = 'search-data-view',
  UNKNOWN = 'unknown',
}

interface ISearchBarArgs extends ISearchBarPropsBase {
  type: COMPONENTS_TYPES.SEARCH_BAR;
}

interface ISearchDataViewArgs extends ISearchDataViewProps {
  type: COMPONENTS_TYPES.SEARCH_DATA_VIEW;
}

interface IState {
  args: ISearchBarArgs | ISearchDataViewArgs;
}

class MaterialComponentsWrapper extends StreamlitComponentBase<IState> {
  private args: ISearchBarArgs | ISearchDataViewArgs;
  constructor(props: ComponentProps) {
    super(props)
    this.args = props.args;
  }

  private renderSearchBar(args: ISearchBarArgs): React.ReactNode {
    const { type, ...rest } = args;
    return (
      <div className="material-component-wrapper">
        <SearchBar {...rest} />
      </div>
    )
  }

  private renderSearchDataView(args: ISearchDataViewArgs): React.ReactNode {
    const { type, ...rest } = args;
    return (
      <div className="material-component-wrapper">
        <SearchDataView {...rest} columns={columns as any} />
      </div>
    )
  }

  public render(): React.ReactNode {
    if (this.args.type === COMPONENTS_TYPES.SEARCH_BAR) {
      return this.renderSearchBar(this.args);
    } else if (this.args.type === COMPONENTS_TYPES.SEARCH_DATA_VIEW) {
      return this.renderSearchDataView(this.args);
    } else {
      return (
        <div className="material-component-wrapper">
          unknown component
        </div>
      )
    }
  }
}

export default withStreamlitConnection(MaterialComponentsWrapper) as any;
