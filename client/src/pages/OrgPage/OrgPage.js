import React, {useState, useEffect, useCallback, useContext} from 'react';
import {useParams} from "react-router-dom"
import {useHttp} from "../../utils"
import {AuthContext} from "../../utils/context/Auth.context"
import { Link } from "react-router-dom";
import { PostCard } from '../PostCard';


const OrgPage = ({id}) => {
    const [postText, setPostText] = useState('')
    const [postHeader, setPostHeader] = useState('')
    const [org, setOrg] = useState(null)
    const [posts, setPosts] = useState(null)
    const orgId = useParams().id;
    const {request, loading} = useHttp()
    const {token, userId} = useContext(AuthContext)
    const [stage, setStage] = useState(1)

    const getUser = useCallback(async () => {
        try{
            if(orgId !== undefined){
                const created = await request(`http://localhost:5000/contactor/company/getCompanyInfo/${orgId}`, 'get', null, {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    Authorization: `Bearer ${token}`
                })
                console.log(created)
                setOrg(created.companyData)
                setPosts(created.companyPosts.CompanyPosts)
            }
        }catch(e){
            console.log(e)
        }
    },[token, orgId, request])

    useEffect(() => {
        getUser()
    }, [getUser])

    const sendPost = async e => {
        try{
            e.preventDefault()
            console.log(postText)
            const send = await request('http://localhost:5000/contactor/post/addPostFromCompany', 'post', {postHeader: postHeader, text: postText, companyName: org.companyName}, {
                Authorization: `Bearer ${token}`
            })

            console.log(send)
        }catch(err){
            console.log(err)
        }
    }

    //6120a5a7f8f9406ce804733b 6120a5a7f8f9406ce804733b
    // Сроки, масштабируемость

    return (
        <div className="container">
           <div class="py-10 h-screen w-screen ">
            <div class=" mx-auto shadow-xl  bg-gradient-to-t from-teal-100  to-teal-300 bg-green-200 rounded-lg text-bold overflow-hidden w-3/6 h-full">
                <div class="flex flex-col justify-center  w-full h-full">
                    <div class="flex flex-col col-auto my-3 items-center"> {orgId && <img src={`http://localhost:5000/contactor/image/company/${orgId}`} width="150px"  class=" rounded-full" style={{height: '150px'}} />}
                        <h1 class="text-xl my-2 text-black font-medium">{!loading && org && org.companyName}</h1> 
                        <span class="text-sm my-2 text-black">Строение {!loading && org && org.building} этаж {!loading && org && org.floor}</span>
                        <span class="text-sm text-black">{!loading && org && <a href={org.site}>Сайт</a>}</span>
                        
                    </div>
                    <div class="flex flex-col col-auto my-3 items-center">
                        {!loading && org && userId!==org.owner && <button> Связаться </button>}
                        {!loading && org && userId===org.owner && <Link to={`/edit/org/${orgId}`}><button> Редактировать </button></Link>}
                        
                    </div>
                    <div class="flex flex-col col-auto my-3 items-center h-4/6 bg-green-100 overflow-y-scroll ">
                        <div className="my-5 w-full rounded-full flex flex-col  justify-center items-center">
                        {!loading && posts && userId===org.owner && 
                            <>
                                <div className="w-5/6">
                                    <input name="field_name" className=" border border-2 rounded-r px-4 py-2 w-full  " type="text" placeholder="Заголовок" onChange={e => setPostHeader(e.target.value)} />
                                    
                                </div>
                                <div className="w-5/6 flex flex-row my-2">
                                    <input name="field_name" className=" border border-2 rounded-r px-4 py-2 w-full  " type="text" placeholder="Текст" onChange={e => setPostText(e.target.value)} />
                                    <button className="mx-1 bg-white hover:bg-green-400 px-2 py-1" onClick={sendPost}>Отправить</button>
                                </div>
                            </>}
                        </div>
                        {!loading && posts && posts.map(post => {
                            return <PostCard key={post} post={post} />
                        })}
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default OrgPage;
