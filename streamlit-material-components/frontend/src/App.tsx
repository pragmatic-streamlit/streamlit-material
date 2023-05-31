import React, { useState, useEffect } from "react";
import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
  ComponentProps,
} from "streamlit-component-lib";
import {
  // useSearchUIContext,

  SearchUIContainer,
  SearchUIDataView,
  SearchUIGrid,
  SearchUISearchBar,
  SearchUIViewType,
  PeriodicTableMode,
  Column,
  FilterGroup,
  useSearchUIContext,
} from "dp-mp-react-components";

// import IframeResizer from 'iframe-resizer-react'

import columns from './columns.json';
import filterGroups from './filterGroups.json';

enum StreamlitEventType {
  SEARCH_VALUE_CHANGE = "SEARCH_VALUE_CHANGE",
}

interface StreamlitEvent {
  type: StreamlitEventType;
  target: string;
}

const noticeStreamlit = (event: StreamlitEvent) =>
  Streamlit.setComponentValue(event)

const SearchEventTrigger: React.FC<{}> = () => {
  const { state, query: _ } = useSearchUIContext();
  useEffect(() => {
    noticeStreamlit({ type: StreamlitEventType.SEARCH_VALUE_CHANGE, target: state.searchBarValue || '' });
  }, [state.searchBarValue]);

  return null
}
  

const SearchBar: React.FC = () => {
  return (
    <div>
        <SearchUIContainer
          view={SearchUIViewType.TABLE}
          // setProps={setState}
          resultLabel="material"
          columns={columns as Column[]}
          filterGroups={filterGroups as FilterGroup[]}
          apiEndpoint={
            process.env.REACT_APP_BASE_URL ? process.env.REACT_APP_BASE_URL + '/summary/' : ''
          }
          autocompleteFormulaUrl={
            process.env.REACT_APP_AUTOCOMPLETE_URL
              ? process.env.REACT_APP_AUTOCOMPLETE_URL
              : undefined
          }
          apiKey={process.env.REACT_APP_API_KEY ? process.env.REACT_APP_API_KEY : undefined}
          hasSortMenu={true}
          sortFields={['-energy_above_hull', 'formula_pretty']}
        >
          <SearchEventTrigger />
          <SearchUISearchBar
            periodicTableMode={PeriodicTableMode.TOGGLE}
            placeholder="e.g. Li-Fe or Li,Fe or Li3Fe or mp-19017"
            errorMessage="Please enter a valid formula (e.g. CeZn5), list of elements (e.g. Ce, Zn or Ce-Zn), or Material ID (e.g. mp-394)."
            chemicalSystemSelectHelpText="Select elements to search for materials with **only** these elements"
            elementsSelectHelpText="Select elements to search for materials with **at least** these elements"
            allowedInputTypesMap={{
              chemical_system: { field: 'chemsys' },
              elements: { field: 'elements' },
              formula: { field: 'formula' },
              mpid: { field: 'material_ids' }
            }}
            helpItems={[
              { label: 'Search Examples' },
              { label: 'Include at least elements', examples: ['Li,Fe', 'Si,O,K'] },
              { label: 'Include only elements', examples: ['Li-Fe', 'Si-O-K'] },
              { label: 'Has exact formula', examples: ['Li3Fe', 'Eu2SiCl2O3'] },
              { label: 'Additional search options available in the filters panel.' }
            ]}
          />
          {/* <SearchUIGrid /> */}
        </SearchUIContainer>
      </div>
  )
}

class MaterialComponents extends StreamlitComponentBase<{}> {
  private args: any
  
  constructor(props: ComponentProps) {
    super(props)
    this.args = props.args
  }

  public render(): React.ReactNode {
    return (
      <div>
        <SearchBar />
      </div>
    )
  }
}

export default withStreamlitConnection(MaterialComponents)
