import Navbar from '../../../components/navbar';
import type { JSX } from 'react';
import { useParams } from 'react-router-dom'; // Importing useParams
import UI from './UI';
import Course from '../../../assets/data/CourseData/CourseData';



const HomePage = (): JSX.Element => {
  const { page } = useParams(); // Getting the 'page' parameter from the URL

  return (
    <div className="dark bg-background">
      <Navbar />
      <main className="mt-[64px] xl:mt-[80px]">
        {/* Use braces to wrap the comments */}
        {page === 'ui' && <UI data={Course['UI/UX']} />}
        {/* Use braces to wrap the comments */}
        {page === 'Bi' && <UI data={Course.PowerBi} />}
        {/* Use braces to wrap the comments */}
        {page === 'mern' && <UI data={Course.Mern} />}
        {/* Use braces to wrap the comments */}
        {page === 'python' && <UI data={Course.Python} />}
        {/* Use braces to wrap the comments */}
        {page === 'DataScience' && <UI data={Course.DataScience} />}
      </main>
    </div>
  );
};

export default HomePage;
