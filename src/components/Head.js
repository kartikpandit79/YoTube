import React, { useEffect, useState } from 'react'
import { GOOGLE_API_KEY, SEARCH_QUERY, humburger_menu, logo, user_icon } from '../Utils/Constant'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenuOpen } from '../Utils/appSlice'
import { cacheResults } from '../Utils/searchSlice'

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestionVal, setSuggestion] = useState([])
  const [showSuggestion, setShowSuggestion] = useState(false);
  const searchCache = useSelector(store => store.search)

  const toggleHandler = () => {
    dispatch(toggleMenuOpen())
  }

  useEffect(() => {
    // implementing Js debouncing
    let timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        searchYoutube()
      }
    }, 200);
    return () => {
      clearTimeout(timer)
    }
  }, [searchQuery]);

  const searchYoutube = async () => {
    let data = await fetch(SEARCH_QUERY + searchQuery + '&key=' + GOOGLE_API_KEY);
    let json = await data.json();
    // console.log(">>>>>>>>>>>>>>>>>>>>>", json);
    setSuggestion(json.items);
    let newPayload = { [searchQuery]: json.items }
    dispatch(cacheResults(newPayload))

  }

  // console.log("___????", suggestionVal);

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg '>
      <div className='flex col-span-1'>
        <img className='h-8 m-[12.5px] cursor-pointer'
          src={humburger_menu} onClick={() => toggleHandler()}
          alt='menu'
        />
        <img src={logo} className='h-14 mx-2 cursor-pointer'
          alt='logo'
        />
      </div>
      <div className='col-span-10 '>
        <div>
          <input type='search' placeholder='Search...'
            className='px-5 w-1/2 border border-gray-400 rounded-l-full p-2'
            onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100'>🔍</button>
        </div>
        {showSuggestion && <div className='fixed bg-white w-[32rem] px-2 py-5 shadow-lg rounded-lg border border-gray-100'>
          <ul>
            {suggestionVal?.map(item => <li key={item.id.videoId} className='py-2 shadow-sm hover:bg-gray-100'
            >{item.snippet.title}</li>)}
          </ul>
        </div>}
      </div>
      <div className='col-span-1'>
        <img src={user_icon} className='h-8'
          alt='user-icon'
        />
      </div>
    </div>
  )
}

export default Head

//https://telstra.wd3.myworkdayjobs.com/en-US/Telstra_Careers/login?redirect=%2Fen-US%2FTelstra_Careers%2Fjob%2FBengaluru%252C-Karnataka%2FFull-Stack-Developer_JR-10104857-1%2Fapply%2FuseMyLastApplication
//https://walmart.wd5.myworkdayjobs.com/en-US/WalmartExternal/details/Senior-Software-Engineer--UI_R-1576383?q=ui&redirect=/WalmartExternal/job/IN-KA-BANGALORE-Home-Office-Building-11/Senior-Software-Engineer--UI_R-1576383/apply