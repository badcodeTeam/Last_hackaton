import React, {useState, useEffect, useCallback, useContext} from "react";
import {useHttp} from "../../utils"
import {AuthContext} from "../../utils/context/Auth.context"
import {EventCard} from './EventCard'

const EventPage = () => {
  const [events, setEvents] = useState([])
  const {loading, request} = useHttp()
  

  const getOrgs = useCallback(async () => {
    try{
      const data = await request('http://localhost:5000/contactor/event/getEvents', 'get', null, {})
      console.log(data.getAllCompanies)
      setEvents(data.getAllEvents)
    }catch(e){
      console.log(e)
    }
  },[request])

  useEffect(()=>{
    getOrgs()
  }, [getOrgs])



  return (
    <ul className="w-full h-full flex-grow hide-scrollbar flex flex-wrap overflow-auto">
      { /*
      <ResidentCard
        residentPreviewImage="https://images.unsplash.com/photo-1608434934019-f8dd8d7e8cae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
        residentBuilding={1}
        residentFloor={1}
        residentName="ImpreStudio"
        residentDescription="Art gallery"
        residentTimeStart="8:00"
        residentTimeEnd="18:00"
      />
      */}

      {!loading && events && events.map((ev, index) => {
        return (
          <EventCard
            key={index}
            residentPreviewImage="https://english.rikkyo.ac.jp/news/2018/dn4ddm0000001fpl-img/dn4ddm0000001fpr.jpg"
            
            residentName={ev.eventName}
            
            residentId ={ev._id}
          />
        )
      })}
    </ul>
  );
};

export default EventPage;
