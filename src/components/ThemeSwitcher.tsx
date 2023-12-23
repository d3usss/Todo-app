import React, {useState} from "react"

import {ReactComponent as Moon} from "../images/icon-moon.svg"
import {ReactComponent as Sun} from "../images/icon-sun.svg"

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("light")

  const onSetTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  return (
    <section onClick={onSetTheme}>
      {theme === "light" ? <Moon /> : <Sun />}
    </section>
  )
}
