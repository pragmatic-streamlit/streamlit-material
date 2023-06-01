import React, { useEffect, useRef } from "react"
import ReactDOM from "react-dom"
import { Streamlit } from 'streamlit-component-lib'
import App from "./App"
import "@dp-launching/mp-react-components/src/styles.less"
import "bulma/css/bulma.min.css"
import "bulma-tooltip/dist/css/bulma-tooltip.min.css"

function ajustHeight() {
  const root = document.getElementById('root');
  Streamlit.setFrameHeight(root ? root.clientHeight : undefined);
}

const ResizeWrapper: React.FC = () => {
  const oRoot = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let theResizeObserver = oRoot.current && new ResizeObserver(ajustHeight);
    oRoot.current && theResizeObserver && theResizeObserver.observe(oRoot.current);
    return () => {
      oRoot.current && theResizeObserver && theResizeObserver.unobserve(oRoot.current);
      theResizeObserver = null;
    }
  }, []);

  return (
    <div ref={oRoot} id="resize-wrapper">
      <App />
    </div>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <ResizeWrapper />
  </React.StrictMode>,
  document.getElementById("root")
);
