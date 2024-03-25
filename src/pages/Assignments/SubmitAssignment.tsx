import lt from '../../assets/icons/lt.svg'
import gt from '../../assets/icons/gt.svg'
import TASKS from '../../assets/mockData/tasks'
import SubmitCard from './SubmitCard'
const SubmitAssignment = (): JSX.Element => {
  return (
    <div className="flex">
      <div className="min-w-[290px] h-full"></div>
      <div className="flex flex-col flex-grow">
        <div className="w-full h-[88px]"></div>
        <main className="h-full w-full dark:bg-background justify-center items-center px-10 pb-32 flex flex-col gap-5">
          <div className="flex self-start items-center gap-2 text-neutral-90 dark:text-neutral-20">
            <span>Assignments</span>
            <span>&gt;</span>
            <span>Assignment - 1</span>
          </div>
          <div className="w-[600px]">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <h3 className="h3 dark:text-neutral-10">Assignment - 1</h3>
                <div className="flex gap-6 items-center">
                  <button>
                    <img src={lt} alt="lt" />
                  </button>
                  <button>
                    <img src={gt} alt="lt" />
                  </button>
                </div>
              </div>
              <span className="body-text-md text-neutral-80 dark:text-neutral-20">
                Assignment Name
              </span>
              <hr className="text-neutral-30 dark:text-neutral-80" />
              <div className="flex flex-col w-full items-center justify-center mt-5 gap-6">
                {TASKS.map((task, i) => (
                  <SubmitCard key={i} task={task} i={i} />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
export default SubmitAssignment
