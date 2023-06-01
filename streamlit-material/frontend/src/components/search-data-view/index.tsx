import React from "react";
import {
  SearchUIContainer,
  Column,
  FilterGroup,
  SearchUIContainerProps,
  SearchUIDataView,
} from "@dp-launching/mp-react-components";

// import SearchEventTrigger from "../event-trigger";

export interface ISearchDataViewProps extends Partial<SearchUIContainerProps> {
  columns: SearchUIContainerProps['columns'];
  // filterGroups?: SearchUIContainerProps['filterGroups'];
}

// const Event: React.FC<any> = () => {

//   const aa = useSearchUIContextActions();
//   console.log("这里的值是: ", aa);


//   return (
//     <div>ddddd</div>
//   )
// }

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
          {/* <SearchUIDataHeader /> */}
          <SearchUIDataView />
        </div>
      </SearchUIContainer>
    </div>
  )
}

export default SearchDataView;
