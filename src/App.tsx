import { useState } from 'react';
import CategoryPills from './components/CategoryPills';
import MainHeader from './components/MainHeader';
import { categories } from './data/home';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0])

  return (
    <div className="flex flex-col max-h-screen">
      <MainHeader/>
      <div className='grid grid-cols-[auto,1fr] flex-grow-1'>
        <div>Sidebar</div>
        <div className='overflow-x-hidden px-8 pb-4'>
          <CategoryPills 
            categories={categories} 
            selectedCategory={selectedCategory} 
            setCategory={setSelectedCategory}
          />
          <div className='overflow-auto pb-4'>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
