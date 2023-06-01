import { Streamlit } from "streamlit-component-lib";

export enum StreamlitEventType {
  SEARCH_VALUE_CHANGE = "SEARCH_VALUE_CHANGE",
}

export interface StreamlitEvent {
  type: StreamlitEventType;
  target: string;
}

export const noticeStreamlit = (event: StreamlitEvent) =>
  Streamlit.setComponentValue(event)
