// import React from 'react'
// import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader } from '../ui/table'
// import { Avatar, AvatarImage } from '../ui/avatar'
// import { Popover, PopoverContent } from '../ui/popover'
// import { Edit2, MoreHorizontal } from 'lucide-react'
// import { PopoverTrigger } from '@radix-ui/react-popover'
// import { useSelector } from 'react-redux'

// const CompaniesTable = () => {
//     const {companies}=useSelector(store=>store.company);
//   return (
//     <div key={company._id}>
//         <Table>
//             <TableCaption>
//                 A list of your rcent registered companies
//             </TableCaption>
//             <TableHeader>
//                 <TableRow>
//                     <TableHead>Logo</TableHead>
//                     <TableHead>Name</TableHead>
//                     <TableHead>Date</TableHead>
//                     <TableHead className="text-right">Action</TableHead>
//                 </TableRow>
//             </TableHeader>
//             <TableBody>
//             {
//                 companies.length<=0?<span>Companies Not found</span>:(
//                     <div>
//                     {
//                         companies?.map((company)=>{
//                            return(

//                            ) 
//                         })
//                     }
//                     <TableCell>
//                     <Avatar>
//                         <AvatarImage src="https://static.vecteezy.com/system/resources/previews/012/871/381/original/meta-brand-icon-illustration-top-tech-company-logotype-free-png.png">

//                         </AvatarImage>
//                     </Avatar>
//                 </TableCell>
//                 <TableCell>
//                    {company.name}
//                 </TableCell>
//                 <TableCell>
//                    {company.createdAt.split("T")[0]}
//                 </TableCell>
//                 <TableCell className="text-right cursor-pointer">
//                  <Popover>
//                  <PopoverTrigger>
//                    <MoreHorizontal/> 
//                  </PopoverTrigger>
//                     <PopoverContent className="w-32">
// <div className='flex items-center gap-2 w-fit cursor-pointer'>
//     <Edit2/>
//     <span>Edit</span>
// </div>
//                     </PopoverContent>
//                  </Popover>
//                 </TableCell>
//                 </div>  
                    
//                 )
//             }
//             </TableBody>
//         </Table>
//     </div>
//   )
// }

// export default CompaniesTable
import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const CompaniesTable = () => {
    const { companies, searchCompanyByText } = useSelector(store => store.company);
    const [filterCompany, setFilterCompany] = useState(companies);
    const navigate = useNavigate();
    useEffect(()=>{
        const filteredCompany = companies.length >= 0 && companies.filter((company)=>{
            if(!searchCompanyByText){
                return true
            };
            return company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase());

        });
        setFilterCompany(filteredCompany);
    },[companies,searchCompanyByText])
    return (
        <div>
            <Table>
                <TableCaption>A list of your recent registered companies</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Logo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        filterCompany?.map((company) => (
                            <tr>
                                <TableCell>
                                    <Avatar>
                                        <AvatarImage src={company.logo}/>
                                    </Avatar>
                                </TableCell>
                                <TableCell>{company.name}</TableCell>
                                <TableCell>{company.createdAt.split("T")[0]}</TableCell>
                                <TableCell className="text-right cursor-pointer">
                                    <Popover>
                                        <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                                        <PopoverContent className="w-32">
                                            <div onClick={()=> navigate(`/admin/companies/${company._id}`)} className='flex items-center gap-2 w-fit cursor-pointer'>
                                                <Edit2 className='w-4' />
                                                <span>Edit</span>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </TableCell>
                            </tr>

                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default CompaniesTable