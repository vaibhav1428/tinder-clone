import React,{useState,useEffect} from 'react'
import database from '../firebase'
import TinderCard from 'react-tinder-card';
import '../TinderCard.css'
export default function TinderCards() {

    const [people, setpeople] = useState([
       
    ]);
//piece of code which run condition
    useEffect(() => {
       //this where the code run 

       database.collection('people').onSnapshot(snapshort=>{
       setpeople( snapshort.docs.map(doc=> doc.data())) ;  
       })
    
           //this will run once when component loads and again
     
    }, [])

    return (
        <div>


            <div className="TinderCard__Container"> 

            {people.map(person=>(
            <TinderCard 
            className="swipe"
            key={person.name}
            preventSwipe={['up','down']}>
                <div
                style={{backgroundImage:`url(${person.uri})`}}
                 className="card">

                    <h3>{person.name}</h3>
                </div>
            </TinderCard>
            )
            
            )}
            </div>


          
        </div>
    );
}
