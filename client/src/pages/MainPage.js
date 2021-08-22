import React, {useEffect, useCallback, useState} from 'react';
import { useHttp } from '../utils';
import ResidentCard from './ResidentPage/ResidentCard';

const MainPage = () => {
    const [orgs, setOrgs] = useState([])
    const {loading, request} = useHttp()

    const getOrgs = useCallback(async () => {
        try{
          const data = await request('http://localhost:5000/contactor/company/getAllCompanies', 'get', null, {})
          console.log(data.getAllCompanies)
          setOrgs(data.getAllCompanies)
        }catch(e){
          console.log(e)
        }
      },[request])
    
      useEffect(()=>{
        getOrgs()
      }, [getOrgs])

    return (
        <div className="flex flex-col relative w-full h-full">
           <div className="my-10 h-1/6">
            <h1 className="absolute mx-44 my-10 text-5xl">Главная</h1>
            
           </div>
           <div className="h-2/6 my-24">
                <span className="absolute mx-44 -my-10 text-3xl">Резиденты Контактора</span>
                {!loading && orgs.map((org) => {
                    return (<div className="w-3/6 mx-43">
                         <ResidentCard
                            key={org.name}
                            residentPreviewImage="https://images.unsplash.com/photo-1608434934019-f8dd8d7e8cae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                            residentBuilding={org.building}
                            residentFloor={org.floor}
                            residentName={org.companyName}
                            residentDescription={org.direction}
                            residentTimeStart={org.scheduleStart}
                            residentTimeEnd={org.scheduleEnd}
                            residentSiteUrl={org.site}
                            residentId ={org._id}
                        />
                    </div>)
                })}
           </div>
           <div className="h-2/6 my-18">
                <span className="absolute mx-44 -my-10 text-3xl">Мероприятия Контактора</span>
                {!loading && orgs.map((org) => {
                    return (<div className="w-3/6 mx-43">
                         <ResidentCard
                            key={org.name}
                            residentPreviewImage="https://images.unsplash.com/photo-1608434934019-f8dd8d7e8cae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                            residentBuilding={org.building}
                            residentFloor={org.floor}
                            residentName={org.companyName}
                            residentDescription={org.direction}
                            residentTimeStart={org.scheduleStart}
                            residentTimeEnd={org.scheduleEnd}
                            residentSiteUrl={org.site}
                            residentId ={org._id}
                        />
                    </div>)
                })}
           </div>
        </div>
    );
}

export default MainPage;
