import React from "react";
import {
  SearchUIContainer,
  SearchUISearchBar,
  SearchUIViewType,
  PeriodicTableMode,
  Column,
  FilterGroup,
  SearchUIContainerProps,
  MaterialsInputType
} from "@dp-launching/mp-react-components";

import SearchEventTrigger from "../event-trigger";

export interface ISearchBarProps extends Partial<SearchUIContainerProps> {
  columns?: SearchUIContainerProps['columns'];
  filterGroups?: SearchUIContainerProps['filterGroups'];
  placeholder?: string;
  errorMessage?: string;
  chemicalSystemSelectHelpText?: string;
  elementsSelectHelpText?: string;
  allowedInputTypesMap?: Partial<Record<MaterialsInputType, any>>;
  helpItems?: {
    label?: string | null;
    examples?: string[] | null;
  }[];
}

const SearchBar: React.FC<ISearchBarProps> = (props) => {
  const {
    placeholder="e.g. Li-Fe or Li,Fe or Li3Fe or mp-19017",
    errorMessage="Please enter a valid formula (e.g. CeZn5), list of elements (e.g. Ce, Zn or Ce-Zn), or Material ID (e.g. mp-394).",
    chemicalSystemSelectHelpText="Select elements to search for materials with **only** these elements",
    elementsSelectHelpText="Select elements to search for materials with **at least** these elements",
    allowedInputTypesMap={
      chemical_system: { field: 'chemsys' },
      elements: { field: 'elements' },
      formula: { field: 'formula' },
      mpid: { field: 'material_ids' }
    },
    helpItems=[
      { label: 'Search Examples' },
      { label: 'Include at least elements', examples: ['Li,Fe', 'Si,O,K'] },
      { label: 'Include only elements', examples: ['Li-Fe', 'Si-O-K'] },
      { label: 'Has exact formula', examples: ['Li3Fe', 'Eu2SiCl2O3'] },
      { label: 'Additional search options available in the filters panel.' }
    ],
    columns=[],
    filterGroups=[
      {
        "name": "Composition",
        "expanded": false,
        "filters": [
          {
            "name": "Formula",
            "params": ["formula"],
            "isSearchBarField": true,
          },
          {
            "name": "Chemical System",
            "params": ["chemsys"],
            "isSearchBarField": true,
          },
          {
            "name": "Include Elements",
            "params": ["elements"],
            "isSearchBarField": true,
          },
        ]
      },
    ],
    ...rest
  } = props;
  return (
    <div>
        <SearchUIContainer
          view={SearchUIViewType.TABLE}
          // setProps={setState}
          resultLabel="material"
          columns={columns as Column[]}
          filterGroups={filterGroups as FilterGroup[]}
          apiEndpoint={''}
          autocompleteFormulaUrl={undefined}
          apiKey={undefined}
          hasSortMenu={true}
          sortFields={['-energy_above_hull', 'formula_pretty']}
          {...rest}
        >
          <SearchEventTrigger />
          <SearchUISearchBar
            periodicTableMode={PeriodicTableMode.TOGGLE}
            placeholder={placeholder}
            errorMessage={errorMessage}
            chemicalSystemSelectHelpText={chemicalSystemSelectHelpText}
            elementsSelectHelpText={elementsSelectHelpText}
            allowedInputTypesMap={allowedInputTypesMap}
            helpItems={helpItems}
          />
        </SearchUIContainer>
      </div>
  )
}

export default SearchBar;
