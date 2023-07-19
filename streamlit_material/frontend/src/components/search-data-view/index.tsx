import React from "react";
import {
  SearchUIContainer,
  Column,
  FilterGroup,
  SearchUIContainerProps,
  SearchUIDataView,
} from "@dp-launching/mp-react-components";

export interface ISearchDataViewProps extends Partial<SearchUIContainerProps> {
  columns: SearchUIContainerProps['columns'];
}

const SearchDataView: React.FC<ISearchDataViewProps> = (props) => {
  const { columns, filterGroups, ...rest } = props;
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
        <div className="mpc-search-ui-right column">
          <SearchUIDataView />
        </div>
      </SearchUIContainer>
    </div>
  )
}

export default SearchDataView;
