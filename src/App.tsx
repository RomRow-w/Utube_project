import { useState } from "react";
import CategoryPills from "./components/CategoryPills";
import MainHeader from "./components/MainHeader";
import Sidebar from "./components/Sidebar";
import VideoItem from "./components/VideoItem";
import ViewModal from "./components/ViewModal";
import { categories, videos } from "./data/home";

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);
  const [modalUrl, setModalUrl] = useState<string>("");
  const [sidebarVisibility, setSidebarVisibility] = useState<boolean>(true);

  return (
    <div className="flex flex-col max-h-screen">
      <MainHeader sideVisible={sidebarVisibility} setSideVisible={setSidebarVisibility}/>
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
          <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
            {videos.map((vid) => {
              return (
                <VideoItem key={vid.id} setModalState={setModalUrl} {...vid} />
              );
            })}
          </div>
        </div>
      </div>
      {modalUrl && (
        <ViewModal modalState={modalUrl} setModalState={setModalUrl} />
      )}
    </div>
  );
}

export default App;
