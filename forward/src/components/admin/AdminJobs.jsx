
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSearchCompanyByText } from '@/redux/companySlice'
import AdminJobsTable from './AdminJobsTable'
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs'
import { Input } from '../ui/input'


const AdminJobs = () => {
  useGetAllAdminJobs();
  const [input,setInput]=useState("");
  const navigate=useNavigate();
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(setSearchJobByText(input));
    
  },[input]);
  return (
    <div>
      <Navbar/>
      <div className='max-w-6xl mx-auto my-10'>
      <div className='flex items-center justify-between my-5'>
      <Input className="w-fit" placeholder="Filter by name"/>
      <Button onClick={()=> navigate("/admin/jobs/create")}>New Jobs</Button>
      </div>
      <AdminJobsTable/>
      


      </div>
    </div>
  )
}

export default AdminJobs