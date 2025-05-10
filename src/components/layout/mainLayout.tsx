import { Outlet } from 'react-router-dom';
import { useState } from "react";
import Header from './header';
import Navigation from './navigation';



function MainLayout() {
  const [panelState, setPanelState] = useState(true);

  const togglePanelState = () => {
    setPanelState((prev) => !prev);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header panelState={panelState} togglePanelState={togglePanelState} />
      
      <Navigation panelState={panelState} />

      <main className="flex-grow p-2 pt-[10px]">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
