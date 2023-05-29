import os

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


def streamlit_material_components():
    return mc(key="test")

# Test code to play with the component while it's in development.
# During development, we can run this just as we would any other Streamlit
# app: `$ streamlit run radio_button/__init__.py`
if not _RELEASE:
    result = streamlit_material_components()
    st.write("This many: %s" % result)
