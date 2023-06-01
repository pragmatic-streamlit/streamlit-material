import React from "react";
import {
  SearchUIContainer,
  SearchUISearchBar,
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
}

const SearchBar: React.FC<ISearchBarProps> = (props) => {
  const {
    placeholder,
    errorMessage,
    chemicalSystemSelectHelpText,
    elementsSelectHelpText,
    allowedInputTypesMap,
    columns,
    filterGroups,
    ...rest
  } = props;
  return (
    <div>
        <SearchUIContainer
          columns={columns as Column[] || []}
          filterGroups={filterGroups as FilterGroup[] || [
            // 下边这几个是必传, 否则不会触发 context 数据流更新
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
          ]}
          apiEndpoint={''}
          {...rest}
        >
          <SearchEventTrigger />
          <SearchUISearchBar
            periodicTableMode={PeriodicTableMode.TOGGLE}
            placeholder={placeholder || "e.g. Li-Fe or Li,Fe or Li3Fe or mp-19017"}
            errorMessage={errorMessage || "Please enter a valid formula (e.g. CeZn5), list of elements (e.g. Ce, Zn or Ce-Zn), or Material ID (e.g. mp-394)."}
            chemicalSystemSelectHelpText={chemicalSystemSelectHelpText || "Select elements to search for materials with **only** these elements"}
            elementsSelectHelpText={elementsSelectHelpText || "Select elements to search for materials with **at least** these elements"}
            allowedInputTypesMap={allowedInputTypesMap || {
              chemical_system: { field: 'chemsys' },
              elements: { field: 'elements' },
              formula: { field: 'formula' },
              mpid: { field: 'material_ids' },
              smiles: { field: 'smiles' } ,
              text: { field: 'text' },
            }}
          />
        </SearchUIContainer>
      </div>
  )
}

export default SearchBar;
