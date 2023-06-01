import React, { useEffect } from 'react';
import { useSearchUIContext } from "@dp-launching/mp-react-components";
import { noticeStreamlit, StreamlitEventType } from './event';

const SearchEventTrigger: React.FC = () => {
  const { state, query: _ } = useSearchUIContext();
  useEffect(() => {
    noticeStreamlit({ type: StreamlitEventType.SEARCH_VALUE_CHANGE, target: state.searchBarValue || '' });
  }, [state.searchBarValue]);

  return null
}

export default SearchEventTrigger;
