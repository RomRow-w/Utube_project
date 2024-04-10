import { useState } from 'react';
import CategoryPills from './components/CategoryPills';
import MainHeader from './components/MainHeader';
import VideoItem from './components/VideoItem';
import ViewModal from './components/ViewModal';
import { categories, videos } from './data/home';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0])
  const [modalUrl,setModalUrl] = useState<string>('');

  return (
    <div className="flex flex-col max-h-screen">
      <MainHeader/>
      <div className='grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto'>
        <div className='bg-red-200'>Sidebar</div>
        <div className='px-8 overflow-x-hidden'>
          <div className="sticky top-0 bg-white z-10 pb-4">
            <CategoryPills 
              categories={categories} 
              selectedCategory={selectedCategory} 
              setCategory={setSelectedCategory}
            />
          </div>
          <div className='grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]'>
            {videos.map((vid) => {
              return (
                <VideoItem key={vid.id} setModalState={setModalUrl} {...vid}/>
              )
            })}
          </div>
        </div>
      </div>
      {modalUrl && <ViewModal modalState={modalUrl} setModalState={setModalUrl}/>}      
    </div>
  );
}


export default App;
