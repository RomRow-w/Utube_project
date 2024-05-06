import { useState } from "react";
import CategoryPills from "./components/CategoryPills";
import MainHeader from "./components/MainHeader";
import Sidebar from "./components/Sidebar";
import VideoItem from "./components/VideoItem";
import ViewModal from "./components/ViewModal";
import { categories, videos } from "./data/home";
import filterVideos from "./utils/filterVideos";


function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);
  const [searchString, setSeacrhString] = useState<string>("");
  const [modalUrl, setModalUrl] = useState<string>("");
  const [sidebarVisibility, setSidebarVisibility] = useState<boolean>(true);
  const filteredVideos = filterVideos(videos,selectedCategory,searchString);

  return (
    <div className="flex flex-col max-h-screen">
      <MainHeader 
        sideVisible={sidebarVisibility} 
        setSideVisible={setSidebarVisibility} 
        searchString={searchString}
        setSearchString={setSeacrhString}
      />
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        {sidebarVisibility && <Sidebar />}
        <div className="px-8 overflow-x-hidden">
          <div className="sticky top-0 bg-white z-10 pb-4">
            <CategoryPills
              categories={categories}
              selectedCategory={selectedCategory}
              setCategory={setSelectedCategory}
            />
          </div>
          {
            filteredVideos.length > 1? 
              <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
                { 
                  filteredVideos.map((vid) => {
                        return (
                          <VideoItem key={vid.id} setModalState={setModalUrl} {...vid} />
                  )})
                
              }
              </div>
            : <div className="w-full flex justify-center text-xl">По вашему запросу ничего не найдено</div>
          }  
        </div>
      </div>
      {modalUrl && (
        <ViewModal modalState={modalUrl} setModalState={setModalUrl} />
      )}
    </div>
  );
}

export default App;
