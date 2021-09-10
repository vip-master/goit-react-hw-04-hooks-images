import React, { useState, useEffect} from 'react'
import ImageGallery from '../Components/imageGallery/ImageGallery';
import Searchbar from '../Components/searchbar/Searchbar';
import Button from '../Components/button/Button';
import Loader from '../Components/loader/Loader';
import Modal from '../Components/modal/Modal'
import getData from '../utils/api'

const _INITIAL_STATE_={
    images:[],
    page:0,
    query:"",
    maxPages:0,
    isLoadButton:false,
    isLoading:false,
    modal:null,
    afterScroll:false
}

const App=()=>{   
    
    const [state, setState] = useState(_INITIAL_STATE_)

    const closeModal=()=>{
        setState(state=>({...state, modal:null}))
    }    

    const handelSubmit=(e)=>{
        e.preventDefault()
        setState(state=>({..._INITIAL_STATE_, query:e.target[1].value.trim().replaceAll(" ","+"),isLoading:true}))        
    }

    const handelCicks=({target:{dataset:{bigimage:bigImage,alt}}})=>{
        setState(state=>({...state, modal:{bigImage,alt}}))
    }

    const downImages=async()=>{
        if(state.query===""){
            setState(state=>({...state, isLoading:false}))
            return
        }
        
        const PER_PAGE=12

        let page=state.page
        if(state.maxPages===0 || page<state.maxPages){
            page=state.page+1
        }else{
            setState(state=>({...state, isLoading:false,isLoadButton:false}))
            return
        }

        try{
            const {data}=await getData(state.query,page,PER_PAGE)
            
            let maxPages=0
            let images=[]

            if(data.total!==0) {
                maxPages=Math.ceil(data.totalHits/PER_PAGE)
                images=data.hits.map(srcImg=>({
                    smallImage:srcImg.webformatURL,
                    bigImage:srcImg.largeImageURL,
                    alt:srcImg.tags,
                    id:srcImg.id.toString(),
                    }))
            }

            setState(state=>({...state, images:[...state.images,...images],maxPages,page,isLoading:false,isLoadButton:page<maxPages}))
        }catch(error){
            setState(state=>({...state, isLoading:false,isLoadButton:false}))
        }
    }

    useEffect(() => {
        const scrollUp=()=>{
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth',
            });
        }

        if(state.isLoading) downImages()
        else if(state.afterScroll) {
            scrollUp()
            setState(state=>({...state,afterScroll:false}))
        }
    }, [state])

    const moreImages=()=> setState(state=>({...state,isLoading:true,afterScroll:true}))

    return (
            <div className="App">
                {state.modal && <Modal image={state.modal} onClose={closeModal} />}
                <Searchbar onSubmit={handelSubmit}/>
                <ImageGallery images={state.images} onClick={handelCicks}/>
                {state.isLoading && <Loader/>}
                {state.isLoadButton && <Button onMore={moreImages}/>}
            </div>
    )
}

export default App
