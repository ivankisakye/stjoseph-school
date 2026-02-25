import Curriculum from '../components/academics/Curriculum';
import Departments from '../components/academics/Departments';
import HomeworkDownloads from '../components/academics/HomeworkDownloads';
import Timetable from '../components/academics/Timetable';

export default function AcademicsPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-accent-600 to-primary-700 py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Academic Excellence
          </h1>
          <p className="text-xl text-accent-100 max-w-2xl mx-auto">
            UNEB curriculum delivered with innovation, care, and commitment to every child's success
          </p>
        </div>
      </div>

      <Curriculum />
      <Departments />
      <HomeworkDownloads />
      <Timetable />
      {/* 
      <Timetable /> */}
    </div>
  );
}