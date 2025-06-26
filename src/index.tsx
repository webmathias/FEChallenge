import React from 'react'
import {App} from "./app";
import {hydrateRoot} from "react-dom/client";

const root = hydrateRoot(document.getElementById('app'))

root.render(<App/>)
