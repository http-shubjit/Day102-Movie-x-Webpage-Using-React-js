import React, { useState } from 'react'
import './SwitchTabs.scss'
const SwitchTabs = ({ data, ontabchange }) => {
  // console.log(data)
  // data.map((tab, index) => {
  //   console.log(tab)
  //   console.log(index)
  // })
  const [selectedtab, setselectedtab] = useState(0)
  const [left, setleft] = useState(0)

  const activeTab = (tab, index) => {

    setleft(index * 100)
    setTimeout(() => {
      setselectedtab(index)
    }, 300);

    ontabchange(tab, index)
  }

  return (
    <div className="switchingTabs">
      <div className="tabItems">

        {data.map((tab, index) =>
          <span key={index}
            className={`tabItem ${selectedtab === index ? "active" : " "}`}
            onClick={() => activeTab(tab, index)}
          >
            {tab}
          </span>
        )}

        <span className="movingBg" style={{ left }} />
      </div>
    </div>)
}

export default SwitchTabs