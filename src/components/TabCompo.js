import React, { useEffect, useState } from "react";

const TabCompo = ({ children, active = 0 }) => {
  // console.log(children)
  const [activeTab, setActiveTab] = useState(active);
  const [tabsData, setTabsData] = useState([]);

  useEffect(() => {
    // let data = [];
    let jewelData = [];

    children.map((value, index)=>{
       const {props: {tab, children}}  = value;
       jewelData.push({tab, children})
    })
    // console.log(jewelData);

    // React.Children.forEach(children, (element) => {
    //   if (!React.isValidElement(element)) return;

    //   const {
    //     props: { tab, children },
    //   } = element;
    //   data.push({ tab, children });
    // });
    setTabsData(jewelData);
  }, [children]);

  return (
    <div className="w-100 custom-tab">
      <ul className="nav nav-tabs">
       
        {/* {tabsData.map(({ tab }, idx) => (
          <li className="nav-item">
            <a
              className={`nav-link ${idx === activeTab ? "active" : ""}`}
              href="#"
              onClick={() => setActiveTab(idx)}
            >
              {tab}
            </a>
          </li>
        ))} */}
          {
            tabsData.map(({tab}, index)=>{              
              return (
              <li className="nav-item">
                <a className={`nav-link ${index === activeTab ? "active" : ""}`} 
                  href="#" onClick={()=>setActiveTab(index)} >
                {tab}
                </a>
              </li>

            )})
          }
      </ul>

      <div className="tab-content p-3">
        {tabsData[activeTab] && tabsData[activeTab].children}
      </div>
    </div>
  );
};

const TabPane = ({ children }) => {
  return { children };
};

TabCompo.TabPane = TabPane;

export default TabCompo;