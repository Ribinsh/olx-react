import React,{useEffect,useState,useContext} from 'react';
import { FirebaseContext } from '../../store/FirebaseContext';
import { PostContext } from '../../store/postContext';

import './View.css';
function View() {
 const [userDeatails,setUserDeatails] = useState()
 const {postDetails} = useContext(PostContext)
 const {firebase} = useContext(FirebaseContext)
 useEffect(()=>{
  const {userId} = postDetails
  firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
    res.forEach(doc => {
      setUserDeatails(doc.data())
    });
  })
 },[])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price}</p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
     { userDeatails &&  <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDeatails.username}</p>
          <p>{userDeatails.phone}</p>
        </div>  }
      </div>
    </div>
  );
}
export default View;
