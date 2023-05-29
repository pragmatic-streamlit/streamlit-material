import React, { useState } from "react"
import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
  ComponentProps,
} from "streamlit-component-lib";
// import { SearchUIContainer, SearchUIDataView, SearchUIGrid, SearchUISearchBar } from "./mp-react-components";

// // import { SearchUIContainer, SearchUIDataView, SearchUIGrid, SearchUISearchBar } from "@materialsproject/mp-react-components/src";
// // import { SearchUIContainer, SearchUIDataView, SearchUIGrid, SearchUISearchBar } from "@materialsproject/mp-react-components";
// import { PeriodicTableMode } from "./mp-react-components/components/data-entry/MaterialsInput/MaterialsInput";
// import { SearchUIViewType } from "./mp-react-components/components/data-display/SearchUI/types";
// import { Column, FilterGroup } from "./mp-react-components/components/data-display/SearchUI/types";

// import IframeResizer from 'iframe-resizer-react'

// import columns from './columns.json';
// import filterGroups from './filterGroups.json';



const noticeStreamlit = (event: any) =>
  Streamlit.setComponentValue(event)

const MyCon: React.FC = () => {
  const [state, setState] = useState({ results: [] });

  return (
    <div>
        8888ddd
        {/* <SearchUIContainer
          view={SearchUIViewType.TABLE}
          setProps={setState}
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
              {
                label: 'Include at least elements',
                examples: ['Li,Fe', 'Si,O,K']
              },
              {
                label: 'Include only elements',
                examples: ['Li-Fe', 'Si-O-K']
              },
              {
                label: 'Include only elements plus wildcard elements',
                examples: ['Li-Fe-*-*', 'Si-Fe-*-*-*']
              },
              {
                label: 'Has exact formula',
                examples: ['Li3Fe', 'Eu2SiCl2O3']
              },
              {
                label: 'Has formula with wildcard atoms',
                examples: ['LiFe*2*', 'Si*']
              },
              {
                label: 'Has Material ID',
                examples: ['mp-149', 'mp-19326']
              },
              {
                label: 'Additional search options available in the filters panel.'
              }
            ]}
          />
          <SearchUIGrid />
        </SearchUIContainer> */}
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
        <MyCon />
      </div>
    )
  }
}

export default withStreamlitConnection(MaterialComponents)
