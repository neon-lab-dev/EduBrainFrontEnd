import Navbar from '../../../components/navbar';
import type { JSX } from 'react';
import React from 'react';
import { useParams } from 'react-router-dom'; // Importing useParams
import UI from './UI';
import Mern from '../../../pages/CoursePage/Ui/Mern';
import PowerBi from '../../../pages/CoursePage/Ui/PowerBi';
import Python from '../../../pages/CoursePage/Ui/Python';
import Ds from '../../../pages/CoursePage/Ui/Ds';





const HomePage = (): JSX.Element => {
  const { page } = useParams(); // Getting the 'page' parameter from the URL

  return (
    <div className="dark bg-background">
      <Navbar />
      <main className="mt-[64px] xl:mt-[80px]">
      {page === 'ui' && <UI/>}
      {page === 'DataScience' && <Ds/>}
        {page === 'python' && <Python/>}
        {page === 'mern' && <Mern />}
        {page === 'PowerBi' && <PowerBi/>}
      </main>
    </div>
  );
};

export default HomePage;
