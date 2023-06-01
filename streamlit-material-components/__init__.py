import os
from typing import List
import streamlit as st
import streamlit.components.v1 as components


# Create a _RELEASE constant. We'll set this to False while we're developing
# the component, and True when we're ready to package and distribute it.
_RELEASE = False

if not _RELEASE:
    mc = components.declare_component(
        "streamlit_material_components",
        url="http://localhost:3001",
    )
else:
    parent_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(parent_dir, "frontend/build")
    mc = components.declare_component("streamlit_material_components", path=build_dir)


def st_material_components(key: str, type: str, **kwargs):
    return mc(key=key, type=type, **kwargs)

def st_material_search_bar_components(key: str):
    return st_material_components(key, "search-bar")

if not _RELEASE:
    result = st_material_components("test", "search-bar")
    st.write("This many: %s" % result)
