import React, { useContext, useState} from 'react'

const AppContext = React.createContext();

function AppProvider({children}) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => setIsSideBarOpen(true);
  const closeSidebar = () => setIsSideBarOpen(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
        <AppContext.Provider value={{
          isSideBarOpen,
          closeSidebar,
          openSidebar,
          isModalOpen,
          closeModal,
          openModal
        }}>
            {children}
        </AppContext.Provider>
    </>
  )
}

function useGlobalContext() {
    return useContext(AppContext);
}

export {AppProvider, useGlobalContext };

